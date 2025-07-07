import type { SharedUIComponentProps } from '../../types/SharedUIComponentProps.js'
import React from 'react'

// Define a estrutura de cada item individual do Breadcrumb
export interface BreadcrumbItem {
  label: string
  href?: string
}

// Define as props do componente principal
export interface GovBRBreadcrumbProps extends SharedUIComponentProps {
  /** Lista de itens que compõem o caminho de navegação. */
  items: BreadcrumbItem[]
  /** Função chamada quando o usuário clica em um item navegável. */
  onNavigate: (href: string) => void
}

export const GovBRBreadcrumb: React.FC<GovBRBreadcrumbProps> = ({ items, onNavigate }) => {
  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault() // Previne a navegação padrão do navegador
    onNavigate(href) // Delega a ação para a função recebida por props
  }

  return (
    <nav className="br-breadcrumb" aria-label="Breadcrumb">
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
