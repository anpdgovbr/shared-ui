import { TextFieldProps } from "@mui/material/TextField";
import { Dayjs } from "dayjs";
import { SharedUIComponentProps } from "src/types/SharedUIComponentProps";

export type PickerType = 'date' | 'datetime' | 'time' | 'range';
export interface GovBRDateTimePickerProps extends SharedUIComponentProps {
  type: PickerType
  label?: string 
  value?: Dayjs | { start: Dayjs | null; end: Dayjs | null} | null
  onChange?: (value: Dayjs) => void;
  error?: boolean;
  helperText?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  disableFuture?: boolean;
  disablePast?: boolean;
  format?: string; // Custom format
  textFieldProps?: TextFieldProps;
}