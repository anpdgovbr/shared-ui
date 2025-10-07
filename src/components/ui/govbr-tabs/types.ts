import { SxProps } from '@mui/material/styles'

interface TabProps {
  /** Identificador único para cada item do tab  */
  id: number
  /** Rótulo do item do tab */
  label?: string
  /** Ícone do item do tab */
  icon?: React.ReactElement
  /** Contador do item do tab */
  counter?: string | number
}

interface TabsProps {
  /** array de tabs mapeadas */
  tabs: TabProps[]
  /** Conteúdo dos painéis de cada tab */
  children?: React.ReactNode[]
  /** Variante do componente */
  variant: 'text' | 'contained'
  /** Estilos adicionais para o componente */
  sx?: SxProps
}

interface GovBRTabsBaseProps extends TabsProps {
  /**
   * @default false
   * Ativa o modo de renderização estrito, que usa um elemento `<div>` padrão
   * com as classes CSS do GovBR-DS, em vez de um Avatar do MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   */
  strictgovbr?: boolean
}

export type GovBRTabsStrictProps = GovBRTabsBaseProps & {
  strictgovbr: true
}

export type GovBRTabsMuiProps = GovBRTabsBaseProps & {
  strictgovbr: false
}

export type GovBRTabsProps = GovBRTabsStrictProps | GovBRTabsMuiProps
