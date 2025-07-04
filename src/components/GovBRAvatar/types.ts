import { SharedUIComponentProps } from 'src/types/SharedUIComponentProps.js'

export interface GovBRAvatarMenuItem {
  label: string
  href: string
}

export interface GovBRAvatarProps extends SharedUIComponentProps {
  user: {
    name?: string
    image?: string
  }
  onNavigate: (href: string) => void
  menuItems?: GovBRAvatarMenuItem[]
  avatarSize?: number
  textMaxWidth?: number
  className?: string
  strictGovBr?: boolean
}
