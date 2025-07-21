import { GovBRCookiebar } from './GovBRCookiebar'
import type { GovBRCookiebarProps } from './GovBRCookiebar'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof GovBRCookiebar> = {
  title: 'GovBR/Cookiebar',
  component: GovBRCookiebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom'],
    },
    compact: { control: 'boolean' },
    strictGovBr: { control: 'boolean' },
    onAccept: { action: 'accepted all cookies' },
    onReject: { action: 'rejected non-essential cookies' },
    onSave: { action: 'saved custom settings' },
    onClose: { action: 'cookiebar closed' },
  },
}

export default meta
type Story = StoryObj<typeof GovBRCookiebar>

// Template para controlar o estado do cookiebar
const CookiebarTemplate = (args: GovBRCookiebarProps) => {
  const [open, setOpen] = useState(true)

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <h1>Página de Exemplo</h1>
      <p>Este é um exemplo de como o cookiebar aparece na página.</p>
      <button onClick={() => setOpen(true)}>Mostrar Cookiebar</button>

      <GovBRCookiebar
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        onAccept={() => {
          setOpen(false)
          args.onAccept?.()
        }}
        onReject={() => {
          setOpen(false)
          args.onReject?.()
        }}
        onSave={categories => {
          setOpen(false)
          args.onSave?.(categories)
        }}
      />
    </div>
  )
}

export const Default: Story = {
  render: CookiebarTemplate,
  args: {
    message:
      'Este site utiliza cookies para melhorar sua experiência de navegação e fornecer funcionalidades personalizadas.',
    privacyPolicyUrl: 'https://www.gov.br/governodigital/pt-br/privacidade-e-protecao-de-dados',
    position: 'bottom',
  },
}

export const TopPosition: Story = {
  render: CookiebarTemplate,
  args: {
    message: 'Cookiebar posicionado no topo da página.',
    position: 'top',
    privacyPolicyUrl: 'https://www.gov.br/governodigital/pt-br/privacidade-e-protecao-de-dados',
  },
}

export const Compact: Story = {
  render: CookiebarTemplate,
  args: {
    message: 'Versão compacta do cookiebar com apenas o botão aceitar.',
    compact: true,
    privacyPolicyUrl: 'https://www.gov.br/governodigital/pt-br/privacidade-e-protecao-de-dados',
  },
}

export const CustomTexts: Story = {
  render: CookiebarTemplate,
  args: {
    message:
      'Utilizamos cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego.',
    acceptText: 'Aceitar Todos',
    rejectText: 'Apenas Essenciais',
    configureText: 'Personalizar',
    saveText: 'Confirmar Escolhas',
    privacyPolicyText: 'Ver Política de Cookies',
    privacyPolicyUrl: 'https://www.gov.br/governodigital/pt-br/privacidade-e-protecao-de-dados',
  },
}

export const CustomCategories: Story = {
  render: CookiebarTemplate,
  args: {
    message: 'Cookiebar com categorias personalizadas de cookies.',
    categories: [
      {
        id: 'essential',
        name: 'Cookies Técnicos',
        description: 'Essenciais para o funcionamento do portal gov.br',
        required: true,
        enabled: true,
      },
      {
        id: 'performance',
        name: 'Cookies de Performance',
        description: 'Coletam informações sobre como você usa nosso site',
        required: false,
        enabled: false,
      },
      {
        id: 'personalization',
        name: 'Cookies de Personalização',
        description: 'Permitem que o site lembre suas escolhas e preferências',
        required: false,
        enabled: true,
      },
    ],
    privacyPolicyUrl: 'https://www.gov.br/governodigital/pt-br/privacidade-e-protecao-de-dados',
  },
}

export const StrictGovBR: Story = {
  render: CookiebarTemplate,
  args: {
    message: 'Cookiebar com estilos estritamente compatíveis com o Design System GovBR.',
    strictGovBr: true,
    privacyPolicyUrl: 'https://www.gov.br/governodigital/pt-br/privacidade-e-protecao-de-dados',
  },
}
