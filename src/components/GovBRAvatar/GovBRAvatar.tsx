import React from 'react'
import { Avatar as MuiAvatar } from '@mui/material'
import { Person } from '@mui/icons-material'
import classNames from 'classnames'
import type { GovBRAvatarProps } from '../../types/GovBRAvatarTypes.js'

export const GovBRAvatar: React.FC<GovBRAvatarProps> = ({
  name,
  src,
  alt,
  size = 'medium',
  variant = 'circular',
  color = 'default', //default é o valor padrão para cor
  strictGovBr = false,
  className,
  ...props
}) => {
  const componentClass = classNames(
    {
      'br-avatar': strictGovBr,
      [`${size}`]: size && strictGovBr,
      [`${variant === 'circular' ? 'circle' : variant}`]: variant && strictGovBr,
      [`${color}`]: color && strictGovBr && color !== 'default',
    },
    className
  )

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getSizeProps = () => {
    switch (size) {
      case 'small':
        return { sx: { width: 32, height: 32 } }
      case 'large':
        return { sx: { width: 56, height: 56 } }
      case 'medium':
      default:
        return { sx: { width: 40, height: 40 } }
    }
  }

  const getColorProps = () => {
    if (strictGovBr || color === 'default') return {}
    switch (color) {
      case 'primary':
        return { sx: { bgcolor: 'primary.main' } }
      case 'secondary':
        return { sx: { bgcolor: 'secondary.main' } }
      default:
        return {}
    }
  }

  if (strictGovBr) {
    return (
      <div className={componentClass} title={alt || name}>
        {src ? (
          <img src={src} alt={alt || name} />
        ) : name ? (
          <span>{getInitials(name)}</span>
        ) : (
          Person && <Person />
        )}
      </div>
    )
  }

  return (
    <MuiAvatar
      src={src}
      alt={alt || name}
      variant={variant}
      className={componentClass}
      {...getSizeProps()}
      {...getColorProps()}
      {...props}
    >
      {name ? getInitials(name) : <Person />}
    </MuiAvatar>
  )
}

export default GovBRAvatar
