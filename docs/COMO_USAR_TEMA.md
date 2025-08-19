# 🎨 Como Usar o Tema GovBR

Este documento explica como usar o **govbrTheme** da shared-ui, que implementa os padrões visuais do Gov.br Design System sobre componentes Material-UI.

> 📚 **Contexto:** [ARQUITETURA.md](../ARQUITETURA.md) - Entenda a arquitetura híbrida da biblioteca de componentes ANPD.

## 🎯 Objetivo do Tema

O `govbrTheme` é parte fundamental da **biblioteca de componentes compartilháveis da ANPD**, fornecendo:

- **Consistência visual**: Aplica padrões Gov.br DS automaticamente
- **Compatibilidade técnica**: Resolve questões de integração entre MUI e Gov.br DS
- **Manutenibilidade**: Centraliza estilização em um local
- **Flexibilidade**: Suporte aos dois modos da arquitetura híbrida

## 📦 Instalação

```bash
npm install @anpdgovbr/shared-ui
```

## 🚀 Uso Básico

### Opção 1: GovBRThemeProvider (Recomendado)

Use nosso provider que já resolve todos os conflitos de estilo:

```tsx
import React from 'react'
import { GovBRThemeProvider, GovBRButton } from '@anpdgovbr/shared-ui'
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

function App() {
  return (
    <GovBRThemeProvider>
      <div>
        <h1>Minha Aplicação</h1>
        {/* Modo Padrão: MUI estilizado pelo govbrTheme */}
        <GovBRButton variant="contained" color="primary">
          Botão Modo Padrão
        </GovBRButton>

        {/* Modo Estrito: HTML puro com classes Gov.br DS */}
        <GovBRButton strictgovbr inverted>
          Botão Modo Estrito
        </GovBRButton>
      </div>
    </GovBRThemeProvider>
  )
}

export default App
```

### Opção 2: ThemeProvider do MUI

Se você quiser usar o `ThemeProvider` do MUI diretamente:

```tsx
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { govbrTheme, GovBRButton } from '@anpdgovbr/shared-ui'
import '@anpdgovbr/shared-ui/styles'

function App() {
  return (
    <ThemeProvider theme={govbrTheme}>
      <CssBaseline />
      <div>
        <h1>Minha Aplicação</h1>
        <GovBRButton variant="contained" color="primary">
          Botão com Tema GovBR
        </GovBRButton>
      </div>
    </ThemeProvider>
  )
}

export default App
```

## 🎯 Usando Apenas o Tema (sem componentes GovBR)

Se quiser usar apenas o tema com componentes MUI padrão:

```tsx
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Button, TextField, Checkbox } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { govbrTheme } from '@anpdgovbr/shared-ui'
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

function App() {
  return (
    <ThemeProvider theme={govbrTheme}>
      <CssBaseline />
      <div>
        {/* Estes componentes MUI usarão automaticamente o tema GovBR */}
        <Button variant="contained" color="primary">
          Botão MUI com Visual Gov.br DS
        </Button>

        <TextField label="Campo de texto" variant="outlined" margin="normal" />

        <Checkbox defaultChecked />
      </div>
    </ThemeProvider>
  )
}
```

> 💡 **Como funciona:** O `govbrTheme` contém `styleOverrides` que fazem componentes MUI renderizarem com a aparência do Gov.br DS automaticamente.

## 🔧 Customização Avançada

### Estendendo o Tema com Tokens Gov.br DS

**Abordagem Recomendada:** Use variáveis CSS do Gov.br DS para manter sincronização automática:

```tsx
import { createTheme } from '@mui/material/styles'
import { govbrTheme } from '@anpdgovbr/shared-ui'

const meuTemaCustomizado = createTheme({
  ...govbrTheme,
  palette: {
    ...govbrTheme.palette,
    // ✅ Bom: Usar tokens CSS do Gov.br DS
    tertiary: {
      main: 'var(--blue-warm-vivid-50)',
      contrastText: 'var(--gray-2)',
    },
  },
  components: {
    ...govbrTheme.components,
    // Personalizar componentes específicos mantendo a arquitetura
    MuiButton: {
      ...govbrTheme.components?.MuiButton,
      styleOverrides: {
        ...govbrTheme.components?.MuiButton?.styleOverrides,
        root: {
          ...govbrTheme.components?.MuiButton?.styleOverrides?.root,
          // ✅ Bom: Usar variáveis ao invés de valores fixos
          borderRadius: 'var(--surface-rounder-md)',
          // ❌ Evitar: Valores fixos quebram a sincronização
          // borderRadius: '8px',
        },
      },
    },
  },
})
```

> 🎯 **Princípio:** Sempre use `var(--token-name)` para manter os valores sincronizados com atualizações do Gov.br DS.

### Acessando o Tema em Componentes

```tsx
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'

function MeuComponente() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
      }}
    >
      Usando o tema do GovBR
    </Box>
  )
}
```

## 📱 Responsividade

O tema inclui breakpoints otimizados para o GovBR:

```tsx
import { useTheme, useMediaQuery } from '@mui/material'

function ComponenteResponsivo() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  return (
    <div>
      {isMobile && <div>Versão Mobile</div>}
      {isTablet && <div>Versão Tablet</div>}
      {!isMobile && !isTablet && <div>Versão Desktop</div>}
    </div>
  )
}
```

## 🎨 Cores Disponíveis

O tema GovBR inclui as seguintes cores:

- **Primary**: `#1351B4` (Azul GovBR)
- **Secondary**: `#FFD200` (Amarelo GovBR)
- **Success**: `#168821` (Verde)
- **Error**: `#D04F4F` (Vermelho)
- **Warning**: `#F29F05` (Laranja)
- **Info**: `#007FA3` (Azul claro)

## 📏 Espaçamentos

O sistema de spacing segue o padrão GovBR:

```tsx
// Exemplos de uso
<Box
  sx={{
    margin: (theme) => theme.spacing(2), // 16px
    padding: (theme) => theme.spacing(1, 2), // 8px 16px
  }}
/>
```

## 🔤 Tipografia

Fontes configuradas: **Rawline** e **Raleway** como fallback.

```tsx
<Typography variant="h1">Título Principal</Typography>
<Typography variant="body1">Texto do corpo</Typography>
<Typography variant="caption">Texto pequeno</Typography>
```

## ✅ Boas Práticas

### 🎯 Arquitetura e Implementação

1. **Sempre importe os CSS do Gov.br DS**: `core.min.css` e `core-tokens.min.css`
2. **Prefira o GovBRThemeProvider**: Mais simples e já configurado para resolver conflitos
3. **Use variáveis CSS**: `var(--token-name)` em vez de valores fixos nas customizações
4. **Entenda os dois modos**: Modo padrão (MUI) vs modo estrito (HTML puro)

### 🎨 Estilização e Visual

5. **Use CssBaseline**: Para reset CSS consistente
6. **Teste em diferentes breakpoints**: O tema é responsivo
7. **Mantenha consistência**: Use as cores e espaçamentos do tema
8. **Inspecione com DevTools**: Para descobrir tokens CSS nos componentes oficiais Gov.br DS

## 🆘 Problemas Comuns

### Tema não funciona / Conflitos de estilo

```tsx
// ✅ Correto - envolver com provider
<GovBRThemeProvider>
  <MeuComponente />
</GovBRThemeProvider>

// ❌ Incorreto - usar sem provider
<MeuComponente /> // Tema não será aplicado
```

### Fontes não aparecem

```tsx
// ✅ Correto - importar os estilos CSS
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

// ❌ Incorreto - esquecer os estilos
// As fontes vêm dos arquivos CSS do Gov.br DS
```

### Cores diferentes do esperado

```tsx
// ✅ Correto - usar color prop do MUI (controlado pelo tema)
<Button color="primary">Seguirá o tema</Button>

// ⚠️ Modo estrito quando precisar de 100% fidelidade
<GovBRButton strictgovbr color="primary">Gov.br DS puro</GovBRButton>

// ❌ Evitar - CSS direto conflita com a arquitetura
<Button style={{backgroundColor: '#1351B4'}}>Pode conflitar</Button>
```

### Componente não tem aparência Gov.br DS

1. **Verifique se o componente está no govbrTheme.ts**
2. **Use componentes GovBR quando disponíveis**: `GovBRButton` em vez de `Button`
3. **Para MUI puro**: Certifique-se que há `styleOverrides` para aquele componente no tema

---

## 🔗 Recursos Relacionados

- 📖 **[ARQUITETURA.md](../ARQUITETURA.md)** - Fundamentos da arquitetura híbrida
- 🎨 **[Gov.br DS](https://gov.br/ds)** - Design System oficial
- 📝 **[ADICIONAR_COMPONENTE.md](./ADICIONAR_COMPONENTE.md)** - Como criar novos componentes
- 🔧 **[MUI Theme](https://mui.com/material-ui/customization/theming/)** - Documentação de temas MUI
