'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import Stack from '@mui/material/Stack'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import FormGovBRInput from './FormGovBRInput.client.js'

export default {
  title: 'GovBR/FormGovBRInput',
  component: FormGovBRInput,
}

export const Default = () => {
  const { control } = useForm()

  return (
    <FormGovBRInput
      name="nome"
      control={control}
      label="Nome completo"
      placeholder="Digite seu nome"
      required
    />
  )
}

export const InlineAndHighlight = () => {
  const { control } = useForm()

  return (
    <FormGovBRInput
      name="nome"
      control={control}
      label="Nome inline destacado"
      placeholder="Digite seu nome"
      inline
      highlight
      startIcon={<PersonIcon />}
      endButtonIcon={<SearchIcon />}
      onEndButtonClick={() => alert('Clicou no botão')}
    />
  )
}

export const WithValidation = () => {
  const schema = z.object({
    email: z.string().email('Digite um e-mail válido'),
  })

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
    mode: 'onChange',
  })

  return (
    <form
      onSubmit={handleSubmit(data => {
        alert(`Submeteu: ${JSON.stringify(data)}`)
      })}
    >
      <Stack spacing={3}>
        <FormGovBRInput
          name="email"
          control={control}
          label="E-mail"
          placeholder="Digite seu e-mail"
          startIcon={<PersonIcon />}
          endButtonIcon={<SearchIcon />}
          onEndButtonClick={() => alert('Buscar')}
        />
        <button type="submit">Enviar</button>
      </Stack>
    </form>
  )
}

export const WithRHFOnly = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { nome: '', email: '' },
    mode: 'onChange',
  })

  return (
    <form
      onSubmit={handleSubmit(data => {
        alert(`Submeteu: ${JSON.stringify(data)}`)
      })}
    >
      <Stack spacing={3}>
        <FormGovBRInput
          name="nome"
          control={control}
          label="Nome"
          placeholder="Digite seu nome"
          rules={{ required: 'Nome é obrigatório' }}
          startIcon={<PersonIcon />}
        />
        <FormGovBRInput
          name="email"
          control={control}
          label="E-mail"
          placeholder="Digite seu e-mail"
          rules={{ required: 'E-mail é obrigatório' }}
          startIcon={<PersonIcon />}
          endButtonIcon={<SearchIcon />}
          onEndButtonClick={() => alert('Buscar')}
        />
        <button type="submit">Enviar</button>
      </Stack>
    </form>
  )
}
