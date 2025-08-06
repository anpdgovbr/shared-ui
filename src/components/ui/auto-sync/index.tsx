// Componente de sincronização automática com visual adaptado ao GovBR-DS
// - Usa cores semânticas do tema (success, error, primary, grey)
// - Aplica padrão de foco do GovBR (outline dashed dourado)
// - Utiliza sistema de espaçamento e transições do Design System
// - Inclui hover effects consistentes com o padrão GovBR
// - Reutiliza o sistema de tamanhos do IconButton do MUI

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import SyncIcon from '@mui/icons-material/Sync'
import SyncDisabledIcon from '@mui/icons-material/SyncDisabled'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useTheme, keyframes } from '@mui/material/styles'
import { useCallback, useEffect, useState } from 'react'
import type { AutoSyncButtonProps } from './types'

export function AutoSyncButton<T = unknown>({
  onSync,
  syncInterval = 30000,
  maxErrorCount = 3,
  syncAnimationDuration = 3000,
  successDuration = 3000,
  errorDuration = 3000,
  tooltipEnabled = true,
  resetTrigger,
  disabled = false,
  size = 'medium', // Valor padrão conforme GovBR
}: Readonly<AutoSyncButtonProps<T>>) {
  const theme = useTheme()
  const [syncStatus, setSyncStatus] = useState<
    'idle' | 'loading' | 'success' | 'error' | 'critical-error'
  >('idle')
  const [isAutoSyncEnabled, setIsAutoSyncEnabled] = useState(true)
  const [errorCount, setErrorCount] = useState(0)

  // Definir animação de rotação usando o sistema de transições do GovBR
  const spinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `

  const scheduleStatusChange = useCallback(
    (intermediateStatus: 'success' | 'error', duration: number) => {
      setTimeout(() => setSyncStatus(intermediateStatus), syncAnimationDuration)
      setTimeout(() => setSyncStatus('idle'), syncAnimationDuration + duration)
    },
    [syncAnimationDuration]
  )

  const handleSync = useCallback(async () => {
    setSyncStatus('loading')
    try {
      await onSync()
      scheduleStatusChange('success', successDuration)
      setErrorCount(0)
    } catch (error) {
      scheduleStatusChange('error', errorDuration)
      setErrorCount(prev => prev + 1)
      console.error(error)
    }
  }, [onSync, scheduleStatusChange, successDuration, errorDuration])

  useEffect(() => {
    if (!isAutoSyncEnabled) return
    const interval = setInterval(handleSync, syncInterval)
    return () => clearInterval(interval)
  }, [isAutoSyncEnabled, handleSync, syncInterval])

  useEffect(() => {
    if (disabled) {
      setIsAutoSyncEnabled(false)
      setSyncStatus('critical-error')
    }
  }, [disabled])

  useEffect(() => {
    if (!disabled) {
      setIsAutoSyncEnabled(true)
      setSyncStatus('idle')
    }
  }, [disabled])

  useEffect(() => {
    if (errorCount >= maxErrorCount) {
      setIsAutoSyncEnabled(false)
      setSyncStatus('critical-error')
    }
  }, [errorCount, maxErrorCount])

  useEffect(() => {
    if (!isAutoSyncEnabled) return
    const interval = setInterval(handleSync, syncInterval)
    return () => clearInterval(interval)
  }, [isAutoSyncEnabled, handleSync, syncInterval, resetTrigger])

  const toggleAutoSync = () => {
    setIsAutoSyncEnabled(prev => !prev)
    if (!isAutoSyncEnabled) {
      setErrorCount(0)
      setSyncStatus('idle')
    }
  }

  const getIcon = () => {
    if (!isAutoSyncEnabled) return <SyncDisabledIcon />
    switch (syncStatus) {
      case 'success':
        return <CheckCircleIcon />
      case 'error':
        return <ErrorOutlineIcon />
      case 'critical-error':
        return <SyncDisabledIcon />
      default:
        return <SyncIcon />
    }
  }

  // Função auxiliar para converter hex em RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '19, 81, 180' // Fallback para primary do GovBR
  }

  const getColor = () => {
    switch (syncStatus) {
      case 'success':
        return theme.palette.success.main // GovBR green-cool-vivid-50
      case 'error':
        return theme.palette.error.main // GovBR red-vivid-50
      case 'critical-error':
        return theme.palette.grey[600] // GovBR gray-30
      default:
        return theme.palette.primary.main // GovBR blue-warm-vivid-70
    }
  }

  let tooltipTitle = ''
  if (tooltipEnabled) {
    if (disabled) {
      tooltipTitle = 'Sincronização desabilitada'
    } else if (syncStatus === 'critical-error') {
      tooltipTitle = 'Sincronização com erro crítico. Clique para tentar reativar.'
    } else if (isAutoSyncEnabled) {
      tooltipTitle = 'Sincronização automática ativada. Clique para desativar.'
    } else {
      tooltipTitle = 'Sincronização automática desativada. Clique para ativar.'
    }
  }

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        size={size} // Usar sistema de tamanhos do MUI (customizado no tema GovBR)
        disabled={disabled || syncStatus === 'loading'}
        aria-label="Auto Sync"
        onClick={toggleAutoSync}
        sx={{
          marginLeft: theme.spacing(1), // Usar spacing do tema
          color: getColor(),
          // Animação de loading usando as transições do GovBR
          animation:
            syncStatus === 'loading'
              ? `${spinAnimation} 1s ${theme.transitions.easing.easeInOut} infinite`
              : 'none',
          // Hover personalizado para este componente (sobrescreve o padrão)
          '&:hover:not(:disabled)': {
            backgroundImage: `linear-gradient(rgba(${hexToRgb(getColor())}, 0.16), rgba(${hexToRgb(getColor())}, 0.16))`,
          },
        }}
      >
        {getIcon()}
      </IconButton>
    </Tooltip>
  )
}
