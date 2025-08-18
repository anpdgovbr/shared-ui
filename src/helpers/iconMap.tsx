import EmailIcon from '@mui/icons-material/Email'
import ErrorIcon from '@mui/icons-material/Error'
import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import React from 'react'

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
