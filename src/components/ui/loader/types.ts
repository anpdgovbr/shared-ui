import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

/**
 * Props do componente Loader.
 *
 * Componente customizado da ANPD para indicador de carregamento simples e centralizado.
 *
 * **Diferença do GovBRLoading:**
 * - `Loader`: Simples, inline, para uso dentro de containers/seções
 * - `GovBRLoading`: Completo, com modais, fullscreen, retry, progress, etc
 *
 * @remarks
 * Este é um componente específico da ANPD e não implementa modo estrito
 * (`strictgovbr`) pois é uma utilidade simples, não um padrão do Gov.br DS.
 *
 * **Características:**
 * - 🎨 Cores do tema selecionado (GovBR/ANPD)
 * - 📦 Leve e simples
 * - 🎯 Para uso inline/embutido
 * - ♿ Acessível
 *
 * @example
 * ```tsx
 * // Dentro de um card ou seção
 * <Card>
 *   <Loader message="Carregando dados..." size={32} />
 * </Card>
 * ```
 */
export interface LoaderProps extends SharedUIComponentProps {
  /** Mensagem exibida abaixo do indicador */
  readonly message?: string
  /** Tamanho do indicador circular em pixels */
  readonly size?: number
  /** Se true, expande verticalmente para preencher mais espaço */
  readonly fullscreen?: boolean
}
