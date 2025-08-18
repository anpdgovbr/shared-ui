// src/theme/foundations/palette.ts
import { PaletteOptions } from '@mui/material/styles'

import { muiPalette } from './paletteValues'

/**
 * Paleta de cores baseada nos tokens do GovBR Design System
 *
 * ESTRATÉGIA 2: Usa valores HEX diretos para evitar erros do MUI
 * - O MUI não consegue processar CSS variables em funções como alpha()
 * - Esta versão usa valores estáticos que são processados corretamente
 * - CSS variables estão disponíveis via GlobalStyles no GovBRThemeProvider
 *
 * Referência: @govbr-ds/core/dist/core-tokens.min.css
 */
export const palette: PaletteOptions = muiPalette
