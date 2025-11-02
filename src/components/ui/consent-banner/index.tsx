'use client'

import Alert from '@mui/material/Alert'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

import { GovBRButton } from '../govbr-button'

export type CookieBannerTexts = Readonly<{
  bannerMessage: string
  acceptAll: string
  declineAll: string
  preferences?: string
  policyLink?: string
  policyLinkLabel?: string
}>

export type GovBRCookieBannerProps = Readonly<{
  open?: boolean
  onAcceptAll: () => void
  onRejectAll: () => void
  onOpenPreferences: () => void
  texts: CookieBannerTexts
  title?: ReactNode
  showBackdrop?: boolean
  disablePolicyLink?: boolean
}>

/**
 * GovBRCookieBanner — Banner bloqueante para consentimento LGPD.
 */
export function GovBRCookieBanner({
  open = true,
  onAcceptAll,
  onRejectAll,
  onOpenPreferences,
  texts,
  title = 'Este site utiliza cookies',
  showBackdrop = true,
  disablePolicyLink = false,
}: GovBRCookieBannerProps) {
  if (!open) return null

  return (
    <>
      {showBackdrop ? (
        <Backdrop
          open
          sx={{
            backgroundColor: alpha('#000', 0.8),
            zIndex: (theme) => theme.zIndex.modal,
          }}
        />
      ) : null}

      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'background.paper',
          borderTop: 1,
          borderColor: 'divider',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.15)',
          zIndex: (theme) => theme.zIndex.modal + 1,
          p: { xs: 2, sm: 3 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Stack spacing={2}>
            {title ? (
              <Typography variant="h6" component="h2">
                {title}
              </Typography>
            ) : null}

            <Alert
              severity="info"
              sx={{ bgcolor: 'transparent', p: 0, '& .MuiAlert-message': { width: '100%' } }}
            >
              <Typography variant="body2" color="text.secondary">
                {texts.bannerMessage}{' '}
                <strong>
                  Ao aceitar, você terá acesso a todas as funcionalidades do site. Se clicar em
                  &ldquo;Rejeitar Cookies&rdquo;, os cookies que não forem estritamente necessários
                  serão desativados.
                </strong>{' '}
                Para escolher quais quer autorizar, clique em &ldquo;Gerenciar cookies&rdquo;.{' '}
                {!disablePolicyLink && texts.policyLink ? (
                  <span>
                    Saiba mais em nossa{' '}
                    <Link href={texts.policyLink} target="_blank" rel="noopener">
                      {texts.policyLinkLabel ?? 'Declaração de Cookies'}
                    </Link>
                    .
                  </span>
                ) : null}
              </Typography>
            </Alert>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              justifyContent="flex-end"
              alignItems={{ xs: 'stretch', sm: 'center' }}
            >
              <GovBRButton
                variant="outlined"
                size="small"
                onClick={onOpenPreferences}
                sx={{ whiteSpace: 'nowrap', minWidth: 140, height: 32, lineHeight: '20px' }}
              >
                {texts.preferences ?? 'Gerenciar cookies'}
              </GovBRButton>

              <GovBRButton
                variant="outlined"
                size="small"
                color="error"
                onClick={onRejectAll}
                sx={{ whiteSpace: 'nowrap', minWidth: 140, height: 32, lineHeight: '20px' }}
              >
                {texts.declineAll}
              </GovBRButton>

              <GovBRButton
                variant="contained"
                size="small"
                color="primary"
                onClick={onAcceptAll}
                sx={{ whiteSpace: 'nowrap', minWidth: 140, height: 32, lineHeight: '20px' }}
              >
                {texts.acceptAll}
              </GovBRButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
