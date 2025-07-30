import React from 'react'
import { Person } from '@mui/icons-material'
import classNames from 'classnames'
import GovBRButton, { GovBRButtonProps } from '../GovBRButton/GovBRButton'
import { GovBRSignInProps } from './types'

export const GovBRSignIn: React.FC<GovBRSignInProps> = ({
  signInVariant = 'internal',
  className,
  externalImageHeight,
  ...props
}) => {
  const renderContent = () => {
    switch (signInVariant) {
      case 'external-image':
        return (
          <>
            Entrar com
            <img
              src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png"
              alt="gov.br"
              style={{
                maxHeight: externalImageHeight || '16px',
                marginLeft: '8px',
              }}
            />
          </>
        )
      case 'external-text':
        return (
          <>
            Entrar com
            <span className="text-black" style={{ marginLeft: '4px' }}>
              gov.br
            </span>
          </>
        )
      case 'internal':
      default:
        return (
          <>
            <Person sx={{ p: 0, m: 0, mr: props.circle ? 0 : 1 }} />
            {!props.circle && 'Entrar'}
          </>
        )
    }
  }

  return (
    <GovBRButton className={classNames('sign-in', className)} {...(props as GovBRButtonProps)}>
      {renderContent()}
    </GovBRButton>
  )
}

export default GovBRSignIn
