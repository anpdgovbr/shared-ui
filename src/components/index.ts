/**
 * Módulo de re-exports dos componentes públicos da biblioteca shared-ui.
 *
 * Este arquivo centraliza as exportações nomeadas dos componentes UI e seus
 * tipos correspondentes, permitindo imports como:
 *
 * ```ts
 * import { GovBRButton } from '@anpdgovbr/shared-ui/components'
 * import type { GovBRButtonProps } from '@anpdgovbr/shared-ui/components'
 * ```
 *
 * Observações:
 * - Mantém a convenção de pasta em kebab-case (src/components/ui/*).
 * - Exportações favorencem tree-shaking (exports nomeados).
 * - Tipos individuais são reexportados para facilitar consumo por bibliotecas externas.
 *
 * @packageDocumentation
 */

// ===== COMPONENTES REESTRUTURADOS (NOVO PADRÃO) =====
// Usando kebab-case e estrutura shadcn/ui

// AutoSync
export { AutoSync } from './ui/auto-sync'
export type { AutoSyncProps } from './ui/auto-sync/types'

// GovBRAvatar
export * from './ui/govbr-avatar'
export type { GovBRAvatarProps } from './ui/govbr-avatar/types'

// GovBRBreadcrumb
export * from './ui/govbr-breadcrumb'
export type { GovBRBreadcrumbProps } from './ui/govbr-breadcrumb/types'

// GovBRButton
export * from './ui/govbr-button'
export type { GovBRButtonProps } from './ui/govbr-button/types'

// GovBRCard
export * from './ui/govbr-card'
export type { GovBRCardProps } from './ui/govbr-card/types'

// GovBRCheckbox
export * from './ui/govbr-checkbox'
export type { GovBRCheckboxProps } from './ui/govbr-checkbox/types'

// GovBRFormCheckbox
export * from './ui/govbr-form-checkbox'
export type { GovBRFormCheckboxProps } from './ui/govbr-form-checkbox/types'

// GovBRFormInput
export { GovBRFormInput } from './ui/govbr-form-input'
export type { GovBRFormInputProps } from './ui/govbr-form-input/types'

// GovBRInput
export * from './ui/govbr-input'
export type { GovBRInputProps } from './ui/govbr-input/types'

// GovBRLoading
export * from './ui/govbr-loading'
export type { LoadingAnimationProps } from './ui/govbr-loading/types'

// GovBRRadio
export * from './ui/govbr-radio'
export type { GovBRRadioProps } from './ui/govbr-radio/types'

// GovBRSignIn
export * from './ui/govbr-sign-in'
export type { GovBRSignInProps } from './ui/govbr-sign-in/types'

// GovBRSwitch
export * from './ui/govbr-switch'
export type { GovBRSwitchProps } from './ui/govbr-switch/types'

// GovBRItem
export * from './ui/govbr-item'
export type { GovBRItemProps } from './ui/govbr-item/types'
