'use client'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import classNames from 'classnames'
import React from 'react'

import type { GovBRBreadcrumbProps } from './types'

/**
 * Componente de Breadcrumb que implementa o Design System GovBR de duas formas:
 *
 * ## Modo Padrão (default)
 * Renderiza um `<Breadcrumbs>` do Material-UI, estilizado via `govbrTheme` para seguir
 * as diretrizes visuais do GovBR DS. Use este modo para a maioria dos casos.
 *
 * ### Uso Correto - Modo Padrão:
 * ```tsx
 * <GovBRBreadcrumb>
 *   <Link underline="hover" color="inherit" href="#">Início</Link>
 *   <Link underline="hover" color="inherit" href="#">Categoria</Link>
 *   <Typography color="text.primary">Página Atual</Typography>
 * </GovBRBreadcrumb>
 * ```
 *
 * ## Modo Estrito (`strictgovbr`)
 * Renderiza um elemento `<nav>` padrão e aplica as classes CSS do `@govbr-ds/core`
 * diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 *
 * ### Uso Correto - Modo Estrito:
 * ```tsx
 * <GovBRBreadcrumb
 *   strictgovbr
 *   links={[
 *     { label: 'Início', url: '#' },
 *     { label: 'Categoria', url: '#' },
 *     { label: 'Página Atual', url: '#' }
 *   ]}
 * />
 * ```
 *
 * @param props - Propriedades do componente baseadas no modo selecionado
 */
export function GovBRBreadcrumb(props: Readonly<GovBRBreadcrumbProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    const { links, className, ...rest } = props
    const cleanedRest = { ...(rest as Record<string, unknown>) }
    delete cleanedRest.strictgovbr

    return (
      <nav
        className={classNames('br-breadcrumb', className)}
        aria-label="Breadcrumb"
        {...cleanedRest}
      >
        <ol className="crumb-list">
          {links.map((link) => (
            <li className="crumb" key={`${link.url}-${link.label}`}>
              {link.url === '#' || !link.url ? (
                <span>{link.label}</span>
              ) : (
                <a href={link.url}>{link.label}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  const { children, ...rest } = props

  return <Breadcrumbs {...rest}>{children}</Breadcrumbs>
}
