import React from 'react'
import type { HTMLAttributes } from 'react'
import classNames from 'classnames'
import type { SharedUIComponentProps } from '../../types/SharedUIComponentProps'

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

export const GovBRBreadcrumb: React.FC<GovBRBreadcrumbProps> = ({
  items,
  onNavigate,
  className,
  ...props
}) => {
  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <nav className={classNames('br-breadcrumb', className)} aria-label="Breadcrumb" {...props}>
      <ul className="crumb-list">
        {items.map((item, index) => (
          <li className="crumb" key={index}>
            {item.href ? (
              <a
                className="crumb-link"
                href={item.href}
                onClick={e => handleItemClick(e, item.href as string)}
              >
                {item.label}
              </a>
            ) : (
              <span className="crumb-active" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
