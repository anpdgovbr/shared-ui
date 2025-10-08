import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'

import { GovBRButton } from '../govbr-button'
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
  parameters: {
    docs: {
      description: {
        story:
          'Card básico com conteúdo simples. Demonstra o uso mínimo do componente sem header ou footer.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          'Card contendo apenas uma imagem. Útil para galerias de fotos ou displays visuais minimalistas.',
      },
    },
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
            <img src="https://picsum.photos/id/823/400" alt="Avatar Maria Amorim" />
          </span>
        </span>
        <div className="ml-3">
          <div className="text-weight-semi-bold text-up-02">Maria Amorim</div>
          <div>UX Designer</div>
        </div>
        <div className="ml-auto">
          <GovBRButton strictgovbr circle size="small" className="default" aria-label="Mais opções">
            <MoreVertIcon fontSize="small" />
          </GovBRButton>
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
          <GovBRButton strictgovbr>Button</GovBRButton>
        </div>
        <div className="ml-auto">
          <GovBRButton strictgovbr circle size="small" className="default" aria-label="Favoritar">
            <FavoriteIcon fontSize="small" />
          </GovBRButton>
          <GovBRButton
            strictgovbr
            circle
            size="small"
            className="default"
            aria-label="Compartilhar"
          >
            <ShareIcon fontSize="small" />
          </GovBRButton>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Card completo demonstrando todas as seções (header com avatar, conteúdo e footer com ações). Usa componentes GovBRButton para interatividade.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          'Card com altura fixa e scroll automático. Útil quando o conteúdo pode variar mas o card precisa manter altura consistente. A área de conteúdo recebe `tabindex="0"` para acessibilidade ao scroll via teclado.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          'Card com efeito visual ao passar o mouse. Útil para indicar que o card é clicável ou interativo.',
      },
    },
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
    footer: <GovBRButton strictgovbr>Ação</GovBRButton>,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Card com aparência invertida (modo escuro). Útil para criar contraste visual ou destacar conteúdo específico.',
      },
    },
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
        <GovBRButton strictgovbr>Botão Desabilitado</GovBRButton>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Card no estado desabilitado. Bloqueia todas as interações e aplica opacidade reduzida. Elementos interativos recebem atributo `disabled` automaticamente.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          'Card com funcionalidade de drag and drop habilitada. Permite arrastar e reorganizar cards em interfaces dinâmicas.',
      },
    },
  },
}

/**
 * Card simples e completo lado a lado (exemplo oficial Gov.br DS)
 */
export const SimplesECompleto: Story = {
  render: () => (
    <div className="row">
      <div className="col-sm-5 col-md-6 col-lg-4">
        <GovBRCard
          strictgovbr
          image="https://picsum.photos/id/0/500"
          imageAlt="Imagem de exemplo"
        />
      </div>
      <div className="col-sm-6 col-md-6 col-lg-5">
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
                <GovBRButton
                  strictgovbr
                  circle
                  size="small"
                  className="default"
                  aria-label="Mais opções"
                >
                  <MoreVertIcon fontSize="small" />
                </GovBRButton>
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
                <GovBRButton strictgovbr>Button</GovBRButton>
              </div>
              <div className="ml-auto">
                <GovBRButton
                  strictgovbr
                  circle
                  size="small"
                  className="default"
                  aria-label="Favoritar"
                >
                  <FavoriteIcon fontSize="small" />
                </GovBRButton>
                <GovBRButton
                  strictgovbr
                  circle
                  size="small"
                  className="default"
                  aria-label="Compartilhar"
                >
                  <ShareIcon fontSize="small" />
                </GovBRButton>
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
          'Exemplo oficial do Gov.br DS mostrando um card simples com imagem e um card completo com header, avatar, conteúdo e footer lado a lado. Demonstra layout responsivo usando o sistema de grid (col-sm, col-md, col-lg) e componentes GovBRButton para ações interativas.',
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

/**
 * Card com expansão/colapso - baseado no exemplo oficial do Gov.br DS
 */
export const WithCollapse: Story = {
  args: {
    strictgovbr: true,
    header: (
      <div className="d-flex">
        <span className="br-avatar" title="Fulano da Silva">
          <span className="content bg-orange-vivid-30 text-pure-0">F</span>
        </span>
        <div className="ml-3">
          <div className="text-weight-semi-bold text-up-02">Fulano da Silva</div>
          <div>Interlocutor</div>
        </div>
        <div className="ml-auto">
          <GovBRButton strictgovbr circle size="small" className="default" aria-label="Mais opções">
            <MoreVertIcon fontSize="small" />
          </GovBRButton>
        </div>
      </div>
    ),
    cardContent: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ipsum eu odio
        consequat congue vitae vel lorem. Sed vulputate mi quis euismod venenatis.
      </p>
    ),
    footer: (
      <>
        <div className="d-flex">
          <div className="ml-auto">
            <GovBRButton
              strictgovbr
              circle
              size="small"
              className="default"
              data-toggle="collapse"
              data-target="card-random"
              aria-controls="card-random"
              aria-label="Expandir"
            >
              <ExpandMoreIcon fontSize="small" />
            </GovBRButton>
          </div>
        </div>
        <div id="card-random" hidden>
          <div className="br-list">
            <button className="br-item" type="button">
              <FavoriteBorderIcon fontSize="small" />
              Curtir
            </button>
            <span className="br-divider"></span>
            <button className="br-item" type="button">
              <ShareIcon fontSize="small" />
              Compartilhar
            </button>
            <span className="br-divider"></span>
            <button className="br-item" type="button">
              <FavoriteIcon fontSize="small" />
              Salvar
            </button>
          </div>
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Card com funcionalidade de expansão/colapso no footer. Utiliza `data-toggle="collapse"` e `data-target` para controlar a visibilidade de conteúdo adicional com uma lista de ações (br-list). Os botões circulares usam o componente GovBRButton com as props `strictgovbr`, `circle` e `size="small"`.',
      },
    },
  },
}
