'use client'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export type Toast = Readonly<{
  message: string
  severity?: 'success' | 'info' | 'warning' | 'error'
}>
export interface ToasterCtx {
  show: (t: Toast) => void
}

const ToasterContext = createContext<ToasterCtx | undefined>(undefined)

/**
 * ToasterProvider — Provedor simples para toasts/snackbars (MUI Alert + Snackbar).
 */
export function ToasterProvider({ children }: Readonly<{ children: React.ReactNode }>) {
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
        autoHideDuration={3500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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

export function useToaster(): ToasterCtx {
  const ctx = useContext(ToasterContext)
  if (!ctx) throw new Error('useToaster must be used within ToasterProvider')
  return ctx
}
