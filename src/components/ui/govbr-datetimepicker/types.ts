import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers"
import { Dayjs } from "dayjs"
import { SharedUIComponentProps } from "src/types/SharedUIComponentProps"

type PickerType = 'date' | 'time' | 'datetime'

export const pickerMap: Record<PickerType, React.ElementType> = {
  date: DatePicker,
  time: TimePicker,
  datetime: DateTimePicker
}
export interface GovBRDateTimePickerProps extends SharedUIComponentProps {
  type: PickerType
  title?: string
  label?: string
  value?: Dayjs
  onChange?: () => void
}