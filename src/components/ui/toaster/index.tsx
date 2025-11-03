'use client'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

import type { Toast, ToasterCtx, ToasterProviderProps } from './types'

const ToasterContext = createContext<ToasterCtx | undefined>(undefined)

/**
 * ToasterProvider - Provedor de contexto para toasts/snackbars
 *
 * Componente customizado da ANPD que fornece sistema de notificações toast.
 *
 * **Características:**
 * - 🎨 Cores do tema selecionado automaticamente
 * - ⏱️ Auto-hide configurável
 * - 📍 Posicionamento flexível
 * - 🎯 API simples via hook useToaster
 *
 * **Nota:** Este é um componente específico da ANPD e não implementa modo estrito
 * (`strictgovbr`) pois é uma utilidade de sistema.
 *
 * @param props - ToasterProviderProps
 *
 * @example
 * ```tsx
 * // Wrap your app with the provider
 * <ToasterProvider>
 *   <App />
 * </ToasterProvider>
 * ```
 *
 * @example
 * ```tsx
 * // Use in any component
 * function MyComponent() {
 *   const toaster = useToaster()
 *   return (
 *     <button onClick={() => toaster.show({ message: 'Sucesso!', severity: 'success' })}>
 *       Mostrar Toast
 *     </button>
 *   )
 * }
 * ```
 */
export function ToasterProvider({
  children,
  autoHideDuration = 3500,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
}: Readonly<ToasterProviderProps>) {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<Toast>({ message: '' })

  const show = useCallback((t: Toast) => {
    setState({ severity: t.severity ?? 'info', message: t.message })
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ show }), [show])

  return (
    <ToasterContext.Provider value={value}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={() => setOpen(false)}
        anchorOrigin={anchorOrigin}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={state.severity ?? 'info'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </ToasterContext.Provider>
  )
}

/**
 * useToaster - Hook para acessar a API de toasts
 *
 * @throws {Error} Se usado fora do ToasterProvider
 * @returns {ToasterCtx} API com método show para exibir toasts
 *
 * @example
 * ```tsx
 * const toaster = useToaster()
 * toaster.show({ message: 'Operação realizada!', severity: 'success' })
 * ```
 */
export function useToaster(): ToasterCtx {
  const ctx = useContext(ToasterContext)
  if (!ctx) throw new Error('useToaster must be used within ToasterProvider')
  return ctx
}

// Exports de tipos para consumidores externos
export type { Toast, ToasterCtx, ToasterProviderProps } from './types'
