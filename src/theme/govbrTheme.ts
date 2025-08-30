// src/theme/govbrTheme.ts
import type { Theme } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

// Importar todos os componentes
import {
  MuiAccordionDetailsOverrides,
  MuiAccordionOverrides,
  MuiAccordionSummaryOverrides,
} from './components/Accordion'
import { MuiAvatarOverrides } from './components/Avatar'
import { MuiBreadcrumbsOverrides } from './components/Breadcrumbs'
import { MuiButtonOverrides } from './components/Button'
import {
  MuiCardActionsOverrides,
  MuiCardContentOverrides,
  MuiCardHeaderOverrides,
  MuiCardMediaOverrides,
  MuiCardOverrides,
} from './components/Card'
import { MuiCheckboxOverrides } from './components/Checkbox'
import { MuiChipOverrides } from './components/Chip'
import { MuiCircularProgressOverrides } from './components/CircularProgress'
import {
  MuiDialogActionsOverrides,
  MuiDialogContentOverrides,
  MuiDialogOverrides,
  MuiDialogTitleOverrides,
} from './components/Dialog'
import { MuiDividerOverrides } from './components/Divider'
import { MuiFormControlOverrides } from './components/FormControl'
import { MuiFormControlLabelOverrides } from './components/FormControlLabel'
import { MuiFormHelperTextOverrides } from './components/FormHelperText'
import { MuiFormLabelOverrides } from './components/FormLabel'
import { MuiIconButtonOverrides } from './components/IconButton'
import { MuiInputBaseOverrides } from './components/InputBase'
import { MuiInputLabelOverrides } from './components/InputLabel'
import { MuiLinearProgressOverrides } from './components/LinearProgress'
import { MuiLinkOverrides } from './components/Link'
import { MuiRadioOverrides } from './components/Radio'
import { MuiRadioGroupOverrides } from './components/RadioGroup'
import { MuiSwitchOverrides } from './components/Switch'
import {
  MuiTableBodyOverrides,
  MuiTableCellOverrides,
  MuiTableHeadOverrides,
  MuiTableOverrides,
  MuiTableRowOverrides,
} from './components/Table'
import { MuiTextFieldOverrides } from './components/TextField'
import { MuiTooltipOverrides } from './components/Tooltip'
import { MuiTypographyOverrides } from './components/Typography'
import { breakpoints } from './foundations/breakpoints'
// Importar todas as foundations
import { palette } from './foundations/palette'
import { shadows } from './foundations/shadows'
import { createSpacing } from './foundations/spacing'
import { typography } from './foundations/typography'

/**
 * Tema GovBR completo e consolidado
 *
 * Este é o tema principal da biblioteca que consolida todas as foundations
 * e componentes com seus respectivos overrides e fallbacks.
 *
 * Foundations incluídas:
 * - Palette: cores completas do GovBR DS com fallbacks
 * - Typography: hierarquia tipográfica completa
 * - Spacing: sistema de espaçamento responsivo
 * - Breakpoints: pontos de quebra e containers
 * - Shadows: sistema de elevação com 24 níveis
 *
 * Components incluídos:
 * - Todos os componentes MUI com overrides GovBR
 * - Fallbacks para todos os tokens CSS
 * - Compatibilidade completa com/sem GovBR DS
 */
export const govbrTheme: Theme = createTheme({
  // ===== FOUNDATIONS =====
  palette,
  typography,
  spacing: createSpacing(),
  breakpoints,
  shadows: shadows as Theme['shadows'],

  // Configurações adicionais
  shape: {
    // O Theme.shape.borderRadius espera um número. `surfaceRounders` não existe aqui,
    // então usamos um fallback numérico. Para aplicar tokens do Gov.br DS use
    // 'var(--surface-rounder-*)' dentro dos styleOverrides dos componentes.
    // Usamos 1 porque o --surface-rounder-md é 8px;
    borderRadius: '8px',
  },

  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },

  // ===== COMPONENTS =====
  components: {
    // Form Controls
    MuiButton: {
      // Ripple: efeito de onda que aparece ao clicar
      ...MuiButtonOverrides,
      defaultProps: {
        // Definimos variante padrão como 'contained' para alinhar com o visual GovBR
        variant: 'contained',
        // TEMPORÁRIO: Desabilita ripple apenas no Button por enquanto
        // TODO: Avaliar se deve ser aplicado globalmente ou mantido específico
        disableRipple: true,
      },
    },
    MuiTextField: MuiTextFieldOverrides,
    MuiInputBase: MuiInputBaseOverrides,
    MuiInputLabel: MuiInputLabelOverrides,
    MuiCheckbox: MuiCheckboxOverrides,
    MuiRadio: MuiRadioOverrides,
    MuiSwitch: MuiSwitchOverrides,
    MuiFormControl: MuiFormControlOverrides,
    MuiFormLabel: MuiFormLabelOverrides,
    MuiFormControlLabel: MuiFormControlLabelOverrides,
    MuiFormHelperText: MuiFormHelperTextOverrides,
    MuiRadioGroup: MuiRadioGroupOverrides,

    // Presentation
    MuiAvatar: MuiAvatarOverrides,

    // Navigation & Feedback
    MuiAccordion: MuiAccordionOverrides,
    MuiAccordionSummary: MuiAccordionSummaryOverrides,
    MuiAccordionDetails: MuiAccordionDetailsOverrides,
    MuiBreadcrumbs: MuiBreadcrumbsOverrides,
    MuiChip: MuiChipOverrides,
    MuiCircularProgress: MuiCircularProgressOverrides,
    MuiDialog: MuiDialogOverrides,
    MuiDialogTitle: MuiDialogTitleOverrides,
    MuiDialogContent: MuiDialogContentOverrides,
    MuiDialogActions: MuiDialogActionsOverrides,
    MuiDivider: MuiDividerOverrides,
    MuiIconButton: MuiIconButtonOverrides,
    MuiLink: MuiLinkOverrides,
    MuiTooltip: MuiTooltipOverrides,
    MuiLinearProgress: MuiLinearProgressOverrides,

    // Layout & Structure
    MuiCard: MuiCardOverrides,
    MuiCardHeader: MuiCardHeaderOverrides,
    MuiCardContent: MuiCardContentOverrides,
    MuiCardActions: MuiCardActionsOverrides,
    MuiCardMedia: MuiCardMediaOverrides,

    // Data Display
    MuiTable: MuiTableOverrides,
    MuiTableHead: MuiTableHeadOverrides,
    MuiTableBody: MuiTableBodyOverrides,
    MuiTableRow: MuiTableRowOverrides,
    MuiTableCell: MuiTableCellOverrides,
    MuiTypography: MuiTypographyOverrides,
  },
})
