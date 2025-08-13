import type { AvatarProps } from '@mui/material/Avatar'
import { GovBRSize, GovBRColor } from '@govbr-types/GovBRTypes'
import { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import { GovBRMenuItem, GovBRNavigationCallback } from '@govbr-types/CommonTypes'

/**
 * Define a estrutura de um item individual do menu do avatar.
 * @deprecated Use GovBRMenuItem from CommonTypes instead. Will be removed in next major version.
 */
export type GovBRAvatarMenuItem = GovBRMenuItem

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
  color?: GovBRColor

  /**
   * Lista de itens para o menu dropdown. Se fornecido, ativa a funcionalidade de menu.
   */
  menuItems?: GovBRMenuItem[]

  /**
   * Conteúdo customizado para o dropdown. Se fornecido, substitui os menuItems.
   */
  dropdownContent?: React.ReactNode

  /**
   * Função de callback chamada quando um item do menu é clicado.
   * Obrigatória se `menuItems` for fornecido.
   */
  onNavigate?: GovBRNavigationCallback

  /**
   * Conteúdo do badge (número ou texto). Se fornecido, exibe um badge no avatar.
   */
  badgeContent?: React.ReactNode

  /**
   * Cor do badge.
   * @default 'error'
   */
  badgeColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

  /**
   * Variante do badge.
   * @default 'standard'
   */
  badgeVariant?: 'standard' | 'dot'

  /**
   * Se verdadeiro, oculta a saudação "Olá, Nome" e exibe apenas o avatar.
   * @default false
   */
  hideGreeting?: boolean
}
