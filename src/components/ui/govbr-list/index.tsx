'use client'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import React from 'react'
import { GovBRDivider } from 'src/components/ui/govbr-divider'
import { GovBRItem } from 'src/components/ui/govbr-item'
import { GovBRListProps } from 'src/components/ui/govbr-list/types'

export function GovBRList(props: Readonly<GovBRListProps>) {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  const [focusedIdx, setFocusedIdx] = React.useState<number>(-1)
  const itemRefs = React.useRef<Array<HTMLDivElement | null>>([])

  const handleItemKeyDown = (event: React.KeyboardEvent, idx: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextIdx = idx < props.itens.length - 1 ? idx + 1 : 0
      setFocusedIdx(nextIdx)
      itemRefs.current[nextIdx]?.focus()
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const prevIdx = idx > 0 ? idx - 1 : props.itens.length - 1
      setFocusedIdx(prevIdx)
      itemRefs.current[prevIdx]?.focus()
    }
    if (event.key === 'Home') {
      event.preventDefault()
      setFocusedIdx(0)
      itemRefs.current[0]?.focus()
    }
    if (event.key === 'End') {
      event.preventDefault()
      setFocusedIdx(props.itens.length - 1)
      itemRefs.current[props.itens.length - 1]?.focus()
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (props.itens[idx].onClick) {
        props.itens[idx].onClick()
      }
    }
  }

  if (props.strictgovbr) {
    if (props.expansible) {
      return (
        <div className="br-list">
          {props.label && (
            <div className="header">
              <div onClick={handleClick} className="title">
                {props.label}
                {open ? <ExpandLess color="primary" /> : <ExpandMore color="primary" />}
              </div>
            </div>
          )}
          {open && (
            <div className="br-list">
              {props.itens.map((item, idx) => (
                <>
                  <div
                    ref={(el) => {
                      itemRefs.current[idx] = el
                    }}
                    tabIndex={0}
                    onClick={handleClick}
                    onKeyDown={(e) => handleItemKeyDown(e, idx)}
                    key={idx}
                    className="br-item"
                  >
                    {item.icon}
                    {item.children}
                  </div>
                  {item.divider && <GovBRDivider strictgovbr />}
                </>
              ))}
            </div>
          )}
        </div>
      )
    }
    return (
      <div className="br-list">
        {props.label && (
          <div className="header">
            <div className="title">{props.label}</div>
          </div>
        )}
        {props.labelDivider && <GovBRDivider strictgovbr />}
        {props.itens.map((item, idx) => (
          <>
            <GovBRItem key={idx} strictgovbr>
              {item.icon}
              {item.children}
            </GovBRItem>
            {item.divider && <GovBRDivider strictgovbr />}
          </>
        ))}
      </div>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  const listContent = (
    <Stack sx={{ backgroundColor: '#c9d9f2', borderRadius: '8px' }}>
      <List component="div" disablePadding>
        {props.itens.map((item, idx) => (
          <ListItemButton
            key={idx}
            ref={(el) => {
              itemRefs.current[idx] = el
            }}
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={(e) => handleItemKeyDown(e, idx)}
            selected={focusedIdx === idx}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.children} />
          </ListItemButton>
        ))}
      </List>
    </Stack>
  )

  if (props.expansible) {
    return (
      <>
        <Stack sx={{ backgroundColor: '#c9d9f2', borderRadius: '8px' }}>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary={props.label} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding aria-labelledby="lista">
              {listContent}
            </List>
          </Collapse>
        </Stack>
      </>
    )
  }
  return listContent
}
