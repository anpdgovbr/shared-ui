'use client'

import { Divider } from '@mui/material'
import classNames from 'classnames'
import { GovBRDividerProps } from 'src/components/ui/govbr-divider/types'

export function GovBRDivider(props: Readonly<GovBRDividerProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    const { orientation = 'horizontal', dashed = false, size = 'md', className, ...rest } = props

    switch (orientation) {
      case 'horizontal':
        return (
          <div
            className={classNames(
              'br-divider',
              {
                'br-divider dashed': dashed,
                'br-divider sm': size === 'sm',
                'br-divider md': size === 'md',
                'br-divider lg': size === 'lg',
              },
              className,
            )}
            {...rest}
          />
        )
      case 'vertical':
        return (
          <div
            className={classNames(
              'br-divider',
              'br-divider vertical',
              {
                'br-divider dashed': dashed,
                'br-divider sm': size === 'sm',
                'br-divider md': size === 'md',
                'br-divider lg': size === 'lg',
              },
              className,
            )}
            {...rest}
          />
        )
    }
  }

  const { orientation = 'horizontal', dashed = false, size = 'md', sx, ...rest } = props

  // --- MODO PADRÃO (MUI) ---
  switch (orientation) {
    case 'horizontal':
      return (
        <Divider
          sx={{
            borderStyle: dashed ? 'dashed' : 'solid',
            ...(size === 'sm' && { borderBottomWidth: '1px' }),
            ...(size === 'md' && { borderBottomWidth: '2px' }),
            ...(size === 'lg' && { borderBottomWidth: '4px' }),
            ...sx,
          }}
          {...rest}
        />
      )
    case 'vertical':
      return (
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderStyle: dashed ? 'dashed' : 'solid',
            ...(size === 'sm' && { borderRightWidth: '1px' }),
            ...(size === 'md' && { borderRightWidth: '2px' }),
            ...(size === 'lg' && { borderRightWidth: '4px' }),
            ...sx,
          }}
          {...rest}
        />
      )
  }
}
