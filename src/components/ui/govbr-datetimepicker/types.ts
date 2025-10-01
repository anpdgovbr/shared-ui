import type { Dayjs } from 'dayjs'

export interface GovBRDateTimePickerProps {
  /** Tipo de picker: data, hora ou data-hora */
  pickerType?: 'date' | 'time' | 'date-time'

  /** Label do campo */
  label?: string

  /** Valor controlado (objeto Dayjs ou string ISO) */
  value?: Dayjs | string | null

  /** Callback de mudança de valor */
  onChange?: (value: Dayjs | null) => void

  /** Formato de exibição (padrão: DD/MM/YYYY para date) */
  format?: string

  /** Props adicionais para slots (textField, etc) */
  slotProps?: {
    textField?: Record<string, unknown>
    [key: string]: unknown
  }

  /** Desabilitar o campo */
  disabled?: boolean

  /** Campo obrigatório */
  required?: boolean

  /** Texto de erro */
  error?: boolean
  helperText?: string

  /** Data mínima permitida */
  minDate?: Dayjs

  /** Data máxima permitida */
  maxDate?: Dayjs

  /** Desabilitar datas passadas */
  disablePast?: boolean

  /** Desabilitar datas futuras */
  disableFuture?: boolean

  /** Largura completa */
  fullWidth?: boolean
}
