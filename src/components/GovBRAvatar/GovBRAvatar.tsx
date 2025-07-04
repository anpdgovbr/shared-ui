import React, { useEffect, useRef, useState } from 'react'
import { GovBRAvatarProps } from './types.js'

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
  const firstItemRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      firstItemRef.current?.focus()
    }
  }, [menuOpen])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setMenuOpen(false)
    }
  }

  const handleNavigation = (href: string) => {
    setMenuOpen(false)
    onNavigate(href)
  }

  const avatarClasses = strictGovBr ? 'br-avatar' : `br-avatar ${className}`
  const buttonClasses = strictGovBr ? 'br-sign-in' : `br-sign-in ${className}`

  return (
    <div
      ref={menuRef}
      style={{ position: 'relative', display: 'inline-flex' }}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className={buttonClasses}
        aria-label={`Olá, ${user?.name || 'Usuário'}`}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'flex', alignItems: 'center', paddingLeft: '0px' }}
      >
        {user?.image ? (
          <span
            className={avatarClasses}
            style={{
              display: 'inline-block',
              width: strictGovBr ? '40px' : `${avatarSize}px`,
              height: strictGovBr ? '40px' : `${avatarSize}px`,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src={user.image}
              alt={user.name || 'Usuário'}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </span>
        ) : (
          <span className={avatarClasses} title={user?.name || ''}>
            <span className="content bg-orange-vivid-30 text-pure-0">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </span>
        )}
        <span
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: strictGovBr ? '300px' : `${textMaxWidth}px`,
            marginLeft: '8px',
          }}
        >
          Olá, <span style={{ fontWeight: 600 }}>{user?.name || 'Usuário'}</span>
        </span>
        <span style={{ marginLeft: '4px' }}>{menuOpen ? '▲' : '▼'}</span>
      </button>

      {menuOpen && (
        <div
          className="br-list"
          role="menu"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '4px',
            zIndex: 1000,
            minWidth: '100%',
            boxSizing: 'border-box',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              ref={index === 0 ? firstItemRef : null}
              className="br-item"
              role="menuitem"
              onClick={() => handleNavigation(item.href)}
              style={{
                width: '100%',
                textAlign: 'left',
                justifyContent: 'flex-start',
                padding: '8px 12px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              onKeyDown={e => {
                if (e.key === 'Escape') setMenuOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
