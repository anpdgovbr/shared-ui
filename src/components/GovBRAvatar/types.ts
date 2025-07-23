import type { AvatarProps, BadgeProps } from '@mui/material'
import type { ReactNode } from 'react'
import { GovBRSize } from 'src/types/GovBRTypes'
import { SharedUIComponentProps } from 'src/types/SharedUIComponentProps'

/**
 * Define a estrutura de um item individual do menu do avatar.
 */
export interface GovBRAvatarMenuItem {
  /** O texto a ser exibido para o item. */
  label: string
  /** O caminho (URL) para onde o item deve navegar. */
  href: string
  /** Ícone opcional para ser exibido ao lado do texto. */
  icon?: ReactNode
}

export interface GovBRAvatarProps extends AvatarProps, SharedUIComponentProps {
  /**
   * Nome do usuário para exibir iniciais e saudação.
   */
  name?: string

  /**
   * URL da imagem do avatar.
   */
  src?: string

  /**
   * Texto alternativo para a imagem.
   */
  alt?: string

  /**
   * Tamanho do avatar.
   * @default 'medium'
   */
  size?: GovBRSize

  /**
   * Formato do avatar. (Sua prop original, agora será usada!)
   * @default 'circular'
   */
  variant?: 'circular' | 'rounded' | 'square'

  /**
   * Cor de fundo do avatar quando não há imagem.
   * @default 'default'
   */
  color?: 'primary'| 'secondary' | 'default' 

  /**
   * Lista de itens para o menu dropdown simples.
   */
  menuItems?: GovBRAvatarMenuItem[]

  /**
   * Conteúdo customizado (JSX) para ser exibido dentro do dropdown.
   * Se fornecido, sobrepõe `menuItems`.
   */
  dropdownContent?: ReactNode

  /**
   * Função de callback chamada quando um item do menu é clicado.
   */
  onNavigate?: (href: string) => void

  /**
   * Conteúdo a ser exibido no identificador (badge) sobre o avatar. Ex: números ou ícones.
   */
  badgeContent?: ReactNode

  /**
   * Cor do identificador (badge).
   * @default 'error'
   */
  badgeColor?: BadgeProps['color']

  /**
   * Variante do identificador (badge). 'dot' é usado para status online.
   * @default 'standard'
   */
  badgeVariant?: BadgeProps['variant']

  /**
   * Se `true`, oculta a saudação "Olá, [Nome]" e exibe apenas o avatar.
   * @default false
   */
  hideGreeting?: boolean
}
