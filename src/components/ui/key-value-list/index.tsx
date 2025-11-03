'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import type { KeyValueListProps } from './types'

/**
 * KeyValueList - Lista de pares chave/valor com layout responsivo
 *
 * Componente customizado da ANPD para exibir informações estruturadas
 * em formato chave-valor com layout em grade responsivo.
 *
 * **Características:**
 * - 🎨 Cores adaptáveis ao tema selecionado (GovBR ou ANPD)
 * - 📱 Layout responsivo com 1, 2 ou 3 colunas
 * - 🎯 Densidade configurável
 * - ♿ Estrutura HTML semântica
 *
 * **Nota:** Este é um componente específico da ANPD e não implementa modo estrito
 * (`strictgovbr`) pois não há equivalente no Gov.br DS oficial.
 *
 * @param props - KeyValueListProps
 *
 * @example
 * ```tsx
 * <KeyValueList
 *   rows={[
 *     { label: "Nome", value: "João Silva" },
 *     { label: "Email", value: "joao@example.com" }
 *   ]}
 *   columns={2}
 * />
 * ```
 */
export function KeyValueList({ rows, columns = 1, dense = false }: Readonly<KeyValueListProps>) {
  return (
    <Box
      sx={(theme) => ({
        display: 'grid',
        gap: dense ? theme.spacing(0.5) : theme.spacing(1),
        gridTemplateColumns: { xs: '1fr', sm: columns > 1 ? `repeat(${columns}, 1fr)` : '1fr' },
      })}
    >
      {rows.map((r) => (
        <Box
          key={r.id ?? r.label}
          sx={(theme) => ({
            display: 'grid',
            gridTemplateColumns: 'minmax(140px, 220px) 1fr',
            gap: dense ? theme.spacing(0.5) : theme.spacing(1),
            alignItems: 'baseline',
          })}
        >
          <Typography
            variant="body2"
            sx={(theme) => ({
              fontWeight: 600,
              color: theme.palette.text.secondary,
            })}
          >
            {r.label}
          </Typography>
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.text.primary,
            })}
          >
            {r.value}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

// Exports de tipos para consumidores externos
export type { KeyValueItem, KeyValueListProps } from './types'
