import { SxProps } from '@mui/material/styles'
import { GovBRItemProps } from 'src/components/ui/govbr-item/types'

interface ListBaseProps {
  label?: string
  labelDivider?: boolean
  itens: Array<GovBRItemProps>
  expansible?: boolean
  strictgovbr?: boolean
}

export type GovBRListStrictProps = ListBaseProps & {
  strictgovbr: true
  expanLabel?: string
}

export type GovBRListMuiProps = ListBaseProps & {
  strictgovbr: false
  sx?: SxProps
}

export type GovBRListProps = GovBRListMuiProps | GovBRListStrictProps
