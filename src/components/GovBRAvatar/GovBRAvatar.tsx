import React, { useEffect, useRef, useState } from 'react'
import type { GovBRAvatarProps } from './types.js'

export const GovBRAvatar: React.FC<GovBRAvatarProps> = ({
  user,
  onNavigate,
  menuItems = [],
  avatarSize = 40,
  textMaxWidth = 300,
  className = '',
  strictGovBr = false,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerId = 'avatar-dropdown-trigger'
  const menuId = 'avatar-menu'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavigation = (href: string) => {
    setMenuOpen(false)
    onNavigate(href)
  }

  return (
    <div ref={menuRef} style={{ position: 'relative', display: 'inline-flex' }}>
      <button
        type="button"
        id={triggerId}
        className={`br-sign-in ${className}`.trim()}
        aria-label={`Olá, ${user?.name || 'Usuário'}`}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={() => setMenuOpen(!menuOpen)}
        style={
          strictGovBr
            ? {}
            : {
                height: 'auto',
                padding: 'var(--spacing-scale-base)',
                display: 'flex',
                alignItems: 'center',
              }
        }
      >
        <span
          className="br-avatar"
          title={user?.name || ''}
          style={strictGovBr ? {} : { lineHeight: `${avatarSize}px` }}
        >
          {user?.image ? (
            <span
              className="image"
              style={
                strictGovBr
                  ? {}
                  : {
                      width: `${avatarSize}px`,
                      height: `${avatarSize}px`,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }
              }
            >
              <img
                src={user.image}
                alt={user.name || 'Usuário'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </span>
          ) : (
            <span
              className="content bg-orange-vivid-30 text-pure-0"
              style={
                strictGovBr
                  ? {}
                  : {
                      width: `${avatarSize}px`,
                      height: `${avatarSize}px`,
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: `${avatarSize * 0.5}px`,
                    }
              }
            >
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          )}
        </span>
        <span
          className="ml-2 text-gray-80 text-weight-regular"
          style={
            strictGovBr
              ? {}
              : {
                  maxWidth: `${textMaxWidth}px`,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  marginLeft: '8px',
                }
          }
        >
          Olá, <span className="text-weight-semi-bold">{user?.name || 'Usuário'}</span>
        </span>
        <i
          className={`fas fa-caret-${menuOpen ? 'up' : 'down'}`}
          aria-hidden="true"
          style={{ marginLeft: '4px' }}
        />
      </button>

      <div
        id={menuId}
        className="br-list"
        hidden={!menuOpen}
        role="menu"
        aria-labelledby={triggerId}
        style={{
          position: 'absolute',
          right: 0,
          top: '100%',
          marginTop: '0.25rem',
          zIndex: 1000,
          minWidth: '100%',
        }}
      >
        {menuItems.map(item => (
          <button
            key={item.label}
            className="br-item"
            role="menuitem"
            onClick={() => handleNavigation(item.href)}
            style={{ width: '100%', textAlign: 'left' }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
