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

/**
 * Componente AutoSync
 *
 * Componente utilitário que expõe funcionalidade de sincronização automática.
 * Re-exporta o componente React e o tipo de suas props.
 */
export { AutoSync } from './ui/auto-sync'
export type { AutoSyncProps } from './ui/auto-sync/types'

/**
 * GovBRAvatar
 *
 * Avatar padronizado seguindo os tokens do Gov.br e integrações ANPD.
 * Re-exporta o componente e seus tipos.
 */
export * from './ui/govbr-avatar'
export type { GovBRAvatarProps } from './ui/govbr-avatar/types'

/**
 * GovBRBreadcrumb
 *
 * Componente de breadcrumb (trilha de navegação) conforme padrões Gov.br.
 */
export * from './ui/govbr-breadcrumb'
export type { GovBRBreadcrumbProps } from './ui/govbr-breadcrumb/types'

/**
 * GovBRButton
 *
 * Botão híbrido (modo MUI ou modo estrito Gov.br via `strictgovbr`).
 * Suporta variantes e props do MUI além de `strictgovbr`.
 */
export * from './ui/govbr-button'
export type { GovBRButtonProps } from './ui/govbr-button/types'

/**
 * GovBRCard
 *
 * Card híbrido (modo MUI ou modo estrito Gov.br via `strictgovbr`).
 * Suporta header, content, footer, actions e composições avançadas com MUI.
 */
export * from './ui/govbr-card'
export type { GovBRCardProps } from './ui/govbr-card/types'

/**
 * GovBRCheckbox
 *
 * Checkbox compatível com Gov.br DS, com suporte ao tema MUI e modo estrito.
 */
export * from './ui/govbr-checkbox'
export type { GovBRCheckboxProps } from './ui/govbr-checkbox/types'

/**
 * Chip
 *
 * Componente customizado da ANPD para exibir tags, badges e status de forma compacta.
 * Baseado no MUI Chip com recursos adicionais de truncamento e tooltip inteligente.
 */
export { Chip, ChipsList } from './ui/chip'
export type { ChipItemData, ChipProps, ChipsListProps } from './ui/chip/types'

/**
 * GovBRCookieBanner — Banner bloqueante de consentimento LGPD.
 */
export type { CookieBannerTexts, GovBRCookieBannerProps } from './ui/consent-banner'
export * from './ui/consent-banner'

/**
 * GovBRCookiePreferencesModal — Modal configurável de preferências de cookies.
 */
export type {
  CookieCategoryMetadata,
  GovBRCookiePreferencesModalProps,
} from './ui/consent-preferences-modal'
export * from './ui/consent-preferences-modal'

/**
 * GovBRFormCheckbox
 *
 * Checkbox para uso em formulários, integrado com as convenções de validação.
 */
export * from './ui/govbr-form-checkbox'
export type { GovBRFormCheckboxProps } from './ui/govbr-form-checkbox/types'

/**
 * GovBRFormInput
 *
 * Campo de formulário (input) com integrações para validação e layout de formulário.
 */
export { GovBRFormInput } from './ui/govbr-form-input'
export type { GovBRFormInputProps } from './ui/govbr-form-input/types'

/**
 * GovBRInput
 *
 * Componente de input híbrido que mapeia para MUI ou para classes Gov.br no modo estrito.
 */
export * from './ui/govbr-input'
export type { GovBRInputProps } from './ui/govbr-input/types'

/**
 * GovBRLoading
 *
 * Animação/indicador de carregamento padronizado para a biblioteca.
 */
export * from './ui/govbr-loading'
export type { LoadingAnimationProps } from './ui/govbr-loading/types'

/**
 * GovBRRadio
 *
 * Radio button seguindo padrões Gov.br com suporte a tema e modo estrito.
 */
export * from './ui/govbr-radio'
export type { GovBRRadioProps } from './ui/govbr-radio/types'

/**
 * GovBRSignIn
 *
 * Componentes/fluxos para telas de autenticação seguindo as diretrizes ANPD/Gov.br.
 */
export * from './ui/govbr-sign-in'
export type { GovBRSignInProps } from './ui/govbr-sign-in/types'

/**
 * GovBRSwitch
 *
 * Interruptor (switch) padronizado, compatível com o tema GovBR e modo estrito.
 */
export * from './ui/govbr-switch'
export type { GovBRSwitchProps } from './ui/govbr-switch/types'

/**
 * GovBRItem
 *
 * Item genérico de lista/coleção com estilo padronizado.
 */
export * from './ui/govbr-item'
export type { GovBRItemProps } from './ui/govbr-item/types'

/**
 * GovBRDateTimePicker
 *
 * Seletor de data e hora com integração ao tema e comportamento esperado da ANPD.
 */
export * from './ui/govbr-datetimepicker'
export type { GovBRDateTimePickerProps } from './ui/govbr-datetimepicker/types'

/**
 * GovBRDivider
 *
 * Separador visual (divider) seguindo tokens de espaçamento e cor do Gov.br.
 */
export * from './ui/govbr-divider'
export type { GovBRDividerProps } from './ui/govbr-divider/types'

/**
 * GovBRTabs
 *
 * Componente de abas (tabs) com implementação híbrida e conformidade visual.
 */
export * from './ui/govbr-tabs'
export type { GovBRTabsProps } from './ui/govbr-tabs/types'

/**
 * KeyValueList — Lista de pares chave/valor com layout responsivo.
 */
export type { KeyValueItem, KeyValueListProps } from './ui/key-value-list'
export * from './ui/key-value-list'

/**
 * Loader — Indicador de carregamento padronizado.
 */
export type { LoaderProps } from './ui/loader'
export * from './ui/loader'

/**
 * Section — Contêiner de seção com título, ações e colapso.
 */
export type { SectionProps } from './ui/section'
export * from './ui/section'

/**
 * SideMenu
 *
 * Menu lateral colapsável personalizado para aplicações da ANPD.
 */
export * from './ui/side-menu'
export type {
  SideMenuItem,
  SideMenuProps,
  SideMenuRenderContext,
  SideMenuToggleIcons,
  SideMenuToggleLabels,
} from './ui/side-menu/types'

/**
 * Toaster — Provider/Hook simples para snackbars.
 */
export type { Toast, ToasterCtx } from './ui/toaster'
export * from './ui/toaster'
