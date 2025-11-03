import type { ReactNode } from 'react'

import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

/**
 * Representa um item de chave-valor na lista.
 */
export interface KeyValueItem {
  /** Identificador único opcional do item */
  readonly id?: string
  /** Label/chave exibida à esquerda */
  readonly label: string
  /** Valor exibido à direita (pode ser texto, número ou componente React) */
  readonly value: ReactNode
}

/**
 * Props do componente KeyValueList.
 *
 * Componente customizado da ANPD para exibir listas de pares chave-valor
 * com layout responsivo em grade.
 *
 * @remarks
 * Este é um componente específico da ANPD e não implementa modo estrito
 * (`strictgovbr`) pois não há equivalente no Gov.br DS oficial.
 *
 * **Características:**
 * - 🎨 Integrado ao govbrTheme.ts
 * - 📱 Layout responsivo com grid CSS
 * - 🎯 Suporte a múltiplas colunas
 * - ♿ Semântico e acessível
 *
 * @example
 * ```tsx
 * <KeyValueList
 *   rows={[
 *     { label: "Nome", value: "João Silva" },
 *     { label: "CPF", value: "123.456.789-00" },
 *     { label: "Email", value: "joao@example.com" }
 *   ]}
 *   columns={2}
 * />
 * ```
 */
export interface KeyValueListProps extends SharedUIComponentProps {
  /** Lista de itens chave-valor a exibir */
  readonly rows: readonly KeyValueItem[]
  /** Número de colunas no layout (1, 2 ou 3) */
  readonly columns?: 1 | 2 | 3
  /** Aplica densidade reduzida com menos espaçamento */
  readonly dense?: boolean
}
