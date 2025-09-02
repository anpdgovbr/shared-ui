'use client'

import { Box, Button, Step, StepContent, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { GovBRWizardProps } from 'src/components/ui/govbr-wizard/types'

export function GovBRWizard(props: Readonly<GovBRWizardProps>) {
  const [activeStep, setActiveStep] = React.useState(props.initialStep || 0)
  const isLastStep = activeStep === props.steps.length - 1

  const handleNext = () => {
    if (isLastStep) {
      props.onFinish?.()
    } else {
      const nextStep = activeStep + 1
      setActiveStep(nextStep)
      props.onStepChange?.(nextStep)
    }
  }

  const handleBack = () => {
    const prevStep = activeStep - 1
    setActiveStep(prevStep)
    props.onStepChange?.(prevStep)
  }
  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {props.steps.map((step, index) => (
          <Step key={step.label} completed={activeStep > index}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <div>{step.content}</div>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
                    {isLastStep
                      ? props.finishButtonText || 'Finish'
                      : props.nextButtonText || 'Next'}
                  </Button>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    {props.backButtonText || 'Back'}
                  </Button>
                </Box>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
