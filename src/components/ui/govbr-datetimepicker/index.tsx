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
 * GovBRDateTimePicker - Componente de seleção de data/hora padronizado Gov.br DS
 *
 * Seletor de data, hora ou data+hora com localização brasileira integrada,
 * seguindo os padrões da biblioteca shared-ui da ANPD.
 *
 * **Características:**
 * - 📅 Formato brasileiro (DD/MM/YYYY)
 * - 🌐 Locale pt-BR configurado automaticamente
 * - ⏰ Três modos: `date`, `time`, `date-time`
 * - 🎨 Estilizado conforme Gov.br Design System via govbrTheme.ts
 * - ♿ Totalmente acessível e responsivo
 * - 🔧 LocalizationProvider integrado (funciona standalone sem configuração extra)
 *
 * **Nota Importante:**
 * Este componente usa MUI X DatePicker e não implementa modo estrito (`strictgovbr`)
 * pois é um componente complexo específico da ANPD sem equivalente direto no Gov.br DS.
 *
 * **Tokens CSS utilizados (no govbrTheme.ts):**
 * - `--interactive`: Cor primária do calendário
 * - `--surface`: Cor de fundo
 * - `--gray-20`: Bordas
 * - `--surface-rounder-md`: Border radius
 *
 * @param props - GovBRDateTimePickerProps
 *
 * @example
 * ```tsx
 * // Seletor de data simples
 * <GovBRDateTimePicker
 *   label="Data de Nascimento"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Seletor de hora
 * <GovBRDateTimePicker
 *   pickerType="time"
 *   label="Horário"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Seletor de data e hora
 * <GovBRDateTimePicker
 *   pickerType="date-time"
 *   label="Data e Hora do Evento"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Com valor inicial e formato customizado
 * <GovBRDateTimePicker
 *   label="Data Customizada"
 *   value={dayjs('2025-01-15')}
 *   format="DD/MM/YY"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Campo desabilitado ou obrigatório
 * <GovBRDateTimePicker
 *   label="Data Desabilitada"
 *   disabled
 * />
 * <GovBRDateTimePicker
 *   label="Data Obrigatória"
 *   required
 * />
 * ```
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
