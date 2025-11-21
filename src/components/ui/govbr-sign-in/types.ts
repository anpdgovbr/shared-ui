import type { ButtonProps } from '@mui/material/Button'
import type React from 'react'

// Props para o componente GovBRSignIn
export interface GovBRSignInProps extends Omit<ButtonProps, 'onClick' | 'size'> {
  /**
   * Ativa o modo de renderização estrito para o botão interno, que usa um elemento `<button>` padrão
   * com as classes CSS do GovBR-DS, em vez de um botão MUI estilizado pelo tema.
   * @default false
   */
  strictgovbr?: boolean

  /**
   * Texto a ser exibido no botão de login.
   * @default 'Entrar com gov.br'
   */
  label?: string

  /**
   * Tamanho do botão.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * Ícone a ser exibido no início do botão (à esquerda do texto).
   * Recomenda-se usar ícones do @mui/icons-material.
   * @example
   * import LoginIcon from '@mui/icons-material/Login'
   * <GovBRSignIn startIcon={<LoginIcon />} />
   */
  startIcon?: React.ReactNode

  /**
   * Ícone a ser exibido no final do botão (à direita do texto).
   * Recomenda-se usar ícones do @mui/icons-material.
   * @example
   * import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
   * <GovBRSignIn endIcon={<ArrowForwardIcon />} />
   */
  endIcon?: React.ReactNode

  /**
   * Função a ser executada quando o botão de login é clicado.
   * Recebe o provedor de login como argumento.
   */
  onClick: (provider: 'govbr') => void
}
