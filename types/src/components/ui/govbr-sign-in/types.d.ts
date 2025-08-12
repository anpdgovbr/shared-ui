import type { ButtonHTMLAttributes } from 'react';
import type { GovBRSize } from '../../../types/GovBRTypes';
import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps';
/**
 * Opções de cor para o botão de SignIn.
 */
type SignInColor = 'primary' | 'secondary';
/**
 * Propriedades do componente GovBRSignIn.
 */
export interface GovBRSignInProps extends ButtonHTMLAttributes<HTMLButtonElement>, SharedUIComponentProps {
    /**
     * Define a aparência do conteúdo do botão.
     * - `internal`: Ícone de pessoa e texto "Entrar". (Padrão)
     * - `external-image`: Texto "Entrar com" seguido da imagem oficial do gov.br.
     * - `external-text`: Texto "Entrar com gov.br".
     * @default 'internal'
     */
    variant?: 'internal' | 'external-image' | 'external-text';
    /**
     * Define a cor do botão com base nas cores do tema.
     * @default 'primary'
     */
    color?: SignInColor;
    /**
     * Define a densidade (tamanho) do botão.
     */
    density?: GovBRSize;
    /**
     * Transforma o botão em um ícone circular.
     * @default false
     */
    circle?: boolean;
    /**
     * Faz o botão ocupar toda a largura disponível.
     * @default false
     */
    block?: boolean;
    /**
     * Adapta o botão para uso em fundos escuros.
     * @default false
     */
    inverted?: boolean;
    /**
     * Define a altura máxima da imagem do gov.br quando `variant` é 'external-image'.
     * @default '16px'
     */
    externalImageHeight?: string;
    /**
     * URL customizada para o ícone ou imagem do gov.br.
     */
    iconUrl?: string;
}
export {};
//# sourceMappingURL=types.d.ts.map