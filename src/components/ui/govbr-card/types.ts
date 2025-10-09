import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import type { CardProps } from '@mui/material/Card'

/**
 * Props do componente GovBRCard
 *
 * @extends CardProps - Props do Card do MUI (omitindo 'content' para evitar conflito)
 * @extends SharedUIComponentProps - Props compartilhadas (strictgovbr)
 */
export interface GovBRCardProps extends Omit<CardProps, 'content'>, SharedUIComponentProps {
  /**
   * Conteúdo do cabeçalho do card
   */
  header?: React.ReactNode

  /**
   * Conteúdo principal do card
   */
  cardContent?: React.ReactNode

  /**
   * Conteúdo do rodapé do card
   */
  footer?: React.ReactNode

  /**
   * URL da imagem do card
   */
  image?: string

  /**
   * Texto alternativo da imagem
   */
  imageAlt?: string

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
   * Modo invertido/escuro
   * @default false
   */
  inverted?: boolean

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
