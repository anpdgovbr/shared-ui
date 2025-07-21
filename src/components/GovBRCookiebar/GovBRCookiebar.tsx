import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Switch,
  Link,
  Slide,
  Paper,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import classNames from 'classnames'
import { SharedUIComponentProps } from 'src/types/SharedUIComponentProps'
import { GovBRButton } from '../GovBRButton/GovBRButton'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export interface CookieCategory {
  id: string
  name: string
  description: string
  required: boolean
  enabled: boolean
}

export interface GovBRCookiebarProps extends SharedUIComponentProps {
  /**
   * Controla se o cookiebar está visível
   */
  open?: boolean
  /**
   * Callback executado quando o usuário aceita todos os cookies
   */
  onAccept?: () => void
  /**
   * Callback executado quando o usuário rejeita cookies não essenciais
   */
  onReject?: () => void
  /**
   * Callback executado quando o usuário salva configurações personalizadas
   */
  onSave?: (categories: CookieCategory[]) => void
  /**
   * Callback executado quando o cookiebar é fechado
   */
  onClose?: () => void
  /**
   * Texto do botão "Aceitar"
   */
  acceptText?: string
  /**
   * Texto do botão "Rejeitar"
   */
  rejectText?: string
  /**
   * Texto do botão "Configurar"
   */
  configureText?: string
  /**
   * Texto do botão "Salvar configurações"
   */
  saveText?: string
  /**
   * Mensagem principal do cookiebar
   */
  message?: string
  /**
   * Link para a política de privacidade
   */
  privacyPolicyUrl?: string
  /**
   * Texto do link da política de privacidade
   */
  privacyPolicyText?: string
  /**
   * Categorias de cookies configuráveis
   */
  categories?: CookieCategory[]
  /**
   * Posição do cookiebar (topo ou rodapé)
   */
  position?: 'top' | 'bottom'
  /**
   * Versão compacta (apenas botão aceitar)
   */
  compact?: boolean
  /**
   * Classes CSS adicionais
   */
  className?: string
}

const defaultCategories: CookieCategory[] = [
  {
    id: 'essential',
    name: 'Cookies Essenciais',
    description: 'Necessários para o funcionamento básico do site',
    required: true,
    enabled: true,
  },
  {
    id: 'functional',
    name: 'Cookies Funcionais',
    description: 'Melhoram a funcionalidade e personalização do site',
    required: false,
    enabled: false,
  },
  {
    id: 'analytics',
    name: 'Cookies de Análise',
    description: 'Ajudam a entender como os visitantes interagem com o site',
    required: false,
    enabled: false,
  },
  {
    id: 'marketing',
    name: 'Cookies de Marketing',
    description: 'Utilizados para exibir anúncios relevantes',
    required: false,
    enabled: false,
  },
]

export const GovBRCookiebar: React.FC<Readonly<GovBRCookiebarProps>> = ({
  open = false,
  onAccept,
  onReject,
  onSave,
  onClose,
  acceptText = 'Aceitar todos',
  rejectText = 'Rejeitar',
  configureText = 'Configurar cookies',
  saveText = 'Salvar configurações',
  message = 'Este site utiliza cookies para melhorar sua experiência de navegação e fornecer funcionalidades personalizadas.',
  privacyPolicyUrl,
  privacyPolicyText = 'Política de Privacidade',
  categories = defaultCategories,
  position = 'bottom',
  compact = false,
  strictGovBr = false,
  className,
}) => {
  const [showSettings, setShowSettings] = useState(false)
  const [cookieCategories, setCookieCategories] = useState<CookieCategory[]>(categories)

  const handleAcceptAll = () => {
    const updatedCategories = cookieCategories.map(cat => ({ ...cat, enabled: true }))
    setCookieCategories(updatedCategories)
    onAccept?.()
    onClose?.()
  }

  const handleRejectAll = () => {
    const updatedCategories = cookieCategories.map(cat => ({
      ...cat,
      enabled: cat.required,
    }))
    setCookieCategories(updatedCategories)
    onReject?.()
    onClose?.()
  }

  const handleSaveSettings = () => {
    onSave?.(cookieCategories)
    onClose?.()
  }

  const handleCategoryToggle = (categoryId: string) => {
    setCookieCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId && !cat.required ? { ...cat, enabled: !cat.enabled } : cat
      )
    )
  }

  const cookiebarClasses = classNames(
    'govbr-cookiebar',
    {
      'br-cookiebar': strictGovBr,
      [`govbr-cookiebar--${position}`]: position,
      'govbr-cookiebar--compact': compact,
    },
    className
  )

  if (!open) return null

  // Versão compacta - apenas na parte inferior da tela
  if (compact) {
    return (
      <Paper
        className={cookiebarClasses}
        elevation={8}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          p: 2,
          borderRadius: 0,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
          <Typography variant="body2" sx={{ flex: 1 }}>
            {message}
            {privacyPolicyUrl && (
              <>
                {' '}
                <Link href={privacyPolicyUrl} target="_blank" rel="noopener">
                  {privacyPolicyText}
                </Link>
              </>
            )}
          </Typography>
          <Box display="flex" gap={1}>
            <GovBRButton size="small" color="primary" onClick={handleAcceptAll}>
              {acceptText}
            </GovBRButton>
          </Box>
        </Box>
      </Paper>
    )
  }

  // Versão completa com modal de configurações
  return (
    <>
      {/* Cookiebar principal */}
      <Paper
        className={cookiebarClasses}
        elevation={8}
        sx={{
          position: 'fixed',
          [position]: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          p: 3,
          borderRadius: 0,
        }}
      >
        <Box>
          <Typography variant="body1" gutterBottom>
            {message}
          </Typography>
          {privacyPolicyUrl && (
            <Typography variant="body2" sx={{ mb: 2 }}>
              <Link href={privacyPolicyUrl} target="_blank" rel="noopener">
                {privacyPolicyText}
              </Link>
            </Typography>
          )}
          <Box display="flex" gap={2} flexWrap="wrap">
            <GovBRButton color="primary" onClick={handleAcceptAll}>
              {acceptText}
            </GovBRButton>
            <GovBRButton color="secondary" onClick={handleRejectAll}>
              {rejectText}
            </GovBRButton>
            <GovBRButton color="info" onClick={() => setShowSettings(true)}>
              {configureText}
            </GovBRButton>
          </Box>
        </Box>
      </Paper>

      {/* Modal de configurações */}
      <Dialog
        open={showSettings}
        onClose={() => setShowSettings(false)}
        TransitionComponent={Transition}
        maxWidth="md"
        fullWidth
        className={classNames({ 'br-modal': strictGovBr })}
      >
        <DialogContent>
          <Typography variant="h5" gutterBottom>
            Configurações de Cookies
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Gerencie suas preferências de cookies. Você pode ativar ou desativar diferentes
            categorias de cookies abaixo.
          </Typography>

          {cookieCategories.map(category => (
            <Accordion key={category.id} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ '& .MuiAccordionSummary-content': { alignItems: 'center' } }}
              >
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                  <Typography variant="h6">{category.name}</Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={category.enabled}
                        disabled={category.required}
                        onChange={() => handleCategoryToggle(category.id)}
                        onClick={e => e.stopPropagation()}
                      />
                    }
                    label=""
                    sx={{ mr: 1 }}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                  {category.required && (
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{ ml: 1, fontStyle: 'italic' }}
                    >
                      (Obrigatório)
                    </Typography>
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <GovBRButton color="secondary" onClick={() => setShowSettings(false)}>
            Cancelar
          </GovBRButton>
          <GovBRButton color="primary" onClick={handleSaveSettings}>
            {saveText}
          </GovBRButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default GovBRCookiebar
