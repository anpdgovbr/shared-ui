import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  Language as LanguageIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material'
import classNames from 'classnames'
import { SharedUIComponentProps } from 'src/types/SharedUIComponentProps'

export interface HeaderAction {
  id: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  href?: string
  target?: string
}

export interface HeaderMenuItem {
  id: string
  label: string
  href?: string
  onClick?: () => void
  children?: HeaderMenuItem[]
}

export interface GovBRHeaderProps extends SharedUIComponentProps {
  /**
   * Título principal do header
   */
  title?: string
  /**
   * Subtítulo ou descrição
   */
  subtitle?: string
  /**
   * Logo personalizada (URL ou componente React)
   */
  logo?: string | React.ReactNode
  /**
   * URL de destino ao clicar no logo
   */
  logoHref?: string
  /**
   * Itens do menu de navegação
   */
  menuItems?: HeaderMenuItem[]
  /**
   * Ações do header (busca, login, idioma, etc.)
   */
  actions?: HeaderAction[]
  /**
   * Mostra o botão de busca
   */
  showSearch?: boolean
  /**
   * Callback para busca
   */
  onSearch?: (query: string) => void
  /**
   * Placeholder do campo de busca
   */
  searchPlaceholder?: string
  /**
   * Mostra seletor de idioma
   */
  showLanguageSelector?: boolean
  /**
   * Idiomas disponíveis
   */
  languages?: { code: string; label: string }[]
  /**
   * Idioma atual
   */
  currentLanguage?: string
  /**
   * Callback para mudança de idioma
   */
  onLanguageChange?: (language: string) => void
  /**
   * Mostra toggle de tema escuro/claro
   */
  showThemeToggle?: boolean
  /**
   * Tema atual
   */
  currentTheme?: 'light' | 'dark'
  /**
   * Callback para mudança de tema
   */
  onThemeToggle?: () => void
  /**
   * Densidade do header
   */
  density?: 'small' | 'medium' | 'large'
  /**
   * Variante do header
   */
  variant?: 'default' | 'compact' | 'extended'
  /**
   * Classes CSS adicionais
   */
  className?: string
}

const defaultLanguages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

export const GovBRHeader: React.FC<Readonly<GovBRHeaderProps>> = ({
  title = 'Portal do Governo',
  subtitle,
  logo,
  logoHref = '/',
  menuItems = [],
  actions = [],
  showSearch = true,
  onSearch,
  searchPlaceholder = 'Buscar...',
  showLanguageSelector = false,
  languages = defaultLanguages,
  currentLanguage = 'pt',
  onLanguageChange,
  showThemeToggle = false,
  currentTheme = 'light',
  onThemeToggle,
  density = 'medium',
  variant = 'default',
  strictGovBr = false,
  className,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null)

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim())
    }
  }

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget)
  }

  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchor(null)
  }

  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange?.(languageCode)
    handleLanguageMenuClose()
  }

  const headerClasses = classNames(
    'govbr-header',
    {
      'br-header': strictGovBr,
      [`govbr-header--${density}`]: density,
      [`govbr-header--${variant}`]: variant,
    },
    className
  )

  const renderLogo = () => {
    const logoContent =
      typeof logo === 'string' ? (
        <img src={logo} alt="Logo" style={{ height: 40 }} />
      ) : logo ? (
        logo
      ) : (
        <img
          src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png"
          alt="gov.br"
          style={{ height: 32 }}
        />
      )

    return logoHref ? (
      <Button href={logoHref} sx={{ p: 0, minWidth: 'auto', textTransform: 'none' }}>
        {logoContent}
      </Button>
    ) : (
      logoContent
    )
  }

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
      {menuItems.map(item => (
        <Button
          key={item.id}
          color="inherit"
          href={item.href}
          onClick={item.onClick}
          sx={{ textTransform: 'none' }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  )

  const renderMobileMenu = () => (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      className={classNames({ 'br-menu': strictGovBr })}
    >
      <Box sx={{ width: 280, p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {menuItems.map(item => (
            <ListItem
              key={item.id}
              component={item.href ? 'a' : 'button'}
              href={item.href}
              onClick={() => {
                item.onClick?.()
                setMobileMenuOpen(false)
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )

  const renderSearchBar = () => {
    if (!showSearch) return null

    if (isMobile && !searchOpen) {
      return (
        <IconButton color="inherit" onClick={() => setSearchOpen(true)} aria-label="Buscar">
          <SearchIcon />
        </IconButton>
      )
    }

    return (
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: 1,
          px: 1,
          minWidth: isMobile ? '100%' : 200,
        }}
      >
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'inherit',
            padding: '8px',
            flex: 1,
          }}
        />
        <IconButton type="submit" size="small" sx={{ color: 'inherit' }} aria-label="Buscar">
          <SearchIcon />
        </IconButton>
        {isMobile && (
          <IconButton
            size="small"
            onClick={() => setSearchOpen(false)}
            sx={{ color: 'inherit' }}
            aria-label="Fechar busca"
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
    )
  }

  const renderActions = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {!isMobile && renderSearchBar()}

      {showLanguageSelector && (
        <>
          <IconButton
            color="inherit"
            onClick={handleLanguageMenuOpen}
            aria-label="Selecionar idioma"
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={languageMenuAnchor}
            open={Boolean(languageMenuAnchor)}
            onClose={handleLanguageMenuClose}
          >
            {languages.map(lang => (
              <MenuItem
                key={lang.code}
                selected={lang.code === currentLanguage}
                onClick={() => handleLanguageSelect(lang.code)}
              >
                {lang.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}

      {showThemeToggle && (
        <IconButton color="inherit" onClick={onThemeToggle} aria-label="Alternar tema">
          {currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      )}

      {actions.map(action => (
        <IconButton
          key={action.id}
          color="inherit"
          onClick={action.onClick}
          href={action.href}
          target={action.target}
          aria-label={action.label}
        >
          {action.icon || <AccountCircleIcon />}
        </IconButton>
      ))}

      {isMobile && renderSearchBar()}
    </Box>
  )

  return (
    <>
      <AppBar
        position="static"
        className={headerClasses}
        sx={{
          backgroundColor: strictGovBr ? '#1351b4' : 'primary.main',
          minHeight: density === 'small' ? 56 : density === 'large' ? 80 : 64,
        }}
      >
        <Toolbar
          sx={{
            minHeight: density === 'small' ? 56 : density === 'large' ? 80 : 64,
            px: { xs: 1, sm: 2 },
          }}
        >
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>{renderLogo()}</Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Typography
              variant={density === 'small' ? 'h6' : 'h5'}
              component="h1"
              sx={{ fontWeight: 600, lineHeight: 1.2 }}
            >
              {title}
            </Typography>
            {subtitle && variant !== 'compact' && (
              <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.875rem' }}>
                {subtitle}
              </Typography>
            )}
          </Box>

          {!isMobile && renderDesktopMenu()}

          <Box sx={{ ml: 'auto' }}>{renderActions()}</Box>
        </Toolbar>

        {variant === 'extended' && !isMobile && (
          <Box sx={{ px: 2, pb: 1 }}>{renderSearchBar()}</Box>
        )}
      </AppBar>

      {renderMobileMenu()}
    </>
  )
}

export default GovBRHeader
