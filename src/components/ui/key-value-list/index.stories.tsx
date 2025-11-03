import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'

import { KeyValueList } from './index'

const meta: Meta<typeof KeyValueList> = {
  title: 'Components/Custom/KeyValueList',
  component: KeyValueList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ padding: 3, maxWidth: '900px' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3],
      description: 'Número de colunas no layout',
    },
    dense: {
      control: 'boolean',
      description: 'Aplica espaçamento reduzido',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## KeyValueList - Lista de Pares Chave-Valor

Componente customizado da ANPD para exibir informações estruturadas em formato chave-valor.

### Características Principais:
- 🎨 **Cores Adaptáveis**: Integrado ao tema selecionado (GovBR/ANPD)
- 📱 **Layout Responsivo**: Suporte a 1, 2 ou 3 colunas
- 🎯 **Densidade Configurável**: Modo denso para mais informações
- 📝 **Valores Flexíveis**: Aceita texto, números ou componentes React
- ♿ **Acessível**: Estrutura semântica com contraste adequado

### Casos de Uso:
- Detalhes de usuário/perfil
- Informações de processo
- Dados de formulário (modo leitura)
- Resumos e relatórios
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof KeyValueList>

/**
 * Lista básica de uma coluna com informações de usuário
 */
export const Default: Story = {
  args: {
    rows: [
      { label: 'Nome Completo', value: 'João Silva Santos' },
      { label: 'CPF', value: '123.456.789-00' },
      { label: 'Email', value: 'joao.silva@example.com' },
      { label: 'Telefone', value: '(61) 98765-4321' },
      { label: 'Cargo', value: 'Analista de Sistemas' },
      { label: 'Departamento', value: 'Tecnologia da Informação' },
    ],
    columns: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout de uma coluna, ideal para exibir informações detalhadas verticalmente.',
      },
    },
  },
}

/**
 * Layout de duas colunas para melhor aproveitamento de espaço
 */
export const TwoColumns: Story = {
  args: {
    rows: [
      { label: 'Processo', value: 'ANPD-2024-00123' },
      { label: 'Status', value: 'Em Análise' },
      { label: 'Data Abertura', value: '15/01/2024' },
      { label: 'Prazo', value: '15/02/2024' },
      { label: 'Responsável', value: 'Maria Santos' },
      { label: 'Prioridade', value: 'Alta' },
      { label: 'Categoria', value: 'Denúncia' },
      { label: 'Origem', value: 'E-Ouv' },
    ],
    columns: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout de duas colunas para melhor aproveitamento horizontal do espaço.',
      },
    },
  },
}

/**
 * Layout de três colunas para muitas informações
 */
export const ThreeColumns: Story = {
  args: {
    rows: [
      { label: 'ID', value: '1001' },
      { label: 'Tipo', value: 'Pessoa Física' },
      { label: 'UF', value: 'DF' },
      { label: 'CPF', value: '***.***.789-**' },
      { label: 'Situação', value: 'Ativo' },
      { label: 'Cidade', value: 'Brasília' },
      { label: 'Nome', value: 'João Silva' },
      { label: 'Cadastro', value: '01/2024' },
      { label: 'CEP', value: '70000-000' },
    ],
    columns: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout de três colunas para exibir muitas informações em telas grandes.',
      },
    },
  },
}

/**
 * Modo denso com espaçamento reduzido
 */
export const Dense: Story = {
  args: {
    rows: [
      { label: 'Protocolo', value: 'ANPD-2024-98765' },
      { label: 'Data/Hora', value: '03/11/2025 14:30' },
      { label: 'Tipo', value: 'Solicitação de Dados' },
      { label: 'Status', value: 'Pendente' },
      { label: 'Requerente', value: 'Ana Paula Oliveira' },
      { label: 'Email', value: 'ana.oliveira@example.com' },
      { label: 'Assunto', value: 'Acesso a dados pessoais' },
      { label: 'Prazo Legal', value: '15 dias úteis' },
    ],
    columns: 2,
    dense: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Versão compacta com espaçamento reduzido, ideal para dashboards.',
      },
    },
  },
}

/**
 * Valores como componentes React customizados
 */
export const WithComponents: Story = {
  render: () => (
    <KeyValueList
      rows={[
        {
          label: 'Status do Processo',
          value: (
            <Chip
              icon={<CheckCircleIcon />}
              label="Aprovado"
              color="success"
              size="small"
              variant="outlined"
            />
          ),
        },
        {
          label: 'Responsável',
          value: (
            <Link href="#" underline="hover">
              Maria Santos
            </Link>
          ),
        },
        {
          label: 'Tags',
          value: (
            <Stack direction="row" spacing={0.5} flexWrap="wrap">
              <Chip label="Urgente" size="small" color="error" />
              <Chip label="LGPD" size="small" color="primary" />
              <Chip label="Interno" size="small" color="default" />
            </Stack>
          ),
        },
        {
          label: 'Progresso',
          value: (
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                75% Concluído
              </Typography>
            </Box>
          ),
        },
      ]}
      columns={1}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstração de valores customizados usando componentes React (Chips, Links, etc).',
      },
    },
  },
}

/**
 * Exemplo de perfil de usuário completo
 */
export const UserProfile: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
        Informações do Usuário
      </Typography>
      <KeyValueList
        rows={[
          { label: 'Nome', value: 'Ana Carolina Mendes' },
          { label: 'CPF', value: '987.654.321-00' },
          { label: 'Email Institucional', value: 'ana.mendes@anpd.gov.br' },
          { label: 'Telefone', value: '(61) 3025-3030' },
          { label: 'Ramal', value: '3045' },
          { label: 'Cargo', value: 'Coordenadora-Geral' },
          { label: 'Lotação', value: 'CGTI - Coordenação-Geral de TI' },
          { label: 'Matrícula SIAPE', value: '1234567' },
          { label: 'Data de Admissão', value: '15/03/2020' },
          { label: 'Perfil de Acesso', value: 'Administrador' },
        ]}
        columns={2}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo real de perfil de usuário com informações funcionais.',
      },
    },
  },
}

/**
 * Exemplo de detalhes de processo
 */
export const ProcessDetails: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
        Detalhes do Processo
      </Typography>
      <KeyValueList
        rows={[
          { label: 'Número do Processo', value: 'ANPD-2024-00456-SEI' },
          { label: 'Assunto', value: 'Fiscalização de Tratamento de Dados' },
          {
            label: 'Status',
            value: <Chip label="Em Análise Técnica" color="warning" size="small" />,
          },
          { label: 'Data de Abertura', value: '10/10/2024' },
          { label: 'Prazo Final', value: '10/12/2024' },
          { label: 'Dias Restantes', value: '35 dias' },
          { label: 'Responsável', value: 'Carlos Eduardo Souza' },
          { label: 'Unidade', value: 'CRF - Coordenação de Regulação e Fiscalização' },
        ]}
        columns={2}
        dense
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de informações de processo administrativo com componentes integrados.',
      },
    },
  },
}

/**
 * Comparação: Dados compactos vs. expandidos
 */
export const Comparison: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Modo Normal (Padrão)
        </Typography>
        <KeyValueList
          rows={[
            { label: 'ID', value: '12345' },
            { label: 'Nome', value: 'João Silva' },
            { label: 'Status', value: 'Ativo' },
            { label: 'Última Atualização', value: '03/11/2025' },
          ]}
          columns={2}
          dense={false}
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Modo Denso (Compacto)
        </Typography>
        <KeyValueList
          rows={[
            { label: 'ID', value: '12345' },
            { label: 'Nome', value: 'João Silva' },
            { label: 'Status', value: 'Ativo' },
            { label: 'Última Atualização', value: '03/11/2025' },
          ]}
          columns={2}
          dense={true}
        />
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparação visual entre modo normal e modo denso.',
      },
    },
  },
}
