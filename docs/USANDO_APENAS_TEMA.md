# 🎨 Usando apenas o Tema GovBR

Se você quiser usar apenas o **govbrTheme** da biblioteca de componentes ANPD sem os componentes GovBR, você pode aplicá-lo diretamente aos componentes MUI padrão.

> 📚 **Contexto:** Leia [ARQUITETURA.md](../ARQUITETURA.md) para entender como o tema se integra à arquitetura da biblioteca compartilhável da ANPD.

## 🎯 Sobre o govbrTheme

O `govbrTheme` é parte da **biblioteca de componentes compartilháveis da ANPD** e contém **styleOverrides** que fazem componentes MUI renderizarem automaticamente com a aparência do Gov.br DS.

## 📦 Instalação

```bash
npm install @anpdgovbr/shared-ui
```

## 🚀 Uso com ThemeProvider (Recomendado)

### Opção 1: GovBRThemeProvider

```tsx
import React from 'react'
import { Button, TextField, Checkbox, Card } from '@mui/material'
import { GovBRThemeProvider } from '@anpdgovbr/shared-ui'
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

function App() {
  return (
    <GovBRThemeProvider>
      {/* Componentes MUI com aparência Gov.br DS automática */}
      <Button variant="contained" color="primary">
        Botão com Visual Gov.br DS
      </Button>

      <TextField label="Campo Gov.br DS" variant="outlined" />

      <Checkbox defaultChecked />

      <Card>
        <p>Card com estilo Gov.br DS</p>
      </Card>
    </GovBRThemeProvider>
  )
}

export default App
```

### Opção 2: ThemeProvider Manual

```tsx
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Button, TextField } from '@mui/material'
import { govbrTheme } from '@anpdgovbr/shared-ui'
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

function App() {
  return (
    <ThemeProvider theme={govbrTheme}>
      <CssBaseline />
      <div>
        <Button variant="contained" color="primary">
          MUI + govbrTheme = Gov.br DS
        </Button>

        <TextField label="Estilizado automaticamente" />
      </div>
    </ThemeProvider>
  )
}
```

## 🔧 Customizando o Tema com Tokens Gov.br DS

**Abordagem Recomendada:** Estenda o tema usando variáveis CSS do Gov.br DS para manter sincronização automática:

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
    // ❌ Evitar: Valores fixos quebram a sincronização
    // tertiary: { main: '#0066CC' }
  },
  components: {
    ...govbrTheme.components,
    // Manter os styleOverrides existentes e adicionar customizações
    MuiButton: {
      ...govbrTheme.components?.MuiButton,
      styleOverrides: {
        ...govbrTheme.components?.MuiButton?.styleOverrides,
        root: {
          ...govbrTheme.components?.MuiButton?.styleOverrides?.root,
          // ✅ Bom: Usar variáveis CSS
          borderRadius: 'var(--surface-rounder-lg)',
          // ❌ Evitar: Valores fixos
          // borderRadius: '12px'
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={meuTemaCustomizado}>
      <CssBaseline />
      {/* Seu conteúdo com customizações */}
    </ThemeProvider>
  )
}
```

> 🎯 **Princípio:** Sempre use `var(--token-name)` para que suas customizações se mantenham sincronizadas com atualizações do Gov.br DS.

## 🎨 Como o Tema Integra MUI e Gov.br DS

### 🏛️ Parte da Arquitetura da Biblioteca

```tsx
// O tema permite usar MUI com aparência Gov.br DS
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { govbrTheme } from '@anpdgovbr/shared-ui'

;<ThemeProvider theme={govbrTheme}>
  <Button variant="contained" color="primary">
    {' '}
    {/* Visual Gov.br DS automático */}
    Componente MUI com Gov.br DS
  </Button>
</ThemeProvider>
```

> 🔧 **Como funciona:** O `govbrTheme` contém `styleOverrides` para cada componente MUI, aplicando tokens CSS do Gov.br DS nos slots corretos para manter a consistência visual da biblioteca de componentes ANPD.

## 📋 Componentes MUI Suportados pelo Tema

O `govbrTheme` inclui estilização para os principais componentes MUI utilizados na biblioteca:

- **Formulários**: `Button`, `TextField`, `Checkbox`, `Radio`, `Select`
- **Layout**: `Card`, `Paper`, `Container`, `Box`
- **Navegação**: `Breadcrumbs`, `Tabs`, `Stepper`
- **Feedback**: `Alert`, `Snackbar`, `Progress`
- **Data Display**: `Table`, `Chip`, `Avatar`, `Typography`

## 🔗 Recursos Relacionados

- 📖 **[ARQUITETURA.md](../ARQUITETURA.md)** - Arquitetura da biblioteca de componentes ANPD
- 🎨 **[COMO_USAR_TEMA.md](./COMO_USAR_TEMA.md)** - Guia completo de uso do tema
- 📝 **[ADICIONAR_COMPONENTE.md](./ADICIONAR_COMPONENTE.md)** - Como adicionar novos componentes ao tema
