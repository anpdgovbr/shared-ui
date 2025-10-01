'use client'
// src/theme/anpdThemeProvider.tsx
import 'dayjs/locale/pt-br'

import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { anpdTheme } from './anpdTheme'
import { animationTokens, stateTokens, surfaceTokens, zIndexTokens } from './foundations'

// Configura dayjs para pt-BR globalmente
dayjs.locale('pt-br')

/**
 * Tokens combinados usados para injetar variáveis CSS globais via GlobalStyles.
 *
 * Esses tokens reúnem superfícies, estados, animações e z-index para disponibilizar
 * as variáveis CSS em :root, permitindo que componentes e o tema consumam os mesmos valores.
 */
const customTokens = {
  ...surfaceTokens,
  ...stateTokens,
  ...animationTokens,
  ...zIndexTokens,
}

/**
 * Modo de exibição do provider.
 *
 * - 'theme': aplica o tema MUI (CSS-in-JS) fornecido por anpdTheme.
 * - 'css': evita o tema MUI e permite uso direto de classes/estilos CSS (modo estrito).
 */
type Mode = 'theme' | 'css'

/**
 * Forma do contexto do ANPDThemeProvider.
 *
 * - mode: modo atual do provider (theme | css).
 * - toggle: função para alternar entre os modos.
 */
interface ANPDThemeContextType {
  mode: Mode
  toggle: () => void
}

/**
 * Contexto React que expõe o modo e a função de alternância do tema.
 *
 * Use o hook `useANPDThemeMode` para acessar esse contexto de forma conveniente.
 */
const ANPDThemeContext = createContext<ANPDThemeContextType>({
  mode: 'theme',
  toggle: () => {},
})

/**
 * Hook para acessar o modo do tema e a função de alternância.
 *
 * Retorna o objeto do contexto contendo `mode` e `toggle`.
 *
 * @example
 * const { mode, toggle } = useANPDThemeMode()
 */
export const useANPDThemeMode = () => useContext(ANPDThemeContext)

/**
 * Provider que encapsula o ThemeProvider do MUI e injeta tokens globais.
 *
 * Comportamento:
 * - Envolve os filhos com ThemeProvider usando `anpdTheme`.
 * - Injeta `CssBaseline` e `GlobalStyles` com as variáveis definidas em `customTokens`.
 * - Fornece um contexto para alternar entre os modos 'theme' e 'css'.
 *
 * @param children - Conteúdo que será renderizado dentro do provider.
 * @returns JSX.Element que envolve os filhos com o tema e contexto do ANPD.
 */
export function ANPDThemeProvider({ children }: Readonly<PropsWithChildren>) {
  const [mode, setMode] = useState<Mode>('theme')

  const contextValue = useMemo(
    () => ({
      mode,
      toggle: () => setMode((prev) => (prev === 'theme' ? 'css' : 'theme')),
    }),
    [mode],
  )

  return (
    <ANPDThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={anpdTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <CssBaseline />
          <GlobalStyles
            styles={{
              ':root': customTokens,
            }}
          />
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </ANPDThemeContext.Provider>
  )
}
