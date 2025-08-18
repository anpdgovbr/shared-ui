import type { HTMLAttributes } from 'react'

import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

/**
 * Define a estrutura de um item individual do Breadcrumb.
 */
export interface BreadcrumbItem {
  /** O texto a ser exibido para o item. */
  label: string
  /** O caminho (URL) para onde o item deve navegar. Se omitido, o item é tratado como a página atual (não clicável). */
  href?: string
}

export interface GovBRBreadcrumbProps extends HTMLAttributes<HTMLElement>, SharedUIComponentProps {
  /**
   * Lista de objetos `BreadcrumbItem` que compõem o caminho de navegação.
   */
  items: BreadcrumbItem[]
  /**
   * Função chamada quando o usuário clica em um item navegável.
   * Recebe o `href` do item clicado como argumento.
   */
  onNavigate: (href: string) => void
}
