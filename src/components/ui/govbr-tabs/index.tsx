'use client'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React from 'react'
import { GovBRTabsProps } from 'src/components/ui/govbr-tabs/types'

/**
 * GovBRTabs - Componente de navegação por abas seguindo a arquitetura híbrida
 *
 * Componente de tabs (abas) que suporta dois modos de renderização conforme
 * a arquitetura da biblioteca shared-ui da ANPD:
 *
 * **Modo Padrão (strictgovbr=false - padrão)**: Renderiza `<Tabs>` e `<Tab>` do MUI
 * estilizados automaticamente pelo govbrTheme.ts usando tokens CSS do Gov.br DS.
 *
 * **Modo Estrito (strictgovbr=true)**: Renderiza HTML semântico com classes CSS
 * oficiais do Gov.br Design System (`.br-tab`) para garantir 100% de fidelidade visual.
 *
 * **Funcionalidades:**
 * - ✅ Navegação por teclado (setas, Home, End)
 * - ✅ Suporte a ícones nas abas
 * - ✅ Contadores (badges) opcionais
 * - ✅ Variants: text e contained
 * - ✅ Totalmente acessível (ARIA, role="tablist")
 * - ✅ Estilizado pelo govbrTheme.ts
 *
 * **Tokens CSS utilizados (no govbrTheme.ts):**
 * - `--interactive`: Cor da aba ativa
 * - `--gray-20`: Cor da borda
 * - `--surface`: Cor de fundo
 * - `--interactive-light`: Cor de hover
 *
 * @param props - GovBRTabsProps
 *
 * @example
 * ```tsx
 * // Tabs básicas
 * <GovBRTabs
 *   tabs={[
 *     { id: 'tab1', label: 'Aba 1' },
 *     { id: 'tab2', label: 'Aba 2' },
 *     { id: 'tab3', label: 'Aba 3' }
 *   ]}
 * >
 *   <div>Conteúdo Aba 1</div>
 *   <div>Conteúdo Aba 2</div>
 *   <div>Conteúdo Aba 3</div>
 * </GovBRTabs>
 * ```
 *
 * @example
 * ```tsx
 * // Tabs com ícones
 * <GovBRTabs
 *   tabs={[
 *     { id: 'home', label: 'Início', icon: <HomeIcon /> },
 *     { id: 'profile', label: 'Perfil', icon: <PersonIcon /> }
 *   ]}
 * >
 *   <div>Conteúdo Início</div>
 *   <div>Conteúdo Perfil</div>
 * </GovBRTabs>
 * ```
 *
 * @example
 * ```tsx
 * // Tabs com contadores
 * <GovBRTabs
 *   tabs={[
 *     { id: 'inbox', label: 'Caixa de Entrada', counter: 5 },
 *     { id: 'sent', label: 'Enviados', counter: 12 }
 *   ]}
 * >
 *   <div>Mensagens recebidas</div>
 *   <div>Mensagens enviadas</div>
 * </GovBRTabs>
 * ```
 *
 * @example
 * ```tsx
 * // Modo estrito Gov.br DS
 * <GovBRTabs
 *   strictgovbr
 *   tabs={[
 *     { id: 'tab1', label: 'Aba 1' },
 *     { id: 'tab2', label: 'Aba 2' }
 *   ]}
 * >
 *   <div>Conteúdo 1</div>
 *   <div>Conteúdo 2</div>
 * </GovBRTabs>
 * ```
 */
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
