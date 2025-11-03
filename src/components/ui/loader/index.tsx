'use client'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

import type { LoaderProps } from './types'

/**
 * Loader - Indicador de carregamento simples e centralizado
 *
 * Componente customizado da ANPD para exibir estados de carregamento
 * dentro de containers, cards ou seções.
 *
 * **Diferença do GovBRLoading:**
 * - `Loader`: Simples, inline, para uso embutido
 * - `GovBRLoading`: Completo com modals, fullscreen, retry, progress
 *
 * **Características:**
 * - 🎨 Cores do tema selecionado automaticamente
 * - 📦 Leve e minimalista
 * - 🎯 Para uso inline dentro de componentes
 * - ♿ Acessível com aria-live
 *
 * **Nota:** Este é um componente específico da ANPD e não implementa modo estrito
 * (`strictgovbr`) pois é uma utilidade simples.
 *
 * @param props - LoaderProps
 *
 * @example
 * ```tsx
 * // Dentro de um Card
 * <Card>
 *   <Loader message="Carregando dados..." />
 * </Card>
 * ```
 *
 * @example
 * ```tsx
 * // Fullscreen para páginas
 * <Loader message="Processando..." fullscreen size={48} />
 * ```
 */
export function Loader({ message, size = 24, fullscreen = false }: Readonly<LoaderProps>) {
  return (
    <Box
      sx={(theme) => ({
        display: 'grid',
        placeItems: 'center',
        py: fullscreen ? theme.spacing(6) : theme.spacing(3),
        minHeight: fullscreen ? '40vh' : undefined,
        textAlign: 'center',
      })}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <CircularProgress
        size={size}
        sx={(theme) => ({
          mb: message ? theme.spacing(1) : 0,
          color: theme.palette.primary.main,
        })}
      />
      {message && (
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
          {message}
        </Typography>
      )}
    </Box>
  )
}

// Exports de tipos para consumidores externos
export type { LoaderProps } from './types'
