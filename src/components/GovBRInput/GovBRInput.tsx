import React from 'react'
import type { InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import type { GovBRSize, GovBRStatus, GovBRClearBlock } from 'src/types/GovBRTypes'
import { mapMuiColorToGovbrClass } from 'src/helper/MuiColorToGovBRClass'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import GovBRButton from '../GovBRButton/GovBRButton'

/**
 * Propriedades do componente GovBRInput.
 */
export type GovBRInputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Tamanho do input, seguindo os padrões do GovBR.
   * - `small`: Pequeno
   * - `medium`: Médio (padrão)
   * - `large`: Grande
   * @default 'medium'
   * @example
   * ```tsx
   * <GovBRInput govbrSize="small" placeholder="Digite algo" />
   * ```
   * @remarks
   * O tamanho do input é utilizado para definir a altura e o espaçamento interno do campo, garantindo consistência visual com outros componentes do GovBR.
   */
  govbrSize?: GovBRSize

  /**
   * Status visual do input, utilizado para indicar estados como sucesso, erro, informação ou aviso.
   * - `success`: Sucesso
   * - `danger`: Erro
   * - `info`: Informação
   * - `warning`: Aviso
   * @example
   * ```tsx
   * <GovBRInput status="danger" feedbackMessage="Campo obrigatório" />
   * ```
   */
  status?: GovBRStatus

  /**
   * Define se o bloco de limpeza (clear) será exibido automaticamente.
   * @remarks
   * Útil para inputs que precisam de um botão para limpar o conteúdo.
   */
  clearBlock?: GovBRClearBlock

  /**
   * Rótulo do campo de input.
   * @example
   * ```tsx
   * <GovBRInput label="Nome completo" />
   * ```
   */
  label?: React.ReactNode

  /**
   * Mensagem de feedback exibida abaixo do input, geralmente usada para erros ou validações.
   * @example
   * ```tsx
   * <GovBRInput feedbackMessage="Campo obrigatório" status="danger" />
   * ```
   */
  feedbackMessage?: string

  /**
   * Texto auxiliar exibido abaixo do input, normalmente usado para instruções ou dicas.
   * @example
   * ```tsx
   * <GovBRInput helperText="Digite seu nome completo" />
   * ```
   */
  helperText?: string

  /**
   * Destaca visualmente o input.
   * @default false
   */
  highlight?: boolean

  /**
   * Exibe o input em linha (inline) com o rótulo.
   * @default false
   */
  inline?: boolean

  /**
   * Ícone exibido no início do campo de input.
   * @example
   * ```tsx
   * <GovBRInput startIcon={<UserIcon />} />
   * ```
   */
  startIcon?: React.ReactNode

  /**
   * Ícone do botão exibido ao final do input.
   * @example
   * ```tsx
   * <GovBRInput endButtonIcon={<ClearIcon />} onEndButtonClick={handleClear} />
   * ```
   */
  endButtonIcon?: React.ReactNode

  /**
   * Função chamada ao clicar no botão de final do input.
   * @example
   * ```tsx
   * <GovBRInput endButtonIcon={<ClearIcon />} onEndButtonClick={handleClear} />
   * ```
   */
  onEndButtonClick?: () => void
}

export const GovBRInput: React.FC<Readonly<GovBRInputProps>> = ({
  govbrSize = 'medium',
  status = undefined,
  clearBlock,
  id,
  label = '',
  feedbackMessage = '',
  helperText = '',
  disabled = false,
  highlight = false,
  inline,
  startIcon,
  endButtonIcon,
  onEndButtonClick,
  className = 'br-input',
  placeholder,
  ...props
}) => {
  const govbrColorClass = mapMuiColorToGovbrClass()
  const feedbackId = id ? `${id}-feedback` : undefined

  const iconMap = {
    success: <CheckCircleIcon fontSize="small" />,
    danger: <ErrorIcon fontSize="small" />,
    info: <InfoIcon fontSize="small" />,
    warning: <WarningIcon fontSize="small" />,
  }

  return (
    <div
      className={classNames(
        'br-input',
        govbrSize,
        status,
        govbrColorClass,
        { [`auto-${clearBlock}`]: !!clearBlock },
        { 'input-highlight': highlight, 'input-inline': inline },
        className
      )}
    >
      {inline ? (
        <>
          <div className="input-label">
            <label htmlFor={id} className="text-nowrap">
              {label}
            </label>
          </div>
          <div className="input-content">
            <div className="input-group">
              {startIcon && <div className="input-icon">{startIcon}</div>}
              <input
                id={id}
                placeholder={placeholder}
                disabled={disabled}
                aria-describedby={feedbackId}
                className={className}
                {...props}
              />
              {endButtonIcon && (
                <GovBRButton circle onClick={onEndButtonClick}>
                  {endButtonIcon}
                </GovBRButton>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {label && <label htmlFor={id}>{label}</label>}
          <div className="input-group">
            {startIcon && <div className="input-icon">{startIcon}</div>}
            <input
              id={id}
              placeholder={placeholder}
              disabled={disabled}
              aria-describedby={feedbackId}
              className={className}
              {...props}
            />
            {endButtonIcon && (
              <GovBRButton circle onClick={onEndButtonClick}>
                {endButtonIcon}
              </GovBRButton>
            )}
          </div>
        </>
      )}

      {(feedbackMessage || helperText) && (
        <span
          className={classNames('feedback', status)}
          role="alert"
          id={feedbackId}
          style={{
            display: 'inline-block',
            width: 'auto',
            marginTop: '0.25rem',
            padding: '0.2rem var(--spacing-scale-2x)',
            lineHeight: '1.2',
          }}
        >
          {status && iconMap[status]} {feedbackMessage ?? helperText}
        </span>
      )}
    </div>
  )
}

GovBRInput.displayName = 'GovBRInput'

export default GovBRInput
