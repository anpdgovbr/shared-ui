'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export type KeyValueItem = Readonly<{ id?: string; label: string; value: React.ReactNode }>
export type KeyValueListProps = Readonly<{ rows: KeyValueItem[]; columns?: 1 | 2 | 3 }>

/**
 * KeyValueList — Lista de pares chave/valor com layout responsivo.
 */
export function KeyValueList({ rows, columns = 1 }: KeyValueListProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: { xs: '1fr', sm: columns > 1 ? `repeat(${columns}, 1fr)` : '1fr' },
      }}
    >
      {rows.map((r) => (
        <Box
          key={r.id ?? r.label}
          sx={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 220px) 1fr', gap: 1 }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
            {r.label}
          </Typography>
          <Typography variant="body2">{r.value}</Typography>
        </Box>
      ))}
    </Box>
  )
}
