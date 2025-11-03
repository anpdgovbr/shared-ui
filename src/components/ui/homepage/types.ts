import type { ContainerProps } from '@mui/material/Container'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ReactNode } from 'react'

import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'
import type { GovBRButtonProps } from '../govbr-button/types'

/**
 * Representa uma ação de CTA usada nas seções do componente Homepage.
 * Extende as props do GovBRButton, mantendo `label` como texto obrigatório.
 */
export interface HomepageAction extends Omit<GovBRButtonProps, 'children'> {
  readonly label: string
}

/**
 * Props padrão utilizadas na raiz da homepage. Permite ajustar
 * container do MUI e espaçamento vertical entre seções.
 */
export interface HomepageRootProps extends Omit<ContainerProps, 'children'> {
  readonly children?: ReactNode
  readonly spacing?: number
}

/**
 * Configuração da seção hero (destaque) da homepage.
 */
export interface HomepageHeroProps {
  /** Texto pequeno acima do título (ex: "Novidade", "Lançamento") */
  readonly eyebrow?: string
  /** Título principal da hero section */
  readonly title: string
  /** Descrição/subtítulo da hero section */
  readonly description?: string
  /** Texto destacado acima do eyebrow (ex: "BETA", "EM BREVE") */
  readonly highlight?: string
  /** Ações/botões na hero section */
  readonly actions?: readonly HomepageAction[]
  /** Alinhamento do conteúdo */
  readonly align?: 'left' | 'center'
  /** Largura máxima da descrição em px ou string CSS */
  readonly maxDescriptionWidth?: number | string
  /** Gradiente de fundo customizado (CSS linear-gradient) */
  readonly backgroundGradient?: string
  /** Estilos adicionais do MUI */
  readonly sx?: SxProps<Theme>
}

/**
 * Representa um card de destaque de recurso.
 */
export interface HomepageFeature {
  /** Ícone do recurso (ReactNode - pode ser ícone MUI, emoji, SVG etc) */
  readonly icon?: ReactNode
  /** Título do recurso */
  readonly title: string
  /** Descrição do recurso */
  readonly description: string
}

/**
 * Props para a grade de recursos/features.
 */
export interface HomepageFeatureGridProps {
  /** Título da seção de features */
  readonly title?: string
  /** Subtítulo/descrição da seção */
  readonly subtitle?: string
  /** Lista de features a exibir */
  readonly features: readonly HomepageFeature[]
  /** Configuração de colunas por breakpoint */
  readonly columns?: {
    readonly xs?: number
    readonly sm?: number
    readonly md?: number
    readonly lg?: number
  }
  /** Reduz espaçamentos entre cards */
  readonly dense?: boolean
  /** Variante visual dos cards */
  readonly cardVariant?: 'outlined' | 'elevated'
  /** Estilos adicionais do MUI */
  readonly sx?: SxProps<Theme>
}

/**
 * Métricas resumidas exibidas em cards numéricos.
 */
export interface HomepageMetric {
  /** Label descritiva da métrica */
  readonly label: string
  /** Valor numérico ou string a exibir */
  readonly value: string | number
  /** Texto auxiliar adicional (opcional) */
  readonly helperText?: string
}

/**
 * Props para grade de métricas.
 */
export interface HomepageMetricsGridProps {
  /** Lista de métricas a exibir */
  readonly metrics: readonly HomepageMetric[]
  /** Título da seção de métricas */
  readonly title?: string
  /** Subtítulo/descrição da seção */
  readonly subtitle?: string
  /** Configuração de colunas por breakpoint */
  readonly columns?: {
    readonly xs?: number
    readonly sm?: number
    readonly md?: number
  }
  /** Reduz espaçamentos entre cards */
  readonly dense?: boolean
  /** Estilos adicionais do MUI */
  readonly sx?: SxProps<Theme>
}

/**
 * Cartão informativo para reforçar mensagens adicionais.
 */
export interface HomepageHighlightCardProps {
  /** Título do card de destaque */
  readonly title: string
  /** Descrição/conteúdo do card */
  readonly description: string
  /** Ícone opcional do card */
  readonly icon?: ReactNode
  /** Ações/botões no card */
  readonly actions?: readonly HomepageAction[]
  /** Variante visual do card */
  readonly variant?: 'neutral' | 'emphasis'
  /** Estilos adicionais do MUI */
  readonly sx?: SxProps<Theme>
}

/**
 * Props para o footer da homepage.
 */
export interface HomepageFooterProps {
  /** Título do footer */
  readonly title?: string
  /** Descrição/mensagem do footer */
  readonly description?: string
  /** Ações/botões no footer */
  readonly actions?: readonly HomepageAction[]
  /** Alinhamento do conteúdo */
  readonly align?: 'left' | 'center'
  /** Estilos adicionais do MUI */
  readonly sx?: SxProps<Theme>
}

/**
 * Props principais do componente Homepage.
 *
 * Componente customizado da ANPD para criação rápida de páginas iniciais
 * com seções comuns (hero, métricas, features, highlights e footer).
 *
 * @remarks
 * Este é um componente específico da ANPD e não implementa modo estrito
 * (`strictgovbr`) pois não há equivalente no Gov.br DS. É construído usando
 * componentes base do MUI estilizados pelo govbrTheme.ts.
 *
 * **Características:**
 * - 🎨 Totalmente integrado ao govbrTheme.ts
 * - 📦 Composição flexível de seções
 * - 🎯 Design responsivo por padrão
 * - ♿ Acessível e semântico
 * - 🧩 Customizável via props e sx
 *
 * @example
 * ```tsx
 * <Homepage
 *   hero={{
 *     title: "Bem-vindo à ANPD",
 *     description: "Sistema de gestão de dados",
 *     actions: [{ label: "Começar", variant: "contained", color: "primary" }]
 *   }}
 *   metrics={{
 *     metrics: [
 *       { label: "Usuários", value: "1.234" },
 *       { label: "Processos", value: "567" }
 *     ]
 *   }}
 * />
 * ```
 */
export interface HomepageProps extends SharedUIComponentProps {
  /** Configuração da seção hero */
  readonly hero?: HomepageHeroProps
  /** Configuração da grade de métricas */
  readonly metrics?: HomepageMetricsGridProps
  /** Configuração da grade de features */
  readonly features?: HomepageFeatureGridProps
  /** Lista de cards de destaque */
  readonly highlights?: readonly HomepageHighlightCardProps[]
  /** Configuração do footer */
  readonly footer?: HomepageFooterProps
  /** Props adicionais para o container raiz */
  readonly containerProps?: Omit<HomepageRootProps, 'children'>
  /** Espaçamento vertical entre seções (em unidades de spacing do tema) */
  readonly spacing?: number
}
