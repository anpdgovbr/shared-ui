import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'

import { GovBRButton } from './index'

const meta: Meta<typeof GovBRButton> = {
  title: 'Components/GovBRButton',
  component: GovBRButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <Box sx={{ padding: 3, maxWidth: '800px' }}>
          <Story />
        </Box>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo textual ou elemento React exibido no botão',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      description: 'Cor semântica do botão conforme padrões GovBR-DS e MUI',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text', 'circle', 'inverted'],
      description:
        'Variante visual: contained (preenchido), outlined (contorno), text (apenas texto), circle (circular), inverted (cores invertidas)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão: small (32px), medium (36px), large (42px)',
    },
    startIcon: {
      control: false,
      description: 'Ícone exibido antes do texto do botão',
    },
    endIcon: {
      control: false,
      description: 'Ícone exibido após o texto do botão',
    },
    loading: {
      control: 'boolean',
      description: 'Mostrar indicador de carregamento e desabilitar interações',
    },
    clearBlock: {
      control: 'select',
      options: [undefined, 'sm', 'md', 'lg', 'xl'],
      description: 'Aplicar espaçamento clearBlock para responsividade',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilitar o botão impedindo cliques e aplicando estilo visual apropriado',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Botão ocupa 100% da largura do container pai',
    },
    onClick: {
      action: 'clicked',
      description: 'Função callback executada ao clicar no botão',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRButton - Componente GovBR-DS

Componente de botão padronizado que segue as diretrizes visuais do GovBR Design System e MUI.

### Características Principais:
- 🎨 **Cores Semânticas**: Utiliza paleta oficial do GovBR-DS (primary, secondary, success, warning, info, error)
- 🔍 **Acessibilidade**: Suporte completo a navegação por teclado e leitores de tela
- 📏 **Tamanhos Responsivos**: Small, Medium, Large com dimensões otimizadas
- 🎭 **Estados Visuais**: Hover, focus, pressed, loading, disabled
- 🔧 **Flexibilidade**: Suporte a ícones, estilo circular, largura completa
- 🏛️ **GovBR Strict Mode**: Aplicação rigorosa dos padrões governamentais
- ⚡ **Performance**: Tree shaking otimizado e carregamento eficiente
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRButton>

type ColorKey = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error'
type VariantKey = 'contained' | 'outlined' | 'text' | 'circle' | 'inverted'

export const Default: Story = {
  args: {
    children: 'Botão Padrão',
    color: 'primary',
    variant: 'contained',
  },
}

export const WithStrictGovBr: Story = {
  args: {
    children: 'Padrão GovBR',
    color: 'primary',
    variant: 'contained',
    strictgovbr: true,
    inverted: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão seguindo rigorosamente o padrão GovBR-DS com classes `.br-button`',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <GovBRButton variant="contained" color="primary">
        Contained
      </GovBRButton>
      <GovBRButton variant="outlined" color="primary">
        Outlined
      </GovBRButton>
      <GovBRButton variant="text" color="primary">
        Text
      </GovBRButton>
      <GovBRButton variant="circle" color="primary" size="medium">
        <AddIcon />
      </GovBRButton>
      <GovBRButton variant="inverted" color="primary">
        Inverted (MUI)
      </GovBRButton>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstração das variantes visuais disponíveis: contained, outlined, text, circle, inverted',
      },
    },
  },
}

export const SemanticColors: Story = {
  render: () => {
    const colors: ColorKey[] = ['primary', 'secondary', 'success', 'warning', 'info', 'error']
    const label = (c: string) => c.charAt(0).toUpperCase() + c.slice(1)
    type VariantKey = 'contained' | 'outlined' | 'text' | 'circle' | 'inverted'

    const variants: { key: VariantKey; label: string }[] = [
      { key: 'contained', label: 'Contained (omit)' },
      { key: 'outlined', label: 'Outlined' },
      { key: 'text', label: 'Text' },
      { key: 'circle', label: 'Circle' },
      { key: 'inverted', label: 'Inverted' },
    ]

    return (
      <Box sx={{ display: 'grid', gap: 1 }}>
        {/* Grid wrapper */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: `160px repeat(${colors.length}, minmax(96px, 1fr))`,
            gap: 1,
            alignItems: 'center',
          }}
        >
          {/* header row */}
          <Box />
          {colors.map((c) => (
            <Box key={`hdr-${c}`} sx={{ px: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {label(c)}
              </Typography>
            </Box>
          ))}

          {/* rows - one per variant */}
          {variants.map((v) => (
            <>
              <Box key={`label-${v.key}`} sx={{ px: 1 }}>
                <Typography variant="body2">{v.label}</Typography>
              </Box>

              {colors.map((c) => {
                const key = `${v.key}-${c}`
                return (
                  <Box key={key} sx={{ p: 0.5 }}>
                    {renderCell(v.key, c)}
                  </Box>
                )
              })}
            </>
          ))}
        </Box>
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Paleta completa de cores semânticas seguindo padrões GovBR-DS',
      },
    },
  },
}

function renderCell(variant: VariantKey, color: ColorKey) {
  const label = (c: string) => c.charAt(0).toUpperCase() + c.slice(1)
  const cellMaxWidth = variant === 'circle' ? 56 : 160

  let content: React.ReactNode
  if (variant === 'circle') {
    content = (
      <GovBRButton variant="circle" color={color} size="medium">
        <AddIcon />
      </GovBRButton>
    )
  } else if (variant === 'outlined') {
    content = (
      <GovBRButton variant="outlined" color={color} fullWidth>
        {label(color)}
      </GovBRButton>
    )
  } else if (variant === 'text') {
    content = (
      <GovBRButton variant="text" color={color} fullWidth>
        {label(color)}
      </GovBRButton>
    )
  } else if (variant === 'inverted') {
    content = (
      <GovBRButton variant="inverted" color={color} fullWidth>
        {label(color)}
      </GovBRButton>
    )
  } else {
    // contained
    content = (
      <GovBRButton color={color} fullWidth>
        {label(color)}
      </GovBRButton>
    )
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: cellMaxWidth }}>{content}</Box>
    </Box>
  )
}

export const WithIcons: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <GovBRButton startIcon={<AddIcon />} color="success">
        Adicionar
      </GovBRButton>
      <GovBRButton startIcon={<SaveIcon />} color="primary">
        Salvar
      </GovBRButton>
      <GovBRButton startIcon={<DeleteIcon />} color="error">
        Excluir
      </GovBRButton>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Botões com ícones para melhor comunicação visual e acessibilidade',
      },
    },
  },
}

export const LoadingState: Story = {
  args: {
    children: 'Salvando...',
    loading: true,
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado de carregamento com spinner automático e desabilitação de cliques',
      },
    },
  },
}

export const BlockButton: Story = {
  args: {
    children: 'Botão de Largura Completa',
    fullWidth: true,
    color: 'primary',
    variant: 'contained',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão que ocupa toda a largura disponível do container',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center">
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Small
        </Typography>
        <GovBRButton size="small" color="primary">
          Small
        </GovBRButton>
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Medium
        </Typography>
        <GovBRButton size="medium" color="primary">
          Medium
        </GovBRButton>
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Large
        </Typography>
        <GovBRButton size="large" color="primary">
          Large
        </GovBRButton>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstração dos três tamanhos disponíveis com suas dimensões respectivas',
      },
    },
  },
}

export const CircularButtons: Story = {
  render: () => (
    <Stack spacing={2} direction="column">
      {/* linha de small */}
      <Stack spacing={2} direction="row" alignItems="center">
        <GovBRButton variant="circle" color="primary" size="small">
          <AddIcon />
        </GovBRButton>
        <GovBRButton variant="circle" color="secondary" size="small">
          <SaveIcon />
        </GovBRButton>
        <GovBRButton variant="circle" color="error" size="small">
          <DeleteIcon />
        </GovBRButton>
      </Stack>

      {/* linha existente - medium */}
      <Stack spacing={2} direction="row" alignItems="center">
        <GovBRButton variant="circle" color="primary" size="medium">
          <AddIcon />
        </GovBRButton>
        <GovBRButton variant="circle" color="secondary" size="medium">
          <SaveIcon />
        </GovBRButton>
        <GovBRButton variant="circle" color="error" size="medium">
          <DeleteIcon />
        </GovBRButton>
      </Stack>

      {/* linha de large */}
      <Stack spacing={2} direction="row" alignItems="center">
        <GovBRButton variant="circle" color="primary" size="large">
          <AddIcon />
        </GovBRButton>
        <GovBRButton variant="circle" color="secondary" size="large">
          <SaveIcon />
        </GovBRButton>
        <GovBRButton variant="circle" color="error" size="large">
          <DeleteIcon />
        </GovBRButton>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Botões circulares ideais para ações com ícones únicos',
      },
    },
  },
}

export const GovernmentExample: Story = {
  render: () => (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>
          Portal de Serviços - ANPD
        </Typography>
        <GovBRButton fullWidth color="primary" size="large" strictgovbr>
          Consultar Processos
        </GovBRButton>
        <Stack direction="row" spacing={1}>
          <GovBRButton variant="outlined" color="primary" fullWidth strictgovbr>
            Protocolar
          </GovBRButton>
          <GovBRButton variant="text" color="secondary" fullWidth strictgovbr>
            Ajuda
          </GovBRButton>
        </Stack>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso em interface governamental seguindo padrões GovBR-DS',
      },
    },
  },
}
