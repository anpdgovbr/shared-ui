import { createTheme } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

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

// Cria overrides específicos do ANPD (apenas palette diferente)
const anpdOverrides = {
  palette: anpdPalette,
}

// Mescla govbrTheme com anpdOverrides usando deepmerge
const mergedTheme = deepmerge(govbrTheme, anpdOverrides)

// Cria tema final - createTheme() re-executa os callbacks com a nova palette
export const anpdTheme = createTheme(mergedTheme)
