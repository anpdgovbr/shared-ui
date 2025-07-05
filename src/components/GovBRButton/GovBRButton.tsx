import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import classNames from 'classnames'
import { mapMuiColorToGovbrClass } from 'src/helper/MuiColorToGovBRClass.js'
import { GovBRClearBlock } from 'src/types/GovBRTypes.js'

export interface GovBRButtonProps extends ButtonProps {
  circle?: boolean
  block?: boolean
  inverted?: boolean
  loading?: boolean
  clearBlock?: GovBRClearBlock
}

export const GovBRButton: React.FC<Readonly<GovBRButtonProps>> = ({
  children,
  circle,
  block,
  inverted,
  loading,
  clearBlock,
  color,
  className,
  sx,
  ...rest
}) => {
  const govbrColorClass = mapMuiColorToGovbrClass(color)

  return (
    <Button
      className={classNames(
        'br-button',
        govbrColorClass,
        {
          circle,
          block,
          inverted,
          loading,
          [`auto-${clearBlock}`]: !!clearBlock,
        },
        className
      )}
      disableRipple
      disableElevation
      sx={{
        fontWeight: 600,
        textTransform: 'none',
        fontSize: 'var(--font-size-scale-up-01)',
        px: circle ? 0 : 3,
        ...(circle && {
          width: 'var(--button-size)',
          height: 'var(--button-size)',
          minWidth: 'var(--button-size)',
          minHeight: 'var(--button-size)',
          padding: 0,
          borderRadius: '50%',
          lineHeight: 1,
        }),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default GovBRButton
