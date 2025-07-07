import type { SharedUIComponentProps } from '../../types/SharedUIComponentProps.js'
import React from 'react'

export interface GovBRSignInProps extends SharedUIComponentProps {
  /** Define o tipo de conteúdo e estilo do botão de sign-in. */
  variant?: 'internal' | 'external-text' | 'external-image'
  /** Define a ênfase visual do botão. */
  emphasis?: 'primary' | 'secondary'
  /** Define a densidade (tamanho) do botão. */
  density?: 'small' | 'medium' | 'large'
  /** Transforma o botão em um ícone circular. */
  isCircle?: boolean
  /** Faz o botão ocupar toda a largura disponível. */
  isBlock?: boolean
  /** Adapta o botão para uso em fundos escuros. */
  isInverted?: boolean
  /** Função a ser executada quando o botão é clicado. */
  onClick?: () => void
  /** Rótulo acessível, obrigatório para botões circulares (icônicos). */
  ariaLabel?: string
}

export const GovBRSignIn: React.FC<GovBRSignInProps> = ({
  variant = 'internal',
  emphasis,
  density,
  isCircle = false,
  isBlock = false,
  isInverted = false,
  onClick,
  ariaLabel,
}) => {
  const classNames = [
    'br-sign-in',
    emphasis, // 'primary' ou 'secondary'
    density, // 'small', 'medium', 'large'
    isCircle ? 'circle' : '',
    isBlock ? 'block' : '',
    isInverted ? 'inverted' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const renderContent = () => {
    switch (variant) {
      case 'external-image':
        return (
          <>
            Entrar com&nbsp;
            <img
              src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png"
              alt="gov.br"
            />
          </>
        )
      case 'external-text':
        return (
          <>
            Entrar com&nbsp;<span className="text-black">gov.br</span>
          </>
        )
      case 'internal':
      default:
        return (
          <>
            <i className="fas fa-user" aria-hidden="true"></i>
            {!isCircle && 'Entrar'}
          </>
        )
    }
  }

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      aria-label={isCircle ? ariaLabel : undefined}
    >
      {renderContent()}
    </button>
  )
}
