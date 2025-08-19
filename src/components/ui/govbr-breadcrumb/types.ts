import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs'
import type { HTMLAttributes } from 'react'

// Props customizadas que são compartilhadas entre os dois modos
interface GovBRBreadcrumbBaseProps {
  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<nav>` padrão
   * com as classes CSS do GovBR-DS, em vez de um Breadcrumbs do MUI estilizado pelo tema.
   * Garante fidelidade visual máxima ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean
}

// Interface para um único link no modo estrito
export interface BreadcrumbLink {
  url: string
  label: string
}

// Props para o modo ESTRITO (baseado em nav HTML)
export type GovBRBreadcrumbStrictProps = HTMLAttributes<HTMLElement> &
  GovBRBreadcrumbBaseProps & {
    strictgovbr: true
    /** Lista de links para exibir no breadcrumb. */
    links: BreadcrumbLink[]
  }

// Props para o modo PADRÃO (baseado em Breadcrumbs do MUI)
export type GovBRBreadcrumbMuiProps = BreadcrumbsProps &
  GovBRBreadcrumbBaseProps & {
    strictgovbr?: false
  }

// O tipo final é uma união dos dois modos.
export type GovBRBreadcrumbProps = GovBRBreadcrumbStrictProps | GovBRBreadcrumbMuiProps
