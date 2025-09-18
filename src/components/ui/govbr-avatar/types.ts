import type { AvatarProps } from '@mui/material/Avatar'
import type { HTMLAttributes } from 'react'

// Interface para itens do menu dropdown
export interface GovBRAvatarMenuItem {
  /** Texto do item do menu */
  label: string
  /** Função callback executada ao clicar no item */
  onClick?: () => void
  /** URL para navegação (alternativa ao onClick) */
  href?: string
  /** Se o item está desabilitado */
  disabled?: boolean
  /** Ícone a ser exibido junto ao item (opcional) */
  icon?: React.ReactNode
}

// Props customizadas que são compartilhadas entre os dois modos
interface GovBRAvatarBaseProps {
  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<div>` padrão
   * com as classes CSS do GovBR-DS, em vez de um Avatar do MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean

  /**
   * Nome do usuário a ser exibido no avatar dropdown
   * Exemplo: "João Silva" aparecerá como "Olá, João"
   */
  name?: string

  /**
   * Texto de saudação personalizado
   * @default "Olá"
   */
  greetingText?: string

  /**
   * Lista de itens do menu dropdown
   * Se não fornecida, o avatar será renderizado sem dropdown
   */
  menuItems?: GovBRAvatarMenuItem[]

  /**
   * Callback executado quando um item do menu é clicado
   * Recebe o item clicado como parâmetro
   */
  onNavigate?: (item: GovBRAvatarMenuItem) => void

  /**
   * Se o dropdown está aberto (controlado externamente)
   * Para uso avançado - geralmente não é necessário
   */
  open?: boolean

  /**
   * Callback executado quando o estado do dropdown muda
   */
  onOpenChange?: (open: boolean) => void
}

// Props para o modo ESTRITO (baseado em div HTML)
export interface GovBRAvatarStrictProps
  extends HTMLAttributes<HTMLDivElement>,
    GovBRAvatarBaseProps {
  strictgovbr: true
  /** A letra ou ícone a ser exibido no avatar. */
  letter?: React.ReactNode
  /** Tooltip para o avatar */
  tooltip?: string
  /** Densidade (tamanho) do avatar */
  density?: 'small' | 'medium' | 'large'
}

// Props para o modo PADRÃO (baseado em Avatar do MUI)
export interface GovBRAvatarMuiProps extends AvatarProps, GovBRAvatarBaseProps {
  strictgovbr?: false
}

// O tipo final é uma união dos dois modos.
export type GovBRAvatarProps = GovBRAvatarStrictProps | GovBRAvatarMuiProps
