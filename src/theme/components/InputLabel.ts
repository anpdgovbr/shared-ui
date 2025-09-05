// src/theme/components/InputLabel.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente InputLabel do MUI
 * Labels para inputs e formulários
 *
 * OTIMIZAÇÕES APLICADAS (Setembro 2025):
 * - Margin-bottom otimizada para melhor alinhamento
 * - Font-weight reduzido para menos peso visual
 * - Transições suaves adicionadas
 * - Estados de hover melhorados
 * - Compatibilidade com spacing otimizado
 */
export const MuiInputLabelOverrides: Components['MuiInputLabel'] = {
  styleOverrides: {
    root: {
      color: 'var(--color, #333333)', // Cor padrão do texto
      fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
      fontWeight: 'var(--font-weight-medium, 500)', // 500 (era 600, mais leve)
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      marginBottom: 'var(--spacing-scale-half, 0.5rem)', // 4px (era 0.5rem/8px)
      position: 'static', // Remove posicionamento absoluto para outlined
      transform: 'none',
      lineHeight: 1.5,

      // Transição suave para mudanças de cor
      transition: 'color 0.2s ease-in-out',

      // Estado focado
      '&.Mui-focused': {
        color: 'var(--interactive, #1351B4)',
      },

      // Estado de erro
      '&.Mui-error': {
        color: 'var(--feedback-error-vivid, #D04F4F)',
      },

      // Estado desabilitado
      '&.Mui-disabled': {
        color: 'var(--gray-60, #6c757d)',
        opacity: 0.8,
      },

      // Asterisco para campos obrigatórios
      '&.Mui-required .MuiInputLabel-asterisk': {
        color: 'var(--feedback-error-vivid, #D04F4F)',
        marginLeft: '0.125rem', // Pequeno espaço antes do asterisco
      },
    },

    // Label outlined (flutuante) - posicionamento otimizado
    outlined: {
      position: 'absolute',
      transform: 'translate(12px, 8px) scale(1)', // Posicionamento mais centrado
      transformOrigin: 'top left',
      transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',

      '&.MuiInputLabel-shrink': {
        transform: 'translate(12px, -6px) scale(0.75)',
        backgroundColor: 'var(--background, #ffffff)',
        padding: '0 var(--spacing-scale-quarter, 0.25rem)', // 0 4px (era 0.5rem)
        borderRadius: '2px', // Pequeno arredondamento no fundo
      },
    },

    // Label filled - alinhamento melhorado
    filled: {
      transform: 'translate(12px, 16px) scale(1)', // Posicionamento mais centrado (era 20px)
      transition: 'transform 0.2s ease-in-out',

      '&.MuiInputLabel-shrink': {
        transform: 'translate(12px, 8px) scale(0.75)', // Ajustado (era 10px)
      },
    },

    // Tamanhos - proporções otimizadas
    sizeSmall: {
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px

      '&.MuiInputLabel-outlined': {
        transform: 'translate(12px, 10px) scale(1)', // Centrado para small (era 9px)

        '&.MuiInputLabel-shrink': {
          transform: 'translate(12px, -6px) scale(0.75)',
        },
      },

      '&.MuiInputLabel-filled': {
        transform: 'translate(12px, 13px) scale(1)', // Ajustado para small

        '&.MuiInputLabel-shrink': {
          transform: 'translate(12px, 6px) scale(0.75)',
        },
      },
    },
  },
}
