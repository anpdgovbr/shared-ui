import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'

import { GovBRCard } from './index'

const meta: Meta<typeof GovBRCard> = {
  title: 'Components/GovBRCard',
  component: GovBRCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <div style={{ padding: '2rem', backgroundColor: '#f6f6f6' }}>
          <Story />
        </div>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    strictgovbr: {
      control: 'boolean',
      description:
        'Ativa modo estrito com renderização HTML puro e classes CSS oficiais do GovBR-DS',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },
    header: {
      control: 'text',
      description: 'Conteúdo do cabeçalho do card',
      table: {
        category: 'Conteúdo',
      },
    },
    cardContent: {
      control: 'text',
      description: 'Conteúdo principal do card',
      table: {
        category: 'Conteúdo',
      },
    },
    footer: {
      control: 'text',
      description: 'Conteúdo do rodapé do card',
      table: {
        category: 'Conteúdo',
      },
    },
    image: {
      control: 'text',
      description: 'URL da imagem do card',
      table: {
        category: 'Mídia',
      },
    },
    imageAlt: {
      control: 'text',
      description: 'Texto alternativo da imagem',
      table: {
        category: 'Mídia',
        defaultValue: { summary: 'Imagem do card' },
      },
    },
    fixedHeight: {
      control: 'boolean',
      description: 'Define altura fixa com scroll no conteúdo',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'false' },
      },
    },
    customHeight: {
      control: 'text',
      description: 'Altura customizada quando fixedHeight=true',
      table: {
        category: 'Aparência',
        defaultValue: { summary: '250px' },
      },
    },
    hover: {
      control: 'boolean',
      description: 'Habilita efeito hover',
      table: {
        category: 'Interação',
        defaultValue: { summary: 'false' },
      },
    },
    inverted: {
      control: 'boolean',
      description: 'Modo invertido/escuro',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'false' },
      },
    },
    draggable: {
      control: 'boolean',
      description: 'Habilita drag and drop',
      table: {
        category: 'Interação',
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o card',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## 🎴 GovBRCard

Card seguindo os padrões do **Gov.br Design System**.

### 📋 Características Principais

- ✅ **Modo Estrito**: Renderização HTML pura com classes CSS oficiais do Gov.br DS
- 🎨 **Variantes**: Suporta header, content, footer e imagem
- 🔄 **Interativo**: Suporte para hover, drag and drop
- 📏 **Altura Fixa**: Scroll automático quando necessário
- 🌗 **Modo Invertido**: Suporte para tema escuro
- ♿ **Acessível**: Estados disabled com aria-hidden

### 📦 Importação

\`\`\`tsx
import { GovBRCard } from '@anpdgovbr/shared-ui'
\`\`\`

### 🎯 Quando Usar

- Exibir informações agrupadas em formato de cartão
- Criar layouts de grid com cards
- Apresentar conteúdo com imagem, texto e ações
- Cards interativos com drag and drop

### ⚙️ Funcionalidades

#### Modo Estrito (strictgovbr)
Renderiza HTML puro com classes do Gov.br DS (.br-card)

#### Altura Fixa
Quando \`fixedHeight=true\`, o conteúdo tem altura máxima com scroll

#### Drag and Drop
Quando \`draggable=true\`, o card pode ser arrastado

#### Estados
- \`hover\`: Efeito visual ao passar o mouse
- \`inverted\`: Tema escuro
- \`disabled\`: Desabilita interações
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRCard>

/**
 * Card básico apenas com conteúdo
 */
export const Default: Story = {
  args: {
    strictgovbr: true,
    children: (
      <div className="card-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
    ),
  },
}

/**
 * Card apenas com imagem
 */
export const ImageOnly: Story = {
  args: {
    strictgovbr: true,
    image: 'https://picsum.photos/id/0/500',
    imageAlt: 'Imagem de exemplo',
  },
}

/**
 * Card completo com header, avatar, conteúdo e footer
 */
export const Complete: Story = {
  args: {
    strictgovbr: true,
    header: (
      <div className="d-flex">
        <span className="br-avatar mt-1" title="Maria Amorim">
          <span className="content">
            <img src="https://picsum.photos/id/823/400" alt="Avatar" />
          </span>
        </span>
        <div className="ml-3">
          <div className="text-weight-semi-bold text-up-02">Maria Amorim</div>
          <div>UX Designer</div>
        </div>
        <div className="ml-auto">
          <button className="br-button circle" type="button" aria-label="Ícone ilustrativo">
            <MoreVertIcon fontSize="small" />
          </button>
        </div>
      </div>
    ),
    cardContent: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro
        atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat
        recusandae harum? Assumenda.
      </p>
    ),
    footer: (
      <div className="d-flex">
        <div>
          <button className="br-button" type="button">
            Button
          </button>
        </div>
        <div className="ml-auto">
          <button className="br-button circle" type="button" aria-label="Favoritar">
            <FavoriteIcon fontSize="small" />
          </button>
          <button className="br-button circle" type="button" aria-label="Compartilhar">
            <ShareIcon fontSize="small" />
          </button>
        </div>
      </div>
    ),
  },
}

/**
 * Card com altura fixa e scroll
 */
export const FixedHeight: Story = {
  args: {
    strictgovbr: true,
    fixedHeight: true,
    customHeight: '200px',
    header: <h3>Card com Altura Fixa</h3>,
    cardContent: (
      <div>
        <p>Este card tem altura fixa e scroll automático quando o conteúdo excede o limite.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>
    ),
  },
}

/**
 * Card com efeito hover
 */
export const WithHover: Story = {
  args: {
    strictgovbr: true,
    hover: true,
    cardContent: (
      <div>
        <h4>Card Interativo</h4>
        <p>Passe o mouse sobre este card para ver o efeito hover.</p>
      </div>
    ),
  },
}

/**
 * Card no modo invertido/escuro
 */
export const Inverted: Story = {
  args: {
    strictgovbr: true,
    inverted: true,
    header: <h3>Card Invertido</h3>,
    cardContent: <p>Este card usa o modo escuro do Gov.br Design System.</p>,
    footer: (
      <button className="br-button" type="button">
        Ação
      </button>
    ),
  },
}

/**
 * Card desabilitado
 */
export const Disabled: Story = {
  args: {
    strictgovbr: true,
    disabled: true,
    header: <h3>Card Desabilitado</h3>,
    cardContent: (
      <div>
        <p>Este card está desabilitado. Todos os elementos interativos são bloqueados.</p>
        <button className="br-button" type="button">
          Botão Desabilitado
        </button>
      </div>
    ),
  },
}

/**
 * Card com drag and drop
 */
export const Draggable: Story = {
  args: {
    strictgovbr: true,
    draggable: true,
    id: 'draggable-card-1',
    cardContent: (
      <div>
        <h4>Card Arrastável</h4>
        <p>Você pode arrastar este card. Útil para interfaces de reorganização.</p>
      </div>
    ),
  },
}

/**
 * Card simples e completo lado a lado (exemplo oficial Gov.br DS)
 */
export const SimplesECompleto: Story = {
  render: () => (
    <div className="row">
      <div className="col-sm-5 col-md-6 col-lg-3">
        <GovBRCard
          strictgovbr
          image="https://picsum.photos/id/0/500"
          imageAlt="Imagem de exemplo"
        />
      </div>
      <div className="col-sm-6 col-md-5 col-lg-3">
        <GovBRCard
          strictgovbr
          header={
            <div className="d-flex">
              <span className="br-avatar mt-1" title="Maria Amorim">
                <span className="content">
                  <img src="https://picsum.photos/id/823/400" alt="Avatar Maria Amorim" />
                </span>
              </span>
              <div className="ml-3">
                <div className="text-weight-semi-bold text-up-02">Maria Amorim</div>
                <div>UX Designer</div>
              </div>
              <div className="ml-auto">
                <button className="br-button circle" type="button" aria-label="Ícone ilustrativo">
                  <MoreVertIcon fontSize="small" />
                </button>
              </div>
            </div>
          }
          cardContent={
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam
              porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et
              fugiat recusandae harum? Assumenda.
            </p>
          }
          footer={
            <div className="d-flex">
              <div>
                <button className="br-button" type="button">
                  Button
                </button>
              </div>
              <div className="ml-auto">
                <button className="br-button circle" type="button" aria-label="Favoritar">
                  <FavoriteIcon fontSize="small" />
                </button>
                <button className="br-button circle" type="button" aria-label="Compartilhar">
                  <ShareIcon fontSize="small" />
                </button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo oficial do Gov.br DS mostrando um card simples com imagem e um card completo com header, avatar, conteúdo e footer lado a lado. Usa ícones do Material-UI.',
      },
    },
  },
}

/**
 * Grid de cards - exemplo de integração
 */
export const GridLayout: Story = {
  render: () => (
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <GovBRCard strictgovbr image="https://picsum.photos/id/10/500" imageAlt="Imagem 1" />
      </div>
      <div className="col-sm-6 col-md-4">
        <GovBRCard strictgovbr image="https://picsum.photos/id/20/500" imageAlt="Imagem 2" />
      </div>
      <div className="col-sm-6 col-md-4">
        <GovBRCard strictgovbr image="https://picsum.photos/id/30/500" imageAlt="Imagem 3" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de grid com múltiplos cards usando o sistema de grid do Gov.br DS.',
      },
    },
  },
}
