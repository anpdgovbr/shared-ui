import type { BoxProps } from '@mui/material/Box'
import type { DrawerProps } from '@mui/material/Drawer'
import type { ListProps } from '@mui/material/List'
import type { MenuProps } from '@mui/material/Menu'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ElementType, MouseEvent, ReactNode } from 'react'

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
 * Props do componente SideMenu.
 */
export type SideMenuProps = {
  items: SideMenuItem[]
  currentPath?: string
  /**
   * Estado controlado de abertura. Se definido, o componente torna-se controlado.
   */
  open?: boolean
  /**
   * Estado inicial de abertura para modo não-controlado.
   */
  defaultOpen?: boolean
  /**
   * Chave usada no localStorage para persistir o estado de abertura.
   */
  persistKey?: string
  /**
   * Callback disparado quando o estado de abertura muda.
   */
  onOpenChange?: (open: boolean) => void
  /**
   * Largura do menu quando aberto (em px). Padrão: 240.
   */
  width?: number
  /**
   * Largura do menu quando colapsado (em px). Padrão: 56.
   */
  collapsedWidth?: number
  /**
   * Título exibido no header padrão.
   */
  title?: string
  /**
   * Render prop para customizar o header completo.
   */
  renderHeader?: (context: SideMenuRenderContext) => ReactNode
  /**
   * Render prop para customizar o footer completo.
   */
  renderFooter?: (context: SideMenuRenderContext) => ReactNode
  /**
   * Props adicionais aplicados ao container do header.
   */
  headerProps?: BoxProps
  /**
   * Props repassados ao componente <List /> interno.
   */
  listProps?: ListProps
  /**
   * Props repassados ao Drawer subjacente.
   */
  drawerProps?: Omit<DrawerProps, 'open'>
  /**
   * Variante do Drawer. Padrão: permanent.
   */
  variant?: DrawerProps['variant']
  /**
   * Labels usados pelo tooltip/aria do botão de toggle.
   */
  toggleLabels?: SideMenuToggleLabels
  /**
   * Ícones exibidos no botão de toggle.
   */
  toggleIcons?: SideMenuToggleIcons
  /**
   * Render prop que substitui completamente o botão de toggle no header padrão.
   */
  renderToggleButton?: (context: SideMenuRenderContext) => ReactNode
  /**
   * Componente padrão utilizado para links (href) dos itens.
   */
  linkComponent?: ElementType
  /**
   * Função customizada para determinar se um item está ativo.
   */
  activeMatcher?: (item: SideMenuItem, currentPath?: string) => boolean
  /**
   * Densidade reduzida dos itens.
   */
  dense?: boolean
  /**
   * Props adicionais para o Menu usado em colapsos com submenu.
   */
  collapsedMenuProps?: Partial<MenuProps>
  /**
   * Espaçamento vertical entre itens (em unidades de spacing do tema).
   */
  itemGap?: number
}
