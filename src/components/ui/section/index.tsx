'use client'
import { slugify } from '@helpers/slugify'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useCallback, useState } from 'react'

import type { SectionProps } from './types'

const SectionHeader = ({
  title,
  subtitle,
  actions,
  collapsible,
  isExpanded,
  onToggle,
  sectionId,
  divider,
  tooltip,
}: {
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  collapsible: boolean
  isExpanded: boolean
  onToggle: () => void
  sectionId?: string
  divider: boolean
  tooltip?: string
}) => (
  <Box
    component="header"
    sx={{
      display: 'flex',
      alignItems: { xs: 'flex-start', sm: 'center' },
      justifyContent: 'space-between',
      mb: 0,
      pb: divider ? 1 : 0,
      borderBottom: divider ? '1px solid' : 'none',
      borderColor: 'divider',
      gap: { xs: 1, sm: 2 },
      flexDirection: { xs: 'column', sm: 'row' },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {title && (
        <Tooltip title={tooltip} arrow>
          <Typography
            variant="h6"
            component="h2"
            id={sectionId}
            sx={{ fontWeight: 600, fontSize: { xs: '1.125rem', sm: '1.25rem' }, lineHeight: 1.3 }}
          >
            {title}
          </Typography>
        </Tooltip>
      )}
      {collapsible && (
        <IconButton
          onClick={onToggle}
          aria-label={isExpanded ? 'Recolher seção' : 'Expandir seção'}
          aria-expanded={isExpanded}
          aria-controls={sectionId ? `${sectionId}-content` : undefined}
          size="small"
        >
          <ExpandMoreIcon
            sx={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform .2s',
            }}
          />
        </IconButton>
      )}
    </Box>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      {subtitle && (
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            textAlign: { xs: 'left', sm: 'right' },
          })}
        >
          {subtitle}
        </Typography>
      )}
      {actions && <Box sx={{ display: 'flex', gap: 1 }}>{actions}</Box>}
    </Box>
  </Box>
)

/**
 * Section - Componente de seção flexível com título, ações e conteúdo
 *
 * Componente customizado da ANPD para organizar conteúdo em seções bem definidas.
 *
 * **Características:**
 * - 🎨 Cores do tema selecionado automaticamente
 * - 📱 Responsivo com breakpoints otimizados
 * - 🔄 Modo colapsável opcional
 * - ♿ Acessível com ARIA labels adequados
 * - 🎯 Header com título, subtitle e actions
 *
 * **Nota:** Este é um componente específico da ANPD e não implementa modo estrito
 * (`strictgovbr`) pois é uma utilidade de layout.
 *
 * @param props - SectionProps
 *
 * @example
 * ```tsx
 * // Seção básica com título
 * <Section title="Dados Pessoais">
 *   <Typography>Conteúdo da seção</Typography>
 * </Section>
 * ```
 *
 * @example
 * ```tsx
 * // Seção com actions e collapsible
 * <Section
 *   title="Configurações"
 *   subtitle="Última atualização: hoje"
 *   actions={<Button>Editar</Button>}
 *   collapsible
 *   divider
 * >
 *   <Typography>Configurações aqui</Typography>
 * </Section>
 * ```
 */
export function Section({
  title,
  subtitle,
  actions,
  children,
  elevation = 0,
  collapsible = false,
  defaultExpanded = true,
  sx,
  id,
  divider = false,
  tooltip,
}: Readonly<SectionProps>) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const handleToggle = useCallback(() => setIsExpanded((p) => !p), [])
  const hasHeader = title || subtitle || actions || collapsible
  const sectionId = id || (title ? slugify(title, 'section') : undefined)

  const ContentBox = (
    <Box
      id={sectionId ? `${sectionId}-content` : undefined}
      aria-labelledby={collapsible ? sectionId : undefined}
    >
      {children}
    </Box>
  )

  return (
    <Paper variant="outlined" elevation={elevation} sx={{ p: { xs: 1.5, sm: 2 }, ...sx }}>
      {hasHeader && (
        <SectionHeader
          title={title}
          subtitle={subtitle}
          actions={actions}
          collapsible={collapsible}
          isExpanded={isExpanded}
          onToggle={handleToggle}
          sectionId={sectionId}
          divider={divider}
          tooltip={tooltip}
        />
      )}
      {collapsible ? <Collapse in={isExpanded}>{ContentBox}</Collapse> : ContentBox}
    </Paper>
  )
}

// Exports de tipos para consumidores externos
export type { SectionProps } from './types'
