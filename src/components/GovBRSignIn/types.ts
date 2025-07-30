import type { GovBRButtonProps } from '../GovBRButton/GovBRButton'

// Omitimos a prop 'variant' de GovBRButtonProps para evitar conflitos
// e adicionamos a nossa própria 'signInVariant'.
export interface GovBRSignInProps extends Omit<GovBRButtonProps, 'variant'> {
  /**
   * Define o tipo de conteúdo e estilo do botão de sign-in.
   * - `internal`: Ícone de usuário e texto "Entrar". Padrão.
   * - `external-text`: "Entrar com gov.br".
   * - `external-image`: "Entrar com" e a imagem do gov.br.
   * @default 'internal'
   */
  signInVariant?: 'internal' | 'external-text' | 'external-image'
  externalImageHeight?: string | number
}
