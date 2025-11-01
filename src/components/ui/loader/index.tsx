'use client'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

export type LoaderProps = Readonly<{
  message?: string
  size?: number
  fullscreen?: boolean
}>

/**
 * Loader — Indicador de carregamento centralizado com mensagem opcional.
 */
export function Loader({ message, size = 24, fullscreen = false }: LoaderProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        py: fullscreen ? 6 : 3,
        minHeight: fullscreen ? '40vh' : undefined,
        textAlign: 'center',
      }}
    >
      <CircularProgress size={size} sx={{ mb: message ? 1 : 0 }} />
      {message && (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      )}
    </Box>
  )
}
