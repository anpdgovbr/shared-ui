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
 * GovBRAvatar - Componente Avatar com dropdown seguindo a arquitetura híbrida
 *
 * Implementa dois modos de renderização:
 * - **Modo Padrão** (strictgovbr=false): Componentes MUI estilizados pelo govbrTheme
 * - **Modo Estrito** (strictgovbr=true): HTML puro com classes Gov.br Design System
 *
 * @param props - Propriedades do componente
 * @returns JSX.Element - Avatar com dropdown opcional
 *
 * @example
 * // Modo Padrão (MUI + tema)
 * <GovBRAvatar name="João Silva" menuItems={menuItems} />
 *
 * // Modo Estrito (Gov.br DS puro)
 * <GovBRAvatar strictgovbr name="João Silva" letter="J" menuItems={menuItems} />
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

  // Handlers para controle do dropdown
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

  // ===================================================================
  // MODO ESTRITO GOVBR-DS (strictgovbr=true)
  // Renderiza HTML puro com classes CSS do Gov.br Design System
  // ===================================================================
  if (strictgovbr) {
    const strictProps = props as GovBRAvatarStrictProps
    const {
      density,
      letter,
      tooltip,
      className: strictClassName,
      children: strictChildren,
    } = strictProps

    // Avatar simples sem dropdown
    if (!menuItems || menuItems.length === 0) {
      return (
        <Box
          className={classNames('br-avatar', { [`${density}`]: density }, strictClassName)}
          title={tooltip}
        >
          {strictChildren ? (
            <span className="content">{strictChildren}</span>
          ) : letter ? (
            <span className="content">{letter}</span>
          ) : null}
        </Box>
      )
    }

    // Avatar com dropdown Gov.br DS
    const dropdownId = `avatar-menu-${Math.random().toString(36).substr(2, 9)}`
    const triggerId = `avatar-dropdown-trigger-${Math.random().toString(36).substr(2, 9)}`

    return (
      <Box>
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
              href={item.href || '#'}
              role="menuitem"
              onClick={(e) => {
                if (item.disabled) return
                e.preventDefault()
                handleMenuItemClick(item)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Box>
    )
  }
  // ===================================================================
  // FIM DO MODO ESTRITO GOVBR-DS
  // ===================================================================

  // ===================================================================
  // MODO PADRÃO MUI (strictgovbr=false)
  // Renderiza componentes MUI estilizados pelo govbrTheme
  // ===================================================================
  const muiProps: GovBRAvatarMuiProps = props as GovBRAvatarMuiProps
  const {
    children: muiChildren,
    sx: muiSx,
    src: muiSrc,
    alt: muiAlt,
    className: muiClassName,
  } = muiProps

  // Avatar simples sem dropdown
  if (!menuItems || menuItems.length === 0) {
    return (
      <Avatar src={muiSrc} alt={muiAlt} sx={muiSx} className={muiClassName}>
        {muiChildren}
      </Avatar>
    )
  }

  // Avatar com dropdown MUI
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
        sx={{
          ...combinedSx,
          // Ajustes de alinhamento vertical
          '& .MuiButton-startIcon, & .MuiButton-endIcon': {
            marginTop: 0,
            marginBottom: 0,
          },
          '& .MuiTypography-root': {
            lineHeight: 1.2,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiAvatar-root': {
            display: 'flex',
            alignItems: 'center',
            marginTop: 0,
            marginBottom: 0,
          },
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Avatar src={muiSrc} alt={muiAlt} className={muiClassName}>
          {muiChildren}
        </Avatar>
        {name && (
          <Typography
            variant="body2"
            component="span"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 'var(--font-size-scale-base)',
              color: 'var(--gray-80)',
              fontWeight: 'var(--font-weight-regular)',
            }}
          >
            {greetingText},{' '}
            <Box component="span" sx={{ fontWeight: 'var(--font-weight-semi-bold)' }}>
              {name}
            </Box>
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
  // ===================================================================
  // FIM DO MODO PADRÃO MUI
  // ===================================================================
}
