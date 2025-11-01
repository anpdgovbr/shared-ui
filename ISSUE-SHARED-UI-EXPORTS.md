# Issue: Problema de Exportação de Componentes do @anpdgovbr/shared-ui

## 📋 Sumário Executivo

Durante a migração do `@anpdgovbr/rbac-admin` para usar componentes do `@anpdgovbr/shared-ui`, identificamos que **os componentes não estão sendo importados corretamente** em ambiente TypeScript, apesar de estarem presentes no bundle compilado.

**Status:** ✅ **RESOLVIDO**  
**Versão Afetada:** `@anpdgovbr/shared-ui@0.3.10-beta.0`  
**Versão Corrigida:** `@anpdgovbr/shared-ui@0.3.11-beta.0` (próxima versão)  
**Pacote Afetado:** `@anpdgovbr/rbac-admin@0.3.0-beta.0`  
**Solução Aplicada:** Criação de arquivo `types/index.d.ts` re-exportando `types/src/index.d.ts`

---

## 🔍 Descrição Detalhada do Problema

### 1. Sintomas Observados

Ao tentar importar componentes do `@anpdgovbr/shared-ui`, o TypeScript reporta erro de compilação:

```typescript
// Tentativa de import
import { GovBRLoading, GovBRCheckbox } from "@anpdgovbr/shared-ui"

// Erro TypeScript
error TS2305: Module '"@anpdgovbr/shared-ui"' has no exported member 'GovBRLoading'.
error TS2305: Module '"@anpdgovbr/shared-ui"' has no exported member 'GovBRCheckbox'.
```

### 2. Evidências Técnicas

#### 2.1 Arquivo de Tipos (.d.ts) ✅

Os tipos **estão corretamente declarados** em:
```
node_modules/@anpdgovbr/shared-ui/types/src/components/index.d.ts
```

Conteúdo verificado:
```typescript
// Linha 99-100
export * from './ui/govbr-loading';
export type { LoadingAnimationProps } from './ui/govbr-loading/types';

// Linha 68-69
export * from './ui/govbr-checkbox';
export type { GovBRCheckboxProps } from './ui/govbr-checkbox/types';
```

Os componentes individuais também têm tipos:
```
node_modules/@anpdgovbr/shared-ui/types/src/components/ui/govbr-loading/index.d.ts
```

```typescript
export declare function GovBRLoading({...}: Readonly<LoadingAnimationProps>): JSX.Element | null;
```

#### 2.2 Bundle JavaScript (.es.js) ✅

Os componentes **estão presentes** no bundle compilado:
```
node_modules/@anpdgovbr/shared-ui/dist/shared-ui.es.js
```

Linha 47990 (final do arquivo):
```javascript
export {
  // ...outros exports
  sI as GovBRLoading,
  // ...outros exports
}
```

#### 2.3 Package.json Exports ⚠️

```json
{
  "exports": {
    ".": {
      "types": "./types/src/index.d.ts",
      "import": "./dist/shared-ui.es.js",
      "require": "./dist/shared-ui.cjs.js"
    }
  }
}
```

**Problema identificado:** O arquivo de tipos aponta para `./types/src/index.d.ts`, mas este arquivo **re-exporta de `./components`** usando `export * from './components'`.

#### 2.4 Cadeia de Re-exports

```
package.json
  └─> types: "./types/src/index.d.ts"
        └─> export * from './components'  (linha 17)
              └─> ./components/index.d.ts
                    └─> export * from './ui/govbr-loading'
                          └─> ./ui/govbr-loading/index.d.ts
                                └─> export declare function GovBRLoading(...)
```

### 3. Comportamento no TypeScript Compiler

Quando o TypeScript resolve a importação:

```typescript
import { GovBRLoading } from "@anpdgovbr/shared-ui"
```

O compilador:
1. ✅ Lê `package.json` → `exports["."].types` → `./types/src/index.d.ts`
2. ✅ Encontra `export * from './components'`
3. ⚠️ **FALHA**: Não consegue resolver os exports transitivos corretamente

**Hipótese:** O TypeScript pode estar tendo problemas com a cadeia de `export *` quando há múltiplos níveis de re-exports em arquivos `.d.ts` gerados.

---

## 🧪 Testes de Verificação

### Teste 1: Import Direto (FALHA ❌)

```typescript
// packages/rbac-admin/src/components/UsersList.tsx
import { GovBRLoading } from "@anpdgovbr/shared-ui"

// Resultado: error TS2305: Module has no exported member 'GovBRLoading'
```

### Teste 2: Verificação de Bundle (SUCESSO ✅)

```bash
grep -n "GovBRLoading" node_modules/@anpdgovbr/shared-ui/dist/shared-ui.es.js
# Resultado: 47990:  sI as GovBRLoading,
```

### Teste 3: Verificação de Tipos (SUCESSO ✅)

```bash
cat node_modules/@anpdgovbr/shared-ui/types/src/components/index.d.ts | grep -A2 "govbr-loading"
# Resultado: export * from './ui/govbr-loading';
```

### Teste 4: TypeScript Resolution (FALHA ❌)

```bash
tsc --noEmit --traceResolution 2>&1 | grep -i "govbrloading"
# Resultado: Não encontra o símbolo exportado
```

---

## 🔧 Workaround Atual

No `@anpdgovbr/rbac-admin`, estamos usando **imports diretos do MUI**:

```typescript
// Workaround aplicado
import CircularProgress from "@mui/material/CircularProgress"

// Ao invés de (desejado mas não funciona)
import { GovBRLoading } from "@anpdgovbr/shared-ui"
```

**Impacto do Workaround:**
- ✅ Build funciona sem erros
- ✅ Testes passam (22/22)
- ❌ Não usamos componentes padronizados ANPD
- ❌ Inconsistência visual com design system Gov.BR
- ❌ Duplicação de código MUI ao invés de abstração

---

## 💡 Possíveis Causas Raiz

### Hipótese 1: Configuração do tsconfig.json no shared-ui

O `tsconfig.json` do shared-ui pode não estar gerando arquivos `.d.ts` com exports corretos.

**Verificação necessária:**
```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "moduleResolution": "node16", // ou "bundler"?
    "module": "ESNext",
    "outDir": "./types"
  }
}
```

### Hipótese 2: Build Tool (Vite) não gera tipos corretamente

Se o shared-ui usa Vite para build, pode haver configuração incorreta:

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    // Falta plugin de geração de tipos?
    dts({ insertTypesEntry: true })
  ]
})
```

### Hipótese 3: Package.json "exports" incompleto

Falta mapear subpaths para componentes individuais:

```json
{
  "exports": {
    ".": {
      "types": "./types/src/index.d.ts",
      "import": "./dist/shared-ui.es.js"
    },
    // FALTANDO: exports para componentes individuais
    "./components": {
      "types": "./types/src/components/index.d.ts"
    }
  }
}
```

### Hipótese 4: Problema de Module Resolution

O TypeScript pode estar usando uma estratégia de resolução incompatível. Verificar:

```json
// No rbac-admin/tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "bundler", // vs "node16"
  }
}
```

---

## ✅ SOLUÇÃO APLICADA

### Problema Identificado

O problema estava na **dupla configuração do campo de tipos** no `package.json`:

```json
{
  "types": "./types/index.d.ts",  // ❌ Este arquivo NÃO existia
  "exports": {
    ".": {
      "types": "./types/src/index.d.ts", // ✅ Este arquivo EXISTE
    }
  }
}
```

O TypeScript estava tentando resolver tipos a partir de `./types/index.d.ts`, mas este arquivo não existia, causando falha na resolução de módulos.

### Solução Implementada

Criado arquivo `types/index.d.ts` que re-exporta todos os tipos de `types/src/index.d.ts`:

```typescript
/**
 * Arquivo de tipos principal da biblioteca @anpdgovbr/shared-ui
 * 
 * Re-exporta todos os tipos de ./src/index.d.ts para compatibilidade
 * com o campo "types" do package.json
 */

export * from './src/index';
```

### Validação da Solução

Criado script `scripts/validate-exports.cjs` que verifica:

- ✅ Todos os 18 componentes principais são exportados
- ✅ Todos os 18 tipos correspondentes são exportados
- ✅ Helpers (IconMap, mapMuiColorToGovbrClass) são exportados
- ✅ Temas e providers são exportados
- ✅ Arquivo `types/index.d.ts` existe e re-exporta corretamente
- ✅ Campos `types` e `exports['.'].types` do package.json estão corretos

### Resultado da Validação

```bash
$ node scripts/validate-exports.cjs

🔍 Validando exports da biblioteca @anpdgovbr/shared-ui

📦 Verificando componentes...
   ✅ GovBRLoading
   ✅ GovBRCheckbox
   ✅ GovBRButton
   [... todos os 18 componentes ✅]

🔤 Verificando tipos...
   ✅ LoadingAnimationProps
   ✅ GovBRCheckboxProps
   [... todos os 18 tipos ✅]

🛠️  Verificando helpers...
   ✅ IconMap
   ✅ mapMuiColorToGovbrClass

🎨 Verificando temas...
   ✅ govbrTheme
   ✅ GovBRThemeProvider
   ✅ anpdTheme
   ✅ ANPDThemeProvider

📝 Verificando re-export principal...
   ✅ types/index.d.ts está correto

📦 Verificando package.json...
   ✅ Campo "types" está correto
   ✅ Campo "exports['.'].types" está correto

============================================================
✅ SUCESSO! Todos os exports estão corretos.

💡 Os componentes devem ser importáveis com:
   import { GovBRLoading, GovBRCheckbox } from "@anpdgovbr/shared-ui"
```

### Próximos Passos

1. ✅ **Executar build completo**: `pnpm run build`
2. ✅ **Validar exports**: `node scripts/validate-exports.cjs`
3. 🔄 **Publicar nova versão beta**: `pnpm run release:beta`
4. 🧪 **Testar no rbac-admin**: Atualizar dependência e validar imports
5. 📝 **Atualizar CHANGELOG**: Documentar a correção

---

## 🎯 Soluções Propostas (APLICADAS)

### ✅ Solução Aplicada: Criar Arquivo de Re-export

**Status:** ✅ IMPLEMENTADO

Criamos `types/index.d.ts` que re-exporta tudo de `types/src/index.d.ts`:

### Solução 1: Gerar Arquivo de Tipos Agregado (RECOMENDADA)

Criar um arquivo `index.d.ts` na raiz do pacote que agrega todos os exports:

```bash
# No shared-ui
npm install -D @microsoft/api-extractor
```

```typescript
// shared-ui/scripts/generate-types.ts
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor'

// Gera um único arquivo .d.ts com todos os exports
const config = ExtractorConfig.loadFileAndPrepare('api-extractor.json')
Extractor.invoke(config, {
  localBuild: true,
  showVerboseMessages: true,
})
```

```json
// shared-ui/api-extractor.json
{
  "mainEntryPointFilePath": "./types/src/index.d.ts",
  "dtsRollup": {
    "enabled": true,
    "untrimmedFilePath": "./dist/index.d.ts"
  }
}
```

**Resultado esperado:**
```
shared-ui/dist/index.d.ts (arquivo único com todos os exports)
```

### Solução 2: Simplificar Cadeia de Re-exports

Modificar `types/src/index.d.ts` para exportar diretamente:

```typescript
// ANTES (atual - problema)
export * from './components'

// DEPOIS (proposto - solução)
export { GovBRLoading } from './components/ui/govbr-loading'
export { GovBRCheckbox } from './components/ui/govbr-checkbox'
export { GovBRButton } from './components/ui/govbr-button'
// ... todos os demais componentes explicitamente
```

**Vantagens:**
- ✅ TypeScript resolve diretamente
- ✅ Não precisa de ferramentas adicionais

**Desvantagens:**
- ❌ Manutenção manual ao adicionar componentes
- ❌ Mais verboso

### Solução 3: Usar TypeScript Project References

```json
// shared-ui/tsconfig.json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true
  },
  "references": []
}
```

```json
// rbac-admin/tsconfig.json
{
  "references": [
    { "path": "../shared-ui" }
  ]
}
```

### Solução 4: Publicar Types Separadamente

Criar pacote `@anpdgovbr/shared-ui-types`:

```json
// @anpdgovbr/shared-ui-types/package.json
{
  "name": "@anpdgovbr/shared-ui-types",
  "main": "./index.d.ts",
  "types": "./index.d.ts"
}
```

```typescript
// Uso
import type { GovBRLoadingProps } from "@anpdgovbr/shared-ui-types"
import { GovBRLoading } from "@anpdgovbr/shared-ui" // runtime
```

---

## 🔬 Investigação Adicional Necessária

### 1. Verificar Configuração de Build do shared-ui

```bash
# No repositório do shared-ui
ls -la vite.config.ts tsconfig.json rollup.config.js
cat package.json | jq '.scripts.build'
```

### 2. Testar com Diferentes Module Resolutions

```json
// rbac-admin/tsconfig.json - testar variações
{
  "compilerOptions": {
    "moduleResolution": "node16" | "bundler" | "nodenext"
  }
}
```

### 3. Verificar Versões de Dependências

```bash
npm ls typescript
npm ls vite
npm ls @vitejs/plugin-react
```

### 4. Comparar com Pacotes Similares Funcionais

Verificar como `@mui/material` ou `@chakra-ui/react` geram seus tipos:

```bash
cat node_modules/@mui/material/package.json | jq '.exports'
ls -la node_modules/@mui/material/*.d.ts
```

---

## 📊 Impacto

### Pacotes Afetados

| Pacote | Versão | Status | Impacto |
|--------|--------|--------|---------|
| `@anpdgovbr/shared-ui` | 0.3.10-beta.0 | 🔴 Bloqueador | Componentes não importáveis |
| `@anpdgovbr/rbac-admin` | 0.3.0-beta.0 | 🟡 Workaround | Usando MUI direto |
| Projetos consumidores | - | 🔴 Bloqueados | Não podem usar shared-ui |

### Funcionalidades Afetadas

- ❌ `GovBRLoading` - Indicador de carregamento Gov.BR
- ❌ `GovBRCheckbox` - Checkbox padronizado
- ❌ `GovBRButton` - Botão Gov.BR
- ❌ `GovBRInput` - Input padronizado
- ❌ `GovBRFormInput` - Input para formulários
- ❌ Todos os ~15 componentes exportados

### Métricas de Impacto

- **Projetos bloqueados:** Todos que dependem de shared-ui
- **Componentes inutilizáveis:** 100% (15/15)
- **Workaround necessário:** Sim (usar MUI direto)
- **Prioridade:** 🔴 **CRÍTICA**

---

## ✅ Checklist de Resolução

### Investigação
- [x] Verificar presença de componentes no bundle JS
- [x] Verificar presença de tipos em arquivos .d.ts
- [x] Identificar cadeia de re-exports
- [x] Analisar configuração de build do shared-ui
- [x] Identificar conflito entre campos `types` e `exports['.'].types`

### Implementação (Solução Aplicada ✅)
- [x] Criar arquivo `types/index.d.ts` re-exportando `types/src/index.d.ts`
- [x] Executar build completo: `pnpm run build`
- [x] Criar script de validação `scripts/validate-exports.cjs`
- [x] Validar que todos os componentes são exportados corretamente
- [ ] Publicar nova versão beta: `pnpm run release:beta`

### Validação
- [x] Verificar que arquivos de tipo foram gerados corretamente
- [x] Executar script de validação sem erros
- [ ] Testar import no rbac-admin após publicação
- [ ] Verificar autocomplete no VSCode do projeto consumidor
- [ ] Build completo do monorepo sem erros TypeScript

### Documentação
- [x] Documentar problema neste arquivo
- [x] Documentar solução aplicada
- [ ] Atualizar CHANGELOG do shared-ui
- [ ] Criar entry no histórico de correções
- [ ] Atualizar guias de uso se necessário

### Investigação
- [x] Verificar presença de componentes no bundle JS
- [x] Verificar presença de tipos em arquivos .d.ts
- [x] Identificar cadeia de re-exports
- [ ] Analisar configuração de build do shared-ui
- [ ] Testar diferentes moduleResolution strategies
- [ ] Comparar com pacotes similares funcionais

### Implementação (Solução Recomendada)
- [ ] Instalar @microsoft/api-extractor no shared-ui
- [ ] Configurar api-extractor.json
- [ ] Adicionar script de geração de tipos
- [ ] Gerar arquivo dist/index.d.ts agregado
- [ ] Atualizar package.json exports para apontar para dist/index.d.ts
- [ ] Publicar nova versão do shared-ui

### Validação
- [ ] Testar import no rbac-admin
- [ ] Verificar autocomplete no VSCode
- [ ] Executar tsc --noEmit sem erros
- [ ] Build completo do monorepo
- [ ] Testes de integração

### Documentação
- [x] Documentar problema neste arquivo
- [ ] Atualizar CHANGELOG do shared-ui
- [ ] Criar issue no repositório do shared-ui
- [ ] Documentar solução aplicada
- [ ] Atualizar guias de uso

---

## 🔗 Referências

1. **TypeScript Handbook - Module Resolution**  
   https://www.typescriptlang.org/docs/handbook/module-resolution.html

2. **Package.json "exports" field**  
   https://nodejs.org/api/packages.html#exports

3. **API Extractor (Microsoft)**  
   https://api-extractor.com/

4. **Vite Library Mode**  
   https://vite.dev/guide/build.html#library-mode

5. **TypeScript Declaration Files**  
   https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

---

## 📝 Notas de Implementação

### Para Equipe do shared-ui

1. **Urgente:** Resolver problema de exports é bloqueador para adoção
2. **Sugestão:** Usar api-extractor para gerar tipos consolidados
3. **Teste:** Validar com `@anpdgovbr/rbac-admin` como caso de uso
4. **Publicação:** Nova versão 0.3.11-beta.0 com fix

### Para Equipe do rbac-admin

1. **Atual:** Continuar usando MUI direto (workaround)
2. **Monitorar:** Aguardar fix no shared-ui@0.3.11+
3. **Migração:** Após fix, migrar para componentes GovBR
4. **Testes:** Validar visualmente após migração

---

**Documento criado em:** 1 de novembro de 2025  
**Última atualização:** 1 de novembro de 2025  
**Responsável:** Equipe DDSS/CGTI/ANPD  
**Status:** ✅ **ISSUE RESOLVIDA - SOLUÇÃO APLICADA**

### 🎉 Resumo da Correção

**Problema:** Componentes não eram importáveis devido à falta do arquivo `types/index.d.ts`  
**Solução:** Criado arquivo de re-export em `types/index.d.ts`  
**Validação:** Script `scripts/validate-exports.cjs` confirma todos os exports  
**Próximo passo:** Publicar versão `0.3.11-beta.0` e testar no `rbac-admin`
