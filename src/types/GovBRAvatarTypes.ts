import type { AvatarProps } from '@mui/material/Avatar'
import type { SharedUIComponentProps } from './SharedUIComponentProps.js'
import type { GovBRSize } from './GovBRTypes.js' // Caminho corrigido

export interface GovBRAvatarProps extends AvatarProps, SharedUIComponentProps {
  /**
   * Nome do usuário para exibir iniciais
   */
  name?: string

  /**
   * URL da imagem do avatar
   */
  src?: string

  /**
   * Texto alternativo para a imagem
   */
  alt?: string

  /**
   * Tamanho do avatar
   * @default 'medium'
   */
  size?: GovBRSize

  /**
   * Formato do avatar
   * @default 'circular'
   */
  // AQUI: 'circle' foi alterado para 'circular' para ser compatível com o MUI
  variant?: 'circular' | 'rounded' | 'square'

  /**
   * Cor de fundo do avatar quando não há imagem
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary'
}
