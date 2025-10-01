'use client'

import 'dayjs/locale/pt-br'

import { DatePicker, DateTimePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

import type { GovBRDateTimePickerProps } from './types'

// Configurar locale pt-BR para dayjs
dayjs.locale('pt-br')

/**
 * GovBRDateTimePicker - Componente de seleção de data/hora padronizado GovBR-DS
 *
 * Características:
 * - 📅 Formato brasileiro (dd/MM/yyyy)
 * - 🌐 Locale pt-BR configurado
 * - ⏰ Três modos: date, time, date-time
 * - 🎨 Estilizado conforme GovBR Design System
 * - ♿ Acessível e responsivo
 * - 🔧 LocalizationProvider integrado (funciona standalone)
 */
export function GovBRDateTimePicker({
  pickerType = 'date',
  label,
  value,
  onChange,
  format,
  ...otherProps
}: Readonly<GovBRDateTimePickerProps>) {
  const [internalValue, setInternalValue] = useState<Dayjs | null>(value ? dayjs(value) : null)

  const handleChange = (newValue: Dayjs | null) => {
    setInternalValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  // Formatos padrão brasileiros
  const defaultFormats = {
    date: 'DD/MM/YYYY',
    time: 'HH:mm',
    'date-time': 'DD/MM/YYYY HH:mm',
  }

  const finalFormat = format || defaultFormats[pickerType]

  const commonProps = {
    label,
    value: internalValue,
    onChange: handleChange,
    format: finalFormat,
    slotProps: {
      textField: {
        variant: 'outlined' as const,
        fullWidth: true,
        ...otherProps.slotProps?.textField,
      },
    },
    ...otherProps,
  }

  // Renderiza o picker apropriado
  const renderPicker = () => {
    switch (pickerType) {
      case 'time':
        return <TimePicker {...commonProps} />
      case 'date-time':
        return <DateTimePicker {...commonProps} />
      case 'date':
      default:
        return <DatePicker {...commonProps} />
    }
  }

  // Envolve com LocalizationProvider para funcionar standalone
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      {renderPicker()}
    </LocalizationProvider>
  )
}
