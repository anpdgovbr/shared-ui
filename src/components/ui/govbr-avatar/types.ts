import type { AvatarProps } from '@mui/material/Avatar'
import type { HTMLAttributes } from 'react'

// Props customizadas que são compartilhadas entre os dois modos
interface GovBRAvatarBaseProps {
  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<div>` padrão
   * com as classes CSS do GovBR-DS, em vez de um Avatar do MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean
}

// Props para o modo ESTRITO (baseado em div HTML)
export type GovBRAvatarStrictProps = HTMLAttributes<HTMLDivElement> &
  GovBRAvatarBaseProps & {
    strictgovbr: true
    /** A letra ou ícone a ser exibido no avatar. */
    letter?: React.ReactNode
    /** Tooltip para o avatar */
    tooltip?: string
    /** Densidade (tamanho) do avatar */
    density?: 'small' | 'medium' | 'large'
  }

// Props para o modo PADRÃO (baseado em Avatar do MUI)
export type GovBRAvatarMuiProps = AvatarProps &
  GovBRAvatarBaseProps & {
    strictgovbr?: false
  }

// O tipo final é uma união dos dois modos.
export type GovBRAvatarProps = GovBRAvatarStrictProps | GovBRAvatarMuiProps
