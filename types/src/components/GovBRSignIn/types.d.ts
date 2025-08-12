import { GovBRButtonProps } from '../GovBRButton/GovBRButton'
/**
 * Opções de cor para o botão de SignIn.
 */
type SignInColor = 'primary' | 'secondary'
export interface GovBRSignInProps extends Omit<GovBRButtonProps, 'color'> {
  /**
   * Define a aparência do conteúdo do botão.
   * - `internal`: Ícone de pessoa e texto "Entrar". (Padrão)
   * - `external-image`: Texto "Entrar com" seguido da imagem oficial do gov.br.
   * - `external-text`: Texto "Entrar com gov.br".
   * @default 'internal'
   */
  signInVariant?: 'internal' | 'external-image' | 'external-text'
  /**
   * Define a altura máxima da imagem do gov.br quando `signInVariant` é 'external-image'.
   * @default '16px'
   */
  externalImageHeight?: string
  /**
   * Define a cor do botão com base nas cores do tema.
   * @default 'primary'
   */
  color?: SignInColor
}
export {}
//# sourceMappingURL=types.d.ts.map
