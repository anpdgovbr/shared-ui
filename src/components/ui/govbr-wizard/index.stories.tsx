import type { Meta, StoryObj } from '@storybook/react'
import { GovBRWizard } from 'src/components/ui/govbr-wizard'

const meta: Meta<typeof GovBRWizard> = {
  title: 'Components/GovBRWizard',
  component: GovBRWizard,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      description:
        'Array de passos do wizard, cada passo deve conter um rótulo e o conteúdo a ser exibido',
    },
    initialStep: {
      description: 'Índice do passo inicial a ser exibido (padrão é 0)',
      control: 'number',
    },
    onStepChange: {
      description: 'Função chamada quando o passo ativo muda, recebe o índice do novo passo',
      action: 'step changed',
    },
    onFinish: {
      description: 'Função chamada quando o usuário finaliza o wizard no último passo',
      action: 'wizard finished',
    },
    nextButtonText: {
      description: 'Texto do botão "Próximo"',
      control: 'text',
    },
    backButtonText: {
      description: 'Texto do botão "Voltar"',
      control: 'text',
    },
    finishButtonText: {
      description: 'Texto do botão "Finalizar"',
      control: 'text',
    },
  },
  args: {
    steps: [
      { label: 'Passo 1', content: 'Conteúdo do Passo 1' },
      { label: 'Passo 2', content: 'Conteúdo do Passo 2' },
      { label: 'Passo 3', content: 'Conteúdo do Passo 3' },
    ],
    initialStep: 0,
    nextButtonText: 'Próximo',
    backButtonText: 'Voltar',
    finishButtonText: 'Finalizar',
  },
}

export default meta
type Story = StoryObj<typeof GovBRWizard>

export const Default: Story = {
  args: {
    steps: [
      { label: 'Passo 1', content: 'Conteúdo do Passo 1' },
      { label: 'Passo 2', content: 'Conteúdo do Passo 2' },
      { label: 'Passo 3', content: 'Conteúdo do Passo 3' },
    ],
    initialStep: 0,
    nextButtonText: 'Próximo',
    backButtonText: 'Voltar',
    finishButtonText: 'Finalizar',
  },
}

export const CustomSteps: Story = {
  args: {
    steps: [
      { label: 'Introdução', content: 'Bem-vindo ao wizard!' },
      { label: 'Configuração', content: 'Aqui você pode configurar as opções.' },
      { label: 'Revisão', content: 'Revise suas escolhas antes de finalizar.' },
      { label: 'Conclusão', content: 'Parabéns! Você concluiu o wizard.' },
    ],
    initialStep: 0,
    nextButtonText: 'Próximo',
    backButtonText: 'Voltar',
    finishButtonText: 'Finalizar',
  },
}

export const StartAtSecondStep: Story = {
  args: {
    steps: [
      { label: 'Passo 1', content: 'Conteúdo do Passo 1' },
      { label: 'Passo 2', content: 'Conteúdo do Passo 2' },
      { label: 'Passo 3', content: 'Conteúdo do Passo 3' },
    ],
    initialStep: 1, // Começa no segundo passo
    nextButtonText: 'Próximo',
    backButtonText: 'Voltar',
    finishButtonText: 'Finalizar',
  },
}

export const SingleStep: Story = {
  args: {
    steps: [{ label: 'Apenas um Passo', content: 'Conteúdo do único passo' }],
    initialStep: 0,
    nextButtonText: 'Próximo',
    backButtonText: 'Voltar',
    finishButtonText: 'Finalizar',
  },
}

export const NoSteps: Story = {
  args: {
    steps: [],
    initialStep: 0,
    nextButtonText: 'Próximo',
    backButtonText: 'Voltar',
    finishButtonText: 'Finalizar',
  },
}
