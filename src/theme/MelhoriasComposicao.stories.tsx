import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: '📋 Theme/Melhorias de Composição',
  parameters: {
    docs: {
      description: {
        component: `
## 🎯 Demonstração das Melhorias do Tema

Este story demonstra as **otimizações de composabilidade** aplicadas ao tema GovBR, 
resolvendo problemas de espaçamento excessivo e melhorando a flexibilidade para composições.

### Principais Melhorias:
- ✅ **Margens reduzidas** nos headings (h1-h6)
- ✅ **Controle preciso** de espaçamento
- ✅ **Variantes especiais** para casos específicos
- ✅ **Sistema de spacing** mais granular
- ✅ **Compatibilidade** mantida com código existente

### Como Usar:
\`\`\`tsx
// Composição natural sem margens excessivas
<Stack spacing={1}>
  <Typography variant="h2">Título</Typography>
  <Typography variant="body1">Texto</Typography>
  <Button>Ação</Button>
</Stack>

// Controle fino com variantes
<Typography variant="h1" className="no-margin">
  Título sem margens
</Typography>
\`\`\`
        `,
      },
    },
  },
  decorators: [(Story) => <Story />],
}

export default meta
type Story = StoryObj

// Story principal mostrando composições melhoradas
export const ComposicoesOtimizadas: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Box>
        <Typography variant="h1" color="primary" sx={{ mb: 2 }}>
          🎨 Melhorias de Composição
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Demonstração das otimizações aplicadas ao tema para melhor composabilidade e
          flexibilidade.
        </Typography>
      </Box>

      {/* Exemplo 1: Stack com spacing natural */}
      <Card elevation={1}>
        <CardContent>
          <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
            ✅ Composição com Stack (Otimizado)
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Margens reduzidas permitem controle preciso via Stack spacing:
          </Typography>

          <Box sx={{ p: 2, backgroundColor: 'grey.50', borderRadius: 1 }}>
            <Stack spacing={1}>
              <Typography variant="h4">Título Principal</Typography>
              <Typography variant="h5">Subtítulo</Typography>
              <Typography variant="body1">
                Parágrafo de texto que agora se alinha naturalmente sem espaçamentos excessivos.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button size="small">Ação Primária</Button>
                <Button variant="outlined" size="small">
                  Ação Secundária
                </Button>
              </Stack>
            </Stack>
          </Box>
        </CardContent>
      </Card>

      {/* Exemplo 2: Comparação antes/depois */}
      <Card elevation={1}>
        <CardContent>
          <Typography variant="h3" sx={{ mb: 2, color: 'warning.main' }}>
            📊 Comparação: Antes vs Depois
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            {/* Simulação "antes" */}
            <Box
              sx={{ flex: 1, p: 2, backgroundColor: 'error.light', borderRadius: 1, opacity: 0.7 }}
            >
              <Typography variant="h6" sx={{ color: 'error.contrastText', mb: 1 }}>
                ❌ Antes (Espaçamentos Grandes)
              </Typography>
              <Box
                sx={{
                  '& > *': { marginBottom: '24px !important' },
                  '& > *:nth-last-child(1)': { marginBottom: '0 !important' },
                }}
              >
                <Typography variant="h4" sx={{ color: 'error.contrastText' }}>
                  Título
                </Typography>
                <Typography variant="body1" sx={{ color: 'error.contrastText' }}>
                  Muito espaço entre elementos quebrava o layout
                </Typography>
                <Button size="small" sx={{ backgroundColor: 'error.dark', color: 'white' }}>
                  Botão Distante
                </Button>
              </Box>
            </Box>

            {/* Versão otimizada */}
            <Box sx={{ flex: 1, p: 2, backgroundColor: 'success.light', borderRadius: 1 }}>
              <Typography variant="h6" sx={{ color: 'success.contrastText', mb: 1 }}>
                ✅ Depois (Espaçamentos Controlados)
              </Typography>
              <Stack spacing={1}>
                <Typography variant="h4" sx={{ color: 'success.contrastText' }}>
                  Título
                </Typography>
                <Typography variant="body1" sx={{ color: 'success.contrastText' }}>
                  Espaçamento equilibrado e natural
                </Typography>
                <Button size="small" sx={{ backgroundColor: 'success.dark', color: 'white' }}>
                  Botão Alinhado
                </Button>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Exemplo 3: Variantes especiais */}
      <Card elevation={1}>
        <CardContent>
          <Typography variant="h3" sx={{ mb: 2, color: 'info.main' }}>
            🎛️ Variantes de Controle Fino
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Novas variantes para controle preciso em situações específicas:
          </Typography>

          <Stack spacing={3}>
            {/* No margin */}
            <Box sx={{ p: 2, backgroundColor: 'grey.100', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                className=&quot;no-margin&quot; - Remove todas as margens:
              </Typography>
              <Box sx={{ border: '1px dashed', borderColor: 'grey.400', p: 1 }}>
                <Typography variant="h4" className="no-margin">
                  Título sem margens
                </Typography>
                <Typography variant="body1">
                  Texto que cola direto no título (útil em componentes compactos)
                </Typography>
              </Box>
            </Box>

            {/* Compact */}
            <Box sx={{ p: 2, backgroundColor: 'grey.100', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                className=&quot;compact&quot; - Margens ultra compactas:
              </Typography>
              <Box sx={{ border: '1px dashed', borderColor: 'grey.400', p: 1 }}>
                <Typography variant="h4" className="compact">
                  Título Compacto
                </Typography>
                <Typography variant="h5" className="compact">
                  Subtítulo Compacto
                </Typography>
                <Typography variant="body1">Ideal para interfaces densas ou dashboards</Typography>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Exemplo 4: Spacing contextual */}
      <Card elevation={1}>
        <CardContent>
          <Typography variant="h3" sx={{ mb: 2, color: 'secondary.main' }}>
            📐 Sistema de Spacing Contextual
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Tokens organizados por contexto facilitam o uso correto:
          </Typography>

          <Stack spacing={2}>
            <Box
              sx={{
                p: 2,
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                borderRadius: 1,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                govbrSpacing.typography.heading.large
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                16px - Para H1 e H2 (era 24-40px)
              </Typography>
            </Box>

            <Box
              sx={{
                p: 1.5,
                backgroundColor: 'secondary.light',
                color: 'secondary.contrastText',
                borderRadius: 1,
              }}
            >
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                govbrSpacing.component.gap.default
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                16px - Para espaçamento entre componentes
              </Typography>
            </Box>

            <Box
              sx={{
                p: 1,
                backgroundColor: 'info.light',
                color: 'info.contrastText',
                borderRadius: 1,
              }}
            >
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                govbrSpacing.micro
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                4px - Para ajustes micro
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  ),
}

// Story mostrando diferentes densidades
export const DensidadesDeLayout: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
        🎚️ Densidades de Layout
      </Typography>

      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>
        {/* Layout Espaçoso */}
        <Card sx={{ flex: 1, p: 3 }}>
          <Typography variant="h4" sx={{ mb: 2, color: 'success.main' }}>
            🏞️ Espaçoso
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Para conteúdo de marketing ou apresentação:
          </Typography>
          <Stack spacing={2}>
            <Typography variant="h5">Título da Seção</Typography>
            <Typography variant="body1">
              Texto com respiração adequada para leitura confortável em páginas de conteúdo.
            </Typography>
            <Typography variant="body1">
              Segundo parágrafo com espaçamento natural entre elementos.
            </Typography>
            <Button>Call to Action</Button>
          </Stack>
        </Card>

        {/* Layout Balanceado */}
        <Card sx={{ flex: 1, p: 2 }}>
          <Typography variant="h4" sx={{ mb: 1.5, color: 'primary.main' }}>
            ⚖️ Balanceado
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Para aplicações padrão:
          </Typography>
          <Stack spacing={1}>
            <Typography variant="h5">Título da Seção</Typography>
            <Typography variant="body1">
              Espaçamento equilibrado para a maioria dos casos de uso.
            </Typography>
            <Typography variant="body1">Segundo parágrafo alinhado naturalmente.</Typography>
            <Button size="small">Ação</Button>
          </Stack>
        </Card>

        {/* Layout Compacto */}
        <Card sx={{ flex: 1, p: 1.5 }}>
          <Typography variant="h4" className="compact" sx={{ color: 'warning.main' }}>
            📊 Compacto
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            Para dashboards/tabelas:
          </Typography>
          <Stack spacing={0.5}>
            <Typography variant="h5" className="compact">
              Seção
            </Typography>
            <Typography variant="body2">Máxima densidade de informação.</Typography>
            <Typography variant="body2">Ideal para interfaces de dados.</Typography>
            <Button size="small" sx={{ alignSelf: 'start' }}>
              Ver
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  ),
}

// Story com código de exemplo
export const ExemplosDeUso: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
        💻 Exemplos de Uso
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Como Migrar Código Existente
          </Typography>

          <Box sx={{ p: 2, backgroundColor: 'grey.100', borderRadius: 1, mb: 2 }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
              {`// ❌ ANTES: Dependia das margens automáticas
<Box>
  <Typography variant="h2">Título</Typography>
  <Typography variant="body1">Texto</Typography>
  <Button>Ação</Button>
</Box>

// ✅ DEPOIS: Controle explícito via Stack
<Stack spacing={1}>
  <Typography variant="h2">Título</Typography>
  <Typography variant="body1">Texto</Typography>
  <Button>Ação</Button>
</Stack>

// ✅ ALTERNATIVA: Variantes especiais
<Typography variant="h2" className="no-margin">
  Título
</Typography>`}
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ mb: 1 }}>
            Benefícios da Migração:
          </Typography>
          <Stack component="ul" spacing={0.5} sx={{ pl: 2 }}>
            <Typography component="li" variant="body2">
              ✅ **Controle preciso** do espaçamento
            </Typography>
            <Typography component="li" variant="body2">
              ✅ **Layouts mais flexíveis** e responsivos
            </Typography>
            <Typography component="li" variant="body2">
              ✅ **Consistência visual** entre componentes
            </Typography>
            <Typography component="li" variant="body2">
              ✅ **Manutenção simplificada** do código
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  ),
}
