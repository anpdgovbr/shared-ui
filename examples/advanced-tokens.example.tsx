/**
 * Exemplo demonstrando os novos tokens avançados do GovBR Design System
 *
 * Este exemplo mostra como usar:
 * - Tokens de superfície (bordas, opacidades, arredondamentos)
 * - Estados interativos avançados (hover effects, pressed effects)
 * - Sistema de z-index organizado
 * - Animações e transições
 */

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Exemplo de componente usando tokens de superfície
const SurfaceCard = styled(Card)(() => ({
  borderRadius: 'var(--surface-rounder-lg, 16px)',
  border: 'var(--surface-width-sm, 1px) solid var(--gray-20, #c5c5f3)',
  boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))',
  transition: 'var(--duration-base, 250ms) var(--animation-easing-base, ease-out)',

  '&:hover': {
    transform: 'translateY(var(--surface-offset-sm, 2px))',
    boxShadow: 'var(--shadow-level-4, 0px 12px 24px rgba(0, 0, 0, 0.18))',
  },
}))

// Exemplo de botão com estados avançados
const AdvancedButton = styled(Button)(() => ({
  borderRadius: 'var(--surface-rounder-pill, 100em)',
  transition: 'var(--duration-quick, 150ms) var(--animation-easing-base, ease-out)',

  '&:hover': {
    backgroundImage: 'var(--hover-effect)',
    transform: 'translateY(calc(-1 * var(--surface-offset-xs, 1px)))',
  },

  '&:active': {
    backgroundImage: 'var(--pressed-effect)',
    transform: 'scale(var(--surface-opacity-xl, 0.95))',
  },

  '&:focus-visible': {
    outlineColor: 'var(--focus-color, var(--gold-vivid-40))',
    outlineStyle: 'var(--focus-style, dashed)',
    outlineWidth: 'var(--focus-width, var(--surface-width-lg))',
    outlineOffset: 'var(--focus-offset, var(--spacing-scale-half))',
  },
}))

// Exemplo de item interativo com drag states
const DraggableItem = styled(Box)(() => ({
  padding: 'var(--spacing-scale-2x, 16px)',
  borderRadius: 'var(--surface-rounder-md, 8px)',
  border: 'var(--surface-width-sm, 1px) solid var(--gray-20, #c5c5f3)',
  backgroundColor: 'var(--background, #ffffff)',
  cursor: 'var(--draggable-cursor, grab)',
  transition: 'var(--duration-quick, 150ms) var(--animation-easing-base, ease-out)',

  '&:hover': {
    boxShadow: 'var(--shadow-level-3, 0px 8px 16px rgba(0, 0, 0, 0.15))',
  },

  '&[data-dragging="true"]': {
    borderColor: 'var(--ondrag-border-color, var(--interactive))',
    borderWidth: 'var(--ondrag-border-width, var(--surface-width-md))',
    boxShadow: `0 var(--surface-offset-md, 4px) var(--ondrag-shadow-blur, var(--surface-blur-lg)) rgba(var(--interactive-rgb), var(--surface-opacity-sm))`,
    opacity: 'var(--ondrag-opacity, var(--surface-opacity-xl))',
    transform: 'var(--ondrag-rotate, -5deg)',
    cursor: 'var(--ondrag-cursor, grabbing)',
  },
}))

// Exemplo de notificação com z-index de notificação
const NotificationToast = styled(Box)(() => ({
  position: 'fixed',
  top: 'var(--spacing-scale-2x, 16px)',
  right: 'var(--spacing-scale-2x, 16px)',
  padding: 'var(--spacing-scale-2x, 16px)',
  borderRadius: 'var(--surface-rounder-md, 8px)',
  backgroundColor: 'var(--success, #168821)',
  color: 'var(--color-dark, #ffffff)',
  zIndex: 'var(--z-index-layer-3, 3000)',

  // Animação de entrada
  animation:
    'slideInRight var(--duration-base, 250ms) var(--animation-easing-decelerate, ease-out)',

  '@keyframes slideInRight': {
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
}))

export function AdvancedTokensExample() {
  return (
    <Stack spacing={4} padding={4}>
      <Typography variant="h4" gutterBottom>
        Novos Tokens Avançados do GovBR DS
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Esta demonstração mostra os novos tokens de superfície, estados interativos, z-index e
        animações baseados no design system oficial @govbr-ds/core.
      </Typography>

      {/* Exemplo de Cards com superfície */}
      <Stack spacing={2}>
        <Typography variant="h6">
          Tokens de Superfície (bordas, arredondamentos, opacidades)
        </Typography>

        <SurfaceCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Card com Tokens de Superfície
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Este card usa tokens de arredondamento (--surface-rounder-lg), bordas
              (--surface-width-sm) e animações de hover com offset.
            </Typography>
          </CardContent>
        </SurfaceCard>
      </Stack>

      {/* Exemplo de Botões com Estados Avançados */}
      <Stack spacing={2}>
        <Typography variant="h6">Estados Interativos Avançados</Typography>

        <Stack direction="row" spacing={2}>
          <AdvancedButton variant="contained">Hover & Focus Effects</AdvancedButton>

          <AdvancedButton variant="outlined">Advanced States</AdvancedButton>
        </Stack>

        <Typography variant="caption" color="text.secondary">
          Experimente hover, focus (Tab) e clique nos botões para ver os efeitos avançados.
        </Typography>
      </Stack>

      {/* Exemplo de Item Arrastável */}
      <Stack spacing={2}>
        <Typography variant="h6">Estados de Drag & Drop</Typography>

        <DraggableItem>
          <Typography variant="body1" fontWeight="medium">
            🔄 Item Arrastável
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Este item tem estados especiais para drag & drop com cursor apropriado.
          </Typography>
        </DraggableItem>

        <Typography variant="caption" color="text.secondary">
          O item mostra diferentes estados visuais baseados em interação de drag & drop.
        </Typography>
      </Stack>

      {/* Lista de Tokens Disponíveis */}
      <Stack spacing={2}>
        <Typography variant="h6">Tokens CSS Disponíveis</Typography>

        <Box
          sx={{
            padding: 2,
            borderRadius: 'var(--surface-rounder-md)',
            backgroundColor: 'var(--gray-5, #f6f6f6)',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            Superfície:
          </Typography>
          <Typography variant="body2" component="div">
            --surface-width-sm/md/lg/xl
            <br />
            --surface-rounder-sm/md/lg/xl/pill/circle
            <br />
            --surface-opacity-xs/sm/md/lg/xl
            <br />
            --surface-blur-sm/md/lg/xl
            <br />
            --surface-offset-none/xs/sm/md/lg/xl
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            Estados:
          </Typography>
          <Typography variant="body2" component="div">
            --hover-light/dark, --pressed-light/dark
            <br />
            --focus-style/width/offset/color
            <br />
            --active, --selected, --on, --off, --disabled
            <br />
            --hover-effect, --pressed-effect
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            Z-Index & Animação:
          </Typography>
          <Typography variant="body2" component="div">
            --z-index-layer-0/1/2/3/4/5
            <br />
            --duration-instant/quick/base/slow/slowest
            <br />
            --animation-easing-base/accelerate/decelerate
          </Typography>
        </Box>
      </Stack>

      {/* Notificação de exemplo */}
      <NotificationToast>
        <Typography variant="body2" fontWeight="medium">
          ✅ Tokens avançados carregados com sucesso!
        </Typography>
      </NotificationToast>
    </Stack>
  )
}

export default AdvancedTokensExample
