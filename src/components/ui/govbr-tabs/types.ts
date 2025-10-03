import { SxProps } from '@mui/material/styles'

interface TabProps {
  id: number
  label?: string
  icon?: React.ReactElement
  counter?: string | number
}

interface TabsProps {
  tabs: TabProps[]
  children?: React.ReactNode[]
  variant: 'text' | 'contained'
  sx?: SxProps
}

interface GovBRTabsBaseProps extends TabsProps {
  strictgovbr?: boolean
}

export type GovBRTabsStrictProps = GovBRTabsBaseProps & {
  strictgovbr: true
}

export type GovBRTabsMuiProps = GovBRTabsBaseProps & {
  strictgovbr: false
}

export type GovBRTabsProps = GovBRTabsStrictProps | GovBRTabsMuiProps
