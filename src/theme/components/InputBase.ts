// src/theme/components/InputBase.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides do componente InputBase do MUI usados no govbrTheme.
 *
 * Este objeto fornece as customizações de estilo para o slot `MuiInputBase`
 * do Material-UI, servindo como base para todos os inputs da biblioteca
 * (por exemplo: TextField, Select, OutlinedInput, FilledInput).
 *
 * OTIMIZAÇÕES APLICADAS (Setembro 2025):
 * - Altura reduzida para padrões modernos de UX (40px base, era 80px)
 * - Paddings otimizados para melhor proporção visual
 * - Font-size alinhado com padrões web (16px base)
 * - Responsividade melhorada para mobile
 * - Tokens CSS mantidos com fallbacks mais apropriados
 *
 * Principais responsabilidades:
 * - Centralizar tokens CSS do Gov.br DS via `var(--token-name)` em vez de valores fixos.
 * - Normalizar comportamento visual entre variantes (outlined, filled, multiline, small).
 * - Garantir estados acessíveis e consistentes (focus, hover, disabled, error).
 *
 * Uso:
 * import { MuiInputBaseOverrides } from '@theme/components/InputBase'
 * const theme = createTheme({ components: { MuiInputBase: MuiInputBaseOverrides } })
 *
 * Observações:
 * - Não aplica borda no root quando o input for `MuiOutlinedInput-root`: o fieldset é quem deve controlar a borda.
 * - As classes do MUI (ex.: .Mui-focused, .Mui-error, .Mui-disabled) são alvo das regras de estilo.
 *
 * @see {@link https://mui.com/} Documentação do MUI
 * @see ARQUITETURA.md para diretrizes de tema e modo duplo (govbrTheme)
 *
 * @public
 */
export const MuiInputBaseOverrides: Components['MuiInputBase'] = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--background, #ffffff)', // Fundo dos inputs
      color: 'var(--color, #333333)', // Texto do input
      // Font-size otimizado para padrão web moderno
      fontSize: 'var(--font-size-scale-base, 1rem)', // 16px (era 1.2rem)
      fontWeight: 'var(--font-weight-regular, 400)', // 400 (era 500, mais leve)
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      // Altura otimizada para UX moderna
      height: 'var(--spacing-scale-2xh, 2.5rem)', // 40px (era 5rem/80px)
      // Padding balanceado para melhor proporção
      padding: '0 var(--spacing-scale-base, 1rem)', // 0 16px (era 2rem/32px)
      lineHeight: 1.5, // Melhor legibilidade

      // Transição suave para interações
      transition:
        'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out',

      // Quando for OutlinedInput, não aplicar borda nem sombra no root.
      // O fieldset do OutlinedInput deve ser a única fonte da borda.
      '&.MuiOutlinedInput-root': {
        border: 'none',
        boxShadow: 'none',
      },

      // Aplicar bordas apenas para inputs que NÃO são outlined (ex.: filled/base)
      '&:not(.MuiOutlinedInput-root)': {
        borderColor: 'var(--gray-40, #999999)', // Borda padrão
        borderRadius: 'var(--surface-rounder-sm, 0.25rem)', // 4px
        borderStyle: 'solid',
        borderWidth: '1px',

        '&:hover:not(.Mui-disabled)': {
          borderColor: 'var(--gray-60, #777777)',
          backgroundColor: 'var(--background-light, #f8f9fa)', // Hover mais sutil
        },

        '&.Mui-focused': {
          borderColor: 'var(--interactive, #1351B4)', // Azul GovBR
          boxShadow: '0 0 0 2px rgba(19, 81, 180, 0.2)', // Sombra mais suave
          outline: 'none',
        },

        '&.Mui-error': {
          borderColor: 'var(--feedback-error-vivid, #D04F4F)',
          borderWidth: '1px', // Mantém espessura padrão (era 2px)

          '&:focus, &.Mui-focused': {
            boxShadow: '0 0 0 2px rgba(208, 79, 79, 0.2)', // Sombra de erro mais suave
          },
        },

        '&.Mui-disabled': {
          backgroundColor: 'var(--gray-10, #f8f9fa)',
          borderColor: 'var(--gray-20, #e9ecef)',
          color: 'var(--gray-60, #6c757d)',
          cursor: 'not-allowed',
          opacity: 1, // Remove opacidade, controle via cores

          '&::placeholder': {
            color: 'var(--gray-40, #adb5bd)',
          },
        },
      },
    },

    // Tamanhos otimizados
    sizeSmall: {
      height: 'var(--spacing-scale-2x, 2rem)', // 32px (era 2.857rem)
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px (era 1rem)
      padding: '0 var(--spacing-scale-3quarter, 0.75rem)', // 0 12px
    },

    // Input multiline (textarea) - proporções melhoradas
    multiline: {
      height: 'auto',
      minHeight: 'var(--spacing-scale-5x, 5rem)', // 80px (era 8rem/128px)
      padding: 'var(--spacing-scale-3quarter, 0.75rem) var(--spacing-scale-base, 1rem)', // 12px 16px
      alignItems: 'flex-start',
      lineHeight: 1.6, // Melhor legibilidade em textarea

      '& textarea': {
        resize: 'vertical',
        minHeight: 'var(--spacing-scale-4x, 4rem)', // 64px (era 6rem/96px)
        fontFamily: 'inherit', // Herda fonte do pai
        fontSize: 'inherit',
      },
    },

    // Input para adornments (ícones) - espaçamento otimizado
    adornedStart: {
      paddingLeft: 'var(--spacing-scale-quarter, 0.25rem)', // 4px (era 0.5rem)
    },

    adornedEnd: {
      paddingRight: 'var(--spacing-scale-quarter, 0.25rem)', // 4px (era 0.5rem)
    },
  },
}
