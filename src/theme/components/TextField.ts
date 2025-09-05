// src/theme/components/TextField.ts
import { Components } from '@mui/material/styles'

import { muiPalette } from '../foundations/paletteValues'

/**
 * Overrides de tema para o componente TextField do MUI usados no govbrTheme.
 *
 * Este objeto implementa a tipagem Components['MuiTextField'] e centraliza:
 * - Propriedades padrão (defaultProps) para campos de formulário (outlined, medium).
 * - Regras de estilo (styleOverrides) que mapeiam tokens CSS do Gov.br DS para os slots do MUI.
 * - Variantes (variants) específicas como tamanho pequeno, campo de busca, senha e obrigatório.
 *
 * OTIMIZAÇÕES APLICADAS (Setembro 2025):
 * - Margem entre campos reduzida para melhor composição
 * - Paddings otimizados para proporções modernas
 * - Border-width consistente (não aumenta no focus)
 * - Transições suaves adicionadas
 * - Estados hover/focus mais sutis
 *
 * Observações:
 * - Utilize tokens CSS via var(--token-name) em vez de valores fixos para garantir compatibilidade com o Gov.br DS.
 * - Este objeto deve ser mesclado no campo `components` do theme do MUI (govbrTheme).
 *
 * Exemplo de uso:
 * import { MuiTextFieldOverrides } from '@theme/components/TextField'
 * const theme = createTheme({ components: { MuiTextField: MuiTextFieldOverrides } })
 *
 * @remarks
 * Mantém a consistência visual e acessibilidade dos campos seguindo o padrão ANPD / Gov.br.
 *
 * @public
 */
export const MuiTextFieldOverrides: Components['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
    size: 'medium',
  },

  styleOverrides: {
    root: {
      // Margem entre campos otimizada (era 1.714rem/24px)
      marginBottom: 'var(--spacing-scale-base, 1rem)', // 16px

      // Labels flutuantes - peso reduzido
      '& .MuiInputLabel-root': {
        fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
        fontWeight: 'var(--font-weight-medium, 500)', // 500
        color: 'var(--color, #333333)',
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
        transition: 'color 0.2s ease-in-out, font-weight 0.2s ease-in-out',

        // Label focada - sem aumento de peso excessivo
        '&.Mui-focused': {
          color: muiPalette.primary.main, // #1351B4
          fontWeight: 'var(--font-weight-medium, 500)', // Mantém 500 (era 600)
        },

        // Label com erro
        '&.Mui-error': {
          color: 'var(--feedback-error-vivid, #D04F4F)',
        },
      },

      // Input base - proporções otimizadas
      '& .MuiOutlinedInput-root': {
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
        fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
        lineHeight: 1.5, // Legibilidade otimizada
        borderRadius: 'var(--surface-rounder-sm, 0.25rem)', // 4px (era 8px, mais sutil)
        backgroundColor: 'var(--background, #ffffff)',
        transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',

        // Bordas padrão
        '& fieldset': {
          borderColor: 'var(--gray-40, #999999)',
          borderWidth: '1px',
          transition: 'border-color 0.2s ease-in-out',
        },

        // Estado de hover - mais sutil
        '&:hover:not(.Mui-focused):not(.Mui-error) fieldset': {
          borderColor: 'var(--gray-60, #777777)',
        },

        // Estado focado - consistente, sem aumento de borda
        '&.Mui-focused fieldset': {
          borderColor: 'var(--interactive, #1351B4)', // Azul GovBR (não amarelo)
          borderWidth: '1px', // Mantém espessura (era 2px)
          boxShadow: '0 0 0 2px rgba(19, 81, 180, 0.2)', // Sombra sutil
        },

        // Estado de erro - consistente
        '&.Mui-error fieldset': {
          borderColor: 'var(--feedback-error-vivid, #D04F4F)',
          borderWidth: '1px', // Mantém espessura (era 2px)

          '&:focus, .Mui-focused': {
            boxShadow: '0 0 0 2px rgba(208, 79, 79, 0.2)',
          },
        },

        // Estado desabilitado - cores mais modernas
        '&.Mui-disabled': {
          backgroundColor: 'var(--gray-10, #f8f9fa)',

          '& fieldset': {
            borderColor: 'var(--gray-20, #e9ecef)',
          },

          '& .MuiOutlinedInput-input': {
            color: 'var(--gray-60, #6c757d)',
            WebkitTextFillColor: 'var(--gray-60, #6c757d)',
          },
        },

        // Input interno - padding otimizado
        '& .MuiOutlinedInput-input': {
          padding: 'var(--spacing-scale-3quarter, 0.75rem) var(--spacing-scale-base, 1rem)', // 12px 16px (era 2rem/32px)
          color: 'var(--color, #333333)',
          minHeight: '1.5rem', // Altura mínima para o texto

          // Placeholder - cor mais sutil
          '&::placeholder': {
            color: 'var(--gray-60, #6c757d)',
            opacity: 1,
          },
        },

        // Ícones - transições suaves
        '& .MuiInputAdornment-root': {
          color: 'var(--gray-60, #6c757d)',
          transition: 'color 0.2s ease-in-out',

          // Ícone no estado focado
          '.Mui-focused &': {
            color: muiPalette.primary.main, // #1351B4
          },

          // Ícone no estado de erro
          '.Mui-error &': {
            color: 'var(--feedback-error-vivid, #D04F4F)',
          },
        },
      },

      // Helper text - otimizado
      '& .MuiFormHelperText-root': {
        fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
        marginTop: 'var(--spacing-scale-quarter, 0.25rem)', // 4px (era 0.5rem)
        marginLeft: 'var(--spacing-scale-quarter, 0.25rem)', // 4px (era 1rem)
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
        color: 'var(--gray-70, #6c757d)',
        lineHeight: 1.4,

        // Helper text de erro
        '&.Mui-error': {
          color: 'var(--feedback-error-vivid, #D04F4F)',
        },
      },
    },
  },

  variants: [
    // Tamanho pequeno
    {
      props: { size: 'small' },
      style: {
        '& .MuiOutlinedInput-input': {
          padding: 'var(--spacing-scale-base, 1rem) var(--spacing-scale-1xh, 0.75rem)', // 8px 12px
        },
        '& .MuiInputLabel-root': {
          fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
        },
      },
    },

    // Campo de busca
    {
      props: { type: 'search' },
      style: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 'var(--surface-rounder-lg, 12px)', // 16px (mais arredondado)

          '& .MuiOutlinedInput-input': {
            paddingLeft: 'var(--spacing-scale-4x, 2.857rem)', // 32px (espaço para ícone)
          },
        },
      },
    },

    // Campo de senha
    {
      props: { type: 'password' },
      style: {
        '& .MuiOutlinedInput-root': {
          '& .MuiInputAdornment-positionEnd': {
            '& .MuiIconButton-root': {
              color: 'var(--gray-60, #777777)',

              '&:hover': {
                backgroundColor: 'var(--gray-10, #eeeeee)',
                color: muiPalette.primary.main, // #1351B4
              },
            },
          },
        },
      },
    },

    // Campo obrigatório
    {
      props: { required: true },
      style: {
        '& .MuiInputLabel-root::after': {
          content: '" *"',
          color: 'var(--feedback-error-vivid, #D04F4F)',
        },
      },
    },
  ],
}
