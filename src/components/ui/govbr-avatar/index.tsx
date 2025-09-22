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
 * GovBRAvatar
 *
 * Componente de alto nível que representa um avatar com suporte a dropdown.
 *
 * Modo híbrido:
 * - Modo padrão (strictgovbr = false): renderiza componentes MUI e delega a estilização
 *   ao tema (govbrTheme). Ideal para uso padrão e compatível com props do MUI.
 * - Modo estrito (strictgovbr = true): renderiza marcação HTML pura com classes
 *   do Gov.br Design System para fidelidade visual 100%.
 *
 * Uso:
 * - Recebe `menuItems` para exibir um menu dropdown opcional.
 * - Pode ser controlado externamente via `open` e `onOpenChange`,
 *   ou operar em modo controlado internamente.
 *
 * @public
 * @since 1.0.0
 * @param props - Propriedades do componente (Readonly<GovBRAvatarProps>)
 * @returns JSX.Element - Elemento React representando o avatar (com ou sem menu)
 * @example
 * <GovBRAvatar
 *   name="Maria"
 *   greetingText="Olá"
 *   menuItems={[
 *     { label: 'Perfil', href: '/perfil' },
 *     { label: 'Sair', onClick: handleLogout }
 *   ]}
 * />
 *
 * @remarks
 * - Não espalha props arbitrárias no modo estrito (apenas props explícitas do tipo strict).
 * - No modo padrão repassa apenas props compatíveis com MUI.
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

  /**
   * Abre o dropdown do avatar.
   *
   * - Se o componente estiver em modo não-controlado (controlledOpen === undefined),
   *   atualiza o estado interno para abrir o menu.
   * - Sempre dispara o callback onOpenChange se fornecido.
   *
   * @remarks
   * Utilizado tanto no modo MUI quanto no modo estrito para unificar o fluxo de abertura.
   */
  const handleOpen = () => {
    const newOpen = true
    if (controlledOpen === undefined) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  /**
   * Fecha o dropdown do avatar.
   *
   * - Se o componente estiver em modo não-controlado (controlledOpen === undefined),
   *   atualiza o estado interno para fechar o menu.
   * - Sempre dispara o callback onOpenChange se fornecido.
   *
   * @remarks
   * Mantém simetria com handleOpen para comportamento previsível ao controlar o estado.
   */
  const handleClose = () => {
    const newOpen = false
    if (controlledOpen === undefined) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  /**
   * Trata o clique em um item do menu do avatar.
   *
   * - Fecha o menu ao iniciar a ação.
   * - Se o item possuir onClick, invoca-o.
   * - Caso contrário, se possuir href e houver onNavigate no componente,
   *   delega a navegação para onNavigate com o item atual.
   *
   * @param item - Objeto que representa o item do menu (label, href, onClick, disabled, icon)
   */
  const handleMenuItemClick = (item: GovBRAvatarMenuItem) => {
    handleClose()
    if (item.onClick) {
      item.onClick()
    } else if (item.href && onNavigate) {
      onNavigate(item)
    }
  }

  /**
   * Handler do clique no botão trigger do avatar (modo estrito e MUI).
   *
   * - Prevém o comportamento padrão do evento.
   * - Alterna entre abrir/fechar o dropdown de acordo com o estado atual.
   *
   * @param e - Evento de clique do botão
   */
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
      // Renderização simples em modo estrito: sempre expor o conteúdo dentro de
      // uma `.content` para manter consistência com as expectativas dos testes
      // e com o markup usado no modo dropdown.
      return (
        <div
          className={classNames('br-avatar', { [`${density}`]: density }, strictClassName)}
          title={tooltip}
        >
          {strictChildren ? (
            <span className="content">{strictChildren}</span>
          ) : letter ? (
            <span className="content">{letter}</span>
          ) : null}
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
          // Aplicamos estilo inline somente ao botão trigger; não espalhamos props
          // vindas do componente para evitar leak de atributos DOM.
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
              {/* Renderizar como uma única string evita que o texto seja fragmentado
                  em múltiplos nós (o que atrapalha as buscas por texto nos testes). */}
              {`${greetingText}, ${name}`}
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
              // Usamos um href seguro para evitar URLs javascript: que o React bloqueia
              href={item.href || '#'}
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
        sx={{
          ...combinedSx,
          // Ajuste de alinhamento vertical dos ícones e avatar
          '& .MuiButton-startIcon, & .MuiButton-endIcon': {
            marginTop: 0,
            marginBottom: 0,
          },
          // Ajuste do Typography para alinhar com o Avatar
          '& .MuiTypography-root': {
            lineHeight: 1.2,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
          },
          // Garantir que o avatar esteja alinhado verticalmente
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
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {`${greetingText}, ${name}`}
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
