import { SharedUIComponentProps } from 'src/types/SharedUIComponentProps.js'

/**
 * Representa um item de menu exibido no avatar do GovBR.
 *
 * @property label - Texto exibido para o item do menu.
 * @property href - URL de navegação associada ao item do menu.
 */
export interface GovBRAvatarMenuItem {
  label: string
  href: string
}

/**
 * Propriedades para o componente GovBRAvatar.
 *
 * @property user - Informações do usuário, incluindo nome e imagem.
 * @property onNavigate - Função chamada ao navegar para um item do menu.
 * @property menuItems - Lista de itens de menu a serem exibidos.
 * @property avatarSize - Tamanho do avatar em pixels.
 * @property textMaxWidth - Largura máxima do texto do usuário.
 * @property className - Classe CSS opcional para estilização adicional.
 * @property strictGovBr - Se verdadeiro, aplica restrições visuais do padrão GovBR.
 */
export interface GovBRAvatarProps extends SharedUIComponentProps {
  /**
   * Informações do usuário exibido no avatar.
   * @remarks
   * Contém o nome e a imagem do usuário. O nome é usado para exibir
   * a saudação e a imagem é usada no avatar.
   * Se a imagem não for fornecida, o componente exibirá a inicial do nome.
   * @example
   * ```tsx
   * {
   *  name: 'Luciano',
   * image: 'https://www.gravatar.com/avatar/?d=identicon&s=80'
   * }
   * ```
   * @defaultValue `{ name: '', image: '' }`
   */
  user: {
    /**
     * Nome do usuário exibido no avatar.
     */
    name?: string
    /**
     * URL da imagem do usuário exibida no avatar.
     */
    image?: string
  }
  /**
   * Função chamada ao navegar para um item do menu.
   * Recebe o `href` do item como parâmetro.
   * @param href
   * @returns
   * Função de callback para navegação.
   * @example
   * ```tsx
   * onNavigate: (href) => {
   * console.log(`Navegando para ${href}`)
   * }
   * ```
   * @defaultValue `() => {}`
   * @remarks
   * Esta função deve ser implementada pelo usuário do componente para definir o comportamento de navegação
   * ao clicar em um item do menu.
   * É importante garantir que a navegação seja tratada corretamente, seja por meio de rote
   * amento interno ou redirecionamento para URLs externas.
   * Se não for fornecida, o componente não terá funcionalidade de navegação.
   */
  onNavigate: (href: string) => void
  /**
   * Lista de itens de menu a serem exibidos no avatar.
   * Cada item deve conter um `label` e um `href`.
   * @defaultValue `[]`
   * @example
   * ```tsx
   * [
   *  { label: 'Meu perfil', href: '/perfil' },
   *  { label: 'Sair', href: '/logout' }
   * ]
   * ```
   */
  menuItems?: GovBRAvatarMenuItem[]
  /**
   * Tamanho do avatar em pixels.
   * @defaultValue `40`
   * @remarks
   * Define a largura e altura do avatar. Se não for fornecido, o tamanho padrão será 40 pixels.
   */
  avatarSize?: number
  /**
   * Largura máxima do texto de saudação em pixels.
   * @defaultValue `300`
   * @remarks
   * Define a largura máxima do texto exibido ao lado do avatar. Se não for fornecido, o tamanho padrão será 300 pixels.
   */
  textMaxWidth?: number
  /**
   * Classe CSS opcional para estilização adicional do componente.
   * @defaultValue `''`
   * @remarks
   * Permite que o usuário adicione estilos personalizados ao componente, como sombras ou bordas.
   */
  className?: string
  /**
   * Se verdadeiro, aplica restrições visuais do padrão GovBR.
   * @defaultValue `false`
   * @remarks
   * Quando definido como `true`, o componente aplicará estilos estritos do GovBR, como cores e fontes específicas.
   * Útil para garantir conformidade com o design system do GovBR.
   */
  strictGovBr?: boolean
}
