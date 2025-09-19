'use client'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import type { SxProps, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'

import type {
  GovBRAvatarMenuItem,
  GovBRAvatarMuiProps,
  GovBRAvatarProps,
  GovBRAvatarStrictProps,
} from './types'

/**
 * Componente de Avatar que implementa o Design System GovBR de duas formas:
 * 1.  **Modo Padrão (default):** Renderiza um `<Avatar>` do Material-UI com dropdown usando Menu/MenuItem, estilizado via `govbrTheme`.
 * 2.  **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<button>` padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente com dropdown HTML nativo. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRAvatar(props: Readonly<GovBRAvatarProps>) {
  const {
    menuItems,
    name,
    greetingText = 'Olá',
    onNavigate,
    open: controlledOpen,
    onOpenChange,
    strictgovbr,
  } = props

  const [internalOpen, setInternalOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  // Estado do dropdown (controlado ou interno)
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen

  const handleOpen = () => {
    const newOpen = true
    if (controlledOpen === undefined) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  const handleClose = () => {
    const newOpen = false
    if (controlledOpen === undefined) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  const handleMenuItemClick = (item: GovBRAvatarMenuItem) => {
    handleClose()
    if (item.onClick) {
      item.onClick()
    } else if (item.href && onNavigate) {
      onNavigate(item)
    }
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isOpen) {
      handleClose()
    } else {
      handleOpen()
    }
  }

  // --- MODO ESTRITO ---
  if (strictgovbr) {
    // No modo estrito NÃO espalhamos props arbitrárias para o DOM.
    // Usamos explicitamente apenas as props necessárias.
    const strictProps = props as GovBRAvatarStrictProps
    const {
      density,
      letter,
      tooltip,
      className: strictClassName,
      children: strictChildren,
    } = strictProps

    // Se não há menu items, renderizar avatar simples
    if (!menuItems || menuItems.length === 0) {
      return (
        <div
          className={classNames('br-avatar', { [`${density}`]: density }, strictClassName)}
          title={tooltip}
        >
          {letter && <span className="letter">{letter}</span>}
          {strictChildren && <span className="content">{strictChildren}</span>}
        </div>
      )
    }

    // Renderizar com dropdown (Gov.br DS)
    const dropdownId = `avatar-menu-${Math.random().toString(36).substr(2, 9)}`
    const triggerId = `avatar-dropdown-trigger-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div>
        <button
          ref={anchorRef}
          className="br-sign-in"
          type="button"
          id={triggerId}
          data-toggle="dropdown"
          data-target={dropdownId}
          aria-label={`${greetingText}, ${name || 'Usuário'}`}
          onClick={handleButtonClick}
          style={{
            height: 'auto',
            padding: 'var(--spacing-scale-base)',
          }}
        >
          <span
            className={classNames('br-avatar', { [`${density}`]: density })}
            title={tooltip || (name ?? undefined)}
          >
            {letter && <span className="content">{letter}</span>}
            {strictChildren && <span className="content">{strictChildren}</span>}
          </span>
          {name && (
            <span className="ml-2 text-gray-80 text-weight-regular">
              {greetingText}, <span className="text-weight-semi-bold">{name}</span>
            </span>
          )}
          <i className="fas fa-caret-down" aria-hidden="true" />
        </button>

        <div
          className="br-list"
          id={dropdownId}
          hidden={!isOpen}
          role="menu"
          aria-labelledby={triggerId}
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              className={classNames('br-item', { disabled: item.disabled })}
              href={item.href || 'javascript:void(0)'}
              role="menuitem"
              onClick={(e) => {
                if (item.disabled) return
                e.preventDefault()
                handleMenuItemClick(item)
              }}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  // Não espalhar props custom para o Avatar. Passamos apenas props MUI explícitas.
  // Cast seguro para o tipo MUI quando necessário.
  const muiProps: GovBRAvatarMuiProps = props as GovBRAvatarMuiProps
  const {
    children: muiChildren,
    sx: muiSx,
    src: muiSrc,
    alt: muiAlt,
    className: muiClassName,
  } = muiProps

  // Se não há menu items, renderizar avatar simples
  if (!menuItems || menuItems.length === 0) {
    return (
      <Avatar src={muiSrc} alt={muiAlt} sx={muiSx} className={muiClassName}>
        {muiChildren}
      </Avatar>
    )
  }

  // Renderizar com dropdown (MUI)
  const baseSx = {
    padding: 1,
    minWidth: 'auto',
    color: 'text.primary',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'action.hover',
    },
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  } as const

  const combinedSx: SxProps<Theme> = Array.isArray(muiSx)
    ? ([baseSx, ...muiSx] as SxProps<Theme>)
    : muiSx
      ? ([baseSx, muiSx] as SxProps<Theme>)
      : (baseSx as SxProps<Theme>)
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        variant="text"
        sx={combinedSx}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Avatar src={muiSrc} alt={muiAlt} className={muiClassName}>
          {muiChildren}
        </Avatar>
        {name && (
          <Typography variant="body2" component="span">
            {greetingText}, <strong>{name}</strong>
          </Typography>
        )}
      </Button>

      <Menu
        anchorEl={anchorRef.current}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(item)} disabled={item.disabled}>
            {item.icon && <Box sx={{ mr: 1, display: 'flex' }}>{item.icon}</Box>}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
