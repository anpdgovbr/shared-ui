// src/theme/components/TextField.ts
import type { Components, Theme } from '@mui/material/styles'

/**
 * Overrides de tema para o componente TextField do MUI usados no govbrTheme.
 *
 * Este objeto implementa a tipagem Components['MuiTextField'] e centraliza:
 * - Propriedades padrão (defaultProps) para campos de formulário (outlined, medium).
 * - Regras de estilo (styleOverrides) que mapeiam tokens CSS do Gov.br DS para os slots do MUI.
 * - Variantes (variants) específicas como tamanho pequeno, campo de busca, senha e obrigatório.
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
    root: ({ theme }) => ({
      // Margem entre campos
      marginBottom: 'var(--spacing-scale-2xh, 1.714rem)', // 24px

      // Labels flutuantes
      '& .MuiInputLabel-root': {
        fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
        fontWeight: 'var(--font-weight-medium, 500)', // 500
        color: 'var(--color, #333333)',
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',

        // Label focada
        '&.Mui-focused': {
          color: (theme as Theme).palette.primary.main,
          fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
        },

        // Label com erro
        '&.Mui-error': {
          color: 'var(--feedback-error-vivid, #D04F4F)',
        },
      },

      // Input base
      '& .MuiOutlinedInput-root': {
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
        fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
        lineHeight: 'var(--font-line-height-medium, 1.5)', // 1.45
        borderRadius: 'var(--surface-rounder-md, 8px)', // 8px
        backgroundColor: 'var(--background, #ffffff)',

        // Bordas padrão
        '& fieldset': {
          borderColor: 'var(--gray-40, #999999)',
          borderWidth: '1px',
        },

        // Estado de hover
        '&:hover fieldset': {
          borderColor: 'var(--gray-60, #777777)',
        },

        // Estado focado: priorizar token GovBR --focus (fallback amarelo)
        '&.Mui-focused fieldset': {
          borderColor: 'var(--focus, #ffd200)',
          borderWidth: '2px',
          boxShadow: 'none',
        },

        // Estado de erro
        '&.Mui-error fieldset': {
          borderColor: 'var(--feedback-error-vivid, #D04F4F)',
          borderWidth: '2px',
        },

        // Estado desabilitado
        '&.Mui-disabled': {
          backgroundColor: 'var(--gray-10, #eeeeee)',

          '& fieldset': {
            borderColor: 'var(--gray-20, #cccccc)',
          },

          '& .MuiOutlinedInput-input': {
            color: 'var(--gray-60, #777777)',
            WebkitTextFillColor: 'var(--gray-60, #777777)',
          },
        },

        // Input interno
        '& .MuiOutlinedInput-input': {
          padding: 'var(--spacing-scale-1xh, 0.75rem) var(--spacing-scale-2x, 2rem)', // 12px 16px
          color: 'var(--color, #333333)',

          // Placeholder
          '&::placeholder': {
            color: 'var(--gray-60, #777777)',
            opacity: 1,
          },
        },

        // Ícones
        '& .MuiInputAdornment-root': {
          color: 'var(--gray-60, #777777)',

          // Ícone no estado focado
          '.Mui-focused &': {
            color: (theme as Theme).palette.primary.main,
          },

          // Ícone no estado de erro
          '.Mui-error &': {
            color: 'var(--feedback-error-vivid, #D04F4F)',
          },
        },
      },

      // Helper text
      '& .MuiFormHelperText-root': {
        fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
        marginTop: 'var(--spacing-scale-half, 0.5rem)', // 4px
        marginLeft: 'var(--spacing-scale-base, 1rem)', // 8px
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
        color: 'var(--gray-70, #666666)',

        // Helper text de erro
        '&.Mui-error': {
          color: 'var(--feedback-error-vivid, #D04F4F)',
        },
      },
    }),
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
      style: ({ theme }) => ({
        '& .MuiOutlinedInput-root': {
          '& .MuiInputAdornment-positionEnd': {
            '& .MuiIconButton-root': {
              color: 'var(--gray-60, #777777)',

              '&:hover': {
                backgroundColor: 'var(--gray-10, #eeeeee)',
                color: (theme as Theme).palette.primary.main,
              },
            },
          },
        },
      }),
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
