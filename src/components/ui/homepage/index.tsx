'use client'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container, { type ContainerProps } from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import type { SxProps, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

import { GovBRButton } from '../govbr-button'
import type { GovBRButtonProps } from '../govbr-button/types'

/**
 * Representa uma ação de CTA usada nas seções do componente Homepage.
 * Extende as props do GovBRButton, mantendo `label` como texto obrigatório.
 */
export interface HomepageAction extends Omit<GovBRButtonProps, 'children'> {
  readonly label: string
}

/**
 * Props padrão utilizadas na raiz da homepage. Permite ajustar
 * container do MUI e espaçamento vertical entre seções.
 */
export interface HomepageRootProps extends Omit<ContainerProps, 'children'> {
  readonly children?: ReactNode
  readonly spacing?: number
}

/**
 * Configuração da seção hero (destaque) da homepage.
 */
export interface HomepageHeroProps {
  readonly eyebrow?: string
  readonly title: string
  readonly description?: string
  readonly highlight?: string
  readonly actions?: readonly HomepageAction[]
  readonly align?: 'left' | 'center'
  readonly maxDescriptionWidth?: number | string
  readonly backgroundGradient?: string
  readonly sx?: SxProps<Theme>
}

/**
 * Representa um card de destaque de recurso.
 */
export interface HomepageFeature {
  readonly icon?: ReactNode
  readonly title: string
  readonly description: string
}

export interface HomepageFeatureGridProps {
  readonly title?: string
  readonly subtitle?: string
  readonly features: readonly HomepageFeature[]
  readonly columns?: {
    readonly xs?: number
    readonly sm?: number
    readonly md?: number
    readonly lg?: number
  }
  readonly dense?: boolean
  readonly cardVariant?: 'outlined' | 'elevated'
  readonly sx?: SxProps<Theme>
}

/**
 * Métricas resumidas exibidas em cards numéricos.
 */
export interface HomepageMetric {
  readonly label: string
  readonly value: string | number
  readonly helperText?: string
}

export interface HomepageMetricsGridProps {
  readonly metrics: readonly HomepageMetric[]
  readonly title?: string
  readonly subtitle?: string
  readonly columns?: {
    readonly xs?: number
    readonly sm?: number
    readonly md?: number
  }
  readonly dense?: boolean
  readonly sx?: SxProps<Theme>
}

/**
 * Cartão informativo para reforçar mensagens adicionais.
 */
export interface HomepageHighlightCardProps {
  readonly title: string
  readonly description: string
  readonly icon?: ReactNode
  readonly actions?: readonly HomepageAction[]
  readonly variant?: 'neutral' | 'emphasis'
  readonly sx?: SxProps<Theme>
}

export interface HomepageFooterProps {
  readonly title?: string
  readonly description?: string
  readonly actions?: readonly HomepageAction[]
  readonly align?: 'left' | 'center'
  readonly sx?: SxProps<Theme>
}

export interface HomepageProps {
  readonly hero?: HomepageHeroProps
  readonly metrics?: HomepageMetricsGridProps
  readonly features?: HomepageFeatureGridProps
  readonly highlights?: readonly HomepageHighlightCardProps[]
  readonly footer?: HomepageFooterProps
  readonly containerProps?: Omit<HomepageRootProps, 'children'>
  readonly spacing?: number
}

function mergeSx(base: SxProps<Theme>, custom?: SxProps<Theme>): SxProps<Theme> {
  if (!custom) return base
  if (Array.isArray(custom)) {
    return [base, ...custom]
  }
  return [base, custom]
}

function renderActions(actions?: readonly HomepageAction[], align: 'left' | 'center' = 'left') {
  if (!actions || actions.length === 0) {
    return null
  }

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      justifyContent={align === 'center' ? 'center' : 'flex-start'}
      alignItems={{ xs: 'stretch', sm: 'center' }}
      sx={{ width: '100%' }}
    >
      {actions.map((action, index) => {
        const { label, ...buttonProps } = action
        return (
          <GovBRButton key={`${label}-${index}`} {...buttonProps}>
            {label}
          </GovBRButton>
        )
      })}
    </Stack>
  )
}

export function HomepageRoot(props: HomepageRootProps) {
  const { spacing = 6, children, sx, maxWidth = 'lg', ...rest } = props
  const mergedSx = mergeSx(
    (theme: Theme) => ({
      py: { xs: theme.spacing(4), md: theme.spacing(6) },
    }),
    sx,
  )

  return (
    <Container maxWidth={maxWidth} {...rest} sx={mergedSx}>
      <Stack spacing={spacing}>{children}</Stack>
    </Container>
  )
}

export function HomepageHero(props: HomepageHeroProps) {
  const {
    eyebrow,
    title,
    description,
    highlight,
    actions,
    align = 'center',
    maxDescriptionWidth = 760,
    backgroundGradient,
    sx,
  } = props
  const mergedSx = mergeSx((theme: Theme) => {
    const defaultGradient = `linear-gradient(135deg, ${theme.palette.primary.main}1A, ${theme.palette.secondary.main}1A)`
    return {
      textAlign: { xs: 'left', md: align },
      py: { xs: theme.spacing(5), md: theme.spacing(8) },
      px: { xs: theme.spacing(2), md: theme.spacing(4) },
      borderRadius: theme.shape.borderRadius * 2,
      background: backgroundGradient || defaultGradient,
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'flex-start', md: align === 'center' ? 'center' : 'flex-start' },
      gap: theme.spacing(2),
    }
  }, sx)

  return (
    <Box sx={mergedSx}>
      {highlight ? (
        <Typography
          variant="overline"
          color="primary"
          sx={{ fontWeight: 700, letterSpacing: '0.08em' }}
        >
          {highlight}
        </Typography>
      ) : null}

      {eyebrow ? (
        <Typography variant="subtitle2" color="text.secondary">
          {eyebrow}
        </Typography>
      ) : null}

      <Typography
        variant="h3"
        component="h1"
        sx={(theme) => ({
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '3rem' },
          color: theme.palette.primary.main,
          textAlign: { xs: 'left', md: align },
        })}
      >
        {title}
      </Typography>

      {description ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: maxDescriptionWidth,
            textAlign: { xs: 'left', md: align },
          }}
        >
          {description}
        </Typography>
      ) : null}

      {renderActions(actions, align)}
    </Box>
  )
}

export function HomepageMetricsGrid(props: HomepageMetricsGridProps) {
  const { metrics, title, subtitle, columns, dense = false, sx } = props
  if (!metrics || metrics.length === 0) {
    return null
  }

  const gridColumns = {
    xs: Math.min(columns?.xs ?? metrics.length, metrics.length, 2),
    sm: Math.min(columns?.sm ?? metrics.length, metrics.length, 3),
    md: Math.min(columns?.md ?? metrics.length, metrics.length, 4),
  }

  const mergedSx = mergeSx(
    (theme: Theme) => ({
      display: 'grid',
      gap: dense ? theme.spacing(2) : theme.spacing(3),
      gridTemplateColumns: {
        xs: `repeat(${gridColumns.xs || 1}, minmax(0, 1fr))`,
        sm: `repeat(${gridColumns.sm || gridColumns.xs || 1}, minmax(0, 1fr))`,
        md: `repeat(${gridColumns.md || gridColumns.sm || gridColumns.xs || 1}, minmax(0, 1fr))`,
      },
    }),
    sx,
  )

  return (
    <Stack spacing={2}>
      {title ? (
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      ) : null}
      {subtitle ? (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      ) : null}

      <Box sx={mergedSx}>
        {metrics.map((metric) => (
          <Paper
            key={`${metric.label}-${metric.value}`}
            variant="outlined"
            sx={(theme) => ({
              p: dense ? theme.spacing(2) : theme.spacing(3),
              textAlign: 'center',
              borderRadius: theme.shape.borderRadius * 1.5,
            })}
          >
            <Typography
              variant="h4"
              sx={(theme) => ({
                fontWeight: 700,
                color: theme.palette.primary.main,
              })}
            >
              {metric.value}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 0.5 }}>
              {metric.label}
            </Typography>
            {metric.helperText ? (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {metric.helperText}
              </Typography>
            ) : null}
          </Paper>
        ))}
      </Box>
    </Stack>
  )
}

export function HomepageFeatureGrid(props: HomepageFeatureGridProps) {
  const { title, subtitle, features, columns, dense = false, cardVariant = 'outlined', sx } = props

  if (!features || features.length === 0) {
    return null
  }

  const columnCounts = {
    xs: Math.max(columns?.xs ?? 1, 1),
    sm: columns?.sm ?? Math.min(2, features.length),
    md: columns?.md ?? Math.min(2, features.length),
    lg: columns?.lg ?? Math.min(3, features.length),
  }

  const mergedSx = mergeSx(
    (theme: Theme) => ({
      display: 'grid',
      gap: dense ? theme.spacing(2) : theme.spacing(3),
      gridTemplateColumns: {
        xs: `repeat(${columnCounts.xs}, minmax(0, 1fr))`,
        sm: `repeat(${columnCounts.sm}, minmax(0, 1fr))`,
        md: `repeat(${columnCounts.md}, minmax(0, 1fr))`,
        lg: `repeat(${columnCounts.lg}, minmax(0, 1fr))`,
      },
    }),
    sx,
  )

  return (
    <Stack spacing={2}>
      {title ? (
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 600 }}>
          {title}
        </Typography>
      ) : null}
      {subtitle ? (
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          {subtitle}
        </Typography>
      ) : null}

      <Box sx={mergedSx}>
        {features.map((feature) => (
          <Card
            key={feature.title}
            variant={cardVariant === 'elevated' ? 'elevation' : 'outlined'}
            elevation={cardVariant === 'elevated' ? 2 : 0}
            sx={(theme) => ({
              height: '100%',
              textAlign: 'center',
              borderRadius: theme.shape.borderRadius * 1.5,
            })}
          >
            <CardContent sx={{ p: dense ? 2 : 3 }}>
              {feature.icon ? <Box sx={{ mb: 1.5 }}>{feature.icon}</Box> : null}
              <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  )
}

export function HomepageHighlightCard(props: HomepageHighlightCardProps) {
  const { title, description, icon, actions, variant = 'neutral', sx } = props
  const mergedSx = mergeSx(
    (theme: Theme) => ({
      p: 3,
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: 2,
      alignItems: { xs: 'flex-start', sm: 'center' },
      backgroundColor:
        variant === 'emphasis'
          ? `${theme.palette.primary.main}08`
          : theme.palette.background.default,
      borderLeft:
        variant === 'emphasis'
          ? `4px solid ${theme.palette.primary.main}`
          : `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius * 1.5,
    }),
    sx,
  )

  return (
    <Paper variant="outlined" sx={mergedSx}>
      {icon ? <Box sx={{ fontSize: 0 }}>{icon}</Box> : null}

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {actions ? <Box sx={{ mt: 2 }}>{renderActions(actions)}</Box> : null}
      </Box>
    </Paper>
  )
}

export function HomepageFooter(props: HomepageFooterProps) {
  const { title, description, actions, align = 'center', sx } = props
  const mergedSx = mergeSx(
    (theme: Theme) => ({
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1.5),
      alignItems: align === 'center' ? 'center' : 'flex-start',
    }),
    sx,
  )

  return (
    <Box sx={mergedSx}>
      {title ? (
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      ) : null}
      {description ? (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          {description}
        </Typography>
      ) : null}

      {renderActions(actions, align)}
    </Box>
  )
}

export function Homepage(props: HomepageProps) {
  const { hero, metrics, features, highlights, footer, spacing, containerProps } = props

  return (
    <HomepageRoot spacing={spacing} {...containerProps}>
      {hero ? <HomepageHero {...hero} /> : null}
      {metrics ? <HomepageMetricsGrid {...metrics} /> : null}
      {features ? <HomepageFeatureGrid {...features} /> : null}
      {highlights && highlights.length > 0 ? (
        <Stack spacing={2}>
          {highlights.map((highlight, index) => (
            <HomepageHighlightCard key={`${highlight.title}-${index}`} {...highlight} />
          ))}
        </Stack>
      ) : null}
      {footer ? <HomepageFooter {...footer} /> : null}
    </HomepageRoot>
  )
}
