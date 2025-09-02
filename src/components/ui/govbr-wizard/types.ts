export interface GovBRWizardProps {
  steps: Array<{
    label: string
    content: React.ReactNode
  }>
  onFinish?: () => void
  onStepChange?: (currentStep: number) => void
  initialStep?: number
  isLinear?: boolean
  nextButtonText?: string
  backButtonText?: string
  finishButtonText?: string
}
