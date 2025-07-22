// src\index.ts
// Estilo base GovBR
import '@govbr-ds/core/dist/core.css'

// ===== COMPONENTES =====
export * from './components/AutoSync/AutoSyncButton'
export type { AutoSyncButtonProps } from './components/AutoSync/AutoSyncButton'

export * from './components/GovBRAvatar/GovBRAvatar'
export type { GovBRAvatarProps } from './components/GovBRAvatar/types'

export * from './components/GovBRBreadcrumb/GovBRBreadcrumb'
export type { GovBRBreadcrumbProps } from './components/GovBRBreadcrumb/GovBRBreadcrumb'

export * from './components/GovBRButton/GovBRButton'
export type { GovBRButtonProps } from './components/GovBRButton/GovBRButton'

export * from './components/GovBRFormInput/GovBRFormInput.client'
export type { GovBRFormInputProps } from './components/GovBRFormInput/GovBRFormInput.client'

export * from './components/GovBRInput/GovBRInput'
export type { GovBRInputProps } from './components/GovBRInput/GovBRInput'

export * from './components/GovBRSignIn/GovBRSignIn'
export type { GovBRSignInProps } from './components/GovBRSignIn/GovBRSignIn'

export * from './components/GovBRCheckbox/GovBRCheckbox'
export type { GovBRCheckboxProps } from './components/GovBRCheckbox/GovBRCheckbox'

export * from './components/GovBRFormCheckbox/GovBRFormCheckbox'
export type { GovBRFormCheckboxProps } from './components/GovBRFormCheckbox/GovBRFormCheckbox'

export * from './components/GovBRRadio/GovBRRadio'
export type { GovBRRadioProps } from './components/GovBRRadio/types'

// ===== HELPERS =====
export * from './helper/MuiColorToGovBRClass'

// ===== TEMA =====
export { govbrTheme } from './theme/govbrTheme'
