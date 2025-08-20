// src/theme/components/index.ts

/**
 * Exportações centralizadas de todos os overrides de componentes MUI
 *
 * Este arquivo centraliza todas as customizações específicas de componentes,
 * organizadas de forma modular para facilitar manutenção e expansão.
 */

// Componentes básicos
export { MuiButtonOverrides } from './Button'
export { MuiTextFieldOverrides } from './TextField'

// Componentes de input e formulário
export { MuiCheckboxOverrides } from './Checkbox'
export { MuiFormControlOverrides } from './FormControl'
export { MuiFormControlLabelOverrides } from './FormControlLabel'
export { MuiFormHelperTextOverrides } from './FormHelperText'
export { MuiFormLabelOverrides } from './FormLabel'
export { MuiInputBaseOverrides } from './InputBase'
export { MuiInputLabelOverrides } from './InputLabel'
export { MuiRadioOverrides } from './Radio'
export { MuiRadioGroupOverrides } from './RadioGroup'
export { MuiSwitchOverrides } from './Switch'

// Componentes de apresentação
export { MuiAvatarOverrides } from './Avatar'

// Componentes de navegação e interação
export {
  MuiAccordionDetailsOverrides,
  MuiAccordionOverrides,
  MuiAccordionSummaryOverrides,
} from './Accordion'
export { MuiBreadcrumbsOverrides } from './Breadcrumbs'
export { MuiChipOverrides } from './Chip'
export { MuiCircularProgressOverrides } from './CircularProgress'
export {
  MuiDialogActionsOverrides,
  MuiDialogContentOverrides,
  MuiDialogOverrides,
  MuiDialogTitleOverrides,
} from './Dialog'
export { MuiDividerOverrides } from './Divider'
export { MuiIconButtonOverrides } from './IconButton'
export { MuiLinkOverrides } from './Link'
export { MuiTooltipOverrides } from './Tooltip'

// Componentes de layout e containers
export {
  MuiCardActionsOverrides,
  MuiCardContentOverrides,
  MuiCardHeaderOverrides,
  MuiCardMediaOverrides,
  MuiCardOverrides,
} from './Card'

// Componentes de dados e tabelas
export {
  MuiTableBodyOverrides,
  MuiTableCellOverrides,
  MuiTableHeadOverrides,
  MuiTableOverrides,
  MuiTableRowOverrides,
} from './Table'

// Componentes de texto e tipografia
export { MuiTypographyOverrides } from './Typography'

// Componentes de feedback e indicadores
export { MuiLinearProgressOverrides } from './LinearProgress'

// Outros componentes serão adicionados conforme necessário:
// - AppBar, Dialog, Menu, Tabs, Drawer
// - Snackbar, Alert, Chip, Badge
// - Slider, Rating, Autocomplete
// - Accordion, Stepper, Timeline
