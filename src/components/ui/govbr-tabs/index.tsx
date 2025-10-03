'use client'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React from 'react'
import { GovBRTabsProps } from 'src/components/ui/govbr-tabs/types'

export function GovBRTabs(props: Readonly<GovBRTabsProps>) {
  const [activeTab, setActiveTab] = React.useState(0)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    let newIndex = activeTab
    if (event.key === 'ArrowRight') {
      newIndex = (activeTab + 1) % props.tabs.length
      setActiveTab(newIndex)
    } else if (event.key === 'ArrowLeft') {
      newIndex = (activeTab - 1 + props.tabs.length) % props.tabs.length
      setActiveTab(newIndex)
    } else if (event.key === 'Home') {
      newIndex = 0
      setActiveTab(newIndex)
    } else if (event.key === 'End') {
      newIndex = props.tabs.length - 1
      setActiveTab(newIndex)
    }
    if (newIndex !== activeTab) {
      setActiveTab(newIndex)
    }

    if (newIndex !== null && newIndex !== activeTab) {
      setActiveTab(newIndex)
      // opcional: foca o botão da nova aba para melhor acessibilidade
      const nextBtn = document.getElementById(`govbr-tab-${props.tabs[newIndex].id}`)
      nextBtn?.focus()
    }
  }

  const childrenArray = React.Children.toArray(props.children)

  if (props.strictgovbr) {
    return (
      <div className="br-tab" role="tablist" onKeyDown={handleKeyDown}>
        <nav className="tab-nav" aria-label="Tabs Navigation">
          <ul>
            {props.tabs.map((tab, index) => (
              <li
                key={tab.id}
                className={`tab-item ${activeTab === index ? 'active' : ''}`}
                role="presentation"
              >
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  aria-controls={`govbr-tabpanel-${tab.id}`}
                  aria-selected={activeTab === index}
                  role="tab"
                  tabIndex={activeTab === index ? 0 : -1}
                >
                  {tab.icon}
                  {tab.label}
                </button>
                {tab.counter !== undefined && (
                  <span className="results" aria-label={`Contador: ${tab.counter}`}>
                    ({tab.counter})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="tab-content">
          {childrenArray.map((child, index) =>
            activeTab === index ? (
              <div
                key={props.tabs[index]?.id ?? index}
                id={`govbr-tabpanel-${props.tabs[index]?.id ?? index}`}
                role="tabpanel"
                aria-labelledby={`govbr-tab-${props.tabs[index]?.id ?? index}`}
                className={`tab-panel ${activeTab === index ? 'active' : ''}`}
              >
                {child}
              </div>
            ) : null,
          )}
        </div>
      </div>
    )
  }

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }
  return (
    <Box sx={{ width: '100%', ...props.sx }}>
      <Tabs value={activeTab} onChange={handleChange} aria-label="GovBR Tabs" variant="scrollable">
        {props.tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            id={`govbr-tab-${index}`}
            aria-controls={`govbr-tabpanel-${index}`}
          />
        ))}
      </Tabs>

      {props.children &&
        props.children.map((child, index) => (
          <div
            key={props.tabs[index]?.id ?? index}
            role="tabpanel"
            hidden={activeTab !== index}
            id={`govbr-tabpanel-${index}`}
            aria-labelledby={`govbr-tab-${index}`}
          >
            {activeTab === index && <Box sx={{ p: 2 }}>{child}</Box>}
          </div>
        ))}
    </Box>
  )
}
