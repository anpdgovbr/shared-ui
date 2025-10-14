// src/theme/components/ListItem.ts
import type { Components } from '@mui/material/styles'

/**
 * Ajusta o espaçamento dos itens de listas densas para evitar gaps excessivos
 */
export const MuiListItemOverrides: Components['MuiListItem'] = {
  styleOverrides: {
    root: ({ ownerState }) =>
      ownerState.dense
        ? {
            paddingTop: 'var(--spacing-scale-quarter, 0.25rem)', // 4px
            paddingBottom: 'var(--spacing-scale-quarter, 0.25rem)', // 4px
          }
        : {},
  },
}
