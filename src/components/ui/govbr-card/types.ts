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
   */
  title?: React.ReactNode

  /**
   * Subtítulo do card (usado no CardHeader)
   */
  subheader?: React.ReactNode

  /**
   * Avatar do card (usado no CardHeader)
   * @example <Avatar>R</Avatar>
   */
  avatar?: React.ReactNode

  /**
   * Ação do header (botão de menu, etc)
   * @example <IconButton><MoreVertIcon /></IconButton>
   */
  action?: React.ReactNode

  /**
   * Props adicionais para o CardHeader do MUI
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
   */
  footerProps?: CardActionsProps

  /**
   * Conteúdo expansível (collapse)
   */
  expandableContent?: React.ReactNode

  /**
   * Controla se o conteúdo expansível está expandido
   * @default false
   */
  expanded?: boolean

  /**
   * Callback quando o estado de expansão muda
   */
  onExpandChange?: (expanded: boolean) => void

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
   * Habilita efeito hover
   * @default false
   */
  hover?: boolean

  /**
   * Habilita drag and drop
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

  /**
   * ID do card para drag and drop
   */
  id?: string
}
