import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
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
 * Permite customização de tamanho do avatar, itens de menu e estilo visual.
 *
 * @param props Propriedades do componente GovBRAvatar.
 * @example
 * ```tsx
 * <GovBRAvatar
 * name="João Silva"
 * onNavigate={href => console.log(href)}
 * menuItems={[{ label: 'Perfil', href: '/perfil' }]}
 * />
 * ```
 */
export function GovBRAvatar({
  name,
  src,
  alt,
  menuItems = [],
  onNavigate,
  size = 'medium',
  color = 'default',
  className = '',
}: GovBRAvatarProps) {
  // O estado `anchorEl` é usado pelo MUI para saber onde posicionar o menu. `null` significa fechado.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)

  // Abre o menu definindo sua âncora no elemento clicado.
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (menuItems.length > 0) {
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

  // Objeto de estilo dinâmico para o Button, baseado no tamanho
  const buttonSx = {
    p: 'var(--spacing-scale-base)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-color-primary)',
    minHeight: avatarSize + 16, // altura mínima baseada no avatar + padding
    fontSize: size === 'small' ? '0.875rem' : size === 'large' ? '1.125rem' : '1rem',
  }

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

  const avatarContent = name ? getInitials(name) : <PersonIcon fontSize="inherit" />

  return (
    <>
      <GovBRButton
        className={className}
        onClick={handleClick}
        // Props de acessibilidade essenciais para leitores de tela.
        aria-controls={menuOpen ? 'avatar-menu' : undefined}
        aria-haspopup={menuItems.length > 0}
        aria-expanded={menuOpen}
        sx={buttonSx}
      >
        {/* O Avatar do MUI exibe a imagem de `src` ou, como fallback, seus `children`. */}
        <Avatar src={src} alt={alt || name} sx={avatarSx}>
          {avatarContent}
        </Avatar>

        <span>
          Olá, <strong>{name || 'Usuário'}</strong>
        </span>

        {menuItems.length > 0 && (menuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
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
        {menuItems.map((item: GovBRAvatarMenuItem) => (
          <MenuItem key={item.href} onClick={() => item.href && handleNavigate(item.href)}>
            {item.icon && <Icon sx={{ mr: 1.5 }}>{item.icon}</Icon>}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
