import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import React from 'react'

import { GovBRButton } from '../govbr-button'
import { GovBRCard } from './index'

const meta: Meta<typeof GovBRCard> = {
  title: 'Components/GovBRCard',
  component: GovBRCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <div
          style={{
            padding: '2rem',
            backgroundColor: '#f6f6f6',
          }}
        >
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
    maxWidth: {
      control: 'text',
      description: 'Largura máxima do card (ex: 400px, 30rem, 100%)',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'undefined' },
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
 * Card com largura máxima definida
 */
export const WithMaxWidth: Story = {
  args: {
    strictgovbr: true,
    maxWidth: '400px',
    header: 'Card com Largura Máxima',
    cardContent: (
      <p>
        Este card tem uma largura máxima de 400px definida através da prop <code>maxWidth</code>.
        Experimente alterar o valor no painel de controles para testar diferentes larguras (ex:
        30rem, 100%, 500px).
      </p>
    ),
    footer: <GovBRButton strictgovbr>Ver mais</GovBRButton>,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Card com largura máxima controlada pela prop `maxWidth`. Aceita valores em px, rem, % ou outras unidades CSS. Útil para limitar a largura do card em layouts fluidos.',
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
  args: {
    strictgovbr: true,
  },
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
    controls: { disable: true },
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
  args: {
    strictgovbr: true,
  },
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
    controls: { disable: true },
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
  },
  render: () => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    const handleToggle = () => {
      setIsExpanded(!isExpanded)
    }

    return (
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sit dolor exercitationem
            asperiores voluptates tenetur consectetur error vero ut expedita, sapiente voluptate
            nulla esse! Veritatis aliquam consectetur quod harum expedita!
          </p>
        }
        footer={
          <>
            <div className="text-right">
              <button
                className="br-button circle"
                type="button"
                aria-label="Botão para expandir ou recolher conteúdos adicionais"
                aria-expanded={isExpanded}
                onClick={handleToggle}
              >
                {isExpanded ? (
                  <ExpandMoreIcon fontSize="small" style={{ transform: 'rotate(180deg)' }} />
                ) : (
                  <ExpandMoreIcon fontSize="small" />
                )}
              </button>
            </div>
            {isExpanded && (
              <div id="card-expanded">
                <div className="br-list mt-3">
                  <div className="br-item">
                    <div className="row">
                      <div className="col-auto">
                        <FavoriteBorderIcon fontSize="small" aria-hidden="true" />
                      </div>
                      <div className="col">
                        <p className="m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="br-divider"></span>
                  <div className="br-item">
                    <div className="row">
                      <div className="col-auto">
                        <FavoriteBorderIcon fontSize="small" aria-hidden="true" />
                      </div>
                      <div className="col">
                        <p className="m-0">
                          Nesciunt, laudantium ea officiis hic tempora velit aperiam nemo accusamus
                          nisi, eligendi ducimus! Incidunt ullam minima ratione amet sequi.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="br-divider"></span>
                  <div className="br-item">
                    <div className="row">
                      <div className="col-auto">
                        <FavoriteBorderIcon fontSize="small" aria-hidden="true" />
                      </div>
                      <div className="col">
                        <p className="m-0">Voluptates, iste recusandae.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        }
      />
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Card com funcionalidade de expansão/colapso no footer implementada com React state. O botão circular no canto inferior direito expande/colapsa uma lista de itens. A seta gira 180° quando expandido. Esta implementação usa `useState` do React para gerenciar o estado de visibilidade, permitindo funcionar em ambientes onde o JavaScript do Gov.br DS não está disponível (como Storybook).',
      },
    },
  },
}
