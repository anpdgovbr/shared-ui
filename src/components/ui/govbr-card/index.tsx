'use client'

import MuiCard from '@mui/material/Card'
import MuiCardActions from '@mui/material/CardActions'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardHeader from '@mui/material/CardHeader'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiCollapse from '@mui/material/Collapse'
import classnames from 'classnames'
import React, { useEffect, useRef } from 'react'

import type { GovBRCardProps } from './types'

/**
 * Componente GovBRCard - Arquitetura Híbrida
 *
 * Card que suporta dois modos de renderização:
 *
 * **Modo Padrão (strictgovbr=false)**: Componente MUI estilizado automaticamente
 * pelo govbrTheme.ts usando tokens CSS do Gov.br Design System
 *
 * **Modo Estrito (strictgovbr=true)**: HTML puro com classes CSS oficiais
 * do Gov.br Design System para máxima fidelidade
 *
 * @example
 * // Modo Padrão - MUI com tema Gov.br
 * <GovBRCard
 *   header="Título"
 *   cardContent={<p>Conteúdo</p>}
 *   footer={<button>Ação</button>}
 * />
 *
 * @example
 * // Modo Estrito - HTML puro Gov.br DS
 * <GovBRCard
 *   strictgovbr
 *   header={<div>Cabeçalho</div>}
 *   cardContent={<p>Conteúdo principal</p>}
 *   footer={<div>Rodapé</div>}
 * />
 *
 * @example
 * // Card com todas as funcionalidades
 * <GovBRCard
 *   image="https://example.com/image.jpg"
 *   imageAlt="Descrição"
 *   header="Título do Card"
 *   cardContent={<p>Conteúdo rico</p>}
 *   footer={<button>Saiba mais</button>}
 *   fixedHeight
 *   customHeight="300px"
 *   hover
 *   maxWidth="400px"
 * />
 */
export const GovBRCard: React.FC<Readonly<GovBRCardProps>> = ({
  strictgovbr = false,
  className,
  children,
  header,
  title,
  subheader,
  avatar,
  action,
  headerProps,
  cardContent,
  footer,
  footerProps,
  expandableContent,
  expanded: controlledExpanded,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onExpandChange, // Callback público para controle externo do estado de expansão
  image,
  imageAlt = 'Imagem do card',
  imageHeight = 194,
  fixedHeight = false,
  customHeight = '250px',
  hover = false,
  draggable = false,
  disabled = false,
  maxWidth,
  id,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  // Determina se está controlado externamente ou usa estado interno
  const isControlled = controlledExpanded !== undefined
  const isExpanded = isControlled ? controlledExpanded : false

  // Modo Estrito: HTML puro com classes Gov.br DS
  if (strictgovbr) {
    const cardClasses = classnames('br-card', className, {
      'h-fixed': fixedHeight,
      hover: hover,
      disabled: disabled,
    })

    // Configurar altura customizada quando fixedHeight está ativo
    const cardStyle = {
      ...style,
      ...(maxWidth && { maxWidth }),
      ...(fixedHeight &&
        customHeight !== '250px' &&
        ({
          '--card-height-fixed': customHeight,
        } as React.CSSProperties)),
    }

    // Comportamento de drag and drop
    useEffect(() => {
      if (!draggable || !cardRef.current) return

      const handleDragStart = (event: DragEvent) => {
        if (!cardRef.current) return

        event.stopPropagation()
        if (event.dataTransfer) {
          const cardId = cardRef.current.getAttribute('id') || 'card'
          event.dataTransfer.setData('text/plain', cardId)
          event.dataTransfer.dropEffect = 'move'
        }
      }

      const card = cardRef.current

      // Prevenir drag de imagens e links
      const images = card.querySelectorAll('img')
      const links = card.querySelectorAll('a')

      images.forEach((img) => img.setAttribute('draggable', 'false'))
      links.forEach((link) => link.setAttribute('draggable', 'false'))

      card.addEventListener('dragstart', handleDragStart as EventListener)

      return () => {
        card.removeEventListener('dragstart', handleDragStart as EventListener)
      }
    }, [draggable])

    // Desabilitar interatividade quando disabled
    useEffect(() => {
      if (!disabled || !cardRef.current) return

      const card = cardRef.current
      card.setAttribute('aria-hidden', 'true')

      const interactiveElements = card.querySelectorAll<
        HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >('button, input, select, textarea')

      interactiveElements.forEach((element) => {
        element.setAttribute('disabled', 'disabled')
      })

      return () => {
        card.removeAttribute('aria-hidden')
        interactiveElements.forEach((element) => {
          element.removeAttribute('disabled')
        })
      }
    }, [disabled])

    return (
      <div
        ref={cardRef}
        className={cardClasses}
        style={cardStyle}
        id={id}
        draggable={draggable}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {/* Imagem do card */}
        {image && (
          <div className="card-content">
            <img src={image} alt={imageAlt} />
          </div>
        )}

        {/* Header do card */}
        {header && <div className="card-header">{header}</div>}

        {/* Conteúdo do card */}
        {(cardContent || (!header && !footer && !image && children)) && (
          <div className="card-content">{cardContent || children}</div>
        )}

        {/* Footer do card */}
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    )
  }

  // Modo Padrão: MUI estilizado pelo govbrTheme.ts
  const cardStyle = {
    ...style,
    ...(maxWidth && { maxWidth }),
    ...(fixedHeight && {
      '& .MuiCardContent-root': {
        maxHeight: customHeight,
        overflowY: 'auto',
      },
    }),
    ...(hover && {
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      },
    }),
    ...(disabled && {
      opacity: 0.6,
      pointerEvents: 'none',
    }),
  }

  // Determina se deve renderizar o CardHeader
  const shouldRenderCardHeader = title || subheader || avatar || action || header

  return (
    <MuiCard className={className} sx={cardStyle} id={id} {...props}>
      {/* Imagem do card */}
      {image && (
        <MuiCardMedia
          component="img"
          image={image}
          alt={imageAlt}
          sx={{
            height: imageHeight,
            objectFit: 'cover',
          }}
        />
      )}

      {/* Header do card */}
      {shouldRenderCardHeader && (
        <MuiCardHeader
          avatar={avatar}
          action={action}
          title={title || header}
          subheader={subheader}
          {...headerProps}
        />
      )}

      {/* Conteúdo do card */}
      {(cardContent || (!shouldRenderCardHeader && !footer && !image && children)) && (
        <MuiCardContent>{cardContent || children}</MuiCardContent>
      )}

      {/* Footer do card */}
      {footer && <MuiCardActions {...footerProps}>{footer}</MuiCardActions>}

      {/* Conteúdo expansível */}
      {expandableContent && (
        <MuiCollapse in={isExpanded} timeout="auto" unmountOnExit>
          <MuiCardContent>{expandableContent}</MuiCardContent>
        </MuiCollapse>
      )}
    </MuiCard>
  )
}

// Exports nomeados para tree shaking
export type { GovBRCardProps } from './types'
