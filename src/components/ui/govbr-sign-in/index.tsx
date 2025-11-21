'use client'

import { GovBRButton } from '../govbr-button'
import type { GovBRSignInProps } from './types'

/**
 * Componente de botão para login com a conta gov.br.
 * Encapsula o GovBRButton com a lógica e estilo específicos para o login.
 */
export function GovBRSignIn(props: Readonly<GovBRSignInProps>) {
  const { onClick, strictgovbr, loading, label = 'Entrar com gov.br', sx, ...rest } = props

  const handleClick = () => {
    onClick('govbr')
  }

  return (
    <GovBRButton
      color="primary"
      variant="contained"
      strictgovbr={strictgovbr}
      loading={!!loading} // Garante que loading seja boolean ou undefined
      onClick={handleClick}
      sx={{
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
        ...sx,
      }}
      {...rest}
    >
      {label}
    </GovBRButton>
  )
}
