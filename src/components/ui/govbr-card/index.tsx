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
 * Card que suporta dois modos de renderização seguindo os padrões da biblioteca shared-ui da ANPD:
 *
 * **Modo Padrão (strictgovbr=false - padrão)**: Componente MUI estilizado automaticamente
 * pelo govbrTheme.ts usando tokens CSS do Gov.br Design System. Este é o modo principal
 * de uso da biblioteca, oferecendo toda a robustez e flexibilidade do Material-UI.
 *
 * **Modo Estrito (strictgovbr=true)**: Renderiza HTML puro com classes CSS oficiais
 * do Gov.br Design System para garantir 100% de fidelidade visual quando necessário.
 *
 * @remarks
 * **Arquitetura de Componente:**
 * - **Modo Padrão**: Componente "burro" que repassa props para MUI. Estilização controlada
 *   inteiramente pelo govbrTheme.ts usando `styleOverrides` e tokens CSS (var(--token-name))
 * - **Modo Estrito**: HTML puro sem envolvimento do MUI, usando classes `.br-card` do Gov.br DS
 *
 * **Funcionalidades Principais:**
 * - ✅ Suporte a imagens com controle de altura
 * - ✅ Header customizável (texto simples ou componente React)
 * - ✅ Conteúdo principal flexível
 * - ✅ Footer para ações
 * - ✅ Conteúdo expansível/colapsável
 * - ✅ Altura fixa com scroll automático
 * - ✅ Efeito hover customizável
 * - ✅ Suporte a drag and drop (apenas modo estrito)
 * - ✅ Estado desabilitado
 * - ✅ Largura máxima configurável
 * - ✅ Totalmente acessível (ARIA)
 *
 * **Tokens CSS do Gov.br DS utilizados (no govbrTheme.ts):**
 * - `--background`: Cor de fundo do card
 * - `--gray-20`: Cor da borda
 * - `--surface-rounder-md`: Border radius (8px)
 * - `--shadow-level-1`, `--shadow-level-2`: Sombras
 * - `--gray-5`: Cor de hover
 * - `--interactive`: Cor de destaque
 *
 * **Como Descobrir Tokens CSS:**
 * 1. Inspecione componentes oficiais do Gov.br DS com DevTools
 * 2. Consulte `node_modules/@govbr-ds/core/dist/core-tokens.min.css`
 * 3. Use `var(--token-name)` sempre que possível para manter sincronização automática
 *
 * @example
 * ```tsx
 * // Modo Padrão - Uso principal da biblioteca
 * <GovBRCard
 *   header="Título do Card"
 *   cardContent={<p>Conteúdo do card</p>}
 *   footer={<button>Ação</button>}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Modo Estrito - 100% fidelidade Gov.br DS
 * <GovBRCard
 *   strictgovbr
 *   header={<div>Cabeçalho Customizado</div>}
 *   cardContent={<p>Conteúdo principal</p>}
 *   footer={<div>Rodapé</div>}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Card completo com todas as funcionalidades
 * <GovBRCard
 *   image="https://example.com/image.jpg"
 *   imageAlt="Descrição acessível da imagem"
 *   title="Título"
 *   subheader="Subtítulo"
 *   avatar={<Avatar>A</Avatar>}
 *   action={<IconButton><MoreVert /></IconButton>}
 *   cardContent={<Typography>Conteúdo rico</Typography>}
 *   footer={
 *     <>
 *       <Button>Cancelar</Button>
 *       <Button variant="contained">Confirmar</Button>
 *     </>
 *   }
 *   expandableContent={<p>Conteúdo oculto por padrão</p>}
 *   expanded={isExpanded}
 *   onExpandChange={setIsExpanded}
 *   fixedHeight
 *   customHeight="350px"
 *   hover
 *   maxWidth="500px"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Card arrastável (apenas modo estrito)
 * <GovBRCard
 *   strictgovbr
 *   draggable
 *   id="card-1"
 *   header="Card Arrastável"
 *   cardContent={<p>Você pode arrastar este card</p>}
 * />
 * ```
 *
 * @param {GovBRCardProps} props - Propriedades do componente
 * @param {boolean} [props.strictgovbr=false] - Ativa modo estrito com HTML puro e classes Gov.br DS
 * @param {ReactNode} [props.header] - Conteúdo do cabeçalho (texto ou componente React)
 * @param {string} [props.title] - Título do card (apenas modo padrão com CardHeader)
 * @param {string} [props.subheader] - Subtítulo do card (apenas modo padrão)
 * @param {ReactNode} [props.avatar] - Avatar no header (apenas modo padrão)
 * @param {ReactNode} [props.action] - Ação no header (apenas modo padrão)
 * @param {ReactNode} [props.cardContent] - Conteúdo principal do card
 * @param {ReactNode} [props.footer] - Conteúdo do rodapé
 * @param {ReactNode} [props.expandableContent] - Conteúdo que pode ser expandido/colapsado
 * @param {boolean} [props.expanded] - Controle externo do estado de expansão
 * @param {string} [props.image] - URL da imagem
 * @param {string} [props.imageAlt='Imagem do card'] - Texto alternativo da imagem
 * @param {number} [props.imageHeight=194] - Altura da imagem em pixels
 * @param {boolean} [props.fixedHeight=false] - Ativa altura fixa com scroll
 * @param {string} [props.customHeight='250px'] - Altura customizada quando fixedHeight=true
 * @param {boolean} [props.hover=false] - Ativa efeito hover
 * @param {boolean} [props.draggable=false] - Permite arrastar o card (apenas modo estrito)
 * @param {boolean} [props.disabled=false] - Desabilita interatividade
 * @param {string} [props.maxWidth] - Largura máxima do card
 * @param {string} [props.id] - ID único do card
 * @param {CSSProperties} [props.style] - Estilos inline customizados
 *
 * @returns {JSX.Element} Componente GovBRCard renderizado
 *
 * @see {@link https://gov.br/ds/components/card | Card - Gov.br Design System}
 * @see {@link https://mui.com/material-ui/react-card/ | Card - Material-UI}
 * @see {@link /home/gustavo/shared-ui/ARQUITETURA.md | Arquitetura Híbrida da Biblioteca}
 * @see {@link /home/gustavo/shared-ui/docs/ADICIONAR_COMPONENTE.md | Guia de Componentes}
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
  const isControlled = controlledExpanded !== undefined
  const isExpanded = isControlled ? controlledExpanded : false

  // Hook: Drag-and-drop (apenas modo estrito)
  useEffect(() => {
    if (!strictgovbr || !draggable || !cardRef.current) return

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
    const images = card.querySelectorAll('img')
    const links = card.querySelectorAll('a')

    images.forEach((img) => img.setAttribute('draggable', 'false'))
    links.forEach((link) => link.setAttribute('draggable', 'false'))

    card.addEventListener('dragstart', handleDragStart as EventListener)

    return () => {
      card.removeEventListener('dragstart', handleDragStart as EventListener)
    }
  }, [strictgovbr, draggable])

  // Hook: Estado desabilitado com acessibilidade (apenas modo estrito)
  useEffect(() => {
    if (!strictgovbr || !disabled || !cardRef.current) return

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
  }, [strictgovbr, disabled])

  // Modo Estrito: HTML puro com classes Gov.br DS
  if (strictgovbr) {
    const cardClasses = classnames('br-card', className, {
      'h-fixed': fixedHeight,
      hover: hover,
      disabled: disabled,
    })

    const cardStyle = {
      ...style,
      ...(maxWidth && { maxWidth }),
      ...(fixedHeight &&
        customHeight !== '250px' &&
        ({
          '--card-height-fixed': customHeight,
        } as React.CSSProperties)),
    }

    return (
      <div
        ref={cardRef}
        className={cardClasses}
        style={cardStyle}
        id={id}
        draggable={draggable}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {image && (
          <div className="card-content">
            <img src={image} alt={imageAlt} />
          </div>
        )}

        {header && <div className="card-header">{header}</div>}

        {(cardContent || (!header && !footer && !image && children)) && (
          <div className="card-content">{cardContent || children}</div>
        )}

        {footer && <div className="card-footer">{footer}</div>}
      </div>
    )
  }

  // Modo Padrão: Componente MUI estilizado pelo govbrTheme
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

  const shouldRenderCardHeader = title || subheader || avatar || action || header

  return (
    <MuiCard className={className} sx={cardStyle} id={id} {...props}>
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

      {shouldRenderCardHeader && (
        <MuiCardHeader
          avatar={avatar}
          action={action}
          title={title || header}
          subheader={subheader}
          {...headerProps}
        />
      )}

      {(cardContent || (!shouldRenderCardHeader && !footer && !image && children)) && (
        <MuiCardContent>{cardContent || children}</MuiCardContent>
      )}

      {footer && <MuiCardActions {...footerProps}>{footer}</MuiCardActions>}

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
