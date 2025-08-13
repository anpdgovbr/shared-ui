import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Icon from '@mui/material/Icon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React, { useState } from 'react'
import { GovBRButton } from '../govbr-button/index'
import type { GovBRAvatarProps } from './types'

/**
 * Componente de avatar do usuário no padrão GovBR.
 *
 * Exibe o avatar do usuário (imagem ou inicial do nome), saudação personalizada e um menu suspenso de opções.
 * Permite customização de tamanho do avatar, itens de menu, badge de notificações e estilo visual.
 */
export const GovBRAvatar: React.FC<GovBRAvatarProps> = ({
  name,
  src,
  alt,
  menuItems = [],
  dropdownContent,
  onNavigate,
  size = 'medium',
  variant = 'circular',
  color = 'default',
  className = '',
  badgeContent,
  badgeColor = 'error',
  badgeVariant = 'standard',
  hideGreeting = false,
  ...props
}) => {
  // O estado `anchorEl` é usado pelo MUI para saber onde posicionar o menu. `null` significa fechado.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)

  // Determina se o avatar deve ter a funcionalidade de dropdown.
  const hasDropdown = menuItems.length > 0 || !!dropdownContent

  // Abre o menu definindo sua âncora no elemento clicado.
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (hasDropdown) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // Aciona o callback de navegação (prop) e em seguida fecha o menu.
  const handleNavigate = (href: string) => {
    onNavigate?.(href)
    handleClose()
  }

  // Mapeia props de tamanho e cor para valores de estilo concretos seguindo o padrão GovBR.
  const sizeMap = {
    small: 32, // Tamanho pequeno para avatares
    medium: 40, // Tamanho médio (padrão)
    large: 48, // Tamanho grande
  }

  const textSizeMap = {
    small: '0.75rem', // Texto menor
    medium: '1rem', // Texto médio
    large: '1.25rem', // Texto maior
  }

  const colorMap = {
    default: '#0868AC', // --blue-10 (azul padrão GovBR)
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
  }

  const avatarSize = sizeMap[size] ?? 40
  const textSize = textSizeMap[size] ?? '1rem'

  // Objeto de estilo dinâmico para o Avatar, seguindo o padrão GovBR.
  const avatarSx = {
    width: avatarSize,
    height: avatarSize,
    bgcolor: colorMap[color] ?? colorMap.default,
    color: '#FFFFFF', // --blue-warm-20 ou texto branco sobre azul
    fontSize: textSize,
    fontWeight: 700, // --font-weight-bold
    textTransform: 'uppercase',
    border: 'none',
  }

  // Estilo condicional do botão seguindo o padrão GovBR
  const buttonSx = {
    p: hideGreeting ? 1 : 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: hideGreeting ? 'center' : 'flex-start',
    gap: hideGreeting ? 0 : 1,
    color: hideGreeting ? 'inherit' : '#4B4B4C',
    fontSize: hideGreeting ? 'inherit' : '1rem',
    fontWeight: hideGreeting ? 'inherit' : 400,
    textTransform: hideGreeting ? 'inherit' : 'none',
    minWidth: hideGreeting ? avatarSize + 16 : 'auto',
    minHeight: hideGreeting ? avatarSize + 16 : avatarSize + 24, // Altura maior para o botão
    borderRadius: 50, // Formato de pílula - valor alto para bordas completamente arredondadas
    '& strong': {
      fontWeight: 600,
    },
  }

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

  const avatarContent = name ? getInitials(name) : <PersonIcon fontSize="inherit" />

  // Componente de Avatar com badge opcional
  const AvatarComponent = badgeContent ? (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      badgeContent={badgeContent}
      color={badgeColor}
      variant={badgeVariant}
      sx={{
        '& .MuiBadge-badge': {
          minWidth: badgeVariant === 'dot' ? 8 : 16,
          height: badgeVariant === 'dot' ? 8 : 16,
          fontSize: badgeVariant === 'dot' ? 0 : '0.625rem',
          fontWeight: 600,
          top: size === 'large' ? 4 : size === 'medium' ? 3 : 2,
          right: size === 'large' ? 4 : size === 'medium' ? 3 : 2,
        },
      }}
    >
      <Avatar src={src} alt={alt || name} sx={avatarSx} variant={variant}>
        {avatarContent}
      </Avatar>
    </Badge>
  ) : (
    <Avatar src={src} alt={alt || name} sx={avatarSx} variant={variant}>
      {avatarContent}
    </Avatar>
  )

  return (
    <>
      <GovBRButton
        className={className}
        onClick={handleClick}
        // Props de acessibilidade essenciais para leitores de tela.
        aria-controls={menuOpen ? 'avatar-menu' : undefined}
        aria-haspopup={hasDropdown}
        aria-expanded={menuOpen}
        sx={buttonSx}
        {...props}
      >
        {/* Avatar com badge opcional */}
        {AvatarComponent}

        {/* Exibe a saudação apenas se hideGreeting for false */}
        {!hideGreeting && (
          <span>
            Olá, <strong>{name || 'Usuário'}</strong>
          </span>
        )}

        {/* Exibe a seta apenas se houver dropdown */}
        {hasDropdown && (menuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
      </GovBRButton>

      {/* O componente Menu do MUI renderiza o dropdown seguindo o padrão br-list do GovBR. */}
      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              border: '1px solid #E5E5E5',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              minWidth: '200px',
              mt: 1,
            },
          },
          list: {
            'aria-labelledby': 'avatar-button',
            sx: { p: 0 },
          },
        }}
        // Define o posicionamento preciso do menu em relação ao botão - centralizado.
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {/* Renderiza o conteúdo customizado (se fornecido) ou os itens de menu */}
        {dropdownContent ||
          menuItems.map((item) => (
            <MenuItem
              key={item.href}
              onClick={() => item.href && handleNavigate(item.href)}
              sx={{
                px: 2,
                py: 1.5,
                fontSize: '1rem',
                color: '#4B4B4C',
                borderBottom: '1px solid #F5F5F5',
                '&:last-child': {
                  borderBottom: 'none',
                },
                '&:hover': {
                  backgroundColor: '#F8F9FA',
                },
                '&:focus': {
                  backgroundColor: '#E3F2FD',
                  outline: '2px solid #0868AC',
                  outlineOffset: '-2px',
                },
              }}
            >
              {item.icon && <Icon sx={{ mr: 1.5, fontSize: '1.25rem' }}>{item.icon}</Icon>}
              {item.label}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}

export default GovBRAvatar
