'use client'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import { GovBRItemProps } from './types'

/**
 * GovBRItem - Componente de Item container seguindo a arquitetura híbrida
 *
 * Container genérico para envolver e organizar outros componentes com suporte
 * a estados visuais e divisores, seguindo os padrões da biblioteca shared-ui da ANPD.
 *
 * **Modo Padrão (strictgovbr=false - padrão)**: Renderiza `<Stack>` do MUI
 * estilizado automaticamente pelo govbrTheme.ts.
 *
 * **Modo Estrito (strictgovbr=true)**: Renderiza `<div>` com classes CSS
 * oficiais do Gov.br Design System (`.br-item`) para garantir 100% de fidelidade visual.
 *
 * **Funcionalidades:**
 * - ✅ Estados: normal, disabled, selected, active
 * - ✅ Divisor inferior opcional
 * - ✅ Container flexível para qualquer conteúdo
 * - ✅ Totalmente estilizado pelo govbrTheme.ts
 *
 * **Tokens CSS utilizados (no govbrTheme.ts):**
 * - `--surface`: Cor de fundo padrão
 * - `--surface-selected`: Cor de fundo quando selected
 * - `--gray-20`: Cor do divisor
 *
 * @param props - GovBRItemProps
 *
 * @example
 * ```tsx
 * // Item simples
 * <GovBRItem>
 *   <Typography>Conteúdo do item</Typography>
 * </GovBRItem>
 * ```
 *
 * @example
 * ```tsx
 * // Item com divisor
 * <GovBRItem divider>
 *   <Typography>Item 1</Typography>
 * </GovBRItem>
 * <GovBRItem divider>
 *   <Typography>Item 2</Typography>
 * </GovBRItem>
 * ```
 *
 * @example
 * ```tsx
 * // Item com estados
 * <GovBRItem estado="selected">Item Selecionado</GovBRItem>
 * <GovBRItem estado="disabled">Item Desabilitado</GovBRItem>
 * <GovBRItem estado="active">Item Ativo</GovBRItem>
 * ```
 *
 * @example
 * ```tsx
 * // Modo estrito Gov.br DS
 * <GovBRItem strictgovbr estado="selected" divider>
 *   Conteúdo do item
 * </GovBRItem>
 * ```
 */
export function GovBRItem(props: Readonly<GovBRItemProps>) {
  const { estado, divider, children } = props

  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    return (
      <>
        <div className={`br-item ${estado}`}>{children}</div>
        {divider && <hr />}
      </>
    )
  }

  // --- MODO MUI ---
  return (
    <Stack
      sx={{
        opacity: estado === 'disabled' ? 0.5 : 1,
        backgroundColor: estado === 'selected' ? 'action.selected' : 'transparent',
        p: 1,
        ...(estado === 'disabled' && { pointerEvents: 'none' }),
        ...props.sx,
      }}
    >
      {children}
      {divider && <Divider />}
    </Stack>
  )
}
