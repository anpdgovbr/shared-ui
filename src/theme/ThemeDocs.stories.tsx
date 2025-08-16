// src/theme/ThemeDocs.stories.tsx
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import { ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'

import { govbrTheme } from '../theme/govbrTheme'

const meta: Meta = {
  title: 'Documentação/Tema GovBR-DS',
  component: () => null,
  parameters: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const ThemeCanvasBase: Story = {
  render: () => <div style={{ height: '0', overflow: 'hidden' }} />,
}

export const Cores: Story = {
  render: () => (
    <ThemeProvider theme={govbrTheme}>
      <Button variant="contained" color="primary" sx={{ mr: 2 }}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
        Secondary
      </Button>
      <Button variant="contained" color="success" sx={{ mr: 2 }}>
        Success
      </Button>
      <Button variant="contained" color="warning" sx={{ mr: 2 }}>
        Warning
      </Button>
      <Button variant="contained" color="info" sx={{ mr: 2 }}>
        Info
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
    </ThemeProvider>
  ),
}

export const Tipografia: Story = {
  render: () => (
    <ThemeProvider theme={govbrTheme}>
      <Typography variant="h1" gutterBottom>
        H1 - Título Principal
      </Typography>
      <Typography variant="h2" gutterBottom>
        H2 - Subtítulo
      </Typography>
      <Typography variant="h3" gutterBottom>
        H3 - Seção
      </Typography>
      <Typography variant="body1" gutterBottom>
        Este é um parágrafo demonstrando `body1`.
      </Typography>
      <Link href="#">Link Exemplo</Link>
    </ThemeProvider>
  ),
}

export const Switches: Story = {
  render: () => (
    <ThemeProvider theme={govbrTheme}>
      <Switch defaultChecked sx={{ mr: 2 }} />
      <Switch sx={{ mr: 2 }} />
      <Switch size="small" defaultChecked sx={{ mr: 2 }} />
      <Switch size="medium" sx={{ mr: 2 }} />
      <Switch disabled defaultChecked />
    </ThemeProvider>
  ),
}

export const Cartao: Story = {
  render: () => (
    <ThemeProvider theme={govbrTheme}>
      <Card
        sx={{
          p: 3,
          maxWidth: 300,
          '&:hover': {
            backgroundImage: 'linear-gradient(rgba(51,51,51,0.16),rgba(51,51,51,0.16))',
          },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Título do Card
        </Typography>
        <Typography variant="body1">
          Este é um exemplo de card com sombra e hover no padrão GovBR-DS.
        </Typography>
        <Button variant="outlined" sx={{ mt: 2 }}>
          Saiba Mais
        </Button>
      </Card>
    </ThemeProvider>
  ),
}

export const Divisores: Story = {
  render: () => (
    <ThemeProvider theme={govbrTheme}>
      <Typography variant="body1">Conteúdo acima da divisória.</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1">Conteúdo abaixo da divisória.</Typography>
      <Divider sx={{ my: 2 }} variant="fullWidth" />
    </ThemeProvider>
  ),
}
