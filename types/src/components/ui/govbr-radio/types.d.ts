import type { ButtonProps } from '@mui/material/Button';
import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps';
/**
 * Propriedades do componente GovBRRadio.
 */
export type GovBRRadioProps = SharedUIComponentProps & ButtonProps & {
    /**
     * Nome do grupo de radio buttons.
     */
    name?: string;
    /**
     * Valor do radio button.
     */
    value: string;
    /**
     * Rótulo exibido no topo do componente.
     */
    label?: string;
    /**
     * Texto utilizado para informações adicionais.
     */
    helpText?: string;
    /**
     * Texto exibido na opção de seleção.
     */
    text?: string;
    /**
     * Indica se o componente está desabilitado.
     * @default false
     */
    disabled?: boolean;
    /**
     * Indica se o radio está selecionado.
     * @default false
     */
    checked?: boolean;
    /**
     * Indica estado de erro.
     * @default false
     */
    error?: boolean;
    /**
     * Indica estado válido.
     * @default false
     */
    valid?: boolean;
    /**
     * Função executada quando o estado muda.
     */
    onChange?: () => void;
};
//# sourceMappingURL=types.d.ts.map