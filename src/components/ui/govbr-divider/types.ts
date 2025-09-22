import { SxProps } from '@mui/material/styles'

interface GovBRDividerBaseProps {
  /**Define se o divisor é vertical ou horizontal
   * @default false
   */
  orientation?: 'horizontal' | 'vertical'

  /** Define se o divisor é tracejado ou sólido
   * @default false
   */
  dashed?: boolean

  /** Define o tamanho do divisor
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'

  /**Ativa o modo de renderização estrito
   *  @default false
   */
  strictgovbr?: boolean
}

// Props para o modo ESTRITO (baseado em div com classes CSS do GovBR-DS)
export type GovBRDividerStrictProps = GovBRDividerBaseProps & {
  strictgovbr: true
  className?: string
}

// Props para o modo PADRÃO (baseado em Divider do MUI)
export type GovBRDividerMuiProps = GovBRDividerBaseProps & {
  strictgovbr?: false
  sx?: SxProps
}

// O tipo final é uma união dos dois modos.
export type GovBRDividerProps = GovBRDividerStrictProps | GovBRDividerMuiProps
