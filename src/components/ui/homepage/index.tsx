'use client'
import { mergeSx } from '@helpers/mergeSx'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import type { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { GovBRButton } from '../govbr-button'
import type {
  HomepageAction,
  HomepageFeatureGridProps,
  HomepageFooterProps,
  HomepageHeroProps,
  HomepageHighlightCardProps,
  HomepageMetricsGridProps,
  HomepageProps,
  HomepageRootProps,
} from './types'

/**
 * HomepageRoot - Container raiz da homepage
 *
 * Componente wrapper que fornece estrutura e espaçamento consistente
 * para as seções da homepage.
 *
 * @param props - HomepageRootProps
 */
export function HomepageRoot(props: Readonly<HomepageRootProps>) {
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

/**
 * HomepageHero - Seção hero/destaque da homepage
 *
 * Exibe título principal, descrição e CTAs com layout responsivo
 * e background customizável.
 *
 * @param props - HomepageHeroProps
 */
export function HomepageHero(props: Readonly<HomepageHeroProps>) {
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
      // Usar borderRadius do tema (6px por padrão)
      borderRadius: 1, // 1 = theme.shape.borderRadius (6px)
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
          sx={(theme) => ({
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: theme.palette.primary.main,
          })}
        >
          {highlight}
        </Typography>
      ) : null}

      {eyebrow ? (
        <Typography
          variant="subtitle2"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
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
          sx={(theme) => ({
            maxWidth: maxDescriptionWidth,
            textAlign: { xs: 'left', md: align },
            color: theme.palette.text.secondary,
          })}
        >
          {description}
        </Typography>
      ) : null}

      {renderActions(actions, align)}
    </Box>
  )
}

/**
 * Função auxiliar para renderizar lista de ações/botões
 * com layout responsivo e alinhamento configurável.
 */
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

/**
 * HomepageMetricsGrid - Grade de métricas/estatísticas
 *
 * Exibe métricas em cards numéricos com layout responsivo em grade.
 *
 * @param props - HomepageMetricsGridProps
 */
export function HomepageMetricsGrid(props: Readonly<HomepageMetricsGridProps>) {
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
        <Typography
          variant="h5"
          sx={(theme) => ({
            fontWeight: 600,
            color: theme.palette.text.primary,
          })}
        >
          {title}
        </Typography>
      ) : null}
      {subtitle ? (
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
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
              // Usar borderRadius do tema (6px padrão * 1.5 = 9px)
              borderRadius: 1.5, // 1.5 * theme.shape.borderRadius
              borderColor: theme.palette.divider,
              transition: theme.transitions.create(['box-shadow', 'transform'], {
                duration: theme.transitions.duration.short,
              }),
              '&:hover': {
                boxShadow: theme.shadows[2],
                transform: 'translateY(-2px)',
              },
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
            <Typography
              variant="subtitle2"
              sx={(theme) => ({
                fontWeight: 600,
                mt: 0.5,
                color: theme.palette.text.primary,
              })}
            >
              {metric.label}
            </Typography>
            {metric.helperText ? (
              <Typography
                variant="body2"
                sx={(theme) => ({
                  mt: 0.5,
                  color: theme.palette.text.secondary,
                })}
              >
                {metric.helperText}
              </Typography>
            ) : null}
          </Paper>
        ))}
      </Box>
    </Stack>
  )
}

/**
 * HomepageFeatureGrid - Grade de features/recursos
 *
 * Exibe recursos em cards com ícones, título e descrição.
 *
 * @param props - HomepageFeatureGridProps
 */
export function HomepageFeatureGrid(props: Readonly<HomepageFeatureGridProps>) {
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
        <Typography
          variant="h5"
          sx={(theme) => ({
            textAlign: 'center',
            fontWeight: 600,
            color: theme.palette.text.primary,
          })}
        >
          {title}
        </Typography>
      ) : null}
      {subtitle ? (
        <Typography
          variant="body2"
          sx={(theme) => ({
            textAlign: 'center',
            color: theme.palette.text.secondary,
          })}
        >
          {subtitle}
        </Typography>
      ) : null}

      <Box sx={mergedSx}>
        {features.map((feature) => (
          <Card
            key={feature.title}
            variant={cardVariant === 'elevated' ? 'elevation' : 'outlined'}
            elevation={cardVariant === 'elevated' ? 2 : 0}
            sx={{
              height: '100%',
              textAlign: 'center',
              // Usar borderRadius do tema (6px padrão * 1.5 = 9px)
              borderRadius: 1.5, // 1.5 * theme.shape.borderRadius
            }}
          >
            <CardContent sx={{ p: dense ? 2 : 3 }}>
              {feature.icon ? <Box sx={{ mb: 1.5 }}>{feature.icon}</Box> : null}
              <Typography
                variant="h6"
                sx={(theme) => ({
                  mb: 0.5,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                })}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={(theme) => ({
                  lineHeight: 1.6,
                  color: theme.palette.text.secondary,
                })}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  )
}

/**
 * HomepageHighlightCard - Card de destaque/informação
 *
 * Exibe informação importante com opção de ênfase visual.
 *
 * @param props - HomepageHighlightCardProps
 */
export function HomepageHighlightCard(props: Readonly<HomepageHighlightCardProps>) {
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
      // Usar borderRadius do tema (6px padrão * 1.5 = 9px)
      borderRadius: 1.5, // 1.5 * theme.shape.borderRadius
      transition: theme.transitions.create(['box-shadow', 'background-color'], {
        duration: theme.transitions.duration.short,
      }),
      '&:hover': {
        backgroundColor:
          variant === 'emphasis' ? `${theme.palette.primary.main}10` : theme.palette.action.hover,
      },
    }),
    sx,
  )

  return (
    <Paper variant="outlined" sx={mergedSx}>
      {icon ? <Box sx={{ fontSize: 0 }}>{icon}</Box> : null}

      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          sx={(theme) => ({
            fontWeight: 600,
            mb: 1,
            color: theme.palette.text.primary,
          })}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
          {description}
        </Typography>

        {actions ? <Box sx={{ mt: 2 }}>{renderActions(actions)}</Box> : null}
      </Box>
    </Paper>
  )
}

/**
 * HomepageFooter - Rodapé da homepage
 *
 * Seção final com título, descrição e call-to-actions.
 *
 * @param props - HomepageFooterProps
 */
export function HomepageFooter(props: Readonly<HomepageFooterProps>) {
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
        <Typography
          variant="h5"
          sx={(theme) => ({
            fontWeight: 600,
            color: theme.palette.text.primary,
          })}
        >
          {title}
        </Typography>
      ) : null}
      {description ? (
        <Typography
          variant="body1"
          sx={(theme) => ({
            maxWidth: 720,
            color: theme.palette.text.secondary,
          })}
        >
          {description}
        </Typography>
      ) : null}

      {renderActions(actions, align)}
    </Box>
  )
}

/**
 * Homepage - Componente customizado ANPD para páginas iniciais
 *
 * Componente de composição que permite criar homepages rapidamente
 * combinando seções hero, métricas, features, highlights e footer.
 *
 * **Características principais:**
 * - 🎨 Integrado ao govbrTheme.ts e tokens CSS do Gov.br DS
 * - 📦 Composição flexível - use apenas as seções necessárias
 * - 🎯 Design responsivo automático
 * - ♿ Estrutura HTML semântica e acessível
 * - 🧩 Customizável via props e sx
 *
 * **Nota:** Este é um componente específico da ANPD e não implementa modo estrito
 * (`strictgovbr`) pois não há equivalente no Gov.br DS oficial.
 *
 * @param props - HomepageProps
 *
 * @example
 * ```tsx
 * <Homepage
 *   hero={{
 *     title: "Bem-vindo à ANPD",
 *     description: "Sistema integrado de gestão",
 *     actions: [
 *       { label: "Começar", variant: "contained", color: "primary" },
 *       { label: "Saiba mais", variant: "outlined" }
 *     ]
 *   }}
 *   metrics={{
 *     title: "Estatísticas",
 *     metrics: [
 *       { label: "Usuários", value: "1.234" },
 *       { label: "Processos", value: "567" }
 *     ]
 *   }}
 * />
 * ```
 */
export function Homepage(props: Readonly<HomepageProps>) {
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

// Exports de tipos para consumidores externos
export type {
  HomepageAction,
  HomepageFeature,
  HomepageFeatureGridProps,
  HomepageFooterProps,
  HomepageHeroProps,
  HomepageHighlightCardProps,
  HomepageMetric,
  HomepageMetricsGridProps,
  HomepageProps,
  HomepageRootProps,
} from './types'
