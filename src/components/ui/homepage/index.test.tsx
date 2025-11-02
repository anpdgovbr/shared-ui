'use client'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Homepage, HomepageFeatureGrid, HomepageHighlightCard, HomepageMetricsGrid } from './index'

describe('Homepage', () => {
  it('renderiza hero, métricas, recursos, destaques e rodapé', () => {
    const primaryAction = vi.fn()
    const footerAction = vi.fn()

    render(
      <Homepage
        hero={{
          title: 'Portal de Gestão',
          description: 'Ferramentas para administrar fluxos e equipes.',
          actions: [{ label: 'Acessar painel', onClick: primaryAction }],
        }}
        metrics={{
          title: 'Indicadores',
          metrics: [
            { label: 'Controladores ativos', value: '128' },
            { label: 'Requerentes no mês', value: '32', helperText: 'Últimos 30 dias' },
          ],
        }}
        features={{
          title: 'Recursos disponíveis',
          features: [
            { title: 'Painel Operacional', description: 'Visão consolidada das atividades.' },
            { title: 'Relatórios', description: 'Indicadores de acompanhamento em tempo real.' },
          ],
        }}
        highlights={[
          {
            title: 'Acesso restrito',
            description: 'Utilize login institucional para acessar informações sensíveis.',
            actions: [{ label: 'Saiba mais' }],
          },
        ]}
        footer={{
          title: 'Precisa de ajuda?',
          description: 'Abra um chamado com a equipe da ANPD.',
          actions: [{ label: 'Abrir chamado', onClick: footerAction }],
        }}
      />,
    )

    expect(screen.getByRole('heading', { name: /Portal de Gestão/i })).toBeInTheDocument()
    expect(screen.getByText(/Controladores ativos/i)).toBeInTheDocument()
    expect(screen.getByText(/Painel Operacional/i)).toBeInTheDocument()
    expect(screen.getByText(/Acesso restrito/i)).toBeInTheDocument()
    expect(screen.getByText(/Precisa de ajuda\?/i)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Acessar painel/i }))
    expect(primaryAction).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByRole('button', { name: /Abrir chamado/i }))
    expect(footerAction).toHaveBeenCalledTimes(1)
  })

  it('permite uso isolado dos subcomponentes', () => {
    render(
      <>
        <HomepageMetricsGrid
          metrics={[
            { label: 'Dashboards', value: '5' },
            { label: 'Servidores ativos', value: '87' },
          ]}
        />
        <HomepageFeatureGrid
          features={[
            { title: 'Governança', description: 'Fluxos integrados com RBAC.' },
            { title: 'Auditoria', description: 'Histórico detalhado de operações.' },
          ]}
        />
        <HomepageHighlightCard
          title="Ambiente de testes"
          description="Ideal para validar integrações antes da produção."
        />
      </>,
    )

    expect(screen.getByText(/Dashboards/)).toBeInTheDocument()
    expect(screen.getByText(/Governança/)).toBeInTheDocument()
    expect(screen.getByText(/Ambiente de testes/)).toBeInTheDocument()
  })
})
