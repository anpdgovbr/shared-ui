import type { ButtonProps } from '@mui/material/Button'

// Props para o componente GovBRSignIn
export interface GovBRSignInProps extends Omit<ButtonProps, 'onClick'> {
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
   * Função a ser executada quando o botão de login é clicado.
   * Recebe o provedor de login como argumento.
   */
  onClick: (provider: 'govbr') => void
}
