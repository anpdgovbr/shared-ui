/**
 * Declarações de tipo para componentes de tema
 *
 * Este arquivo resolve os problemas de tipagem implícita em callbacks de styleOverrides.
 * O MUI utiliza tipos complexos para inferir automaticamente o tipo correto do theme
 * baseado no contexto do componente.
 */

import type { Theme } from '@mui/material/styles'

/**
 * Tipo helper para callbacks de styleOverrides que recebem theme
 * Este tipo permite que o TypeScript infira corretamente sem exigir anotação explícita
 */
declare global {
  /**
   * Interface global para props de styleOverrides que incluem theme
   * Usada internamente pelo MUI para injetar o theme nos callbacks
   */
  interface StyleOverridesThemeProps {
    theme: Theme
  }
}

export {}
