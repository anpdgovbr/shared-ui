import React, { useState } from 'react'
import { Avatar as MuiAvatar, Button, Menu, MenuItem, Icon } from '@mui/material'
import { Person, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import type { GovBRAvatarProps, GovBRAvatarMenuItem } from './types'

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
export const GovBRAvatar: React.FC<GovBRAvatarProps> = ({
  name,
  src,
  alt,
  menuItems = [],
  onNavigate,
  size = 'medium',
  color = 'default',
  className = '',
}) => {
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
  const sizeMap = { small: 32, medium: 40, large: 48, xl: 56 }
  const colorMap = {
    default: 'var(--color-primary-lighten-01)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
  }

  // Objeto de estilo dinâmico para o Avatar, baseado nas props recebidas.
  const avatarSx = {
    width: sizeMap[size] ?? 40,
    height: sizeMap[size] ?? 40,
    bgcolor: colorMap[color] ?? colorMap.default,
    fontSize: (sizeMap[size] ?? 40) * 0.5,
  }

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

  const avatarContent = name ? getInitials(name) : <Person fontSize="inherit" />

  return (
    <>
      <Button
        className={className}
        onClick={handleClick}
        // Props de acessibilidade essenciais para leitores de tela.
        aria-controls={menuOpen ? 'avatar-menu' : undefined}
        aria-haspopup={menuItems.length > 0}
        aria-expanded={menuOpen}
        sx={{
          p: 'var(--spacing-scale-base)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderRadius: '4px',
          textTransform: 'none',
          color: 'var(--text-color-primary)',
        }}
      >
        {/* O Avatar do MUI exibe a imagem de `src` ou, como fallback, seus `children`. */}
        <MuiAvatar src={src} alt={alt || name} sx={avatarSx}>
          {avatarContent}
        </MuiAvatar>

        <span>
          Olá, <strong>{name || 'Usuário'}</strong>
        </span>

        {menuItems.length > 0 && (menuOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />)}
      </Button>

      {/* O componente Menu do MUI renderiza o dropdown e gerencia seu comportamento. */}
      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'avatar-button' }}
        // Define o posicionamento preciso do menu em relação ao botão.
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {menuItems.map((item: GovBRAvatarMenuItem) => (
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