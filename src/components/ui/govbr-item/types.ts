import { SxProps } from '@mui/material/styles'
import React from 'react'

interface GovBRItemBaseProps {
  /**Estado do componente*/
  estado?: 'active' | 'disabled' | 'selected'

  /**Linha divisória do componente
   * @default false
   */
  divider?: boolean

  /**Componente contido dentro do item */
  children?: React.ReactNode

  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<div>` padrão
   * com as classes CSS do GovBR-DS, em vez de um Avatar do MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean

  /**Prop para estilização adicional para o componente Mui */
  sx?: SxProps
}

export type GovBRItemProps = GovBRItemBaseProps
