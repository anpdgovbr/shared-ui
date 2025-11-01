'use client'

import Divider from '@mui/material/Divider'
import classNames from 'classnames'
import { GovBRDividerProps } from 'src/components/ui/govbr-divider/types'

/**
 * GovBRDivider - Separador visual seguindo a arquitetura híbrida
 *
 * Componente de divider (linha divisória) que suporta dois modos de renderização
 * conforme a arquitetura da biblioteca shared-ui da ANPD:
 *
 * **Modo Padrão (strictgovbr=false - padrão)**: Renderiza `<Divider>` do MUI
 * estilizado automaticamente pelo govbrTheme.ts usando tokens CSS do Gov.br DS.
 *
 * **Modo Estrito (strictgovbr=true)**: Renderiza `<div>` com classes CSS oficiais
 * do Gov.br Design System (`.br-divider`) para garantir 100% de fidelidade visual.
 *
 * **Funcionalidades:**
 * - ✅ Orientação horizontal e vertical
 * - ✅ Três tamanhos: sm (1px), md (2px), lg (4px)
 * - ✅ Estilo tracejado (dashed) opcional
 * - ✅ Totalmente estilizado pelo govbrTheme.ts
 *
 * **Tokens CSS utilizados (no govbrTheme.ts):**
 * - `--gray-20`: Cor da linha divisória
 * - `--border-width-sm`, `--border-width-md`, `--border-width-lg`: Espessuras
 *
 * @param props - GovBRDividerProps
 *
 * @example
 * ```tsx
 * // Divider horizontal padrão
 * <GovBRDivider />
 * ```
 *
 * @example
 * ```tsx
 * // Divider vertical entre elementos
 * <Box display="flex">
 *   <Typography>Item 1</Typography>
 *   <GovBRDivider orientation="vertical" />
 *   <Typography>Item 2</Typography>
 * </Box>
 * ```
 *
 * @example
 * ```tsx
 * // Divider tracejado com tamanho grande
 * <GovBRDivider dashed size="lg" />
 * ```
 *
 * @example
 * ```tsx
 * // Modo estrito Gov.br DS
 * <GovBRDivider strictgovbr orientation="horizontal" size="md" />
 * ```
 */
export function GovBRDivider(props: Readonly<GovBRDividerProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    const { orientation = 'horizontal', dashed = false, size = 'md', className, ...rest } = props

    switch (orientation) {
      case 'horizontal':
        return (
          <div
            className={classNames(
              'br-divider',
              {
                'br-divider dashed': dashed,
                'br-divider sm': size === 'sm',
                'br-divider md': size === 'md',
                'br-divider lg': size === 'lg',
              },
              className,
            )}
            {...rest}
          />
        )
      case 'vertical':
        return (
          <div
            className={classNames(
              'br-divider',
              'br-divider vertical',
              {
                'br-divider dashed': dashed,
                'br-divider sm': size === 'sm',
                'br-divider md': size === 'md',
                'br-divider lg': size === 'lg',
              },
              className,
            )}
            {...rest}
          />
        )
    }
  }

  const { orientation = 'horizontal', dashed = false, size = 'md', sx, ...rest } = props

  // --- MODO PADRÃO (MUI) ---
  switch (orientation) {
    case 'horizontal':
      return (
        <Divider
          sx={{
            borderStyle: dashed ? 'dashed' : 'solid',
            ...(size === 'sm' && { borderBottomWidth: '1px' }),
            ...(size === 'md' && { borderBottomWidth: '2px' }),
            ...(size === 'lg' && { borderBottomWidth: '4px' }),
            ...sx,
          }}
          {...rest}
        />
      )
    case 'vertical':
      return (
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderStyle: dashed ? 'dashed' : 'solid',
            ...(size === 'sm' && { borderRightWidth: '1px' }),
            ...(size === 'md' && { borderRightWidth: '2px' }),
            ...(size === 'lg' && { borderRightWidth: '4px' }),
            ...sx,
          }}
          {...rest}
        />
      )
  }
}
