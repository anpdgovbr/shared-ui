import type { AvatarProps } from '@mui/material/Avatar'
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
   * Nome do usuário para exibir iniciais.
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
   * Formato do avatar.
   * @default 'circular'
   */
  variant?: 'circular' | 'rounded' | 'square'

  /**
   * Cor de fundo do avatar quando não há imagem.
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary'

  /**
   * Lista de itens para o menu dropdown. Se fornecido, ativa a funcionalidade de menu.
   */
  menuItems?: GovBRAvatarMenuItem[]

  /**
   * Função de callback chamada quando um item do menu é clicado.
   * Obrigatória se `menuItems` for fornecido.
   */
  onNavigate?: (href: string) => void
}
