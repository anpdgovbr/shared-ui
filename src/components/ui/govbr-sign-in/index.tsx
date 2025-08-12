import PersonIcon from '@mui/icons-material/Person'
import classNames from 'classnames'
import type { GovBRSignInProps } from './types'

/**
 * Componente de botão para login com Gov.br, com diferentes variações de estilo e cor.
 * Segue as diretrizes do GovBR Design System com suporte a múltiplas variantes e estados.
 *
 * @param {GovBRSignInProps} props - As propriedades do componente.
 */
export function GovBRSignIn({
  variant = 'internal',
  color = 'primary',
  density,
  circle = false,
  block = false,
  inverted = false,
  externalImageHeight,
  className,
  iconUrl,
  strictGovBr = false,
  ...props
}: GovBRSignInProps) {
  // Classes para o modo strictGovBr (seguindo @govbr-ds/core)
  const strictClasses = strictGovBr
    ? classNames('br-sign-in', color, density, {
        circle,
        block,
        inverted,
      })
    : ''

  // Classes para o modo padrão (MUI + customizações)
  const componentClass = classNames(
    'sign-in',
    !strictGovBr && color,
    !strictGovBr && density,
    {
      'sign-in--circle': !strictGovBr && circle,
      'sign-in--block': !strictGovBr && block,
      'sign-in--inverted': !strictGovBr && inverted,
      circle: strictGovBr && circle,
      block: strictGovBr && block,
      inverted: strictGovBr && inverted,
    },
    strictClasses,
    className,
  )

  // Função para renderizar o conteúdo do botão com base na variante.
  const renderContent = () => {
    switch (variant) {
      case 'external-image':
        return (
          <>
            Entrar com&nbsp;
            <img
              src={iconUrl || 'https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png'}
              alt="gov.br"
              style={{
                maxHeight: externalImageHeight || '16px',
                marginLeft: '8px',
                verticalAlign: 'middle',
              }}
            />
          </>
        )
      case 'external-text':
        return (
          <>
            Entrar com&nbsp;
            <span style={{ marginLeft: '4px', fontWeight: 'bold' }}>gov.br</span>
          </>
        )
      case 'internal':
      default:
        return (
          <>
            {strictGovBr ? (
              <i className="fas fa-user" aria-hidden="true"></i>
            ) : (
              <PersonIcon sx={{ p: 0, m: 0, mr: circle ? 0 : 1 }} />
            )}
            {!circle && 'Entrar'}
          </>
        )
    }
  }

  return (
    <button type="button" className={componentClass} {...props}>
      {renderContent()}
    </button>
  )
}

GovBRSignIn.displayName = 'GovBRSignIn'

// Exports para tree shaking otimizado
export type { GovBRSignInProps } from './types'
