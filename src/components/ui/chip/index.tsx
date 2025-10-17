'use client'

import MuiChip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import React, { useEffect, useMemo, useState } from 'react'

import type { ChipItemData, ChipProps, ChipsListProps } from './types'

/**
 * Trunca um texto se exceder o comprimento máximo.
 *
 * @param text - Texto a ser truncado
 * @param maxLength - Comprimento máximo permitido
 * @returns Texto truncado com "..." se necessário
 */
function truncateText(text: string, maxLength: number): string {
  return text?.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}

/**
 * Chip - Componente de Tag/Badge Customizado
 *
 * Componente personalizado da ANPD baseado no MUI Chip para exibir tags, badges,
 * status e informações categorizadas de forma compacta e visual.
 *
 * @remarks
 * Embora não seja um componente oficial do GovBR Design System, segue as mesmas
 * convenções da biblioteca shared-ui e pode ser totalmente personalizado via props.
 * A estilização padrão é controlada pelo `govbrTheme.ts`.
 *
 * **Características principais:**
 * - 🎨 Integração completa com tema MUI/GovBR
 * - 📏 Truncamento automático de texto longo
 * - 💡 Tooltip inteligente (automático ou customizado)
 * - 🎯 Suporte a ícones, avatars e delete handlers
 * - ✨ Variantes filled e outlined
 * - 🎭 Cores semânticas (primary, secondary, success, error, warning, info)
 * - 📱 Tamanhos responsivos (small, medium)
 *
 * @example Uso básico
 * ```tsx
 * <Chip label="Tag simples" />
 * ```
 *
 * @example Com cor e variante
 * ```tsx
 * <Chip label="Status" color="success" variant="outlined" />
 * ```
 *
 * @example Com ícone e tooltip
 * ```tsx
 * <Chip
 *   label="Usuário"
 *   icon={<PersonIcon />}
 *   tooltip="Clique para mais detalhes"
 * />
 * ```
 *
 * @example Com delete handler
 * ```tsx
 * <Chip
 *   label="Remover"
 *   onDelete={handleDelete}
 *   deleteIcon={<CloseIcon />}
 * />
 * ```
 *
 * @param props - {@link ChipProps}
 * @returns JSX.Element
 */
export function Chip({
  label,
  onClick,
  clickable,
  size = 'medium',
  icon,
  tooltip,
  maxLength = 33,
  autoTruncate = true,
  sx,
  color,
  ...rest
}: Readonly<ChipProps>) {
  // Determina se o label é string para aplicar truncamento
  const isStringLabel = typeof label === 'string'
  const isTruncated = isStringLabel && autoTruncate && label.length > maxLength

  // Define o título do tooltip
  const tooltipTitle = typeof tooltip === 'string' ? tooltip : isStringLabel ? label : ''

  // Mostra tooltip quando:
  // - tooltip é uma string (usar esse texto)
  // - tooltip é true
  // - caso contrário, exibir apenas se o label estiver truncado
  const showTooltip = typeof tooltip === 'string' || tooltip === true ? true : isTruncated

  // Processa o label para exibição
  const displayLabel = isStringLabel && autoTruncate ? truncateText(label, maxLength) : label

  // Mescla estilos customizados
  const mergedSx = {
    ...(clickable && { cursor: 'pointer' }),
    ...(sx || {}),
  }

  const chipElement = (
    <MuiChip
      size={size}
      color={color}
      sx={mergedSx}
      icon={icon && React.isValidElement(icon) ? icon : undefined}
      label={
        isStringLabel ? (
          <Typography fontSize={size === 'small' ? '0.75rem' : '0.875rem'}>
            {displayLabel}
          </Typography>
        ) : (
          displayLabel
        )
      }
      onClick={clickable || onClick ? onClick : undefined}
      clickable={clickable}
      {...rest}
    />
  )

  // Envolve com Tooltip apenas se necessário
  if (showTooltip) {
    return (
      <Tooltip title={tooltipTitle} arrow>
        {chipElement}
      </Tooltip>
    )
  }

  return chipElement
}

/**
 * ChipsList - Container Inteligente para Múltiplos Chips
 *
 * Componente personalizado da ANPD para exibir listas de chips com controle
 * automático de overflow, scroll e exibição progressiva ("mostrar mais").
 *
 * @remarks
 * Ideal para cenários onde há muitas tags/categorias e é necessário controlar
 * o espaço visual ocupado, permitindo expansão sob demanda.
 *
 * **Características principais:**
 * - 📦 Controle inteligente de overflow baseado em comprimento combinado
 * - 🔄 Botão "mostrar mais/menos" automático
 * - 📏 Scroll opcional para listas longas
 * - 🎨 Estilização consistente com tema
 * - ⚡ Otimização com useMemo para listas grandes
 * - 📱 Layout responsivo com flexbox
 *
 * @example Uso básico
 * ```tsx
 * <ChipsList
 *   items={[
 *     { label: 'React', icon: <ReactIcon /> },
 *     { label: 'TypeScript', tooltip: 'Linguagem tipada' },
 *     { label: 'MUI' }
 *   ]}
 * />
 * ```
 *
 * @example Com controle de altura
 * ```tsx
 * <ChipsList
 *   items={tags}
 *   maxLength={20}
 *   maxHeight={150}
 *   onShowAll={(height, reset) => console.log('Nova altura:', height)}
 * />
 * ```
 *
 * @param props - {@link ChipsListProps}
 * @returns JSX.Element
 */
export function ChipsList({
  items,
  size = 'medium',
  maxLength = 27,
  initialHeight = 300,
  onShowAll,
  displayAllChips = false,
  maxHeight = 100,
  disableScroll = false,
  sx,
}: Readonly<ChipsListProps>) {
  const [showAll, setShowAll] = useState(displayAllChips)

  // Ordena itens por comprimento ascendente para otimizar exibição
  const sortedItemsByLengthAsc = useMemo(() => {
    return [...items].sort((a, b) => (a.label?.length || 0) - (b.label?.length || 0))
  }, [items])

  // Calcula quantos itens cabem antes de mostrar "+N"
  const indexOfLastItemFits = useMemo(() => {
    let totalLength = 0
    if (sortedItemsByLengthAsc.length > 2) {
      for (let i = 0; i < sortedItemsByLengthAsc.length; i++) {
        const currentLength = sortedItemsByLengthAsc[i].label?.length || 0
        if (totalLength + currentLength > maxLength) {
          return i
        }
        totalLength += currentLength
      }
    }
    return sortedItemsByLengthAsc.length
  }, [sortedItemsByLengthAsc, maxLength])

  // Notifica mudança de altura quando expandido/colapsado
  useEffect(() => {
    if (onShowAll) {
      const itemsNotShown = sortedItemsByLengthAsc.length - indexOfLastItemFits
      const adjustedHeight = showAll ? initialHeight + itemsNotShown * 40 : initialHeight
      onShowAll(adjustedHeight, !showAll)
    }
  }, [showAll, onShowAll, sortedItemsByLengthAsc.length, indexOfLastItemFits, initialHeight])

  function handleShowAllClick() {
    setShowAll((prevShowAll) => !prevShowAll)
  }

  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: 'wrap',
        rowGap: 1,
        columnGap: 1,
        ...(!disableScroll && { maxHeight, overflow: 'auto' }),
        ...sx,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {sortedItemsByLengthAsc
        .slice(0, showAll ? sortedItemsByLengthAsc.length : indexOfLastItemFits)
        .map((item: ChipItemData, index: number) => (
          <Chip
            key={item.value ?? `${item.label}-${index}`}
            label={item.label}
            size={size}
            icon={item.icon && React.isValidElement(item.icon) ? item.icon : undefined}
            tooltip={item.tooltip}
          />
        ))}

      {sortedItemsByLengthAsc.length > indexOfLastItemFits && !displayAllChips && (
        <Chip
          label={
            showAll ? 'Mostrar menos' : `+${sortedItemsByLengthAsc.length - indexOfLastItemFits}`
          }
          onClick={handleShowAllClick}
          clickable={true}
          size={size}
        />
      )}
    </Stack>
  )
}

// Exports de tipos para consumidores externos
export type { ChipItemData, ChipProps, ChipsListProps } from './types'
