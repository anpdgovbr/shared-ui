// src/theme/components/Accordion.ts
import type { Components, Theme } from '@mui/material/styles'

/**
 * Overrides para componentes Accordion do MUI
 * Baseado nos padrões do GovBR Design System
 *
 * @security Usa tokens CSS com fallbacks seguros
 * @resilience Valores padrão para prevenir renderização quebrada
 */

export const MuiAccordionOverrides: Components['MuiAccordion'] = {
  styleOverrides: {
    root: {
      // ✅ Container principal com estilo Gov.br
      borderRadius: 0,
      boxShadow: 'none',
      border: '1px solid var(--gray-20, #e6e7e8)', // Token CSS com fallback
      marginBottom: 'var(--spacing-scale-quarter, 1px)', // Token de espaçamento

      '&:before': {
        display: 'none', // Remove linha padrão do MUI
      },

      '&.Mui-expanded': {
        margin: '0 0 var(--spacing-scale-quarter, 1px) 0',
      },
    },
  },
}

export const MuiAccordionSummaryOverrides: Components['MuiAccordionSummary'] = {
  styleOverrides: {
    root: {
      // ✅ Header do accordion com estilo Gov.br
      backgroundColor: 'var(--gray-5, #f8f8f8)',
      borderBottom: '1px solid var(--gray-20, #e6e7e8)',
      minHeight: 'var(--spacing-scale-7x, 56px)', // ~56px
      padding: '0 var(--spacing-scale-base, 1rem)',
      transition: 'background-color var(--duration-quick, 150ms) ease',

      '&:hover': {
        backgroundColor: 'var(--gray-10, #f0f0f0)',
      },

      '&.Mui-expanded': {
        backgroundColor: 'var(--background, #ffffff)',
        minHeight: 'var(--spacing-scale-7x, 56px)',
      },

      '&.Mui-focusVisible': {
        backgroundColor: 'var(--blue-warm-vivid-5, #e8f4fd)',
        outline: '2px dashed var(--focus, #ffd200)',
        outlineOffset: '2px',
      },
    },

    expandIconWrapper: ({ theme }) => ({
      // ✅ Ícone de expansão - dinâmico por tema
      color: (theme as Theme).palette.primary.main,
      transform: 'rotate(0deg)',
      transition: 'transform var(--duration-base, 250ms) ease',

      '&.Mui-expanded': {
        transform: 'rotate(180deg)',
      },
    }),

    content: {
      // ✅ Conteúdo do header
      margin: 'var(--spacing-scale-3quarter, 12px) 0',

      '&.Mui-expanded': {
        margin: 'var(--spacing-scale-3quarter, 12px) 0',
      },

      '& .MuiTypography-root': {
        fontSize: 'var(--font-size-scale-base, 1rem)',
        fontWeight: 'var(--font-weight-semi-bold, 600)',
        color: 'var(--color, #333333)',
        lineHeight: 'var(--font-line-height-medium, 1.5)',
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      },
    },
  },
}

export const MuiAccordionDetailsOverrides: Components['MuiAccordionDetails'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // ✅ Conteúdo expandido
      padding: 'var(--spacing-scale-base, 1rem)',
      backgroundColor: 'var(--background, #ffffff)',
      borderTop: 'none',

      '& .MuiTypography-root': {
        fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
        lineHeight: 'var(--font-line-height-medium, 1.6)',
        color: 'var(--color, #333333)',
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      },

      // ✅ Links dentro do conteúdo - dinâmico por tema
      '& a': {
        color: (theme as Theme).palette.primary.main,
        textDecoration: 'none',
        transition: 'all var(--duration-quick, 150ms) ease',

        '&:hover': {
          textDecoration: 'underline',
          color: (theme as Theme).palette.primary.dark,
        },

        '&:focus-visible': {
          outline: `2px dashed ${(theme as Theme).palette.primary.main}`,
          outlineOffset: '2px',
          borderRadius: 'var(--surface-rounder-sm, 2px)',
        },
      },
    }),
  },
}
