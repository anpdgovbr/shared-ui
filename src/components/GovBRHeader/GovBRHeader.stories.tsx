import { GovBRHeader } from './GovBRHeader'
import type { GovBRHeaderProps, HeaderMenuItem, HeaderAction } from './GovBRHeader'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  AccountCircle as AccountCircleIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material'

const meta: Meta<typeof GovBRHeader> = {
  title: 'GovBR/Header',
  component: GovBRHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    density: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['default', 'compact', 'extended'],
    },
    currentTheme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    showSearch: { control: 'boolean' },
    showLanguageSelector: { control: 'boolean' },
    showThemeToggle: { control: 'boolean' },
    strictGovBr: { control: 'boolean' },
    onSearch: { action: 'searched' },
    onLanguageChange: { action: 'language changed' },
    onThemeToggle: { action: 'theme toggled' },
  },
}

export default meta
type Story = StoryObj<typeof GovBRHeader>

// Template para controlar estados
const HeaderTemplate = (args: GovBRHeaderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(args.currentLanguage || 'pt')
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(args.currentTheme || 'light')

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <GovBRHeader
        {...args}
        currentLanguage={currentLanguage}
        currentTheme={currentTheme}
        onLanguageChange={lang => {
          setCurrentLanguage(lang)
          args.onLanguageChange?.(lang)
        }}
        onThemeToggle={() => {
          const newTheme = currentTheme === 'light' ? 'dark' : 'light'
          setCurrentTheme(newTheme)
          args.onThemeToggle?.()
        }}
      />
      <div style={{ padding: '2rem' }}>
        <h2>Conteúdo da Página</h2>
        <p>Este é um exemplo de como o header aparece em uma página real.</p>
      </div>
    </div>
  )
}

// Menu items de exemplo
const sampleMenuItems: HeaderMenuItem[] = [
  {
    id: 'inicio',
    label: 'Início',
    href: '/',
  },
  {
    id: 'servicos',
    label: 'Serviços',
    href: '/servicos',
  },
  {
    id: 'noticias',
    label: 'Notícias',
    href: '/noticias',
  },
  {
    id: 'contato',
    label: 'Contato',
    href: '/contato',
  },
]

// Ações de exemplo
const sampleActions: HeaderAction[] = [
  {
    id: 'notifications',
    label: 'Notificações',
    icon: <NotificationsIcon />,
    onClick: () => console.log('Notificações clicadas'),
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: <SettingsIcon />,
    onClick: () => console.log('Configurações clicadas'),
  },
  {
    id: 'profile',
    label: 'Perfil',
    icon: <AccountCircleIcon />,
    onClick: () => console.log('Perfil clicado'),
  },
]

export const Default: Story = {
  render: HeaderTemplate,
  args: {
    title: 'Portal da ANPD',
    subtitle: 'Autoridade Nacional de Proteção de Dados',
    menuItems: sampleMenuItems,
    showSearch: true,
    showLanguageSelector: true,
    showThemeToggle: true,
    actions: sampleActions,
  },
}

export const Compact: Story = {
  render: HeaderTemplate,
  args: {
    title: 'Portal da ANPD',
    variant: 'compact',
    density: 'small',
    menuItems: sampleMenuItems,
    showSearch: true,
    actions: [sampleActions[2]], // Apenas perfil
  },
}

export const Extended: Story = {
  render: HeaderTemplate,
  args: {
    title: 'Portal do Governo Federal',
    subtitle: 'Acesso à informação de forma simples e direta',
    variant: 'extended',
    density: 'large',
    menuItems: sampleMenuItems,
    showSearch: true,
    showLanguageSelector: true,
    showThemeToggle: true,
    actions: sampleActions,
  },
}

export const WithCustomLogo: Story = {
  render: HeaderTemplate,
  args: {
    title: 'Meu Portal',
    subtitle: 'Sistema Personalizado',
    logo: 'https://via.placeholder.com/120x40/1351b4/ffffff?text=LOGO',
    logoHref: '/home',
    menuItems: sampleMenuItems,
    showSearch: true,
    actions: sampleActions,
  },
}

export const MinimalHeader: Story = {
  render: HeaderTemplate,
  args: {
    title: 'Portal Simples',
    variant: 'compact',
    density: 'small',
    showSearch: false,
    showLanguageSelector: false,
    showThemeToggle: false,
    menuItems: [
      { id: 'home', label: 'Início', href: '/' },
      { id: 'about', label: 'Sobre', href: '/sobre' },
    ],
    actions: [
      {
        id: 'login',
        label: 'Entrar',
        icon: <AccountCircleIcon />,
        onClick: () => console.log('Login clicado'),
      },
    ],
  },
}

export const StrictGovBR: Story = {
  render: HeaderTemplate,
  args: {
    title: 'Portal Oficial',
    subtitle: 'Governo Federal do Brasil',
    strictGovBr: true,
    menuItems: sampleMenuItems,
    showSearch: true,
    showLanguageSelector: true,
    actions: sampleActions,
  },
}

export const MobilePreview: Story = {
  render: HeaderTemplate,
  args: {
    title: 'Portal Mobile',
    subtitle: 'Versão responsiva',
    menuItems: sampleMenuItems,
    showSearch: true,
    showLanguageSelector: true,
    showThemeToggle: true,
    actions: sampleActions,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
