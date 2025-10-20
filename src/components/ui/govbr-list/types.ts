import { SxProps } from '@mui/material/styles'
import { GovBRItemProps } from 'src/components/ui/govbr-item/types'

interface ListBaseProps {
  /** título da lista **/
  label?: string
  /**
   * Ativa ou desativa o Divider do título lista
   * @default false
   * **/
  labelDivider?: boolean
  /** Conjunto de itens da lista **/
  itens: Array<GovBRItemProps>
  /**
   * Determina se a lista é expansível
   * @default false
   */
  expansible?: boolean
  /**
   * Ativa ou desativa o modo estrito do govbr
   * @default false
   */
  strictgovbr?: boolean

  size?: 'sm' | 'md' | 'lg'

  horizontal?: boolean
}

export type GovBRListStrictProps = ListBaseProps & {
  strictgovbr: true
}

export type GovBRListMuiProps = ListBaseProps & {
  strictgovbr: false
  sx?: SxProps
}

export type GovBRListProps = GovBRListMuiProps | GovBRListStrictProps
