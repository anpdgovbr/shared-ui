'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'

import type { LoadingAnimationProps } from './types'

const MAX_RELOAD_ATTEMPTS = 3

// Skeleton loading para modais - SE ADAPTA AO CONTAINER
function SkeletonLoading({
  text,
  progress,
  showProgress = true,
}: {
  text: string
  progress?: number
  showProgress?: boolean
}) {
  const hasProgress = typeof progress === 'number'
  const clampedProgress = hasProgress ? Math.max(0, Math.min(100, Math.round(progress!))) : 0

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(3px)',
        borderRadius: 'inherit',
        zIndex: 1400,
        minHeight: 120, // Altura mínima para não ficar muito pequeno
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant={hasProgress ? 'determinate' : 'indeterminate'}
          value={hasProgress ? clampedProgress : undefined}
          size={48}
          thickness={4}
          sx={{
            color: 'primary.main',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
          }}
        />
        {hasProgress && showProgress && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.primary"
              sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}
            >
              {clampedProgress}%
            </Typography>
          </Box>
        )}
      </Box>
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          textAlign: 'center',
          color: 'text.primary',
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

// Strict Gov.br DS Loading - renderização HTML pura
function StrictGovBRLoading({
  size = 'medium',
  progress,
  progressLabel,
  className,
  text,
}: {
  size?: 'small' | 'medium' | 'large'
  progress?: number
  progressLabel?: string
  className?: string
  text?: string
}) {
  const classes = `br-loading ${size !== 'medium' ? size : ''} ${className || ''}`.trim()

  // Loading com progresso (Gov.br DS)
  if (typeof progress === 'number') {
    const clampedProgress = Math.max(0, Math.min(100, Math.round(progress)))
    const ariaLabel = progressLabel || text || `carregando ${clampedProgress}%`

    return (
      <div
        className={classes}
        data-progress={clampedProgress}
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
      >
        <div className="br-loading-mask full">
          <div className="br-loading-fill"></div>
        </div>
        <div className="br-loading-mask">
          <div className="br-loading-fill"></div>
        </div>
      </div>
    )
  }

  // Loading indeterminado
  return <div className={classes} role="progressbar" aria-label={text || 'carregando'} />
}

// Componente de retry otimizado
function RetrySection({
  attempts,
  autoRetry,
  onManualRetry,
}: {
  attempts: number
  autoRetry: boolean
  onManualRetry: () => void
}) {
  if (attempts === 0) return null

  return (
    <>
      <Typography variant="caption" color="error" sx={{ mt: 1, textAlign: 'center' }}>
        Tentativa {attempts} de {MAX_RELOAD_ATTEMPTS}
      </Typography>
      {!autoRetry && attempts >= MAX_RELOAD_ATTEMPTS && (
        <Button
          variant="outlined"
          size="small"
          onClick={onManualRetry}
          sx={{
            mt: 2,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '0.875rem',
          }}
        >
          Tentar novamente
        </Button>
      )}
    </>
  )
}

// Componente de loading otimizado
function LoadingContent({
  text,
  attempts,
  autoRetry,
  enableRetryFeedback,
  onManualRetry,
  progress,
  showProgress,
}: {
  text: string
  attempts: number
  autoRetry: boolean
  enableRetryFeedback: boolean
  onManualRetry: () => void
  progress?: number
  showProgress?: boolean
}) {
  const hasProgress = typeof progress === 'number'
  const clampedProgress = hasProgress ? Math.max(0, Math.min(100, Math.round(progress!))) : 0

  return (
    <>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant={hasProgress ? 'determinate' : 'indeterminate'}
          value={hasProgress ? clampedProgress : undefined}
          size={60}
          thickness={3.6}
          sx={{
            color: 'primary.main',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          }}
        />
        {hasProgress && showProgress && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}
            >
              {clampedProgress}%
            </Typography>
          </Box>
        )}
      </Box>
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          textAlign: 'center',
          color: 'text.secondary',
          fontSize: '0.875rem',
        }}
      >
        {text}
      </Typography>
      {enableRetryFeedback && (
        <RetrySection attempts={attempts} autoRetry={autoRetry} onManualRetry={onManualRetry} />
      )}
    </>
  )
}

export function GovBRLoading({
  text = 'Carregando...',
  timeout = 4000,
  onTimeout,
  isVisible = true,
  autoRetry = false,
  enableRetryFeedback = false,
  variant = 'default',
  dismissible = false,
  onDismiss,
  disableEscapeKeyDown = false,
  strictgovbr = false,
  size = 'medium',
  progress,
  showProgress = true,
  progressLabel,
  className,
}: LoadingAnimationProps) {
  const [reloadAttempts, setReloadAttempts] = useState(0)

  function handleManualRetry() {
    window.location.reload()
  }

  useEffect(() => {
    if (!isVisible || reloadAttempts >= MAX_RELOAD_ATTEMPTS) return

    const timer = setTimeout(() => {
      if (typeof window === 'undefined' || !navigator.onLine) return

      if (enableRetryFeedback) {
        const next = reloadAttempts + 1
        setReloadAttempts(next)
        if (autoRetry && next <= MAX_RELOAD_ATTEMPTS) {
          setTimeout(() => window.location.reload(), 1000)
        }
      } else {
        if (onTimeout) {
          onTimeout()
        } else if (autoRetry) {
          window.location.reload()
        }
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [timeout, autoRetry, onTimeout, isVisible, reloadAttempts, enableRetryFeedback])

  // Handle ESC key press to dismiss modal
  useEffect(() => {
    if (!isVisible || !dismissible || disableEscapeKeyDown) return

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && onDismiss) {
        onDismiss()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isVisible, dismissible, disableEscapeKeyDown, onDismiss])

  if (!isVisible) return null

  // Modo Estrito: Renderização HTML pura com classes Gov.br DS
  if (strictgovbr) {
    return (
      <StrictGovBRLoading
        size={size}
        progress={progress}
        progressLabel={progressLabel}
        className={className}
        text={text}
      />
    )
  }

  // Handle backdrop click to dismiss modal
  function handleBackdropClick(event: React.MouseEvent) {
    if (dismissible && onDismiss && event.target === event.currentTarget) {
      onDismiss()
    }
  }

  // Handle content click to prevent event bubbling
  function handleContentClick(event: React.MouseEvent) {
    event.stopPropagation()
  }

  const commonProps = {
    text,
    attempts: reloadAttempts,
    autoRetry,
    enableRetryFeedback,
    onManualRetry: handleManualRetry,
    progress,
    showProgress,
  }

  // Variante skeleton - se adapta ao container pai
  if (variant === 'skeleton') {
    return <SkeletonLoading text={text} progress={progress} showProgress={showProgress} />
  }

  // Variante modal - overlay simples e elegante
  if (variant === 'modal') {
    return (
      <Box
        onClick={handleBackdropClick}
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 1300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(3px)',
          animation: 'fadeIn 0.2s ease-out',
          cursor: dismissible ? 'pointer' : 'default',
          '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
        role="alert"
        aria-live="assertive"
        aria-modal="true"
        aria-label={dismissible ? 'Clique fora para cancelar' : undefined}
      >
        <Box
          onClick={handleContentClick}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            minWidth: 200,
            maxWidth: '300px',
            border: '1px solid',
            borderColor: 'divider',
            cursor: 'default',
            animation: 'slideUp 0.3s ease-out',
            '@keyframes slideUp': {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <LoadingContent {...commonProps} />
        </Box>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
      role="alert"
      aria-live="assertive"
    >
      <LoadingContent {...commonProps} />
    </Box>
  )
}
