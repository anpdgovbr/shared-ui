import React from 'react'
import { Person } from '@mui/icons-material'
import classNames from 'classnames'
import GovBRButton from '../GovBRButton/GovBRButton'
import { GovBRSignInProps } from './types'

/**
 * Componente de botão para login com Gov.br, com diferentes variações de estilo e cor.
 * @param {GovBRSignInProps} props - As propriedades do componente.
 */
export const GovBRSignIn: React.FC<GovBRSignInProps> = ({
  signInVariant = 'internal',
  className,
  externalImageHeight,
  color = 'primary',
  ...props
}) => {
  // Função para renderizar o conteúdo do botão com base na variante.
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
                verticalAlign: 'middle',
              }}
            />
          </>
        )
      case 'external-text':
        return (
          <>
            Entrar com
            <span style={{ marginLeft: '4px', fontWeight: 'bold' }}>gov.br</span>
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

  // Renderiza o componente base GovBRButton, passando a cor e outras props diretamente.
  return (
    <GovBRButton className={classNames('sign-in', className)} color={color} {...props}>
      {renderContent()}
    </GovBRButton>
  )
}

export default GovBRSignIn
