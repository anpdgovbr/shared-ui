// src/theme/govbrTheme.ts
import type { Theme } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

// Importar todos os componentes
import {
  MuiAccordionDetailsOverrides,
  MuiAccordionOverrides,
  MuiAccordionSummaryOverrides,
} from './components/Accordion'
import { MuiAutocompleteOverrides } from './components/Autocomplete'
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
import { MuiDrawerOverrides } from './components/Drawer'
import { MuiFormControlOverrides } from './components/FormControl'
import { MuiFormControlLabelOverrides } from './components/FormControlLabel'
import { MuiFormHelperTextOverrides } from './components/FormHelperText'
import { MuiFormLabelOverrides } from './components/FormLabel'
import { MuiIconButtonOverrides } from './components/IconButton'
import { MuiInputBaseOverrides } from './components/InputBase'
import { MuiInputLabelOverrides } from './components/InputLabel'
import { MuiLinearProgressOverrides } from './components/LinearProgress'
import { MuiLinkOverrides } from './components/Link'
import { MuiListItemOverrides } from './components/ListItem'
import { MuiMenuOverrides } from './components/Menu'
import { MuiMenuItemOverrides } from './components/MenuItem'
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
import { govbrPalette } from './foundations/paletteValues'
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
  palette: govbrPalette,
  typography,
  spacing: createSpacing(),
  breakpoints,
  shadows: shadows as Theme['shadows'],

  // Configurações adicionais otimizadas
  shape: {
    // Usando valor mais padrão para border-radius base
    borderRadius: 6, // 6px (era 8px) - mais sutil
  },

  transitions: {
    easing: {
      // Easing mais naturais baseados em padrões modernos
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', // Material Design
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)', // Saída suave
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)', // Entrada suave
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)', // Movimento rápido
    },
    duration: {
      // Durações otimizadas para melhor performance
      shortest: 100, // 100ms (era 150ms)
      shorter: 150, // 150ms (era 200ms)
      short: 200, // 200ms (era 250ms)
      standard: 250, // 250ms (era 300ms)
      complex: 300, // 300ms (era 375ms)
      enteringScreen: 200, // 200ms (era 225ms)
      leavingScreen: 150, // 150ms (era 195ms)
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
        // Ripple desabilitado por padrão para visual mais limpo
        disableRipple: true,
        // Elevation reduzida para visual mais moderno
        disableElevation: false,
      },
    },
    MuiAutocomplete: MuiAutocompleteOverrides,
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
    MuiDrawer: MuiDrawerOverrides,
    MuiIconButton: MuiIconButtonOverrides,
    MuiLink: MuiLinkOverrides,
    MuiMenu: MuiMenuOverrides,
    MuiMenuItem: MuiMenuItemOverrides,
    MuiListItem: MuiListItemOverrides,
    MuiTooltip: MuiTooltipOverrides,
    MuiLinearProgress: MuiLinearProgressOverrides,

    // Layout & Structure
    MuiGrid: {
      defaultProps: {
        spacing: 1,
      },
    },
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
