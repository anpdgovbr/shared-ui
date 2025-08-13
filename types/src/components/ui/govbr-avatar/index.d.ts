import type { GovBRAvatarProps } from './types';
/**
 * Componente de avatar do usuário no padrão GovBR.
 *
 * Exibe o avatar do usuário (imagem ou inicial do nome), saudação personalizada e um menu suspenso de opções.
 * Permite customização de tamanho do avatar, itens de menu, badge de notificações e estilo visual.
 *
 * @param props Propriedades do componente GovBRAvatar.
 * @example
 * ```tsx
 * <GovBRAvatar
 *   name="João Silva"
 *   onNavigate={href => console.log(href)}
 *   menuItems={[{ label: 'Perfil', href: '/perfil' }]}
 *   badgeContent="3"
 *   badgeColor="error"
 * />
 * ```
 */
export declare function GovBRAvatar({ name, src, alt, menuItems, dropdownContent, onNavigate, size, variant, color, className, badgeContent, badgeColor, badgeVariant, hideGreeting, }: GovBRAvatarProps): import("react/jsx-runtime").JSX.Element;
export type { GovBRAvatarProps, GovBRAvatarMenuItem } from './types';
//# sourceMappingURL=index.d.ts.map