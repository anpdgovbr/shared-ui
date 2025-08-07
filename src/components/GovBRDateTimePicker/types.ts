import { Dayjs } from "dayjs";
import { SharedUIComponentProps } from "src/types/SharedUIComponentProps"
import { TextFieldProps } from "@mui/material";

export type PickerType = 'date' | 'datetime' | 'time' | 'range';
export interface GovBRDateTimePickerProps extends SharedUIComponentProps {
  type: PickerType
  label?: string 
  value?: Dayjs | { start: Dayjs | null; end: Dayjs | null} | null
  onChange: (value: any) => void;
  error?: boolean;
  helperText?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  disableFuture?: boolean;
  disablePast?: boolean;
  format?: string; // Custom format
  textFieldProps?: TextFieldProps;
}