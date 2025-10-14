'use client'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { type SxProps, type Theme, useTheme } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { type ElementType, type MouseEvent, useCallback, useEffect, useMemo, useState } from 'react'

import type { SideMenuItem, SideMenuProps, SideMenuRenderContext } from './types'

type ActiveState = {
  selfActive: boolean
  descendantActive: boolean
}

type NormalizedItem = SideMenuItem & {
  __key: string
  children?: NormalizedItem[]
}

const normalizePath = (value?: string) => {
  if (!value) return value
  if (value === '/') return '/'

  let normalized = value

  while (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }

  return normalized
}

const defaultActiveMatcher = (item: SideMenuItem, currentPath?: string) => {
  if (!item.href || !currentPath) {
    return false
  }

  const normalizedItemHref = normalizePath(item.href)
  const normalizedCurrentPath = normalizePath(currentPath)

  if (!normalizedItemHref || !normalizedCurrentPath) {
    return false
  }

  if (normalizedItemHref === '/') {
    return normalizedCurrentPath === '/'
  }

  return (
    normalizedCurrentPath === normalizedItemHref ||
    normalizedCurrentPath.startsWith(`${normalizedItemHref}/`)
  )
}

const buildItemsTree = (items: SideMenuItem[], parentKey = 'root'): NormalizedItem[] =>
  items.map((item, index) => {
    const baseKey =
      item.id ??
      item.href ??
      `${parentKey}-${index}-${item.label.trim().toLowerCase().replace(/\s+/g, '-')}`

    return {
      ...item,
      __key: baseKey,
      children: item.children ? buildItemsTree(item.children, baseKey) : undefined,
    }
  })

const buildActiveMap = (
  items: NormalizedItem[],
  matcher: (item: SideMenuItem) => boolean,
  map: Map<string, ActiveState> = new Map(),
): Map<string, ActiveState> => {
  const traverse = (node: NormalizedItem): ActiveState => {
    const selfActive = matcher(node)
    let descendantActive = false

    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        const childState = traverse(child)
        if (childState.selfActive || childState.descendantActive) {
          descendantActive = true
        }
      }
    }

    const state: ActiveState = { selfActive, descendantActive }
    map.set(node.__key, state)

    return state
  }

  for (const item of items) {
    traverse(item)
  }

  return map
}

const buildItemLookup = (items: NormalizedItem[], map = new Map<string, NormalizedItem>()) => {
  for (const item of items) {
    map.set(item.__key, item)
    if (item.children && item.children.length > 0) {
      buildItemLookup(item.children, map)
    }
  }
  return map
}

const defaultToggleLabels = {
  open: 'Recolher menu',
  closed: 'Expandir menu',
}

const defaultCollapsedWidth = 56
const defaultExpandedWidth = 240
const defaultItemGap = 0.5

/**
 * SideMenu - Menu Lateral Reutilizável
 *
 * Componente customizado da ANPD para navegação lateral com suporte a hierarquia,
 * colapso, persistência de estado e integração completa com Material-UI.
 *
 * @remarks
 * Embora não seja um componente oficial do GovBR Design System, segue as mesmas
 * convenções da biblioteca shared-ui e pode ser totalmente personalizado via props
 * e render props.
 *
 * **Características principais:**
 * - 🎯 Suporte a hierarquia de menus com submenus aninhados
 * - 🔄 Modo colapsado com ícones e tooltips
 * - 📍 Destaque automático de item ativo baseado em rota
 * - 💾 Persistência de estado em localStorage
 * - 🎛️ Modos controlado e não-controlado
 * - 📱 Auto collapse em mobile (opcional)
 * - 🎨 Diferenciação visual entre pai e filho ativo
 * - ⚡ Headers e footers customizáveis
 * - ♿ Acessibilidade completa
 *
 * @example Uso básico
 * ```tsx
 * <SideMenu
 *   items={menuItems}
 *   currentPath="/dashboard/team"
 *   title="Navegação"
 * />
 * ```
 *
 * @example Com controle externo
 * ```tsx
 * const [open, setOpen] = useState(true)
 * <SideMenu
 *   items={menuItems}
 *   open={open}
 *   onOpenChange={setOpen}
 * />
 * ```
 *
 * @example Com persistência
 * ```tsx
 * <SideMenu
 *   items={menuItems}
 *   persistKey="app-menu-state"
 *   autoCollapseOnMobile
 * />
 * ```
 *
 * @param props - {@link SideMenuProps}
 * @returns JSX.Element
 */
export function SideMenu(props: Readonly<SideMenuProps>) {
  const {
    items,
    currentPath,
    open,
    defaultOpen = true,
    persistKey,
    onOpenChange,
    width = defaultExpandedWidth,
    collapsedWidth = defaultCollapsedWidth,
    title,
    renderHeader,
    renderFooter,
    headerProps,
    listProps,
    drawerProps,
    variant = 'permanent',
    toggleLabels = defaultToggleLabels,
    toggleIcons,
    renderToggleButton,
    linkComponent,
    activeMatcher,
    dense = false,
    collapsedMenuProps,
    itemGap = defaultItemGap,
    parentClickBehavior = 'expand-only',
    autoCollapseOnMobile = false,
    highlightParentDifferently = true,
  } = props

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)
  const isControlled = typeof open === 'boolean'
  const resolvedOpen = isControlled ? (open as boolean) : internalOpen

  // Auto collapse em mobile se ativado
  useEffect(() => {
    if (autoCollapseOnMobile && isMobile && !isControlled) {
      setInternalOpen(false)
    }
  }, [autoCollapseOnMobile, isMobile, isControlled])

  // Persistência em localStorage
  useEffect(() => {
    if (isControlled || !persistKey) {
      return
    }

    if (typeof window === 'undefined') {
      return
    }

    const stored = window.localStorage.getItem(persistKey)
    if (stored !== null) {
      setInternalOpen(stored === 'true')
    } else {
      setInternalOpen(defaultOpen)
    }
  }, [persistKey, defaultOpen, isControlled])

  useEffect(() => {
    if (isControlled || !persistKey) {
      return
    }

    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(persistKey, String(internalOpen))
  }, [internalOpen, persistKey, isControlled])

  const handleToggle = useCallback(() => {
    if (isControlled) {
      onOpenChange?.(!open)
    } else {
      setInternalOpen((prev) => {
        const next = !prev
        onOpenChange?.(next)
        return next
      })
    }
  }, [isControlled, onOpenChange, open])

  const renderContext = useMemo<SideMenuRenderContext>(
    () => ({
      open: resolvedOpen,
      toggle: handleToggle,
      isControlled,
    }),
    [resolvedOpen, handleToggle, isControlled],
  )

  const normalizedItems = useMemo(() => buildItemsTree(items), [items])
  const itemLookup = useMemo(() => buildItemLookup(normalizedItems), [normalizedItems])

  const matcher = useMemo(() => {
    if (typeof activeMatcher === 'function') {
      return (item: SideMenuItem) => activeMatcher(item, currentPath)
    }
    return (item: SideMenuItem) => defaultActiveMatcher(item, currentPath)
  }, [activeMatcher, currentPath])

  const activeMap = useMemo(
    () => buildActiveMap(normalizedItems, matcher),
    [normalizedItems, matcher],
  )

  const activeAncestorKeys = useMemo(() => {
    const keys: string[] = []
    activeMap.forEach((state, key) => {
      const item = itemLookup.get(key)
      if (!item?.children || item.children.length === 0) {
        return
      }
      if (state.descendantActive) {
        keys.push(key)
      }
    })
    return keys
  }, [activeMap, itemLookup])

  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(() => new Set(activeAncestorKeys))

  useEffect(() => {
    setExpandedKeys((prev) => {
      const next = new Set<string>()
      const validKeys = new Set(itemLookup.keys())

      prev.forEach((key) => {
        if (validKeys.has(key)) {
          next.add(key)
        }
      })

      for (const key of activeAncestorKeys) {
        next.add(key)
      }

      return next
    })
  }, [activeAncestorKeys, itemLookup])

  const toggleExpanded = useCallback((key: string) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }, [])

  const effectiveLinkComponent: ElementType = linkComponent ?? 'a'

  const openIcon = toggleIcons?.open ?? <ChevronLeftIcon />
  const closedIcon = toggleIcons?.closed ?? <ChevronRightIcon />

  const drawerWidth = resolvedOpen ? width : collapsedWidth

  return (
    <Drawer
      variant={variant}
      open
      {...drawerProps}
      sx={
        {
          width: drawerWidth,
          flexShrink: 0,
          ...drawerProps?.sx,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'relative',
            height: '100%',
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              duration: theme.transitions.duration.standard,
            }),
            borderRight: `1px solid ${theme.palette.divider}`,
            ...drawerProps?.PaperProps?.sx,
          },
        } as SxProps<Theme>
      }
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <SideMenuHeader
          title={title}
          renderHeader={renderHeader}
          renderToggleButton={renderToggleButton}
          context={renderContext}
          toggleLabels={toggleLabels}
          openIcon={openIcon}
          closedIcon={closedIcon}
          headerProps={headerProps}
        />

        <List
          dense={dense}
          {...listProps}
          sx={{
            flex: 1,
            px: resolvedOpen ? 1 : 0.5,
            py: 1,
            ...listProps?.sx,
          }}
        >
          {normalizedItems.map((item) => (
            <RecursiveItem
              key={item.__key}
              item={item}
              depth={0}
              menuOpen={resolvedOpen}
              dense={dense}
              toggleItem={toggleExpanded}
              expandedKeys={expandedKeys}
              activeMap={activeMap}
              linkComponent={effectiveLinkComponent}
              collapsedMenuProps={collapsedMenuProps}
              itemGap={itemGap}
              parentClickBehavior={parentClickBehavior}
              highlightParentDifferently={highlightParentDifferently}
            />
          ))}
        </List>

        <SideMenuFooter renderFooter={renderFooter} context={renderContext} />
      </Box>
    </Drawer>
  )
}

type SideMenuHeaderProps = {
  title?: string
  renderHeader?: SideMenuProps['renderHeader']
  renderToggleButton?: SideMenuProps['renderToggleButton']
  context: SideMenuRenderContext
  toggleLabels: NonNullable<SideMenuProps['toggleLabels']>
  openIcon: React.ReactNode
  closedIcon: React.ReactNode
  headerProps?: SideMenuProps['headerProps']
}

const SideMenuHeader = ({
  title,
  renderHeader,
  renderToggleButton,
  context,
  toggleLabels,
  openIcon,
  closedIcon,
  headerProps,
}: SideMenuHeaderProps) => {
  if (typeof renderHeader === 'function') {
    return <>{renderHeader(context)}</>
  }

  return (
    <Box
      {...headerProps}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: context.open ? 'space-between' : 'center',
        px: 1,
        pt: 1,
        pb: 1,
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
        ...headerProps?.sx,
      }}
    >
      {context.open && title ? (
        <Typography
          variant="subtitle1"
          sx={{ mb: 0, pb: 0, fontWeight: 600, textTransform: 'uppercase' }}
        >
          {title}
        </Typography>
      ) : null}

      {renderToggleButton ? (
        renderToggleButton(context)
      ) : (
        <Tooltip title={context.open ? toggleLabels.open : toggleLabels.closed} placement="right">
          <IconButton
            size="small"
            onClick={context.toggle}
            aria-label={context.open ? toggleLabels.open : toggleLabels.closed}
          >
            {context.open ? openIcon : closedIcon}
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}

type SideMenuFooterProps = {
  renderFooter?: SideMenuProps['renderFooter']
  context: SideMenuRenderContext
}

const SideMenuFooter = ({ renderFooter, context }: SideMenuFooterProps) => {
  if (!renderFooter) {
    return null
  }

  return (
    <Box
      sx={{
        px: context.open ? 1.5 : 1,
        py: 1,
        borderTop: (theme: Theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      {renderFooter(context)}
    </Box>
  )
}

type RecursiveItemProps = {
  item: NormalizedItem
  depth: number
  menuOpen: boolean
  dense: boolean
  toggleItem: (key: string) => void
  expandedKeys: Set<string>
  activeMap: Map<string, ActiveState>
  linkComponent: ElementType
  collapsedMenuProps?: SideMenuProps['collapsedMenuProps']
  itemGap: number
  parentClickBehavior: NonNullable<SideMenuProps['parentClickBehavior']>
  highlightParentDifferently: boolean
}

const RecursiveItem = ({
  item,
  depth,
  menuOpen,
  dense,
  toggleItem,
  expandedKeys,
  activeMap,
  linkComponent,
  collapsedMenuProps,
  itemGap,
  parentClickBehavior,
  highlightParentDifferently,
}: RecursiveItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const hasChildren = Boolean(item.children && item.children.length > 0)
  const treatAsExpander = hasChildren && (item.onlyExpand || !item.href)
  const state = activeMap.get(item.__key) ?? { selfActive: false, descendantActive: false }
  const showAsActive = state.selfActive || state.descendantActive
  const isExpanded = expandedKeys.has(item.__key)

  // Diferencia visualmente o pai do filho ativo
  const isParentOfActive = highlightParentDifferently && state.descendantActive && !state.selfActive
  const isSelfActive = state.selfActive

  const paddingLeft = menuOpen ? 1.5 + depth * 2 : 1
  const minHeight = dense ? 36 : 40

  const handleExpandClick = (event: MouseEvent<HTMLElement>) => {
    if (!hasChildren) {
      return
    }

    if (menuOpen) {
      toggleItem(item.__key)
    } else {
      event.preventDefault()
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (item.disabled) {
      event.preventDefault()
      return
    }

    // Comportamento baseado na prop parentClickBehavior
    if (hasChildren && !item.onlyExpand) {
      if (parentClickBehavior === 'expand-only') {
        // Comportamento padrão: apenas expande
        handleExpandClick(event)
      } else if (parentClickBehavior === 'navigate') {
        // Navega e expande automaticamente
        if (!isExpanded) {
          toggleItem(item.__key)
        }
        // Deixa o onClick customizado do item executar para navegação
      }
      // 'both' é tratado na renderização com ícone separado
    } else if (treatAsExpander) {
      handleExpandClick(event)
    }

    if (item.onClick) {
      item.onClick(event, item)
    }
  }

  const handleCloseMenu = () => setAnchorEl(null)

  useEffect(() => {
    if (menuOpen) {
      setAnchorEl(null)
    }
  }, [menuOpen])

  const iconNode = menuOpen ? (
    item.icon
  ) : (
    <Tooltip title={item.tooltip ?? item.label} placement="right">
      <span>{item.icon}</span>
    </Tooltip>
  )

  const selected = showAsActive
  const Component = !treatAsExpander && item.href ? (item.component ?? linkComponent) : 'button'
  const componentProps =
    Component === 'button' || !item.href ? { type: 'button' } : { href: item.href, tabIndex: 0 }

  // Define cores baseadas no estado
  const getItemColor = () => {
    if (isSelfActive) return 'primary.main'
    if (isParentOfActive) return 'text.secondary'
    return 'text.primary'
  }

  const getBackgroundColor = () => {
    if (isSelfActive) return 'action.selected'
    if (isParentOfActive) return 'action.hover'
    return 'transparent'
  }

  const getFontWeight = () => {
    if (isSelfActive) return 600
    if (isParentOfActive) return 500
    if (depth > 0) return 400
    return 500
  }

  const getBorderColor = () => {
    if (isSelfActive) return 'primary.main'
    if (isParentOfActive) return 'primary.light'
    return 'divider'
  }

  return (
    <>
      <ListItem
        disablePadding
        sx={{
          mb: itemGap ? (theme: Theme) => theme.spacing(itemGap) : 0,
        }}
      >
        <ListItemButton
          component={Component as ElementType}
          onClick={hasChildren || item.onClick ? handleClick : undefined}
          selected={selected}
          disabled={item.disabled}
          {...componentProps}
          sx={{
            minHeight,
            justifyContent: menuOpen ? 'flex-start' : 'center',
            pl: paddingLeft,
            pr: menuOpen ? 1.5 : 1,
            py: dense ? 0.5 : 0.75,
            borderRadius: 1,
            backgroundColor: getBackgroundColor(),
            color: getItemColor(),
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
            ...(depth > 0 &&
              menuOpen && {
                borderLeft: '2px solid',
                borderColor: getBorderColor(),
                ml: 0.5,
              }),
            ...item.sx,
          }}
        >
          {item.icon ? (
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 1.5 : 0,
                justifyContent: 'center',
                color: 'inherit',
                ...(item.iconSx ?? {}),
              }}
            >
              {iconNode}
            </ListItemIcon>
          ) : null}

          {menuOpen ? (
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: depth > 0 ? '0.875rem' : '0.9rem',
                fontWeight: getFontWeight(),
              }}
            />
          ) : null}

          {hasChildren && menuOpen ? (
            <Box component="span" sx={{ display: 'flex', ml: 0.5 }}>
              {isExpanded ? (
                <ExpandLessIcon fontSize="small" />
              ) : (
                <ExpandMoreIcon fontSize="small" />
              )}
            </Box>
          ) : null}

          {menuOpen && item.badge ? (
            <Box component="span" sx={{ ml: 1 }}>
              {item.badge}
            </Box>
          ) : null}
        </ListItemButton>
      </ListItem>

      {hasChildren && menuOpen ? (
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {(item.children as NormalizedItem[])!.map((child) => (
              <RecursiveItem
                key={child.__key}
                item={child}
                depth={depth + 1}
                menuOpen={menuOpen}
                dense={dense}
                toggleItem={toggleItem}
                expandedKeys={expandedKeys}
                activeMap={activeMap}
                linkComponent={linkComponent}
                collapsedMenuProps={collapsedMenuProps}
                itemGap={itemGap}
                parentClickBehavior={parentClickBehavior}
                highlightParentDifferently={highlightParentDifferently}
              />
            ))}
          </List>
        </Collapse>
      ) : null}

      {hasChildren && !menuOpen ? (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          slotProps={{
            paper: {
              sx: {
                ml: 0.5,
                minWidth: 200,
              },
            },
          }}
          {...collapsedMenuProps}
        >
          {(item.children as NormalizedItem[])!.map((child) => {
            const childState = activeMap.get(child.__key) ?? {
              selfActive: false,
              descendantActive: false,
            }
            const childComponent =
              child.href && !child.onlyExpand ? (child.component ?? linkComponent) : 'button'
            const childProps =
              childComponent === 'button' || !child.href ? {} : { href: child.href, tabIndex: 0 }

            const handleChildClick = (event: MouseEvent<HTMLElement>) => {
              if (child.onClick) {
                child.onClick(event, child)
              }
              if (!child.keepMenuOpenOnClick) {
                handleCloseMenu()
              }
            }

            return (
              <MenuItem
                key={child.__key}
                component={childComponent as ElementType}
                selected={childState.selfActive}
                onClick={
                  child.onClick || child.keepMenuOpenOnClick ? handleChildClick : handleCloseMenu
                }
                {...childProps}
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: childState.selfActive ? 600 : 400,
                }}
              >
                {child.icon ? (
                  <ListItemIcon sx={{ minWidth: 32, color: 'inherit' }}>{child.icon}</ListItemIcon>
                ) : null}
                <ListItemText primary={child.label} />
              </MenuItem>
            )
          })}
        </Menu>
      ) : null}
    </>
  )
}
