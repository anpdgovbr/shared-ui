import React from 'react'

interface GovBRItemBaseProps {
  estado?: 'active' | 'disabled' | 'selected'
  divider?: boolean
  children?: React.ReactNode
}

export type GovBRItemProps = GovBRItemBaseProps
