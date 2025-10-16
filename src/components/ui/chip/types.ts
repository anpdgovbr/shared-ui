import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import type { ChipProps as MuiChipProps } from '@mui/material/Chip'
import type { ReactNode } from 'react'

/**
 * Props do componente Chip
 *
 * Componente customizado da ANPD baseado no MUI Chip, para exibir tags, badges,
 * status e informações categorizadas de forma compacta e visual.
 *
 * @remarks
 * Este componente não usa o modo `strictgovbr` pois é uma extensão customizada da biblioteca,
 * mas mantém compatibilidade com o tema GovBR e tokens de design.
 *
 * @example
 * ```tsx
 * <Chip label="Tag" color="primary" />
 * <Chip label="Status" variant="outlined" onDelete={handleDelete} />
 * <Chip label="Com ícone" icon={<FaceIcon />} />
 * ```
 */
export interface ChipProps extends Omit<MuiChipProps, 'label'>, SharedUIComponentProps {
  /**
   * Conteúdo do chip. Pode ser string ou elemento React customizado.
   */
  label: string | ReactNode

  /**
   * Texto do tooltip. Se true, usa o label. Se omitido, mostra apenas quando truncado.
   */
  tooltip?: boolean | string

  /**
   * Comprimento máximo do texto antes de truncar (apenas para labels string).
   * @default 33
   */
  maxLength?: number

  /**
   * Se true, trunca o texto automaticamente baseado em maxLength.
   * @default true
   */
  autoTruncate?: boolean
}

/**
 * Props do componente ChipsList
 *
 * Container inteligente para exibir múltiplos chips com controle de overflow,
 * scroll e exibição progressiva.
 *
 * @example
 * ```tsx
 * <ChipsList
 *   items={[
 *     { label: 'Tag 1', icon: <Icon /> },
 *     { label: 'Tag 2', tooltip: 'Descrição' }
 *   ]}
 *   maxLength={27}
 *   displayAllChips={false}
 * />
 * ```
 */
export interface ChipsListProps {
  /**
   * Lista de itens a serem renderizados como chips.
   */
  items: ChipItemData[]

  /**
   * Comprimento máximo total antes de mostrar "+N mais".
   * @default 27
   */
  maxLength?: number

  /**
   * Altura inicial do container.
   * @default 300
   */
  initialHeight?: number

  /**
   * Callback executado quando expand/collapse acontece.
   */
  onShowAll?: (height: number, reset: boolean) => void

  /**
   * Tamanho padrão dos chips.
   * @default 'medium'
   */
  size?: 'small' | 'medium'

  /**
   * Se true, mostra todos os chips sem controle de overflow.
   * @default false
   */
  displayAllChips?: boolean

  /**
   * Altura máxima do container com scroll.
   * @default 100
   */
  maxHeight?: number | string

  /**
   * Se true, desabilita o scroll automático.
   * @default false
   */
  disableScroll?: boolean

  /**
   * Estilos adicionais aplicados ao Stack container.
   */
  sx?: MuiChipProps['sx']
}

/**
 * Estrutura de dados para um item individual no ChipsList.
 */
export interface ChipItemData {
  /**
   * Texto do chip.
   */
  label: string

  /**
   * Ícone opcional exibido à esquerda.
   */
  icon?: ReactNode

  /**
   * Tooltip. Se true usa o label, se string usa o valor customizado.
   */
  tooltip?: boolean | string

  /**
   * Valor identificador do chip (usado em keys).
   */
  value?: string | number
}
