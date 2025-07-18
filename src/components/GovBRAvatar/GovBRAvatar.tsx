import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import GovBRButton from '../GovBRButton/GovBRButton.js'
import PersonIcon from '@mui/icons-material/Person'
import type { GovBRAvatarProps, GovBRAvatarMenuItem } from '../../types/GovBRAvatarTypes.js'

export const GovBRAvatar: React.FC<Readonly<GovBRAvatarProps>> = ({
  name,
  src,
  alt,
  size = 'medium',
  variant = 'circular',
  color = 'default',
  menuItems = [],
  onNavigate,
  className = '',
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hasMenu = menuItems.length > 0

  // Tamanhos do avatar
  const sizeMap = {
    small: 32,
    medium: 40,
    large: 48,
    xl: 56,
  }
  const avatarSize = sizeMap[size] ?? 40

  // Formato do avatar
  const variantMap = {
    circular: '50%',
    rounded: '8px',
    square: '0px',
  }
  const borderRadius = variantMap[variant] ?? '50%'

  // Cores
  const colorMap = {
    default: 'var(--color-primary-lighten-01)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
  }
  const backgroundColor = colorMap[color] ?? colorMap.default

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavigate = (href: string) => {
    setMenuOpen(false)
    onNavigate?.(href)
  }

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map(n => n.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)

  const renderAvatarContent = () => {
    if (src) {
      return (
        <span
          className="image"
          style={{
            width: `${avatarSize}px`,
            height: `${avatarSize}px`,
            borderRadius,
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={src}
            alt={alt || name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </span>
      )
    }

    const fallbackContent = name ? getInitials(name) : <PersonIcon fontSize="inherit" />

    return (
      <span
        className="content text-pure-0"
        style={{
          width: `${avatarSize}px`,
          height: `${avatarSize}px`,
          borderRadius,
          backgroundColor,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: `${avatarSize * 0.5}px`,
        }}
      >
        {fallbackContent}
      </span>
    )
  }

  return (
    <div
      ref={menuRef}
      style={{ position: 'relative', display: 'inline-block' }}
      className={classNames('govbr-avatar-container')}
    >
      <GovBRButton
        type="button"
        className={classNames('br-sign-in', className)}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        style={{
          padding: 'var(--spacing-scale-base)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          className="br-avatar"
          title={name}
          style={{
            lineHeight: `${avatarSize}px`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderAvatarContent()}
        </span>

        <span
          className="ml-2 text-gray-80 text-weight-regular"
          style={{
            maxWidth: '200px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Olá, <span className="text-weight-semi-bold">{name || 'Usuário'}</span>
        </span>

        {hasMenu && (
          <i
            className={`fas fa-caret-${menuOpen ? 'up' : 'down'}`}
            aria-hidden="true"
            style={{ marginLeft: '4px' }}
          />
        )}
      </GovBRButton>

      {hasMenu && menuOpen && (
        <div
          className="br-list"
          role="menu"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '0.5rem',
            backgroundColor: 'var(--surface-color-base)',
            boxShadow: 'var(--surface-shadow-sm)',
            zIndex: 1000,
            minWidth: '200px',
          }}
        >
          {menuItems.map((item: GovBRAvatarMenuItem) => (
            <div
              key={item.href}
              className="br-item"
              role="menuitem"
              tabIndex={0}
              onClick={() => handleNavigate(item.href)}
              onKeyDown={e => e.key === 'Enter' && handleNavigate(item.href)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                cursor: 'pointer',
              }}
            >
              {item.icon && <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>}
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default GovBRAvatar
