import type { SharedUIComponentProps } from '../../types/SharedUIComponentProps.js';
import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface GovBRBreadcrumbProps extends SharedUIComponentProps {
  items: BreadcrumbItem[];
  onNavigate: (href: string) => void;
}
export const GovBRBreadcrumb: React.FC<GovBRBreadcrumbProps> = ({ items, onNavigate }) => {
  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault(); // Previne a navegação padrão do navegador
    onNavigate(href);      // Delega a ação para a função recebida por props
  };

  return (
    <nav className="br-breadcrumb" aria-label="Breadcrumb">
      <ul className="crumb-list">
        {items.map((item, index) => (
          <li className="crumb" key={index}>
            {item.href ? (
              <a
                className="crumb-link"
                href={item.href}
                onClick={(e) => handleItemClick(e, item.href as string)}
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
  );
};