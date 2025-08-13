import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps';
import type { BoxProps } from '@mui/material/Box';
export interface GovBRSwitchProps extends Omit<BoxProps, 'onChange'>, SharedUIComponentProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    size?: 'small' | 'medium' | 'large';
    labelPlacement?: 'start' | 'end' | 'top';
    disabled?: boolean;
    textEnabled?: string;
    textDisabled?: string;
}
//# sourceMappingURL=types.d.ts.map