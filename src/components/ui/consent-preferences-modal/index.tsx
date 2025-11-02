'use client'

import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect, useMemo, useState } from 'react'
import type {
  ConsentPreferences,
  ConsentTexts,
  CustomPreferencesModalProps,
} from 'react-lgpd-consent'

import { GovBRButton } from '../govbr-button'
import { GovBRSwitch } from '../govbr-switch'

export type CookieCategoryMetadata = Readonly<{
  id: string
  label: string
  description?: string
  required?: boolean
}>

export type GovBRCookiePreferencesModalProps = Readonly<
  CustomPreferencesModalProps & {
    categoriesMetadata?: CookieCategoryMetadata[]
    textsOverride?: Partial<ConsentTexts>
  }
>

/**
 * GovBRCookiePreferencesModal — Modal moderno para preferências de consentimento LGPD.
 */
export function GovBRCookiePreferencesModal({
  preferences,
  setPreferences,
  closePreferences,
  isModalOpen = false,
  texts,
  categoriesMetadata,
  textsOverride,
}: GovBRCookiePreferencesModalProps) {
  const [localPreferences, setLocalPreferences] = useState<ConsentPreferences>(preferences)

  useEffect(() => {
    if (isModalOpen) setLocalPreferences(preferences)
  }, [preferences, isModalOpen])

  const mergedTexts = useMemo(() => ({ ...texts, ...textsOverride }), [texts, textsOverride])

  const metadataIndex = useMemo(() => {
    if (!categoriesMetadata) return new Map<string, CookieCategoryMetadata>()
    return new Map(categoriesMetadata.map((item) => [item.id, item]))
  }, [categoriesMetadata])

  const handleToggle = (category: string, value: boolean) => {
    setLocalPreferences((prev) => ({ ...prev, [category]: value }))
  }

  const handleSave = () => {
    setPreferences(localPreferences)
    closePreferences()
  }

  const handleCancel = () => {
    setLocalPreferences(preferences)
    closePreferences()
  }

  if (!isModalOpen) return null

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleCancel}
      maxWidth="md"
      fullWidth
      aria-labelledby="govbr-cookie-preferences-title"
    >
      <DialogTitle id="govbr-cookie-preferences-title">
        {mergedTexts.modalTitle ?? 'Preferências de cookies'}
      </DialogTitle>

      <DialogContent dividers>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {mergedTexts.modalIntro ??
            'Personalize quais categorias de cookies deseja permitir. Cookies necessários permanecem ativos por padrão.'}
        </Typography>

        <Stack spacing={2} component="section" aria-label="Categorias de cookies">
          {Object.entries(localPreferences).map(([category, enabled]) => {
            const metadata = metadataIndex.get(category)
            const required = metadata?.required || category === 'necessary'
            return (
              <Box
                key={category}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={1.5}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {metadata?.label ?? category}
                    </Typography>
                    {metadata?.description ? (
                      <Typography variant="body2" color="text.secondary">
                        {metadata.description}
                      </Typography>
                    ) : null}
                  </Box>

                  <GovBRSwitch
                    label={
                      enabled ? (mergedTexts.accept ?? 'Ativo') : (mergedTexts.reject ?? 'Inativo')
                    }
                    switchProps={{
                      checked: enabled,
                      onChange: (_event, checked) => handleToggle(category, checked),
                      disabled: required,
                    }}
                  />
                </Stack>

                {required ? (
                  <Typography variant="caption" color="text.secondary">
                    {mergedTexts.necessaryAlwaysOn ??
                      'Esta categoria é obrigatória e permanece ativa.'}
                  </Typography>
                ) : null}
              </Box>
            )
          })}
        </Stack>
      </DialogContent>

      <DialogActions>
        <GovBRButton variant="text" onClick={handleCancel}>
          {mergedTexts.close ?? 'Cancelar'}
        </GovBRButton>
        <GovBRButton variant="contained" onClick={handleSave}>
          {mergedTexts.save ?? 'Salvar preferências'}
        </GovBRButton>
      </DialogActions>
    </Dialog>
  )
}
