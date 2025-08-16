# 🎨 Como Usar o Tema GovBR

Este documento explica como usar o tema GovBR da shared-ui em sua aplicação.

## 📦 Instalação

```bash
npm install @anpdgovbr/shared-ui
```

## 🚀 Uso Básico

### Opção 1: Provider Customizado (Recomendado)

O jeito mais simples é usar o `GovBRThemeProvider` que já vem configurado:

```tsx
import React from 'react'
import { GovBRThemeProvider, GovBRButton } from '@anpdgovbr/shared-ui'
import '@anpdgovbr/shared-ui/styles'

function App() {
  return (
    <GovBRThemeProvider>
      <div>
        <h1>Minha Aplicação</h1>
        <GovBRButton variant="contained" color="primary">
          Botão com Tema GovBR
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

## 🎯 Usando Apenas o Tema (sem componentes)

Se você quiser usar apenas o tema do GovBR com componentes do MUI padrão:

```tsx
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Button, TextField, Checkbox } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { govbrTheme } from '@anpdgovbr/shared-ui'
import '@anpdgovbr/shared-ui/styles'

function App() {
  return (
    <ThemeProvider theme={govbrTheme}>
      <CssBaseline />
      <div>
        {/* Estes componentes MUI usarão automaticamente o tema GovBR */}
        <Button variant="contained" color="primary">
          Botão MUI com Tema GovBR
        </Button>

        <TextField label="Campo de texto" variant="outlined" margin="normal" />

        <Checkbox defaultChecked />
      </div>
    </ThemeProvider>
  )
}
```

## 🔧 Customização Avançada

### Estendendo o Tema

Você pode estender o tema GovBR para adicionar customizações específicas:

```tsx
import { createTheme } from '@mui/material/styles'
import { govbrTheme } from '@anpdgovbr/shared-ui'

const meuTemaCustomizado = createTheme({
  ...govbrTheme,
  palette: {
    ...govbrTheme.palette,
    // Adicionar cores customizadas mantendo as do GovBR
    tertiary: {
      main: '#8B5CF6',
      contrastText: '#fff',
    },
  },
  components: {
    ...govbrTheme.components,
    // Personalizar componentes específicos
    MuiButton: {
      ...govbrTheme.components?.MuiButton,
      styleOverrides: {
        ...govbrTheme.components?.MuiButton?.styleOverrides,
        root: {
          ...govbrTheme.components?.MuiButton?.styleOverrides?.root,
          // Suas customizações adicionais
          textTransform: 'uppercase',
        },
      },
    },
  },
})

// Usar o tema customizado
function App() {
  return (
    <ThemeProvider theme={meuTemaCustomizado}>
      <CssBaseline />
      {/* Seu conteúdo */}
    </ThemeProvider>
  )
}
```

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

1. **Sempre importe os estilos**: `import '@anpdgovbr/shared-ui/styles'`
2. **Use CssBaseline**: Para reset CSS consistente
3. **Prefira o GovBRThemeProvider**: Mais simples e já configurado
4. **Teste em diferentes breakpoints**: O tema é responsivo
5. **Mantenha consistência**: Use as cores e espaçamentos do tema

## 🆘 Problemas Comuns

### Fontes não aparecem

```tsx
// ✅ Correto - importar os estilos
import '@anpdgovbr/shared-ui/styles'

// ❌ Incorreto - esquecer os estilos
// Os estilos incluem as fontes do GovBR
```

### Tema não funciona

```tsx
// ✅ Correto - envolver com provider
<GovBRThemeProvider>
  <MeuComponente />
</GovBRThemeProvider>

// ❌ Incorreto - usar sem provider
<MeuComponente /> // Tema não será aplicado
```

### Cores não aparecem

```tsx
// ✅ Correto - usar color prop do MUI
<Button color="primary">OK</Button>

// ❌ Incorreto - usar CSS direto
<Button style={{backgroundColor: '#1351B4'}}>Não recomendado</Button>
```
