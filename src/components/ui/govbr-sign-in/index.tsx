'use client'
import React from 'react'
import classNames from 'classnames'
import type { GovBRSignInProps } from './types'

export function GovBRSignIn({
  variant = 'internal',
  emphasis,
  density,
  circle = false,
  block = false,
  inverted = false,
  className,
  iconUrl,
  ...props
}: GovBRSignInProps) {
  const componentClass = classNames(
    'br-sign-in',
    emphasis,
    density,
    {
      circle,
      block,
      inverted,
    },
    className,
  )

  const renderContent = () => {
    switch (variant) {
      case 'external-image':
        return (
          <>
            Entrar com&nbsp;
            <img
              src={iconUrl || 'https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png'}
              alt="gov.br"
            />
          </>
        )
      case 'external-text':
        return (
          <>
            Entrar com&nbsp;<span className="text-black">gov.br</span>
          </>
        )
      case 'internal':
      default:
        return (
          <>
            <i className="fas fa-user" aria-hidden="true"></i>
            {!circle && 'Entrar'}
          </>
        )
    }
  }

  return (
    <button type="button" className={componentClass} {...props}>
      {renderContent()}
    </button>
  )
}

GovBRSignIn.displayName = 'GovBRSignIn'
