# Usando apenas o tema GovBR

Se você quiser usar apenas o tema GovBR sem os componentes, você pode fazer isso de algumas formas:

## Instalação

```bash
npm install @anpdgovbr/shared-ui
# ou
yarn add @anpdgovbr/shared-ui
# ou
pnpm add @anpdgovbr/shared-ui
```

## Uso com ThemeProvider

```tsx
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { govbrTheme } from '@anpdgovbr/shared-ui'

// Ou use nosso ThemeProvider que já vem configurado
import { GovBRThemeProvider } from '@anpdgovbr/shared-ui'

function App() {
  return <GovBRThemeProvider>{/* Seu app aqui */}</GovBRThemeProvider>
}

// Ou manualmente:
function AppManual() {
  return (
    <ThemeProvider theme={govbrTheme}>
      <CssBaseline />
      {/* Seu app aqui */}
    </ThemeProvider>
  )
}
```

## Customizando o tema

```tsx
import { createTheme } from '@mui/material/styles'
import { govbrTheme } from '@anpdgovbr/shared-ui'

const meuTemaCustomizado = createTheme({
  ...govbrTheme,
  // Suas customizações aqui
  palette: {
    ...govbrTheme.palette,
    primary: {
      ...govbrTheme.palette.primary,
      main: '#seu-primary-customizado',
    },
  },
})
```

## Importação de estilos CSS

Se você também precisar dos estilos base do GovBR DS, importe o CSS:

```tsx
import '@anpdgovbr/shared-ui/styles'
// ou
import '@govbr-ds/core/dist/core.css'
```
