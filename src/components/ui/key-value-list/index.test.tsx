'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { KeyValueList } from './index'

describe('KeyValueList', () => {
  it('renderiza pares chave/valor', () => {
    render(
      <KeyValueList
        rows={[
          { label: 'Nome', value: 'Maria' },
          { label: 'Cargo', value: 'Analista' },
        ]}
        columns={2}
      />,
    )

    expect(screen.getByText('Nome')).toBeInTheDocument()
    expect(screen.getByText('Maria')).toBeInTheDocument()
    expect(screen.getByText('Cargo')).toBeInTheDocument()
    expect(screen.getByText('Analista')).toBeInTheDocument()
  })
})
