import type { BoxProps } from '@mui/material/Box'
import type { DrawerProps } from '@mui/material/Drawer'
import type { ListProps } from '@mui/material/List'
import type { MenuProps } from '@mui/material/Menu'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ElementType, MouseEvent, ReactNode } from 'react'

import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

/**
 * Representa um item renderizado no SideMenu.
 */
export type SideMenuItem = {
  /**
   * Identificador único opcional. Usado para controlar expansão.
   * Caso não seja informado, o componente gera um id com base nos dados do item.
   */
  id?: string
  /**
   * Rótulo exibido ao usuário.
   */
  label: string
  /**
   * Ícone exibido à esquerda do rótulo.
   */
  icon?: ReactNode
  /**
   * URL de navegação associada ao item.
   */
  href?: string
  /**
   * Componente base usado quando o item representa um link.
   * Por padrão, utiliza <a>. Em projetos Next.js recomenda-se passar `Link`.
   */
  component?: ElementType
  /**
   * Callback disparado ao clicar no item.
   */
  onClick?: (event: MouseEvent<HTMLElement>, item: SideMenuItem) => void
  /**
   * Sub-itens (submenu). Itens com filhos podem atuar como expansores.
   */
  children?: SideMenuItem[]
  /**
   * Conteúdo opcional exibido à direita do texto (badges, contadores etc).
   */
  badge?: ReactNode
  /**
   * Desabilita o item.
   */
  disabled?: boolean
  /**
   * Se verdadeiro, o item atua apenas como expansor, mesmo que `href` esteja definido.
   */
  onlyExpand?: boolean
  /**
   * Texto do tooltip quando o menu está colapsado. Por padrão usa `label`.
   */
  tooltip?: string
  /**
   * Mantém o submenu aberto mesmo após clique em colapsados.
   */
  keepMenuOpenOnClick?: boolean
  /**
   * Estilos adicionais aplicados ao botão do item.
   */
  sx?: SxProps<Theme>
  /**
   * Estilos aplicados ao container do ícone.
   */
  iconSx?: SxProps<Theme>
}

/**
 * Contexto exposto aos render props de header/footer.
 */
export type SideMenuRenderContext = {
  open: boolean
  toggle: () => void
  isControlled: boolean
}

export type SideMenuToggleLabels = {
  open: string
  closed: string
}

export type SideMenuToggleIcons = {
  open?: ReactNode
  closed?: ReactNode
}

/**
 * Comportamento do item pai ao clicar quando tem filhos.
 */
export type ParentClickBehavior = 'expand-only' | 'navigate' | 'both'

/**
 * Props do componente SideMenu.
 *
 * Menu lateral reutilizável com suporte a hierarquia, colapso e integração com temas MUI.
 * Embora não seja um componente GovBR padrão, segue as mesmas convenções da biblioteca
 * e pode ser personalizado para atender às necessidades específicas da ANPD.
 *
 * @remarks
 * Este componente não usa o modo `strictgovbr` pois é uma extensão customizada da biblioteca,
 * mas mantém compatibilidade com o tema GovBR e tokens de design.
 *
 * @example
 * ```tsx
 * <SideMenu
 *   items={menuItems}
 *   currentPath="/dashboard/team"
 *   title="Navegação"
 *   highlightParentDifferently
 * />
 * ```
 */
export interface SideMenuProps extends SharedUIComponentProps {
  /**
   * Lista de itens do menu
   */
  items: SideMenuItem[]

  /**
   * Rota/caminho atual para destacar item ativo
   */
  currentPath?: string

  /**
   * Estado controlado de abertura. Se definido, o componente torna-se controlado.
   * @see onOpenChange para callback de mudança de estado
   */
  open?: boolean

  /**
   * Estado inicial de abertura para modo não-controlado.
   * @default true
   */
  defaultOpen?: boolean

  /**
   * Chave usada no localStorage para persistir o estado de abertura.
   * Funciona apenas em modo não-controlado.
   * @example 'app-sidemenu-state'
   */
  persistKey?: string

  /**
   * Callback disparado quando o estado de abertura muda.
   * @param open - Novo estado (true = aberto, false = fechado)
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Largura do menu quando aberto (em px).
   * @default 240
   */
  width?: number

  /**
   * Largura do menu quando colapsado (em px).
   * @default 56
   */
  collapsedWidth?: number

  /**
   * Título exibido no cabeçalho padrão.
   */
  title?: string

  /**
   * Render prop para customizar completamente o header.
   * Quando fornecido, substitui o header padrão incluindo o título e botão de toggle.
   * @param context - Contexto com estado e controles do menu
   */
  renderHeader?: (context: SideMenuRenderContext) => ReactNode

  /**
   * Render prop para customizar completamente o footer.
   * @param context - Contexto com estado e controles do menu
   */
  renderFooter?: (context: SideMenuRenderContext) => ReactNode

  /**
   * Props adicionais aplicados ao container do header.
   * Permite customizações de estilo no cabeçalho padrão.
   */
  headerProps?: BoxProps

  /**
   * Props repassados ao componente `<List />` interno do MUI.
   */
  listProps?: ListProps

  /**
   * Props repassados ao `Drawer` subjacente do MUI.
   * Omite a prop `open` que é controlada internamente.
   */
  drawerProps?: Omit<DrawerProps, 'open'>

  /**
   * Variante do Drawer do MUI.
   * @default 'permanent'
   * @see {@link https://mui.com/material-ui/react-drawer/}
   */
  variant?: DrawerProps['variant']

  /**
   * Labels customizados para o tooltip/aria do botão de toggle.
   * @default { open: 'Recolher menu', closed: 'Expandir menu' }
   */
  toggleLabels?: SideMenuToggleLabels

  /**
   * Ícones customizados para o botão de toggle.
   * @default { open: <ChevronLeftIcon />, closed: <ChevronRightIcon /> }
   */
  toggleIcons?: SideMenuToggleIcons

  /**
   * Render prop que substitui completamente o botão de toggle no header padrão.
   * @param context - Contexto com estado e controles do menu
   */
  renderToggleButton?: (context: SideMenuRenderContext) => ReactNode

  /**
   * Componente usado para renderizar links dos itens.
   * @default 'a'
   * @example NextLink (Next.js) ou Link (React Router)
   */
  linkComponent?: ElementType

  /**
   * Função customizada para determinar se um item está ativo.
   * Sobrescreve a lógica padrão de matching por path.
   * @param item - Item sendo avaliado
   * @param currentPath - Caminho atual
   * @returns true se o item deve ser marcado como ativo
   */
  activeMatcher?: (item: SideMenuItem, currentPath?: string) => boolean

  /**
   * Aplica densidade reduzida aos itens (menor espaçamento).
   * @default false
   */
  dense?: boolean

  /**
   * Props adicionais para o Menu usado quando o SideMenu está colapsado.
   * Permite customizar comportamento e estilo dos submenus popup.
   */
  collapsedMenuProps?: Partial<MenuProps>

  /**
   * Espaçamento vertical entre itens em unidades de spacing do tema MUI.
   * @default 0.5
   */
  itemGap?: number

  /**
   * Define o comportamento ao clicar em itens pai com filhos.
   *
   * - `'expand-only'`: Apenas expande/colapsa (comportamento padrão)
   * - `'navigate'`: Navega para href e expande automaticamente
   * - `'both'`: Clique no texto navega, clique no ícone de expansão apenas expande (futuro)
   *
   * @default 'expand-only'
   */
  parentClickBehavior?: ParentClickBehavior

  /**
   * Se true, colapsa automaticamente o menu em telas xs/mobile (< 600px).
   * Funciona apenas em modo não-controlado.
   *
   * @default false
   * @remarks Usa breakpoint 'sm' do MUI theme
   */
  autoCollapseOnMobile?: boolean

  /**
   * Diferencia visualmente o item pai que tem filho ativo do próprio filho ativo.
   *
   * - Quando true: Pai recebe destaque sutil (text.secondary + action.hover)
   * - Quando false: Pai e filho recebem mesmo destaque (comportamento antigo)
   *
   * @default true
   */
  highlightParentDifferently?: boolean
}
