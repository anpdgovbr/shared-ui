import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI Avatar para GovBR Design System
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ backgroundColor padrão com token GovBR
 * - ✅ color do texto/ícone
 * - ✅ fontWeight medium para iniciais
 * - ✅ fontFamily do design system
 * - ✅ colorDefault específico
 *
 * PROPRIEDADES COMUNS FALTANDO:
 * - ❌ diferentes tamanhos (small, medium, large)
 * - ❌ border/outline para contraste
 * - ❌ box-shadow para elevação
 * - ❌ hover effects
 * - ❌ estados online/offline
 * - ❌ grupo de avatares (overlap)
 * - ❌ fallback para imagens quebradas
 */
export const MuiAvatarOverrides: Components['MuiAvatar'] = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--gray-20, #cccccc)', // fundo neutro padrão
      color: 'var(--color, #333333)', // texto escuro para contraste
      fontWeight: 'var(--font-weight-medium, 500)', // 500 - destaque para iniciais
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',

      // PROPRIEDADES FALTANDO - Implementar se necessário:
      // fontSize: 'var(--font-size-scale-base, 1rem)', // tamanho da fonte das iniciais
      // border: '2px solid var(--background, #ffffff)', // contorno para contraste
      // boxShadow: 'var(--shadow-level-2, 0 2px 4px rgba(0,0,0,0.1))', // elevação sutil

      // Hover effect para avatares clicáveis
      // '&:hover': {
      //   transform: 'scale(1.05)',
      //   transition: 'transform 0.2s ease-in-out',
      // },

      // Fallback para imagens quebradas
      // '& img': {
      //   objectFit: 'cover',
      //   '&[src=""], &:not([src])': {
      //     display: 'none',
      //   },
      // },
    },
    colorDefault: {
      backgroundColor: 'var(--gray-20, #cccccc)', // mesmo fundo que root
      color: 'var(--gray-70, #666666)', // texto mais sutil para padrão

      // FALTANDO: diferentes variações de cor padrão baseadas em hash do nome
    },

    // SLOTS FALTANDO - Implementar se necessário:
    // small: {
    //   width: 'var(--spacing-scale-4x, 2rem)', // 32px
    //   height: 'var(--spacing-scale-4x, 2rem)',
    //   fontSize: 'var(--font-size-scale-down-01, 0.875rem)',
    // },
    // large: {
    //   width: 'var(--spacing-scale-8x, 4rem)', // 64px
    //   height: 'var(--spacing-scale-8x, 4rem)',
    //   fontSize: 'var(--font-size-scale-up-01, 1.125rem)',
    // },
    // square: {
    //   borderRadius: 'var(--surface-rounder-sm, 4px)',
    // },
    // rounded: {
    //   borderRadius: 'var(--surface-rounder-md, 8px)',
    // },
    // circular: {
    //   borderRadius: '50%', // já é o padrão do MUI
    // },

    // Estados especiais
    // img: {
    //   width: '100%',
    //   height: '100%',
    //   textAlign: 'center',
    //   objectFit: 'cover',
    //   color: 'transparent',
    //   textIndent: '10000px', // esconde alt text
    // },
    // fallback: {
    //   width: '75%',
    //   height: '75%',
    //   color: 'var(--gray-60, #888888)',
    // },
  },
}
