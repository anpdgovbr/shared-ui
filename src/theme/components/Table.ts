// src/theme/components/Table.ts
import type { Components, Theme } from '@mui/material/styles'

/**
 * Overrides para componentes de Table do MUI
 * Baseado nos padrões de tabela do GovBR Design System
 */

export const MuiTableOverrides: Components['MuiTable'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderCollapse: 'collapse',
      width: '100%',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',

      // Cabeçalho da tabela
      '& th': {
        backgroundColor: 'var(--gray-10, #eeeeee)', // Fundo alternativo
        fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
        fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
        padding: 'var(--spacing-scale-2x, 2rem) var(--spacing-scale-3x, 3rem)', // 16px 24px
        textAlign: 'left',
        borderBottom: '2px solid var(--gray-40, #999999)',
        color: 'var(--color, #333333)',
      },

      // Células da tabela
      '& td': {
        fontWeight: 'var(--font-weight-medium, 500)', // 500
        fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
        padding: 'var(--spacing-scale-2x, 2rem) var(--spacing-scale-3x, 3rem)', // 16px 24px
        borderBottom: '1px solid var(--gray-20, #cccccc)',
        color: 'var(--color, #333333)',
        lineHeight: 'var(--font-line-height-medium, 1.5)', // 1.45
      },

      // Hover nas linhas
      '& tbody tr:hover td': {
        backgroundColor: 'var(--gray-5, #f6f6f6)',
      },

      // Linha selecionada
      '& tr.Mui-selected': {
        backgroundColor: (theme as Theme).palette.primary.main, // Dinâmico: azul GovBR ou verde ANPD
        color: 'var(--color-lightest, #ffffff)',

        '& td': {
          color: 'var(--color-lightest, #ffffff)',
        },

        '&:hover td': {
          backgroundColor: (theme as Theme).palette.primary.dark, // Dinâmico: dark variant
        },
      },

      // Linhas alternadas (zebra striping)
      '& tbody tr:nth-of-type(even)': {
        backgroundColor: 'var(--gray-2, #f8f8f8)',
      },
    }),
  },
}

export const MuiTableHeadOverrides: Components['MuiTableHead'] = {
  styleOverrides: {
    root: {
      '& .MuiTableCell-head': {
        backgroundColor: 'var(--gray-10, #eeeeee)',
        fontWeight: 'var(--font-weight-bold, 700)', // 700
        textTransform: 'uppercase',
        fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
        letterSpacing: '0.05em',
      },
    },
  },
}

export const MuiTableBodyOverrides: Components['MuiTableBody'] = {
  styleOverrides: {
    root: {
      '& .MuiTableCell-body': {
        fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      },
    },
  },
}

export const MuiTableRowOverrides: Components['MuiTableRow'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '&:last-child td': {
        borderBottom: 'none',
      },

      // Estado de hover
      '&:hover': {
        backgroundColor: 'var(--gray-5, #f6f6f6)',
      },

      // Estado selecionado
      '&.Mui-selected': {
        backgroundColor: (theme as Theme).palette.primary.light, // Dinâmico: light variant

        '&:hover': {
          backgroundColor: (theme as Theme).palette.primary.main, // Dinâmico: azul GovBR ou verde ANPD
        },
      },
    }),

    // Cabeçalho
    head: {
      backgroundColor: 'var(--gray-10, #eeeeee)',

      '&:hover': {
        backgroundColor: 'var(--gray-10, #eeeeee)', // Não muda no hover
      },
    },
  },
}

export const MuiTableCellOverrides: Components['MuiTableCell'] = {
  styleOverrides: {
    root: {
      padding: 'var(--spacing-scale-2x, 2rem) var(--spacing-scale-3x, 3rem)', // 16px 24px
      borderBottom: '1px solid var(--gray-20, #cccccc)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    },

    // Células do cabeçalho
    head: {
      backgroundColor: 'var(--gray-10, #eeeeee)',
      fontWeight: 'var(--font-weight-bold, 700)', // 700
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderBottom: '2px solid var(--gray-40, #999999)',
      color: 'var(--color, #333333)',
    },

    // Células do corpo
    body: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      fontWeight: 'var(--font-weight-medium, 500)', // 500
      color: 'var(--color, #333333)',
    },

    // Tamanhos
    sizeSmall: {
      padding: 'var(--spacing-scale-1xh, 0.75rem) var(--spacing-scale-2x, 2rem)', // 12px 16px
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
    },

    // Alinhamentos
    alignLeft: {
      textAlign: 'left',
    },

    alignCenter: {
      textAlign: 'center',
    },

    alignRight: {
      textAlign: 'right',
    },

    alignJustify: {
      textAlign: 'justify',
    },
  },
}
