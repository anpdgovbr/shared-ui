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
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRCard>

export const Playground: Story = {
  args: {
    strictgovbr: false,
    title: 'Título do Card',
    subheader: 'Subtítulo ou descrição',
    cardContent: (
      <p>
        Este é o playground do GovBRCard. Alterne o controle `strictgovbr` para ver a diferença
        entre o modo padrão (MUI) e o modo estrito (Gov.br DS).
      </p>
    ),
    footer: (
      <>
        <GovBRButton variant="contained" color="primary">
          Ação Principal
        </GovBRButton>
        <GovBRButton variant="outlined">Ação Secundária</GovBRButton>
      </>
    ),
  },
}

/**
 * ========================================
 * MODO ESTRITO (strictgovbr=true)
 * ========================================
 */

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

/**
 * ========================================
 * MODO PADRÃO (MUI) - strictgovbr=false
 * ========================================
 */

/**
 * Card MUI completo
 */
export const MUIComplete: Story = {
  args: {
    strictgovbr: false,
    header: 'Título do Card',
    cardContent: (
      <div>
        <p>
          Este é um card completo no modo padrão MUI. A estilização é aplicada automaticamente
          através do govbrTheme.ts.
        </p>
        <p>Todos os tokens CSS do Gov.br DS são aplicados via styleOverrides do tema.</p>
      </div>
    ),
    footer: (
      <>
        <GovBRButton variant="contained" color="primary">
          Ação Principal
        </GovBRButton>
        <GovBRButton variant="outlined">Ação Secundária</GovBRButton>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '**Modo Padrão (MUI)**: Card completo com header, conteúdo e footer. Usa MuiCardHeader, MuiCardContent e MuiCardActions estilizados pelo tema.',
      },
    },
  },
}

/**
 * Card MUI com altura fixa
 */
export const MUIFixedHeight: Story = {
  args: {
    strictgovbr: false,
    fixedHeight: true,
    customHeight: '200px',
    header: 'Card com Scroll',
    cardContent: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '**Modo Padrão (MUI)**: Card com altura fixa e scroll automático. A prop `fixedHeight` adiciona `maxHeight` e `overflowY: auto` no CardContent.',
      },
    },
  },
}

/**
 * Card MUI com largura máxima
 */
export const MUIWithMaxWidth: Story = {
  args: {
    strictgovbr: false,
    maxWidth: '400px',
    header: 'Card com Largura Limitada',
    cardContent: (
      <p>Este card tem largura máxima de 400px. Útil para controlar o layout em telas grandes.</p>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '**Modo Padrão (MUI)**: Card com largura máxima definida. A prop `maxWidth` é aplicada diretamente no MuiCard via sx.',
      },
    },
  },
}

/**
 * Card MUI desabilitado
 */
export const MUIDisabled: Story = {
  args: {
    strictgovbr: false,
    disabled: true,
    header: 'Card Desabilitado',
    cardContent: (
      <div>
        <p>Este card está desabilitado com opacidade reduzida e pointer-events bloqueados.</p>
        <GovBRButton variant="contained">Botão Inativo</GovBRButton>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '**Modo Padrão (MUI)**: Card desabilitado. Aplica `opacity: 0.6` e `pointerEvents: none` via sx.',
      },
    },
  },
}

/**
 * Card MUI com imagem e conteúdo completo
 */
export const MUIWithImageAndContent: Story = {
  args: {
    strictgovbr: false,
    image: 'https://picsum.photos/id/10/500/200',
    imageAlt: 'Paisagem com montanhas',
    header: 'Destino Turístico',
    cardContent: (
      <div>
        <p>Explore paisagens deslumbrantes e experimente a natureza em seu estado mais puro.</p>
        <p style={{ fontSize: '0.875rem', color: 'var(--gray-70, #666)' }}>
          Última atualização: Janeiro 2025
        </p>
      </div>
    ),
    footer: (
      <>
        <GovBRButton variant="contained" color="primary">
          Saiba Mais
        </GovBRButton>
        <GovBRButton variant="text">Compartilhar</GovBRButton>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '**Modo Padrão (MUI)**: Card completo com todos os elementos: imagem, header, conteúdo e ações. Demonstra a composição completa do componente MUI.',
      },
    },
  },
}

/**
 * Card MUI avançado com Avatar, Actions e Collapse
 */
export const MUIAdvanced: Story = {
  render: () => {
    const [expanded, setExpanded] = React.useState(false)

    return (
      <GovBRCard
        strictgovbr={false}
        maxWidth={400}
        image="https://picsum.photos/id/292/500/200"
        imageAlt="Paella dish"
        imageHeight={200}
        avatar={
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: 'var(--red-vivid-50, #e52207)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.25rem',
            }}
          >
            R
          </div>
        }
        action={
          <GovBRButton variant="text" size="small" aria-label="Mais opções">
            <MoreVertIcon fontSize="small" />
          </GovBRButton>
        }
        title="Camarão e Chorizo Paella"
        subheader="14 de setembro, 2016"
        cardContent={
          <p style={{ margin: 0, color: 'var(--gray-80, #555)' }}>
            Esta impressionante paella é um prato perfeito para festas e uma refeição divertida para
            cozinhar junto com seus convidados. Adicione 1 xícara de ervilhas congeladas junto com
            os mexilhões, se desejar.
          </p>
        }
        footer={
          <>
            <GovBRButton variant="text" size="small" aria-label="Favoritar">
              <FavoriteIcon fontSize="small" />
            </GovBRButton>
            <GovBRButton variant="text" size="small" aria-label="Compartilhar">
              <ShareIcon fontSize="small" />
            </GovBRButton>
            <GovBRButton
              variant="text"
              size="small"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? 'Ocultar detalhes' : 'Mostrar mais detalhes'}
              aria-expanded={expanded}
              sx={{ marginLeft: 'auto' }}
            >
              <ExpandMoreIcon
                fontSize="small"
                sx={{
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </GovBRButton>
          </>
        }
        footerProps={{ disableSpacing: true }}
        expandableContent={
          <div>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--color, #333)' }}>
              Modo de Preparo:
            </h4>

            <p style={{ marginBottom: '1rem', color: 'var(--gray-80, #555)' }}>
              Aqueça 1/2 xícara do caldo em uma panela até ferver, adicione açafrão e reserve por 10
              minutos.
            </p>

            <p style={{ marginBottom: '1rem', color: 'var(--gray-80, #555)' }}>
              Aqueça o óleo em uma paellera (14 a 16 polegadas) ou uma frigideira grande e funda em
              fogo médio-alto. Adicione o frango, camarão e chorizo, mexendo ocasionalmente até
              dourar levemente, 6 a 8 minutos.
            </p>

            <p style={{ marginBottom: '1rem', color: 'var(--gray-80, #555)' }}>
              Adicione o arroz e mexa muito suavemente para distribuir. Cubra com alcachofras e
              pimentões, e cozinhe sem mexer, até a maior parte do líquido ser absorvida, 15 a 18
              minutos.
            </p>

            <p style={{ margin: 0, color: 'var(--gray-80, #555)' }}>
              Deixe descansar fora do fogo por 10 minutos e então sirva. Bom apetite!
            </p>
          </div>
        }
        expanded={expanded}
      />
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
**Modo Padrão (MUI) - Card Avançado**: Demonstração completa de todas as funcionalidades:

Este exemplo é inspirado no card de receita do Material-UI, adaptado para o tema Gov.br DS.
        `,
      },
    },
  },
}
