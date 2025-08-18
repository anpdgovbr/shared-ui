// Exemplos de uso apenas do tema GovBR
// ✅ Importação apenas do tema
import { govbrTheme, GovBRThemeProvider } from '@anpdgovbr/shared-ui'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Exemplo 1: Usando o GovBRThemeProvider (recomendado)
export const ExemploComThemeProvider = () => {
  return (
    <GovBRThemeProvider>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Usando GovBR Theme
        </Typography>
        <Typography variant="body1" paragraph>
          Este é um exemplo usando apenas o tema, sem os componentes customizados.
        </Typography>
        <Box sx={{ mt: 2, gap: 2, display: 'flex' }}>
          <Button variant="contained" color="primary">
            Botão Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Botão Secondary
          </Button>
        </Box>
        <TextField label="Campo de teste" variant="outlined" sx={{ mt: 2 }} fullWidth />
      </Box>
    </GovBRThemeProvider>
  )
}

// Exemplo 2: Usando apenas o tema diretamente
export const ExemploComTemaDirecto = () => {
  return (
    <ThemeProvider theme={govbrTheme}>
      <CssBaseline />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Tema GovBR Aplicado
        </Typography>
        <Typography variant="body1" paragraph>
          Componentes MUI com o tema GovBR aplicado automaticamente.
        </Typography>
        <Box sx={{ mt: 2, gap: 2, display: 'flex' }}>
          <Button variant="contained" color="success">
            Sucesso
          </Button>
          <Button variant="contained" color="warning">
            Aviso
          </Button>
          <Button variant="contained" color="error">
            Erro
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

// Exemplo 3: Customizando o tema
const meuTemaCustomizado = createTheme({
  ...govbrTheme,
  palette: {
    ...govbrTheme.palette,
    primary: {
      ...govbrTheme.palette.primary,
      main: '#2E7D32', // Verde customizado
    },
  },
})

export const ExemploComTemaCustomizado = () => {
  return (
    <ThemeProvider theme={meuTemaCustomizado}>
      <CssBaseline />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Tema Customizado
        </Typography>
        <Typography variant="body1" paragraph>
          Base do GovBR com customizações próprias.
        </Typography>
        <Button variant="contained" color="primary">
          Primary Customizado
        </Button>
      </Box>
    </ThemeProvider>
  )
}
