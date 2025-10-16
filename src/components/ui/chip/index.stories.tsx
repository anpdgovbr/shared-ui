import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import FaceIcon from '@mui/icons-material/Face'
import LabelIcon from '@mui/icons-material/Label'
import PersonIcon from '@mui/icons-material/Person'
import StarIcon from '@mui/icons-material/Star'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { useState } from 'react'

import { Chip, ChipsList } from './index'
import type { ChipItemData } from './types'

const meta: Meta<typeof Chip> = {
  title: 'Components/Custom/Chip',
  component: Chip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <Box sx={{ padding: 3 }}>
          <Story />
        </Box>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Conteúdo do chip (texto ou ReactNode).',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do chip.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'Cor semântica do chip (controlada pelo tema).',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'Variante visual do chip.',
    },
    clickable: {
      control: 'boolean',
      description: 'Se true, adiciona efeitos de hover e cursor pointer.',
    },
    tooltip: {
      control: 'text',
      description:
        'Tooltip do chip. Se true usa o label, se string usa valor customizado, se omitido mostra apenas quando truncado.',
    },
    maxLength: {
      control: 'number',
      description: 'Comprimento máximo antes de truncar o texto.',
    },
    autoTruncate: {
      control: 'boolean',
      description: 'Se true, trunca automaticamente textos longos.',
    },
    backgroundColor: {
      control: 'color',
      description: 'Cor de fundo customizada (sobrescreve tema).',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Chip - Componente de Tag/Badge Customizado

Componente personalizado da ANPD baseado no MUI Chip para exibir tags, badges, status e informações categorizadas.

### Características Principais:
- 🎨 **Integração com Tema**: Totalmente compatível com GovBR-DS e Material-UI
- 📏 **Truncamento Inteligente**: Texto longo é truncado automaticamente com tooltip
- 💡 **Tooltip Configurável**: Automático, customizado ou desabilitado
- 🎯 **Ícones e Avatars**: Suporte completo para elementos visuais
- ✨ **Variantes**: Filled e outlined com cores semânticas
- 🗑️ **Deletable**: Chips removíveis com handler customizado
- 📱 **Responsivo**: Tamanhos small e medium

### Casos de Uso:
- Tags de categorização
- Status e badges
- Filtros selecionados
- Listas de seleção múltipla
- Informações contextuais compactas

### Integração com Tema:
A aparência padrão é controlada por \`src/theme/components/Chip.ts\`, que aplica tokens CSS do Gov.br DS.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    label: 'Chip Padrão',
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip básico com configuração padrão e formato arredondado (pílula) do Gov.br DS.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstração dos tamanhos disponíveis com formato de pílula Gov.br: small e medium.',
      },
    },
  },
}

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Cores semânticas Gov.br: Primary (Azul #1351B4), Success (Verde), Error (Vermelho), Warning (Amarelo), Info (Azul claro).',
      },
    },
  },
}

export const WithVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Chip label="Filled Primary" variant="filled" color="primary" />
        <Chip label="Outlined Primary" variant="outlined" color="primary" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="Filled Success" variant="filled" color="success" />
        <Chip label="Outlined Success" variant="outlined" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="Filled Error" variant="filled" color="error" />
        <Chip label="Outlined Error" variant="outlined" color="error" />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comparação entre variantes filled (preenchido) e outlined (contorno) com formato de pílula Gov.br.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
      <Chip icon={<FaceIcon />} label="Com Ícone" />
      <Chip icon={<FaceIcon />} label="Outlined" variant="outlined" />
      <Chip icon={<PersonIcon />} label="Primary" color="primary" />
      <Chip icon={<StarIcon />} label="Success" color="success" />
      <Chip icon={<LabelIcon />} label="Warning" color="warning" size="small" />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips Gov.br com ícones à esquerda do label em formato de pílula.',
      },
    },
  },
}

export const WithAvatar: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
      <Chip
        avatar={
          <Avatar alt="User" src="/avatar.jpg">
            U
          </Avatar>
        }
        label="Com Imagem"
      />
      <Chip
        avatar={<Avatar sx={{ bgcolor: 'success.main' }}>V</Avatar>}
        label="Avatar Colorido"
        variant="outlined"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips Gov.br com avatars para representar usuários ou entidades.',
      },
    },
  },
}

export const Clickable: Story = {
  render: () => {
    const [clicked, setClicked] = useState<string | null>(null)

    return (
      <Stack spacing={2}>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Clicável"
            clickable
            onClick={() => setClicked('chip1')}
            color={clicked === 'chip1' ? 'primary' : 'default'}
          />
          <Chip
            label="Outlined Clicável"
            variant="outlined"
            clickable
            onClick={() => setClicked('chip2')}
            color={clicked === 'chip2' ? 'success' : 'default'}
          />
        </Stack>
        {clicked && (
          <Box
            sx={{
              p: 2,
              bgcolor: 'rgba(19, 81, 180, 0.08)',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'primary.main',
            }}
          >
            Último chip clicado: {clicked}
          </Box>
        )}
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips clicáveis Gov.br com feedback visual e handler de click.',
      },
    },
  },
}

export const Deletable: Story = {
  render: () => {
    const [chips, setChips] = useState(['React', 'TypeScript', 'MUI', 'GovBR-DS'])

    const handleDelete = (chipToDelete: string) => {
      setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }

    return (
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {chips.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              onDelete={() => handleDelete(chip)}
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>
        {chips.length === 0 && (
          <Box
            sx={{
              p: 2,
              bgcolor: 'rgba(22, 136, 33, 0.08)',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'success.main',
              textAlign: 'center',
            }}
          >
            Todos os chips foram removidos
          </Box>
        )}
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips Gov.br removíveis com ícone de delete e handler customizado.',
      },
    },
  },
}

export const CustomDeleteIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Done Icon"
        onClick={() => console.log('Clicked')}
        onDelete={() => console.log('Deleted with Done')}
        deleteIcon={<DoneIcon />}
        color="success"
      />
      <Chip
        label="Delete Icon"
        onClick={() => console.log('Clicked')}
        onDelete={() => console.log('Deleted with Trash')}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
        color="error"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips Gov.br com ícones de delete customizados em formato de pílula.',
      },
    },
  },
}

export const WithTooltip: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
      <Chip label="Tooltip Padrão" tooltip={true} />
      <Chip label="Tooltip Customizado" tooltip="Este é um tooltip customizado!" color="primary" />
      <Chip
        label="Este é um texto muito longo que será truncado automaticamente"
        maxLength={25}
        color="info"
      />
      <Chip
        label="Sem tooltip mesmo sendo longo"
        maxLength={20}
        tooltip={false}
        autoTruncate={true}
        variant="outlined"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstração de tooltips Gov.br: automático para texto truncado, sempre visível, ou customizado.',
      },
    },
  },
}

export const CustomBackgroundColor: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Azul Gov.br" backgroundColor="rgba(19, 81, 180, 0.12)" />
      <Chip label="Verde Sucesso" backgroundColor="rgba(22, 136, 33, 0.12)" />
      <Chip label="Amarelo Alerta" backgroundColor="rgba(255, 193, 7, 0.12)" />
      <Chip label="Vermelho Erro" backgroundColor="rgba(208, 79, 79, 0.12)" />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips com cores de fundo baseadas na paleta Gov.br Design System.',
      },
    },
  },
}

// ChipsList Stories
export const ListBasic: Story = {
  render: () => {
    const items: ChipItemData[] = [
      { label: 'React', icon: <LabelIcon /> },
      { label: 'TypeScript', tooltip: 'Linguagem tipada' },
      { label: 'Material-UI' },
      { label: 'GovBR Design System', tooltip: true },
      { label: 'Storybook' },
    ]

    return <ChipsList items={items} backgroundColor="rgba(19, 81, 180, 0.08)" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Lista básica de chips Gov.br com controle automático de overflow.',
      },
    },
  },
}

export const ListWithOverflow: Story = {
  render: () => {
    const items: ChipItemData[] = [
      { label: 'Tag 1', icon: <StarIcon /> },
      { label: 'Tag 2' },
      { label: 'Tag 3' },
      { label: 'Tag 4' },
      { label: 'Tag muito longa que vai ocupar bastante espaço' },
      { label: 'Tag 5' },
      { label: 'Tag 6' },
      { label: 'Tag 7' },
      { label: 'Tag 8' },
      { label: 'Tag 9' },
      { label: 'Tag 10' },
    ]

    return (
      <Box sx={{ maxWidth: 500 }}>
        <ChipsList
          items={items}
          maxLength={30}
          size="small"
          backgroundColor="rgba(22, 136, 33, 0.08)"
        />
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Lista Gov.br com muitos itens exibindo botão "+N" para mostrar chips ocultos. Clique para expandir.',
      },
    },
  },
}

export const ListWithScroll: Story = {
  render: () => {
    const items: ChipItemData[] = Array.from({ length: 20 }, (_, i) => ({
      label: `Item ${i + 1}`,
      value: i,
    }))

    return (
      <Box sx={{ maxWidth: 500 }}>
        <ChipsList
          items={items}
          displayAllChips
          maxHeight={200}
          backgroundColor="rgba(255, 193, 7, 0.08)"
        />
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Lista Gov.br com scroll automático quando ultrapassa a altura máxima.',
      },
    },
  },
}

export const ListCustomStyling: Story = {
  render: () => {
    const items: ChipItemData[] = [
      { label: 'Alta Prioridade', icon: <StarIcon /> },
      { label: 'Média Prioridade' },
      { label: 'Baixa Prioridade' },
      { label: 'Crítico', tooltip: 'Requer atenção imediata!' },
    ]

    return (
      <ChipsList
        items={items}
        backgroundColor="rgba(208, 79, 79, 0.08)"
        size="medium"
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
        }}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Lista Gov.br com estilização customizada aplicada ao container.',
      },
    },
  },
}

export const Playground: Story = {
  args: {
    label: 'Chip Customizável',
    size: 'medium',
    color: 'primary',
    variant: 'filled',
    clickable: false,
    tooltip: '',
    maxLength: 33,
    autoTruncate: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Playground interativo para testar todas as props do componente Chip Gov.br.',
      },
    },
  },
}
