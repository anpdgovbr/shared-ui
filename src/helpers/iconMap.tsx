import EmailIcon from '@mui/icons-material/Email'
import ErrorIcon from '@mui/icons-material/Error'
import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import React from 'react'

/**
 * Mapa de ícones reutilizáveis para componentes da biblioteca.
 *
 * Cada chave (string) mapeia para um React.ReactNode que representa o ícone
 * correspondente. Esse objeto é usado pelos componentes para resolver
 * dinamicamente qual ícone renderizar, evitando múltiplos imports em consumidores.
 *
 * Exemplo de uso:
 * ```tsx
 * import { iconMap } from '@anpdgovbr/shared-ui/src/helpers/iconMap'
 *
 * function MeuComponente() {
 *   const icon = iconMap['Search'] // -> <SearchIcon />
 *   return <span>{icon} Buscar</span>
 * }
 * ```
 *
 * Observações:
 * - As chaves são sensíveis a maiúsculas/minúsculas conforme definidas neste mapa.
 * - Os valores são React.ReactNode; podem ser componentes MUI (ícones) ou `null`.
 * - Não altera ou injeta estilos globais; estilos inline específicos (ex.: Error) são intencionais.
 *
 * @public
 */
export const iconMap: Record<string, React.ReactNode> = {
  None: null,
  Person: <PersonIcon />,
  Search: <SearchIcon />,
  Email: <EmailIcon />,
  Lock: <LockIcon />,
  Visibility: <VisibilityIcon />,
  VisibilityOff: <VisibilityOffIcon />,
  Error: <ErrorIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '4px' }} />,
}
