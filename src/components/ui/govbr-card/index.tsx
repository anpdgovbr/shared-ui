'use client'

import classnames from 'classnames'
import React, { useEffect, useRef } from 'react'

import type { GovBRCardProps } from './types'

/**
 * Componente GovBRCard
 *
 * Card seguindo padrões do Gov.br Design System
 *
 * @example
 * // Modo Estrito (HTML puro com classes Gov.br DS)
 * <GovBRCard strictgovbr>
 *   <div>Conteúdo do card</div>
 * </GovBRCard>
 *
 * @example
 * // Card com header, content e footer
 * <GovBRCard
 *   strictgovbr
 *   header={<div>Cabeçalho</div>}
 *   cardContent={<p>Conteúdo principal</p>}
 *   footer={<div>Rodapé</div>}
 * />
 */
export const GovBRCard: React.FC<Readonly<GovBRCardProps>> = ({
  strictgovbr = false,
  className,
  children,
  header,
  cardContent,
  footer,
  image,
  imageAlt = 'Imagem do card',
  fixedHeight = false,
  customHeight = '250px',
  hover = false,
  inverted = false,
  draggable = false,
  disabled = false,
  maxWidth,
  id,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  // Modo Estrito: HTML puro com classes Gov.br DS
  if (strictgovbr) {
    const cardClasses = classnames('br-card', className, {
      'h-fixed': fixedHeight,
      hover: hover,
      inverted: inverted,
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

  // Modo Padrão: MUI (será implementado posteriormente)
  return (
    <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
      <p>Modo padrão MUI será implementado em breve</p>
      {children}
    </div>
  )
}

// Exports nomeados para tree shaking
export type { GovBRCardProps } from './types'
