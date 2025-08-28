import { ButtonProps } from "@mui/material";
import { Dayjs } from "dayjs";
import { SharedUIComponentProps } from "src/types/SharedUIComponentProps";
export interface GovBRDateTimePickerProps extends SharedUIComponentProps, Omit<ButtonProps, 'value' | 'onChange'> {
    /**
     * Valor do campo de data e hora.
     * Deve ser um objeto Dayjs.
     */
    value?: Dayjs | null;
    /**
     * Função chamada quando o valor do campo é alterado.
     */
    onChange?: (newValue: Dayjs | null) => void;
    /**
     * Se true, o campo será desabilitado.
     * @default false
     */
    disabled?: boolean;
    /**
     * Se true, o campo será somente leitura.
     * @default false
     */
    readOnly: boolean;
}
//# sourceMappingURL=types.d.ts.map