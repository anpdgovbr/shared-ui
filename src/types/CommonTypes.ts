import type { ReactNode } from 'react'

/**
 * Interface base para itens de menu/lista genéricos do GovBR.
 *
 * @remarks
 * Interface comum utilizada por componentes que implementam listas de itens,
 * como menus, breadcrumbs, listas de navegação, etc.
 */
export interface GovBRBaseItem {
  /** Identificador único do item */
  id?: string
  /** Texto a ser exibido para o item */
  label: string
  /** Caminho (URL) para onde o item deve navegar */
  href?: string
  /** Se o item está desabilitado */
  disabled?: boolean
}

/**
 * Interface para itens de menu com ícone.
 *
 * @remarks
 * Estende GovBRBaseItem adicionando suporte a ícones.
 * Usado em menus dropdown, sidebars, etc.
 */
export interface GovBRMenuItem extends GovBRBaseItem {
  /** Ícone opcional para ser exibido ao lado do texto */
  icon?: ReactNode
  /** Itens filhos (para menus hierárquicos) */
  children?: GovBRMenuItem[]
}

/**
 * Interface para itens de navegação (breadcrumb, tabs, etc.).
 *
 * @remarks
 * Similar ao GovBRBaseItem mas com propriedades específicas de navegação.
 */
export interface GovBRNavigationItem extends GovBRBaseItem {
  /** Se o item representa a página/seção atual */
  current?: boolean
  /** Tooltip explicativo */
  tooltip?: string
}

/**
 * Tipos de callback de navegação padronizados.
 */
export type GovBRNavigationCallback = (href: string, item?: GovBRBaseItem) => void

/**
 * Tipos de callback de seleção padronizados.
 */
export type GovBRSelectionCallback<T = unknown> = (value: T, item?: GovBRBaseItem) => void

/**
 * Interface para componentes que implementam seleção.
 */
export interface GovBRSelectable<T = string> {
  /** Valor selecionado */
  value?: T
  /** Valores selecionados (para múltipla seleção) */
  values?: T[]
  /** Callback de mudança de seleção */
  onChange?: GovBRSelectionCallback<T>
}

/**
 * Interface para componentes que implementam navegação.
 */
export interface GovBRNavigatable {
  /** Callback de navegação */
  onNavigate?: GovBRNavigationCallback
}

/**
 * Estados visuais padronizados para componentes interativos.
 */
export type GovBRInteractiveState = 'default' | 'hover' | 'active' | 'focus' | 'disabled'

/**
 * Posicionamento padrão para componentes flutuantes.
 */
export type GovBRPosition =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

/**
 * Direções de abertura para componentes expansíveis.
 */
export type GovBRDirection = 'up' | 'down' | 'left' | 'right'
