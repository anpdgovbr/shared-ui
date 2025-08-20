'use client'

import { GovBRButton } from '../govbr-button'
import type { GovBRSignInProps } from './types'

/**
 * Componente de botão para login com a conta gov.br.
 * Encapsula o GovBRButton com a lógica e estilo específicos para o login.
 */
export function GovBRSignIn(props: Readonly<GovBRSignInProps>) {
  const { onClick, strictgovbr, loading, ...rest } = props

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
      {...rest}
    >
      Entrar com gov.br
    </GovBRButton>
  )
}
