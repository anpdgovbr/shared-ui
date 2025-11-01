import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import { describe, expect, it } from 'vitest'

import { GovBRDateTimePicker } from './index'

describe('GovBRDateTimePicker', () => {
  it('deve renderizar sem erros', () => {
    render(<GovBRDateTimePicker label="Selecione uma data" />)
    expect(screen.getAllByText('Selecione uma data')[0]).toBeInTheDocument()
  })

  it('deve renderizar com valor inicial', () => {
    const initialValue = dayjs('2025-11-01')
    render(<GovBRDateTimePicker label="Data Inicial" value={initialValue} />)
    expect(screen.getAllByText('Data Inicial')[0]).toBeInTheDocument()
  })

  it('deve renderizar como disabled', () => {
    render(<GovBRDateTimePicker label="Data Desabilitada" disabled />)
    // MUI DatePicker v7 usa role="group" quando disabled, não "textbox"
    const group = screen.getByRole('group', { name: /Data Desabilitada/i })
    expect(group).toHaveClass('Mui-disabled')
  })

  it('deve renderizar como required', () => {
    render(<GovBRDateTimePicker label="Data Obrigatória" required />)
    expect(screen.getAllByText('Data Obrigatória')[0]).toBeInTheDocument()
  })

  it('deve renderizar com formato customizado', () => {
    render(<GovBRDateTimePicker label="Data Formatada" format="DD-MM-YYYY" />)
    expect(screen.getAllByText('Data Formatada')[0]).toBeInTheDocument()
  })

  it('deve renderizar com fullWidth', () => {
    render(<GovBRDateTimePicker label="Data Full Width" fullWidth />)
    expect(screen.getAllByText('Data Full Width')[0]).toBeInTheDocument()
  })
})
