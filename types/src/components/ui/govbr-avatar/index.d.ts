import type { GovBRAvatarProps } from './types'
/**
 * Componente de avatar do usuário no padrão GovBR.
 *
 * Exibe o avatar do usuário (imagem ou inicial do nome), saudação personalizada e um menu suspenso de opções.
 * Permite customização de tamanho do avatar, itens de menu e estilo visual.
 *
 * @param props Propriedades do componente GovBRAvatar.
 * @example
 * ```tsx
 * <GovBRAvatar
 * name="João Silva"
 * onNavigate={href => console.log(href)}
 * menuItems={[{ label: 'Perfil', href: '/perfil' }]}
 * />
 * ```
 */
export declare function GovBRAvatar({
  name,
  src,
  alt,
  menuItems,
  onNavigate,
  size,
  color,
  className,
}: GovBRAvatarProps): import('react/jsx-runtime').JSX.Element
//# sourceMappingURL=index.d.ts.map
