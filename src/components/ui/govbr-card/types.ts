import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import type { CardProps } from '@mui/material/Card'
import type { CardActionsProps } from '@mui/material/CardActions'
import type { CardHeaderProps } from '@mui/material/CardHeader'

/**
 * Props do componente GovBRCard
 *
 * @extends CardProps - Props do Card do MUI (omitindo 'content' e 'title' para evitar conflito)
 * @extends SharedUIComponentProps - Props compartilhadas (strictgovbr)
 */
export interface GovBRCardProps
  extends Omit<CardProps, 'content' | 'title'>,
    SharedUIComponentProps {
  /**
   * Conteúdo do cabeçalho do card (modo simplificado)
   * Use `title`, `subheader`, `avatar` e `action` para controle detalhado
   */
  header?: React.ReactNode

  /**
   * Título do card (usado no CardHeader)
   * @note Apenas modo padrão (MUI). No modo estrito, use a prop `header`
   */
  title?: React.ReactNode

  /**
   * Subtítulo do card (usado no CardHeader)
   * @note Apenas modo padrão (MUI). No modo estrito, use a prop `header`
   */
  subheader?: React.ReactNode

  /**
   * Avatar do card (usado no CardHeader)
   * @example <Avatar>R</Avatar>
   * @note Apenas modo padrão (MUI). No modo estrito, inclua no `header`
   */
  avatar?: React.ReactNode

  /**
   * Ação do header (botão de menu, etc)
   * @example <IconButton><MoreVertIcon /></IconButton>
   * @note Apenas modo padrão (MUI). No modo estrito, inclua no `header`
   */
  action?: React.ReactNode

  /**
   * Props adicionais para o CardHeader do MUI
   * @note Apenas modo padrão (MUI)
   */
  headerProps?: Omit<CardHeaderProps, 'title' | 'subheader' | 'avatar' | 'action'>

  /**
   * Conteúdo principal do card
   */
  cardContent?: React.ReactNode

  /**
   * Conteúdo do rodapé do card
   */
  footer?: React.ReactNode

  /**
   * Props adicionais para o CardActions do MUI
   * @note Apenas modo padrão (MUI)
   */
  footerProps?: CardActionsProps

  /**
   * Conteúdo expansível (collapse)
   * @note Apenas modo padrão (MUI)
   */
  expandableContent?: React.ReactNode

  /**
   * Controla se o conteúdo expansível está expandido
   * @default false
   * @note Apenas modo padrão (MUI)
   */
  expanded?: boolean

  /**
   * URL da imagem do card
   */
  image?: string

  /**
   * Texto alternativo da imagem
   */
  imageAlt?: string

  /**
   * Altura da imagem em pixels
   * @default 194
   * @note Apenas modo padrão (MUI). No modo estrito, controle via CSS
   */
  imageHeight?: number | string

  /**
   * Define altura fixa com scroll no conteúdo
   * @default false
   */
  fixedHeight?: boolean

  /**
   * Altura customizada quando fixedHeight=true
   * @default '250px'
   */
  customHeight?: string

  /**
   * Habilita drag and drop (apenas modo estrito)
   * @default false
   */
  draggable?: boolean

  /**
   * Desabilita o card
   * @default false
   */
  disabled?: boolean

  /**
   * Largura máxima do card
   * @example '400px', '100%', '30rem'
   */
  maxWidth?: string | number
}
