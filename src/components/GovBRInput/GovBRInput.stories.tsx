import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import Stack from '@mui/material/Stack'
import GovBRInput from './GovBRInput.js'

export default {
  title: 'GovBR/Input',
  component: GovBRInput,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
}

export const Sizes = {
  render: () => (
    <Stack spacing={3}>
      <GovBRInput label="Small" govbrSize="small" placeholder="Digite algo" />
      <GovBRInput label="Medium" govbrSize="medium" placeholder="Digite algo" />
      <GovBRInput label="Large" govbrSize="large" placeholder="Digite algo" />
    </Stack>
  ),
}

export const Statuses = {
  render: () => (
    <Stack spacing={3}>
      <GovBRInput
        id="input-success"
        label="Success"
        status="success"
        feedbackMessage="Mensagem de sucesso"
        placeholder="Digite algo"
      />
      <GovBRInput
        id="input-warning"
        label="Warning"
        status="warning"
        feedbackMessage="Mensagem de alerta"
        placeholder="Digite algo"
      />
      <GovBRInput
        id="input-danger"
        label="Danger"
        status="danger"
        feedbackMessage="Mensagem de erro"
        placeholder="Digite algo"
      />
      <GovBRInput
        id="input-info"
        label="Info"
        status="info"
        feedbackMessage="Mensagem informativa"
        placeholder="Digite algo"
      />
    </Stack>
  ),
}

export const ClearBlock = {
  render: () => (
    <Stack spacing={3}>
      <GovBRInput label="Clear sm" clearBlock="sm" placeholder="auto-sm" />
      <GovBRInput label="Clear md" clearBlock="md" placeholder="auto-md" />
      <GovBRInput label="Clear lg" clearBlock="lg" placeholder="auto-lg" />
      <GovBRInput label="Clear xl" clearBlock="xl" placeholder="auto-xl" />
    </Stack>
  ),
}

export const Highlight = {
  render: () => (
    <Stack spacing={3}>
      <GovBRInput label="Highlight padrão" highlight placeholder="Input destacado" />
      <GovBRInput
        label="Highlight + Status"
        highlight
        status="info"
        feedbackMessage="Input destacado com status"
        placeholder="Input destacado com status"
      />
    </Stack>
  ),
}

export const Inline = {
  render: () => (
    <Stack spacing={3}>
      <GovBRInput label="Label lateral" inline placeholder="Com label lateral" />
      <GovBRInput
        label="Inline + Icon + Button"
        inline
        startIcon={<PersonIcon />}
        endButtonIcon={<SearchIcon />}
        onEndButtonClick={() => alert('Clicou no botão')}
        placeholder="Com ícone e botão"
      />
    </Stack>
  ),
}

export const WithIconsAndButtons = {
  render: () => (
    <Stack spacing={3}>
      <GovBRInput
        label="Input com ícone"
        startIcon={<PersonIcon />}
        placeholder="Input com startIcon"
      />
      <GovBRInput
        label="Input com botão"
        endButtonIcon={<SearchIcon />}
        onEndButtonClick={() => alert('Clicou no botão')}
        placeholder="Input com endButton"
      />
      <GovBRInput
        label="Input completo"
        highlight
        inline
        startIcon={<PersonIcon />}
        endButtonIcon={<SearchIcon />}
        onEndButtonClick={() => alert('Clicou no botão')}
        placeholder="Highlight, inline, ícone e botão"
      />
    </Stack>
  ),
}

export const Disabled = {
  render: () => (
    <GovBRInput
      id="input-disabled"
      label="Campo desabilitado"
      placeholder="Digite algo"
      disabled
      feedbackMessage="Campo desativado"
      status="warning"
    />
  ),
}
