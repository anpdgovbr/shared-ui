import React from 'react'
import classNames from 'classnames'
import type { GovBRBreadcrumbProps } from './types'

export function GovBRBreadcrumb({ items, onNavigate, className, ...props }: GovBRBreadcrumbProps) {
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
