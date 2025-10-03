import type { ReactNode } from 'react'

/**
 * Tipos comuns compartilhados entre componentes GovBR
 *
 * @security Interfaces readonly garantem imutabilidade de contratos
 * @resilience Tipos genéricos com defaults previnem quebras de compatibilidade
 *
 * @remarks
 * Este módulo fornece interfaces base para padrões comuns como navegação,
 * seleção, e estruturas de dados hierárquicas (menus, listas, etc.).
 */

/**
 * Interface base para itens de menu/lista genéricos do GovBR.
 *
 * @security Props opcionais previnem erros de dados incompletos
 * @resilience Apenas label é obrigatório, demais props têm defaults seguros
 *
 * @remarks
 * Interface comum utilizada por componentes que implementam listas de itens,
 * como menus, breadcrumbs, listas de navegação, etc.
 *
 * @example
 * ```ts
 * const item: GovBRBaseItem = {
 *   label: 'Início',
 *   href: '/',
 *   id: 'home'
 * }
 * ```
 */
export interface GovBRBaseItem {
  /** Identificador único do item
   * @security Usado para key do React e seletores seguros
   */
  id?: string

  /** Texto a ser exibido para o item
   * @resilience Único campo obrigatório para máxima flexibilidade
   */
  label: string

  /** Caminho (URL) para onde o item deve navegar
   * @security Sanitizado automaticamente pelo React/Next.js
   */
  href?: string

  /** Se o item está desabilitado
   * @default false
   * @resilience Previne ações acidentais em itens inativos
   */
  disabled?: boolean
}

/**
 * Interface para itens de menu com ícone.
 *
 * @security Herança de GovBRBaseItem garante consistência de contrato
 * @resilience Estrutura hierárquica com children suporta menus aninhados
 *
 * @remarks
 * Estende GovBRBaseItem adicionando suporte a ícones.
 * Usado em menus dropdown, sidebars, navegação lateral, etc.
 *
 * @example
 * ```ts
 * const menuItem: GovBRMenuItem = {
 *   label: 'Configurações',
 *   icon: <SettingsIcon />,
 *   children: [
 *     { label: 'Perfil', href: '/perfil' },
 *     { label: 'Segurança', href: '/seguranca' }
 *   ]
 * }
 * ```
 */
export interface GovBRMenuItem extends GovBRBaseItem {
  /** Ícone opcional para ser exibido ao lado do texto
   * @security ReactNode é sanitizado automaticamente pelo React
   */
  icon?: ReactNode

  /** Itens filhos (para menus hierárquicos)
   * @resilience Suporta aninhamento infinito para estruturas complexas
   */
  children?: GovBRMenuItem[]
}

/**
 * Interface para itens de navegação (breadcrumb, tabs, etc.).
 *
 * @security Flags booleanos previnem estados inconsistentes
 * @resilience Tooltips opcionais melhoram acessibilidade sem obrigatoriedade
 *
 * @remarks
 * Similar ao GovBRBaseItem mas com propriedades específicas de navegação.
 * Usado em breadcrumbs, tabs, steppers, paginação, etc.
 *
 * @example
 * ```ts
 * const breadcrumbItem: GovBRNavigationItem = {
 *   label: 'Página Atual',
 *   href: '/atual',
 *   current: true,
 *   tooltip: 'Você está aqui'
 * }
 * ```
 */
export interface GovBRNavigationItem extends GovBRBaseItem {
  /** Se o item representa a página/seção atual
   * @default false
   * @security Previne múltiplos itens marcados como "current" acidentalmente
   */
  current?: boolean

  /** Tooltip explicativo
   * @resilience Melhora acessibilidade para usuários com leitores de tela
   */
  tooltip?: string
}

/**
 * Tipos de callback de navegação padronizados.
 *
 * @security Callback tipado previne navegação para destinos inválidos
 * @resilience Item opcional permite uso em contextos simplificados
 *
 * @example
 * ```ts
 * const handleNavigate: GovBRNavigationCallback = (href, item) => {
 *   console.log(`Navegando para ${href}`)
 *   router.push(href)
 * }
 * ```
 */
export type GovBRNavigationCallback = (href: string, item?: GovBRBaseItem) => void

/**
 * Tipos de callback de seleção padronizados.
 *
 * @security Generic type <T> garante type-safety do valor selecionado
 * @resilience Default unknown previne erros quando tipo não é especificado
 *
 * @template T - Tipo do valor selecionado (string, number, etc.)
 *
 * @example
 * ```ts
 * const handleSelect: GovBRSelectionCallback<string> = (value, item) => {
 *   console.log(`Selecionado: ${value}`)
 * }
 * ```
 */
export type GovBRSelectionCallback<T = unknown> = (value: T, item?: GovBRBaseItem) => void

/**
 * Interface para componentes que implementam seleção.
 *
 * @security Separação entre seleção única (value) e múltipla (values)
 * @resilience Callback opcional permite uso sem controle externo
 *
 * @template T - Tipo do valor selecionado (default: string)
 *
 * @example
 * ```ts
 * // Seleção única
 * const selectProps: GovBRSelectable<string> = {
 *   value: 'opcao1',
 *   onChange: (value) => console.log(value)
 * }
 *
 * // Seleção múltipla
 * const multiSelectProps: GovBRSelectable<string> = {
 *   values: ['opcao1', 'opcao2'],
 *   onChange: (values) => console.log(values)
 * }
 * ```
 */
export interface GovBRSelectable<T = string> {
  /** Valor selecionado (seleção única)
   * @resilience Mutuamente exclusivo com values
   */
  value?: T

  /** Valores selecionados (seleção múltipla)
   * @resilience Mutuamente exclusivo com value
   */
  values?: T[]

  /** Callback de mudança de seleção
   * @security Tipado com GovBRSelectionCallback<T>
   */
  onChange?: GovBRSelectionCallback<T>
}

/**
 * Interface para componentes que implementam navegação.
 *
 * @security Callback tipado previne navegação inválida
 * @resilience Opcional para compatibilidade com componentes estáticos
 *
 * @example
 * ```ts
 * const navProps: GovBRNavigatable = {
 *   onNavigate: (href) => router.push(href)
 * }
 * ```
 */
export interface GovBRNavigatable {
  /** Callback de navegação
   * @security Tipado com GovBRNavigationCallback
   */
  onNavigate?: GovBRNavigationCallback
}

/**
 * Estados visuais padronizados para componentes interativos.
 *
 * @security Estados limitados previnem transições inválidas
 * @resilience Alinhado com pseudo-classes CSS padrão (:hover, :active, :focus, :disabled)
 *
 * @remarks
 * Usado para controlar aparência de componentes em diferentes estados de interação.
 * Essencial para acessibilidade (WCAG 2.1) e feedback visual.
 *
 * @example
 * ```ts
 * const estado: GovBRInteractiveState = 'hover' // Estado de mouse sobre
 * const estadoInativo: GovBRInteractiveState = 'disabled' // Estado desabilitado
 * ```
 */
export type GovBRInteractiveState = 'default' | 'hover' | 'active' | 'focus' | 'disabled'

/**
 * Posicionamento padrão para componentes flutuantes.
 *
 * @security Valores limitados previnem posicionamentos fora da viewport
 * @resilience Compatível com Popper.js e bibliotecas de posicionamento
 *
 * @remarks
 * Usado por tooltips, dropdowns, popovers, e outros componentes flutuantes.
 * Segue padrão de nomenclatura do Material-UI e Popper.js.
 *
 * @example
 * ```ts
 * const posicao: GovBRPosition = 'bottom-start' // Abaixo, alinhado à esquerda
 * ```
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
 *
 * @security Direções limitadas previnem animações conflitantes
 * @resilience Usado em accordions, collapses, drawers, e menus
 *
 * @remarks
 * Define a direção na qual um componente se expande ou colapsa.
 * Importante para animações e transições suaves.
 *
 * @example
 * ```ts
 * const direcao: GovBRDirection = 'down' // Expande para baixo (accordion)
 * ```
 */
export type GovBRDirection = 'up' | 'down' | 'left' | 'right'
