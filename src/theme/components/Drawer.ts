import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI Drawer para GovBR Design System.
 *
 * Aplica bordas arredondadas usando tokens CSS do Gov.br DS.
 *
 * @security Usa tokens CSS com fallbacks seguros
 * @see src/components/ui/side-menu - Principal consumidor deste override
 */
export const MuiDrawerOverrides: Components['MuiDrawer'] = {
  /**
   * Customizações de estilo aplicadas aos slots do Drawer.
   */
  styleOverrides: {
    /**
     * Slot paper do Drawer - aplica arredondamento via token Gov.br DS.
     * Token: --surface-rounder-md (fallback: 8px)
     */
    paper: {
      borderRadius: 'var(--surface-rounder-md, 8px)',
      // borderRight: 'none', // opcional
    },
  },
}
