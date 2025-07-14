import React from 'react'
import type { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import GovBRFormCheckbox from './GovBRFormCheckbox.js'
import Stack from '@mui/material/Stack'

export default {
  title: 'GovBR/FormCheckbox',
  component: GovBRFormCheckbox,
} as Meta

const schema = z.object({
  terms: z.boolean().refine(val => val === true, {
    message: 'Você deve aceitar os termos.',
  }),
  privacy: z.boolean(),
})

type FormData = z.infer<typeof schema>

export const WithFormValidation = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      terms: false,
      privacy: true,
    },
  })

  return (
    <form onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}>
      <Stack spacing={2}>
        <GovBRFormCheckbox
          name="terms"
          control={control}
          label="Eu li e aceito os termos e condições de uso."
        />
        <GovBRFormCheckbox
          name="privacy"
          control={control}
          label="Eu aceito receber e-mails sobre novidades."
        />
        <button type="submit">Enviar</button>
      </Stack>
    </form>
  )
}
