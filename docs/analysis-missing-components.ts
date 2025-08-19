// Análise de componentes @govbr-ds/core vs MUI overrides

// === COMPONENTES JÁ MAPEADOS ===
// ✅ avatar/ -> MuiAvatar (Avatar.ts)
// ✅ breadcrumb/ -> MuiBreadcrumbs (Breadcrumbs.ts)
// ✅ button/ -> MuiButton (Button.ts)
// ✅ card/ -> MuiCard* (Card.ts)
// ✅ checkbox/ -> MuiCheckbox (Checkbox.ts)
// ✅ input/ -> MuiTextField, MuiInputBase, MuiInputLabel (TextField.ts, InputBase.ts, InputLabel.ts)
// ✅ radio/ -> MuiRadio (Radio.ts)
// ✅ switch/ -> MuiSwitch (Switch.ts)
// ✅ table/ -> MuiTable* (Table.ts)
// ✅ tooltip/ -> MuiTooltip (Tooltip.ts)

// === COMPONENTES FALTANDO (TÊM CORRESPONDENTE MUI) ===
// ❌ accordion/ -> MuiAccordion, MuiAccordionSummary, MuiAccordionDetails
// ❌ divider/ -> MuiDivider
// ❌ list/ -> MuiList, MuiListItem, MuiListItemText, MuiListItemIcon
// ❌ loading/ -> MuiCircularProgress, MuiLinearProgress (LinearProgress.ts existe, mas CircularProgress não)
// ❌ menu/ -> MuiMenu, MuiMenuItem
// ❌ modal/ -> MuiDialog, MuiDialogTitle, MuiDialogContent, MuiDialogActions
// ❌ pagination/ -> MuiPagination
// ❌ select/ -> MuiSelect, MuiMenuItem
// ❌ step/ -> MuiStepper, MuiStep, MuiStepLabel
// ❌ tab/ -> MuiTabs, MuiTab
// ❌ tag/ -> MuiChip
// ❌ textarea/ -> MuiTextField (multiline variant)

// === COMPONENTES SEM CORRESPONDENTE MUI DIRETO ===
// 🔸 carousel/ -> Swiper ou componente customizado
// 🔸 cookiebar/ -> Componente customizado
// 🔸 datetimepicker/ -> MUI X DatePicker
// 🔸 footer/ -> Componente customizado
// 🔸 header/ -> MuiAppBar (parcial)
// 🔸 item/ -> Componente genérico
// 🔸 magicbutton/ -> Componente customizado
// 🔸 message/ -> MuiAlert, MuiSnackbar
// 🔸 notification/ -> MuiSnackbar, MuiAlert
// 🔸 scrim/ -> MuiBackdrop
// 🔸 signin/ -> Componente customizado
// 🔸 skiplink/ -> Componente customizado
// 🔸 upload/ -> Componente customizado
// 🔸 wizard/ -> MuiStepper (parcial)

export {}
