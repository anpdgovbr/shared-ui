import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import type { SxProps, Theme } from '@mui/material/styles'
import type { PropsWithChildren } from 'react'

/**
 * Props do componente Section
 *
 * Componente de seção flexível que pode conter título, subtitle, actions e conteúdo.
 * Suporta modo colapsável e customizações visuais.
 */
export interface SectionProps extends PropsWithChildren, SharedUIComponentProps {
  /**
   * Título principal da seção (renderizado como h2)
   */
  title?: string

  /**
   * Subtítulo ou informação adicional exibida ao lado do título
   */
  subtitle?: string

  /**
   * Elementos de ação (botões, links) exibidos no header
   */
  actions?: React.ReactNode

  /**
   * Elevação do Paper (sombra)
   * @default 0
   */
  elevation?: number

  /**
   * Se true, a seção pode ser expandida/colapsada
   * @default false
   */
  collapsible?: boolean

  /**
   * Estado inicial de expansão (quando collapsible é true)
   * @default true
   */
  defaultExpanded?: boolean

  /**
   * Estilos customizados aplicados ao Paper raiz
   */
  sx?: SxProps<Theme>

  /**
   * ID para acessibilidade e ancoragem
   */
  id?: string

  /**
   * Se true, adiciona divider entre header e conteúdo
   * @default false
   */
  divider?: boolean

  /**
   * Tooltip exibido ao passar mouse sobre o título
   */
  tooltip?: string
}

/**
 * Props internas do SectionHeader
 * (não exportado para consumidores externos)
 */
export interface SectionHeaderProps {
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  collapsible: boolean
  isExpanded: boolean
  onToggle: () => void
  sectionId?: string
  divider: boolean
  tooltip?: string
}
