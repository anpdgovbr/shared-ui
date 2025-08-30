'use client'
import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import classNames from 'classnames'
import type { ButtonHTMLAttributes } from 'react'

import type { GovBRButtonProps } from './types'

/**
 * GovBRButton
 *
 * Componente de botão padronizado da biblioteca Shared UI ANPD que suporta dois modos de renderização:
 *
 * - Modo padrão (MUI): integra-se com o tema `govbrTheme` e aceita todas as props do `@mui/material/Button`.
 *   Neste modo, a biblioteca expõe variantes adicionais via `variant` (por exemplo `variant="inverted"` e
 *   `variant="circle"`) e trata internamente props específicas do GovBR para que não vazem ao DOM.
 *
 * - Modo estrito (`strictgovbr`): renderiza um botão HTML puro com classes do GovBR Design System (`.br-button`,
 *   `.inverted`, `.circle`, `.loading`, etc.), garantindo fidelidade visual total ao GovBR-DS.
 *
 * Principais regras e comportamentos:
 * - Nunca repassamos props booleanas customizadas (ex.: `inverted`, `circle`, `loading`) diretamente para o DOM
 *   no modo MUI — elas são usadas apenas internamente para decidir classes/variantes.
 * - Para o modo MUI prefira `variant="inverted"` e `variant="circle"` — estas variantes são registradas no tema.
 * - `loading={true}` mostra um `CircularProgress` pequeno e desabilita o botão (modo MUI). No modo estrito, a
 *   classe `.loading` é aplicada para permitir estilização GovBR.
 *
 * Tokens relevantes (usados como `fallback` quando aplicável):
 * - `var(--interactive)` / `var(--interactive-light)` — cor primária interativa
 * - `var(--color-lightest)` — cor clara de fundo (usada em `inverted`)
 * - `var(--button-radius)` / `var(--surface-rounder-*)` — raio de borda
 * - `var(--shadow-level-*)` — sombras de elevação
 *
 * Exemplos:
 * - Modo MUI (recomendado):
 *   ```tsx
 *   <GovBRButton variant="inverted" color="primary">Cancelar</GovBRButton>
 *   <GovBRButton variant="circle" aria-label="Adicionar"><AddIcon /></GovBRButton>
 *   ```
 * - Modo estrito GovBR:
 *   ```tsx
 *   <GovBRButton strictgovbr inverted>Cancelar</GovBRButton>
 *   <GovBRButton strictgovbr circle><SaveIcon /></GovBRButton>
 *   ```
 *
 * @param props - `GovBRButtonProps` (extende `@mui/material/Button`)
 */
export function GovBRButton(props: Readonly<GovBRButtonProps>) {
  const {
    strictgovbr,
    className,
    children,
    // props que mapeamos para classes GovBR no modo estrito
    variant,
    color,
    size,
    fullWidth,
    inverted,
    circle,
    loading,
    // resto pode incluir aria-*/on* e outros atributos que queremos repassar ao <button>
    ...rest
  } = props

  if (strictgovbr) {
    // Converter rest para atributos nativos de button de forma tipada
    const nativeButtonProps: ButtonHTMLAttributes<HTMLButtonElement> =
      rest as unknown as ButtonHTMLAttributes<HTMLButtonElement>
    // mapear variant -> classes GovBR: contained -> primary, outlined -> secondary, text/undefined -> terciário (sem classe)
    let colorClass = ''
    if (variant === 'contained') {
      colorClass = 'primary'
    } else if (variant === 'outlined') {
      colorClass = 'secondary'
    }

    // se não veio variant, aceitar color direto (ex: success, warning, info, primary, secondary...)
    if (!variant && color) {
      const allowed = ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'danger']
      if (allowed.includes(String(color))) {
        colorClass = String(color)
      }
    }

    const govbrClasses = classNames(
      'br-button',
      colorClass || null,
      { block: !!fullWidth },
      { inverted: !!inverted },
      { circle: !!circle },
      { loading: !!loading },
      { [size || '']: !!size },
      className,
    )

    return (
      <button className={govbrClasses} {...nativeButtonProps}>
        {children}
      </button>
    )
  } else {
    // MODO PADRÃO: Renderiza um Button do MUI e deixa o tema cuidar do estilo.
    // Não repassar props customizadas do GovBR (inverted, circle, loading, strictgovbr, clearBlock)
    // para o MUI/Button, para evitar que atributos não reconhecidos cheguem ao DOM.

    // tipar rest como props do MUI para extrair ícones/disabled sem usar `any`
    const restAsMui = rest as Partial<MuiButtonProps>
    const { startIcon, endIcon, disabled } = restAsMui

    const muiProps: Partial<MuiButtonProps> = {
      variant,
      color,
      size,
      fullWidth,
      // se estiver em loading, mostrar spinner e desabilitar
      startIcon: loading ? <CircularProgress size={16} color="inherit" /> : startIcon,
      endIcon: endIcon,
      disabled: disabled || loading,
      ...rest,
    }

    return (
      <Button className={className} {...muiProps}>
        {children}
      </Button>
    )
  }
}
