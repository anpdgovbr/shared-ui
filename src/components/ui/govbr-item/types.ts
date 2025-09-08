import React from 'react'

interface GovBRItemBaseProps {
  estado?: 'active' | 'disabled' | 'selected'
  divider?: boolean
  children?: React.ReactNode
  strictgovbr?: boolean
}

export type GovBRItemStrictProps = GovBRItemBaseProps & {
  strictgovbr: true
}

export type GovBRItemMuiProps = GovBRItemBaseProps & {
  strictgovbr?: false
}

export type GovBRItemProps = GovBRItemBaseProps
