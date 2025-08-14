import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { GovBRButton } from '../govbr-button/index'
import type { GovBRAvatarProps } from './types'

// Define tamanhos do avatar e texto
export const avatarSizeMap = {
  small: { size: 40, text: '0.75rem' },
  medium: { size: 48, text: '1rem' },
  large: { size: 56, text: '1.25rem' },
}

// Paleta de cores para avatares sem imagem
const avatarColors = ['#007BFF', '#28A745', '#DC3545', '#FFC107', '#17A2B8']

// Gera cor baseada no nome
const getAvatarColor = (name: string): string => {
  if (!name) return avatarColors[0]

  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  return avatarColors[Math.abs(hash) % avatarColors.length]
}

// Gera inicial do nome
const getInitials = (name: string) => name.split(' ')[0]?.[0]?.toUpperCase() || 'U'

/**
 * Componente de avatar do usuário no padrão GovBR.
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
  className = '',
  badgeContent,
  badgeColor = 'error',
  badgeVariant = 'standard',
  hideGreeting = false,
  sx,
  ...props
}: Readonly<GovBRAvatarProps>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)
  const hasDropdown = menuItems.length > 0 || !!dropdownContent

  const { size: avatarSize, text: textSize } = avatarSizeMap[size]
  const backgroundColor = getAvatarColor(name || 'User')

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (hasDropdown) setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  const handleNavigate = (href: string) => {
    onNavigate?.(href)
    handleClose()
  }

  const avatarContent = name ? getInitials(name) : <PersonIcon fontSize="inherit" />

  const avatarSx = {
    width: avatarSize,
    height: avatarSize,
    bgcolor: backgroundColor,
    color: '#FFFFFF',
    fontSize: textSize,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
  }

  const buttonSx = {
    p: hideGreeting ? 1 : 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hideGreeting ? 0 : 2,
    color: hideGreeting ? 'inherit' : '#4B4B4C',
    fontSize: hideGreeting ? 'inherit' : '1rem',
    fontWeight: hideGreeting ? 'inherit' : 400,
    textTransform: hideGreeting ? 'inherit' : 'none',
    minWidth: hideGreeting ? avatarSize + 16 : 'auto',
    minHeight: hideGreeting ? avatarSize + 16 : avatarSize + 24,
    borderRadius: 50,
    overflow: 'visible',
    position: 'relative',
    textAlign: 'center',
    '& .greeting': {
      fontWeight: 600,
      display: 'inline-block',
    },
  }

  const renderAvatar = () => {
    const avatarElement = (
      <Avatar src={src} alt={alt || name} sx={avatarSx} variant={variant}>
        {avatarContent}
      </Avatar>
    )

    if (!badgeContent) return avatarElement

    return (
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        badgeContent={badgeContent}
        color={badgeColor}
        variant={badgeVariant}
        sx={{
          position: 'relative',
          '& .MuiBadge-badge': {
            minWidth: badgeVariant === 'dot' ? 8 : 16,
            height: badgeVariant === 'dot' ? 8 : 16,
            fontSize: badgeVariant === 'dot' ? 0 : '0.625rem',
            fontWeight: 600,
            top: size === 'large' ? 4 : size === 'medium' ? 3 : 2,
            right: size === 'large' ? 4 : size === 'medium' ? 3 : 2,
            zIndex: 2,
          },
        }}
      >
        {avatarElement}
      </Badge>
    )
  }

  return (
    <Box className={className} sx={sx} {...props}>
      <GovBRButton
        onClick={handleClick}
        aria-controls={menuOpen ? 'avatar-menu' : undefined}
        aria-haspopup={hasDropdown}
        aria-expanded={menuOpen}
        sx={buttonSx}
      >
        {renderAvatar()}

        {!hideGreeting && (
          <Typography component="span" sx={{ marginTop: '30px' }}>
            Olá,{' '}
            <Typography component="span" className="greeting">
              {name || 'Usuário'}
            </Typography>
          </Typography>
        )}

        {hasDropdown && (menuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
      </GovBRButton>

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
              minWidth: 200,
              mt: 1,
            },
          },
          list: { 'aria-labelledby': 'avatar-button', sx: { p: 0 } },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
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
                '&:last-child': { borderBottom: 'none' },
                '&:hover': { backgroundColor: '#F8F9FA' },
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
    </Box>
  )
}

export type { GovBRAvatarProps } from './types'
