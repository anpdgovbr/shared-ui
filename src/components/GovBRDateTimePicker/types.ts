<<<<<<< HEAD
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
=======
import { SharedUIComponentProps } from "src/types/SharedUIComponentProps"


export interface GovBRDateTimePickerProps extends SharedUIComponentProps {
  label?: string

>>>>>>> 3e77ddf091c2fce383bec924a557a7a7a1693752
}