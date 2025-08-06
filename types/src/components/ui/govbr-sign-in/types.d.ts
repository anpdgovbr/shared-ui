import type { ButtonHTMLAttributes } from 'react';
import type { GovBRSize } from '../../../types/GovBRTypes';
import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps';
/**
 * Propriedades do componente GovBRSignIn.
 */
export type GovBRSignInProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedUIComponentProps & {
    /**
     * Define o tipo de conteúdo e estilo do botão.
     * - `internal`: Ícone de usuário e texto "Entrar". Padrão.
     * - `external-text`: "Entrar com gov.br".
     * - `external-image`: "Entrar com" e a imagem do gov.br.
     * @default 'internal'
     */
    variant?: 'internal' | 'external-text' | 'external-image';
    /**
     * Define a ênfase visual do botão.
     * @default 'secondary'
     */
    emphasis?: 'primary' | 'secondary';
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
     * URL customizada para o ícone ou imagem do gov.br.
     */
    iconUrl?: string;
};
//# sourceMappingURL=types.d.ts.map