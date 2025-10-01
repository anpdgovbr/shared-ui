import { createTheme } from '@mui/material/styles'

import { anpdPalette } from './foundations/paletteValues'
import { govbrTheme } from './govbrTheme'

/**
 * Tema ANPD - Baseado no govbrTheme com cores institucionais da ANPD
 *
 * IMPORTANTE: Não podemos simplesmente fazer spread de govbrTheme e trocar a palette,
 * porque os styleOverrides com callbacks já foram "compilados" com o tema antigo.
 *
 * A solução correta é criar um novo tema que:
 * 1. Herda todas as configurações base do govbrTheme (typography, spacing, shape, etc)
 * 2. Aplica a nova palette (anpdPalette)
 * 3. Herda os components.styleOverrides do govbrTheme
 *
 * Com createTheme(), os callbacks serão re-executados com o novo tema.
 */

// Cria tema base com a palette ANPD, herdando configurações do govbrTheme
const anpdThemeBase = createTheme({
  // Herda configurações base
  typography: govbrTheme.typography,
  spacing: govbrTheme.spacing,
  shape: govbrTheme.shape,
  breakpoints: govbrTheme.breakpoints,
  transitions: govbrTheme.transitions,

  // Aplica a palette ANPD
  palette: anpdPalette,

  // Herda os components (os callbacks serão re-executados com a nova palette)
  components: govbrTheme.components,
})

export const anpdTheme = anpdThemeBase
