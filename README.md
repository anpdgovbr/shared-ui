# 📦 ANPD Shared UI

> Biblioteca de componentes React com MUI e padrão Gov.BR para a ANPD.

![CI](https://github.com/anpdgovbr/shared-ui/actions/workflows/ci.yml/badge.svg)
![npm](https://img.shields.io/npm/v/@anpdgovbr/shared-ui.svg?logo=npm&logoColor=white)
![downloads (week)](https://img.shields.io/npm/dw/@anpdgovbr/shared-ui.svg?logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%3E%3D5.9-blue.svg?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-^19.2-61DAFB.svg?logo=react&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-^7.3-007FFF.svg?logo=mui&logoColor=white)
![GovBR DS](https://img.shields.io/badge/Gov.BR-^3.6.2-4F8A10.svg?logo=government&logoColor=white)
![Node](https://img.shields.io/badge/Node-%3E%3D20.0.0-339933.svg?logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-%3E%3D9.0.0-F69220.svg?logo=pnpm&logoColor=white)

---

## Sobre o Projeto

O `shared-ui` é uma **biblioteca de componentes compartilháveis da ANPD**, construída com React, TypeScript e Material-UI (MUI), seguindo os padrões visuais do **Gov.br Design System**.

### 🎯 Objetivo Principal

Centralizar e padronizar componentes de interface para todos os projetos da ANPD, garantindo:

- **Consistência visual** entre aplicações
- **Reutilização** de código e padrões
- **Manutenibilidade** centralizada
- **Conformidade** com Gov.br Design System

### 🔧 Requisitos de Sistema

- **Node.js**: >= 20.0.0
- **React**: ^19.0.0
- **Material-UI (MUI)**: ^7.0.0

> **Nota sobre gerenciadores de pacotes:** A biblioteca pode ser instalada com qualquer gerenciador (npm, yarn, pnpm, bun). O requisito de pnpm >= 9.0.0 é apenas para desenvolvimento da biblioteca.

### 🏛️ Arquitetura Híbrida

Para atender aos requisitos do projeto, implementamos uma **arquitetura de modo duplo** que permite flexibilidade na utilização dos componentes:

- **Modo Padrão** (`strictgovbr={false}` - padrão): Componente MUI estilizado via `govbrTheme.ts`
- **Modo Estrito** (`strictgovbr={true}`): Elemento HTML puro com classes CSS do Gov.br DS

Esta arquitetura resolve questões técnicas de compatibilidade entre MUI (CSS-in-JS) e Gov.br DS (classes CSS globais).

### 📦 Componentes Disponíveis

A biblioteca oferece os seguintes componentes prontos para uso:

#### Componentes de Interface

- **GovBRButton** - Botões com padrões Gov.br DS
- **GovBRInput** - Campos de entrada de texto
- **GovBRCheckbox** - Caixas de seleção
- **GovBRRadio** - Botões de opção
- **GovBRSwitch** - Interruptores on/off
- **GovBRDivider** - Divisores visuais

#### Componentes de Formulário

- **GovBRFormInput** - Input integrado com React Hook Form
- **GovBRFormCheckbox** - Checkbox integrado com React Hook Form

#### Componentes de Navegação

- **GovBRBreadcrumb** - Breadcrumb/trilha de navegação
- **GovBRTabs** - Sistema de abas/tabs

#### Componentes de Dados

- **GovBRDateTimePicker** - Seletor de data e hora
- **GovBRItem** - Item genérico para listas e cards

#### Componentes de Feedback

- **GovBRLoading** - Indicadores de carregamento
- **GovBRSignIn** - Componente de autenticação

#### Componentes Utilitários

- **GovBRAvatar** - Avatar de usuário com menu dropdown
- **AutoSync** - Botão de sincronização automática

## Instalação e Uso

Siga estes passos para usar a biblioteca em uma aplicação (ex: `backlog-dim`).

### Passo 1: Instalar a Biblioteca

```bash
pnpm add @anpdgovbr/shared-ui
```

### Passo 2: Instalar Dependências Parceiras (`peerDependencies`)

**Esta etapa é obrigatória.** A `shared-ui` espera que a sua aplicação forneça as seguintes bibliotecas. Instale-as no seu projeto:

```bash
pnpm add @emotion/react@^11.0.0 @emotion/styled@^11.0.0 @govbr-ds/core@^3.6.2 \
  @mui/icons-material@^7.0.0 @mui/material@^7.0.0 \
  react@^19.0.0 react-dom@^19.0.0 react-hook-form@^7.0.0
```

> 💡 **Nota:** Certifique-se de que as versões instaladas são compatíveis com os ranges especificados.

### Passo 3: Configurar o Tema e CSS

No arquivo de layout principal da sua aplicação (geralmente `_app.tsx` ou `layout.tsx`), você precisa importar os estilos do Gov.br DS e envolver sua aplicação com o `GovBRThemeProvider`.

```tsx
// Em src/app/layout.tsx (ou equivalente)

// 1. Importe os arquivos de estilo do Gov.br DS
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

// 2. Importe o Provedor de Tema da nossa biblioteca
import { GovBRThemeProvider } from '@anpdgovbr/shared-ui'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* 3. Envolva sua aplicação com o Provedor */}
        <GovBRThemeProvider>{children}</GovBRThemeProvider>
      </body>
    </html>
  )
}
```

### Passo 4: Usar os Componentes

Agora você pode usar os componentes em qualquer lugar da sua aplicação.

**Exemplo 1: Modo Padrão (Recomendado)**

```tsx
import { GovBRButton, GovBRInput, GovBRDateTimePicker } from '@anpdgovbr/shared-ui'

function MeuComponente() {
  return (
    <div>
      <GovBRButton variant="contained" color="primary">
        Salvar
      </GovBRButton>

      <GovBRInput label="Nome completo" placeholder="Digite seu nome" fullWidth />

      <GovBRDateTimePicker label="Data de nascimento" format="DD/MM/YYYY" />
    </div>
  )
}
```

**Exemplo 2: Modo Estrito (Quando Necessário)**

```tsx
import { GovBRButton, GovBRTabs } from '@anpdgovbr/shared-ui'

function MeuComponente() {
  return (
    <div>
      <GovBRButton strictgovbr inverted>
        Cancelar
      </GovBRButton>

      <GovBRTabs
        strictgovbr
        tabs={[
          { label: 'Aba 1', content: <div>Conteúdo 1</div> },
          { label: 'Aba 2', content: <div>Conteúdo 2</div> },
        ]}
      />
    </div>
  )
}
```

**Exemplo 3: Componentes de Formulário com React Hook Form**

```tsx
import { useForm } from 'react-hook-form'
import { GovBRFormInput, GovBRFormCheckbox, GovBRButton } from '@anpdgovbr/shared-ui'

function MeuFormulario() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GovBRFormInput
        name="email"
        control={control}
        label="E-mail"
        rules={{ required: 'E-mail é obrigatório' }}
      />

      <GovBRFormCheckbox name="aceito" control={control} label="Aceito os termos de uso" />

      <GovBRButton type="submit" variant="contained">
        Enviar
      </GovBRButton>
    </form>
  )
}
```

---

## Desenvolvimento Local

Para contribuir com o desenvolvimento da `shared-ui`:

1.  Clone o repositório: `git clone git@github.com:anpdgovbr/shared-ui.git`
2.  Instale as dependências: `pnpm install`
3.  Execute o Storybook para ver os componentes em ação:

    ```bash
    pnpm run dev
    ```

---

## 🎉 Novidades na v0.3.7-beta.1

### 🐛 Correções Importantes

- **Instalação corrigida**: Removido script `preinstall` que causava erro em projetos consumidores
- **Pacote otimizado**: Adicionado `.npmignore` para publicar apenas arquivos necessários

### 🆕 Novos Componentes (desde v0.3.7-beta.0)

- **GovBRDateTimePicker** - Seletor de data e hora com suporte completo ao padrão brasileiro
- **GovBRDivider** - Divisores visuais para organizar conteúdo
- **GovBRTabs** - Sistema de abas com modo duplo (padrão e estrito)
- **GovBRItem** - Componente genérico para construção de listas e cards
- **GovBRLoading** - Indicadores de carregamento com animações Gov.br DS

### 📦 Dependências Atualizadas

- `@mui/x-date-pickers@^8.14.0` - Suporte avançado para componentes de data/hora
- `dayjs@^1.11.18` - Manipulação de datas leve e eficiente
- `@mui/utils@^7.3.3` - Utilitários MUI mais recentes

### 📚 Documentação

Todos os novos componentes incluem:

- ✅ Stories completas no Storybook
- ✅ Tipos TypeScript detalhados
- ✅ Exemplos de uso em ambos os modos
- ✅ Documentação inline

---

## Contribuições

Contribuições são bem-vindas! Leia nosso **[Guia de Contribuição](./CONTRIBUTING.md)** para entender o processo de desenvolvimento, validação e submissão de Pull Requests.

---

## Licença

Este projeto está licenciado sob a **Licença MIT**.
