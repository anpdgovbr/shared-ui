import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Icon from '@mui/material/Icon'
import PersonIcon from '@mui/icons-material/Person'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import type { GovBRAvatarProps, GovBRAvatarMenuItem } from './types'
import { GovBRButton } from '../govbr-button/index'

/**
 * Componente de avatar do usuário no padrão GovBR.
 *
 * Exibe o avatar do usuário (imagem ou inicial do nome), saudação personalizada e um menu suspenso de opções.
 * Permite customização de tamanho do avatar, itens de menu, badge de notificações e estilo visual.
 *
 * @param props Propriedades do componente GovBRAvatar.
 * @example
 * ```tsx
 * <GovBRAvatar
 *   name="João Silva"
 *   onNavigate={href => console.log(href)}
 *   menuItems={[{ label: 'Perfil', href: '/perfil' }]}
 *   badgeContent="3"
 *   badgeColor="error"
 * />
 * ```
 */
export function GovBRAvatar({
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
}: GovBRAvatarProps) {
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

  // Mapeia props de tamanho e cor para valores de estilo concretos.
  const sizeMap = { small: 32, medium: 40, large: 48 }
  const colorMap = {
    default: 'var(--color-primary-lighten-01)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
  }

  const avatarSize = sizeMap[size] ?? 40

  // Objeto de estilo dinâmico para o Avatar, baseado nas props recebidas.
  const avatarSx = {
    width: avatarSize,
    height: avatarSize,
    bgcolor: colorMap[color] ?? colorMap.default,
    fontSize: avatarSize * 0.5,
  }

  // Estilo condicional do botão: completo com saudação ou compacto apenas com avatar
  const buttonSx = hideGreeting
    ? {
        // Estilo compacto (apenas avatar)
        padding: 0,
        minWidth: avatarSize + 8,
        minHeight: avatarSize + 8,
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          bgcolor: 'transparent',
        },
      }
    : {
        // Estilo padrão (com saudação)
        p: 'var(--spacing-scale-base)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-color-primary)',
        minHeight: avatarSize + 16,
        fontSize: size === 'small' ? '0.875rem' : size === 'large' ? '1.125rem' : '1rem',
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
          fontSize: badgeVariant === 'dot' ? 0 : 10,
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

      {/* O componente Menu do MUI renderiza o dropdown e gerencia seu comportamento. */}
      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        slotProps={{
          list: { 'aria-labelledby': 'avatar-button' },
        }}
        // Define o posicionamento preciso do menu em relação ao botão.
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {/* Renderiza o conteúdo customizado (se fornecido) ou os itens de menu */}
        {dropdownContent ||
          menuItems.map((item: GovBRAvatarMenuItem) => (
            <MenuItem key={item.href} onClick={() => item.href && handleNavigate(item.href)}>
              {item.icon && <Icon sx={{ mr: 1.5 }}>{item.icon}</Icon>}
              {item.label}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}

// Exports nomeados para tree shaking
export type { GovBRAvatarProps, GovBRAvatarMenuItem } from './types'
