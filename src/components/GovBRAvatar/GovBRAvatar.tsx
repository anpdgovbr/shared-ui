import React, { useState } from 'react'
import { Avatar as MuiAvatar, Menu, MenuItem, Icon, Badge } from '@mui/material'
import { Person, ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import type { GovBRAvatarProps, GovBRAvatarMenuItem } from './types'
import GovBRButton from '../GovBRButton/GovBRButton'

/**
 * Componente de avatar do usuário no padrão GovBR.
 * Exibe o avatar do usuário, que pode conter um identificador (badge) e acionar um dropdown.
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
  color = 'primary',
  className = '',
  badgeContent,
  badgeColor = 'error',
  badgeVariant = 'standard',
  hideGreeting = false,
}) => {
  // Estado para controlar o elemento de âncora do menu dropdown.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)
  // Determina se o avatar deve ter a funcionalidade de dropdown.
  const hasDropdown = menuItems.length > 0 || !!dropdownContent

  // Abre o menu dropdown no elemento clicado.
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (hasDropdown) {
      setAnchorEl(event.currentTarget)
    }
  }

  // Fecha o menu dropdown.
  const handleClose = () => {
    setAnchorEl(null)
  }

  // Executa a navegação e fecha o menu.
  const handleNavigate = (href: string) => {
    onNavigate?.(href)
    handleClose()
  }

  // Mapeamento de tamanhos para estilização do avatar.
  const sizeMap = { small: 32, medium: 40, large: 55, xl: 56 }
  const colorMap = {
    default: '#f7f7f7',
    primary: '#1452b5',
    secondary: '#ffffff',
  }

  // Estilo para o botão quando a saudação está oculta (versão compacta).
  const compactButtonSx = {
    padding: 0,
    minHeight: '30px',
    height: '50px',
    width: '30px',
    Padding: '4px 8px 4px 6px',
    borderRadius: '50px',
    '&:hover': {
      bgcolor: 'transparent',
    },
  }

  // Estilo base do componente de avatar (MuiAvatar).
  const avatarSx = {
    width: sizeMap[size] ?? 30,
    height: sizeMap[size] ?? 30,
    bgcolor: colorMap[color] ?? colorMap.default,
    fontSize: (sizeMap[size] ?? 40) * 0.4,
  }

  // Estilo condicional do botão principal: usa o estilo completo ou compacto.
  const buttonSx = !hideGreeting
    ? {
        bgcolor: 'action.hover',
        borderRadius: '50px',
        padding: '4px 8px 4px 6px',
        minHeight: '40px',
        height: '50px',
        textTransform: 'none',
        color: 'text.primary',
        fontSize: '0.875rem',
        lineHeight: 1.2,
        gap: 0.2,
        '&:hover': {
          bgcolor: 'transparent',
        },
      }
    : compactButtonSx

  // Extrai as duas primeiras iniciais do nome para exibir no avatar.
  const getInitials = (name: string) =>
    name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

  // Define o conteúdo do avatar: iniciais do nome ou um ícone padrão.
  const avatarContent = name ? getInitials(name) : <Person fontSize="inherit" />

  // Componente de Avatar com badge (notificação).
  const AvatarComponent = (
    <MuiAvatar src={src} alt={alt || name} sx={avatarSx} variant={variant}>
      {avatarContent}
    </MuiAvatar>
  )

  return (
    <>
      {/* Botão principal que aciona o menu e contém o avatar e a saudação. */}
      <GovBRButton
        className={className}
        onClick={handleClick}
        aria-controls={menuOpen ? 'avatar-menu' : undefined}
        aria-haspopup={hasDropdown}
        aria-expanded={menuOpen}
        id="avatar-button"
        variant="text"
        sx={buttonSx}
      >
        {/* Badge para exibir notificações (um ponto ou número) sobre o avatar. */}
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
          {AvatarComponent}
        </Badge>

        {/* Exibe a saudação "Olá, {nome}" se a prop `hideGreeting` for falsa. */}
        {!hideGreeting && (
          <span>
            Olá, <strong>{name || 'Usuário'}</strong>
          </span>
        )}

        {/* Exibe a seta para baixo ou para cima se houver um dropdown. */}
        {hasDropdown && (menuOpen ? <ArrowDropUp /> : <ArrowDropDown />)}
      </GovBRButton>

      {/* Menu dropdown que é aberto ao clicar no botão. */}
      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        slotProps={{
          list: { 'aria-labelledby': 'avatar-button' },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {/* Renderiza o conteúdo customizado (se fornecido) ou os itens de menu. */}
        {dropdownContent ||
          menuItems.map((item: GovBRAvatarMenuItem) => (
            <MenuItem key={item.href} onClick={() => handleNavigate(item.href)}>
              {item.icon && <Icon sx={{ mr: 1.5 }}>{item.icon}</Icon>}
              {item.label}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}

export default GovBRAvatar