import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Slider from '@mui/material/Slider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LinearProgress from '@mui/material/LinearProgress'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Fab from '@mui/material/Fab'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
// Material UI Icons - Imports específicos para tree shaking
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { GovBRThemePreview } from './GovBRThemePreview'

const meta: Meta = {
  title: 'Documentação/Tema GovBR-DS Completo',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Tema GovBR-DS para Material-UI - Documentação Completa

Este é o tema customizado baseado no **Sistema de Design do Governo Federal (GovBR-DS)** 
para Material-UI v7. O tema foi desenvolvido para garantir conformidade total com as diretrizes 
visuais e de acessibilidade do governo federal brasileiro.

### Características Principais:

- **🎨 Paleta Oficial**: Cores semânticas do GovBR-DS
- **🔤 Tipografia**: Fontes Rawline e Raleway com escalas responsivas
- **♿ Acessibilidade**: Contrastes, foco dashed dourado, navegação por teclado
- **📱 Responsivo**: Breakpoints e espaçamentos otimizados
- **🎯 Interações**: Hover states, focus states e transições suaves
- **⚡ Performance**: Otimizado para carregamento rápido

### Instalação:
\`\`\`bash
npm install @anpd/shared-ui
\`\`\`

### Uso:
\`\`\`tsx
import { govbrTheme } from '@anpd/shared-ui'
import { ThemeProvider } from '@mui/material/styles'

<ThemeProvider theme={govbrTheme}>
  {/* sua aplicação */}
</ThemeProvider>
\`\`\`
        `,
      },
      page: () => <GovBRThemeDocumentation />,
    },
  },
}

export default meta

function GovBRThemeDocumentation() {
  const [tabValue, setTabValue] = React.useState(0)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [switchStates, setSwitchStates] = React.useState({
    basic: true,
    small: false,
    large: true,
    disabled: false,
  })
  const [sliderValue, setSliderValue] = React.useState(30)
  const [textFieldValue, setTextFieldValue] = React.useState('')
  const [radioValue, setRadioValue] = React.useState('option1')
  const [selectValue, setSelectValue] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [checkedItems, setCheckedItems] = React.useState({
    checkbox1: true,
    checkbox2: false,
    checkbox3: true,
  })

  return (
    <GovBRThemePreview>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box mb={4}>
          <Typography variant="h1" gutterBottom>
            Tema GovBR-DS para Material-UI
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Documentação completa dos componentes customizados com o Design System do Governo
            Federal
          </Typography>
        </Box>

        {/* Navigation Tabs */}
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}
        >
          <Tab label="Cores e Tipografia" />
          <Tab label="Formulários" />
          <Tab label="Navegação" />
          <Tab label="Feedback" />
          <Tab label="Dados" />
          <Tab label="Layout" />
        </Tabs>

        {/* Tab Content */}
        {tabValue === 0 && (
          <Stack spacing={4}>
            {/* Colors */}
            <Box>
              <Typography variant="h2" gutterBottom>
                Paleta de Cores
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: 2,
                  mb: 3,
                }}
              >
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ bgcolor: 'primary.main', height: 60, mb: 1, borderRadius: 1 }} />
                  <Typography variant="caption">
                    Primary
                    <br />
                    #1351B4
                  </Typography>
                </Card>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ bgcolor: 'secondary.main', height: 60, mb: 1, borderRadius: 1 }} />
                  <Typography variant="caption">
                    Secondary
                    <br />
                    #FFD200
                  </Typography>
                </Card>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ bgcolor: 'success.main', height: 60, mb: 1, borderRadius: 1 }} />
                  <Typography variant="caption">
                    Success
                    <br />
                    #168821
                  </Typography>
                </Card>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ bgcolor: 'warning.main', height: 60, mb: 1, borderRadius: 1 }} />
                  <Typography variant="caption">
                    Warning
                    <br />
                    #F29F05
                  </Typography>
                </Card>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ bgcolor: 'info.main', height: 60, mb: 1, borderRadius: 1 }} />
                  <Typography variant="caption">
                    Info
                    <br />
                    #007FA3
                  </Typography>
                </Card>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ bgcolor: 'error.main', height: 60, mb: 1, borderRadius: 1 }} />
                  <Typography variant="caption">
                    Error
                    <br />
                    #D04F4F
                  </Typography>
                </Card>
              </Box>

              <Typography variant="h4" gutterBottom>
                Variações dos Botões
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" gap={1} mb={3}>
                <Button variant="contained" color="primary">
                  Primary Contained
                </Button>
                <Button variant="outlined" color="primary">
                  Primary Outlined
                </Button>
                <Button variant="text" color="primary">
                  Primary Text
                </Button>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <Button variant="contained" color="warning">
                  Warning
                </Button>
                <Button variant="contained" color="info">
                  Info
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
              </Stack>

              <Typography variant="h4" gutterBottom>
                Tamanhos dos Botões
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                <Button size="small" variant="contained">
                  Small
                </Button>
                <Button size="medium" variant="contained">
                  Medium
                </Button>
                <Button size="large" variant="contained">
                  Large
                </Button>
                <Button disabled variant="contained">
                  Disabled
                </Button>
              </Stack>

              <Typography variant="h4" gutterBottom>
                Botões com Ícones
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" gap={1} mb={3}>
                <Button variant="contained" startIcon={<AddIcon />}>
                  Adicionar
                </Button>
                <Button variant="outlined" startIcon={<EditIcon />}>
                  Editar
                </Button>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                  Excluir
                </Button>
                <Button variant="contained" color="success" endIcon={<SaveIcon />}>
                  Salvar
                </Button>
                <IconButton color="primary">
                  <SettingsIcon />
                </IconButton>
                <IconButton color="secondary">
                  <PersonIcon />
                </IconButton>
                <Fab color="primary" size="small">
                  <AddIcon />
                </Fab>
                <Fab color="secondary">
                  <EditIcon />
                </Fab>
              </Stack>
            </Box>

            {/* Typography */}
            <Box>
              <Typography variant="h2" gutterBottom>
                Tipografia Responsiva
              </Typography>
              <Stack spacing={2}>
                <Typography variant="h1">H1 - Título Principal (Rawline)</Typography>
                <Typography variant="h2">H2 - Subtítulo Seção</Typography>
                <Typography variant="h3">H3 - Título de Subseção</Typography>
                <Typography variant="h4">H4 - Título de Componente</Typography>
                <Typography variant="h5">H5 - TÍTULO DESTACADO</Typography>
                <Typography variant="h6">H6 - MICRO TÍTULO</Typography>
                <Typography variant="body1">
                  Body1: Este é o texto padrão para parágrafos. Usa a fonte Raleway com peso regular
                  e line-height otimizado para leitura. Tem margem inferior automática conforme
                  padrão GovBR-DS.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Body2: Texto secundário menor para complementar informações ou legendas.
                </Typography>
                <Typography variant="caption" display="block">
                  Caption: Texto muito pequeno para metadados, timestamps, etc.
                </Typography>
                <Link href="#" underline="hover">
                  Link com hover effect
                </Link>
              </Stack>
            </Box>
          </Stack>
        )}

        {tabValue === 1 && (
          <Stack spacing={4}>
            {/* Form Controls */}
            <Typography variant="h2" gutterBottom>
              Controles de Formulário
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              <TextField
                fullWidth
                label="Campo de Texto"
                value={textFieldValue}
                onChange={e => setTextFieldValue(e.target.value)}
                placeholder="Digite aqui..."
                helperText="Texto de ajuda com bordas e foco dourado"
              />
              <TextField
                fullWidth
                label="Campo com Erro"
                error
                defaultValue="Valor inválido"
                helperText="Mensagem de erro em vermelho"
              />
              <TextField
                fullWidth
                label="Campo Desabilitado"
                disabled
                defaultValue="Não editável"
              />
              <TextField
                fullWidth
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  ),
                }}
              />
            </Box>

            <Typography variant="h4" gutterBottom>
              Checkboxes e Radios
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              <FormControl component="fieldset">
                <FormLabel component="legend">Checkboxes GovBR</FormLabel>
                <Stack>
                  {Object.entries(checkedItems).map(([key, checked]) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={e =>
                            setCheckedItems(prev => ({ ...prev, [key]: e.target.checked }))
                          }
                          color="primary"
                        />
                      }
                      label={`Opção ${key.slice(-1)}`}
                    />
                  ))}
                  <FormControlLabel control={<Checkbox disabled />} label="Opção desabilitada" />
                </Stack>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Radio Buttons</FormLabel>
                <RadioGroup value={radioValue} onChange={e => setRadioValue(e.target.value)}>
                  <FormControlLabel value="option1" control={<Radio />} label="Primeira opção" />
                  <FormControlLabel value="option2" control={<Radio />} label="Segunda opção" />
                  <FormControlLabel value="option3" control={<Radio />} label="Terceira opção" />
                  <FormControlLabel
                    value="disabled"
                    control={<Radio />}
                    label="Desabilitada"
                    disabled
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Typography variant="h4" gutterBottom>
              Switches e Sliders
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Switches GovBR-DS
                </Typography>
                <Stack spacing={2}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={switchStates.basic}
                        onChange={e =>
                          setSwitchStates(prev => ({ ...prev, basic: e.target.checked }))
                        }
                      />
                    }
                    label="Switch padrão (com ícones ✓/✗)"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={switchStates.small}
                        onChange={e =>
                          setSwitchStates(prev => ({ ...prev, small: e.target.checked }))
                        }
                      />
                    }
                    label="Switch pequeno"
                  />
                  <FormControlLabel
                    control={<Switch disabled checked={switchStates.disabled} />}
                    label="Switch desabilitado"
                  />
                </Stack>
              </Card>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Slider
                </Typography>
                <Slider
                  value={sliderValue}
                  onChange={(_, newValue) => setSliderValue(newValue as number)}
                  aria-labelledby="continuous-slider"
                  marks={[
                    { value: 0, label: '0%' },
                    { value: 50, label: '50%' },
                    { value: 100, label: '100%' },
                  ]}
                />
              </Card>
            </Box>

            <Typography variant="h4" gutterBottom>
              Select e Autocomplete
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              <FormControl fullWidth>
                <InputLabel>Selecione uma opção</InputLabel>
                <Select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                  <MenuItem value="br">Brasil</MenuItem>
                  <MenuItem value="ar">Argentina</MenuItem>
                  <MenuItem value="uy">Uruguai</MenuItem>
                  <MenuItem value="py">Paraguai</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        )}

        {tabValue === 2 && (
          <Stack spacing={4}>
            {/* Navigation */}
            <Typography variant="h2" gutterBottom>
              Navegação e Links
            </Typography>

            <Typography variant="h4" gutterBottom>
              AppBar com Toolbar
            </Typography>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Sistema ANPD
                </Typography>
                <Button color="inherit">Login</Button>
                <IconButton color="inherit">
                  <PersonIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Typography variant="h4" gutterBottom>
              Breadcrumbs
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="#" underline="hover">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Início
              </Link>
              <Link color="inherit" href="#" underline="hover">
                Documentação
              </Link>
              <Typography color="text.primary">Tema GovBR-DS</Typography>
            </Breadcrumbs>

            <Typography variant="h4" gutterBottom>
              Lista de Navegação
            </Typography>
            <List sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
              <ListItemButton selected>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Usuários" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Configurações" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Contato" secondary="contato@anpd.gov.br" />
              </ListItemButton>
            </List>

            <Typography variant="h4" gutterBottom>
              Stepper (Passos)
            </Typography>
            <Stepper activeStep={1} alternativeLabel>
              <Step>
                <StepLabel>Informações Básicas</StepLabel>
              </Step>
              <Step>
                <StepLabel>Documentos</StepLabel>
              </Step>
              <Step>
                <StepLabel>Revisão</StepLabel>
              </Step>
              <Step>
                <StepLabel>Finalização</StepLabel>
              </Step>
            </Stepper>
          </Stack>
        )}

        {tabValue === 3 && (
          <Stack spacing={4}>
            {/* Feedback */}
            <Typography variant="h2" gutterBottom>
              Feedback e Estados
            </Typography>

            <Typography variant="h4" gutterBottom>
              Alerts
            </Typography>
            <Stack spacing={2}>
              <Alert severity="success">Operação realizada com sucesso!</Alert>
              <Alert severity="info">Informação importante para o usuário.</Alert>
              <Alert severity="warning">Atenção: verifique os dados inseridos.</Alert>
              <Alert severity="error">Erro: não foi possível processar a solicitação.</Alert>
            </Stack>

            <Typography variant="h4" gutterBottom>
              Progress Indicators
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Linear Progress
                </Typography>
                <LinearProgress variant="determinate" value={65} sx={{ mb: 2 }} />
                <LinearProgress variant="indeterminate" sx={{ mb: 2 }} />
                <LinearProgress variant="buffer" value={75} valueBuffer={85} />
              </Card>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Circular Progress
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <CircularProgress variant="determinate" value={65} />
                  <CircularProgress />
                  <CircularProgress color="secondary" size={30} />
                </Stack>
              </Card>
            </Box>

            <Typography variant="h4" gutterBottom>
              Chips e Badges
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={3}>
              <Chip label="Ativo" color="success" />
              <Chip label="Pendente" color="warning" />
              <Chip label="Cancelado" color="error" />
              <Chip label="Em análise" color="info" />
              <Chip label="Deletável" onDelete={() => alert('Chip deletado')} color="primary" />
              <Badge badgeContent={4} color="error">
                <EmailIcon color="action" />
              </Badge>
              <Badge badgeContent="NEW" color="secondary">
                <Chip label="Novidade" />
              </Badge>
            </Stack>

            <Typography variant="h4" gutterBottom>
              Tooltips
            </Typography>
            <Stack direction="row" spacing={2}>
              <Tooltip title="Tooltip simples">
                <Button variant="outlined">Hover me</Button>
              </Tooltip>
              <Tooltip title="Tooltip com ícone" arrow>
                <IconButton color="primary">
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Tooltip com muito texto que quebra linha automaticamente conforme design system"
                placement="top"
                arrow
              >
                <Button variant="contained">Tooltip longo</Button>
              </Tooltip>
            </Stack>

            <Typography variant="h4" gutterBottom>
              Dialog Modal
            </Typography>
            <Button variant="contained" onClick={() => setDialogOpen(true)}>
              Abrir Modal
            </Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
              <DialogTitle>Modal do GovBR-DS</DialogTitle>
              <DialogContent>
                <Typography paragraph>
                  Este é um exemplo de modal seguindo as diretrizes do Design System Governamental.
                  Os modais devem ser usados para ações importantes que requerem atenção do usuário.
                </Typography>
                <TextField fullWidth label="Campo no modal" margin="dense" />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setDialogOpen(false)} color="secondary">
                  Cancelar
                </Button>
                <Button onClick={() => setDialogOpen(false)} variant="contained">
                  Confirmar
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        )}

        {tabValue === 4 && (
          <Stack spacing={4}>
            {/* Data Display */}
            <Typography variant="h2" gutterBottom>
              Exibição de Dados
            </Typography>

            <Typography variant="h4" gutterBottom>
              Tabela Completa
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { nome: 'João Silva', email: 'joao@anpd.gov.br', status: 'Ativo' },
                    { nome: 'Maria Santos', email: 'maria@anpd.gov.br', status: 'Pendente' },
                    { nome: 'Pedro Lima', email: 'pedro@anpd.gov.br', status: 'Inativo' },
                  ].map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell>{row.nome}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          color={
                            row.status === 'Ativo'
                              ? 'success'
                              : row.status === 'Pendente'
                                ? 'warning'
                                : 'error'
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton size="small" color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h4" gutterBottom>
              Cards e Avatars
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 3,
              }}
            >
              {[
                { nome: 'Ana Costa', cargo: 'Diretora', avatar: 'A', cor: 'primary' },
                { nome: 'Bruno Silva', cargo: 'Coordenador', avatar: 'B', cor: 'secondary' },
                { nome: 'Carla Lima', cargo: 'Analista', avatar: 'C', cor: 'success' },
              ].map((pessoa, index) => (
                <Card key={index}>
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: `${pessoa.cor}.main`,
                        width: 56,
                        height: 56,
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {pessoa.avatar}
                    </Avatar>
                    <Typography variant="h6">{pessoa.nome}</Typography>
                    <Typography color="text.secondary" gutterBottom>
                      {pessoa.cargo}
                    </Typography>
                    <Stack direction="row" justifyContent="center" spacing={1}>
                      <IconButton size="small">
                        <EmailIcon />
                      </IconButton>
                      <IconButton size="small">
                        <PhoneIcon />
                      </IconButton>
                    </Stack>
                  </Box>
                </Card>
              ))}
            </Box>

            <Typography variant="h4" gutterBottom>
              Accordion (Expansível)
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Seção 1 - Informações Gerais</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Conteúdo da primeira seção. Aqui podem ir informações detalhadas, formulários, ou
                  qualquer outro conteúdo relevante.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Seção 2 - Configurações Avançadas</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Segunda seção com configurações mais específicas do sistema.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        )}

        {tabValue === 5 && (
          <Stack spacing={4}>
            {/* Layout */}
            <Typography variant="h2" gutterBottom>
              Layout e Espaçamento
            </Typography>

            <Typography variant="h4" gutterBottom>
              Grid System
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: 2,
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
                <Paper
                  key={item}
                  sx={{ p: 1, textAlign: 'center', bgcolor: 'primary.light', color: 'white' }}
                >
                  {item}
                </Paper>
              ))}
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 3,
                mt: 2,
              }}
            >
              <Paper sx={{ p: 2, textAlign: 'center' }}>xs=12 sm=6 md=4</Paper>
              <Paper sx={{ p: 2, textAlign: 'center' }}>xs=12 sm=6 md=4</Paper>
              <Paper sx={{ p: 2, textAlign: 'center' }}>xs=12 sm=12 md=4</Paper>
            </Box>

            <Typography variant="h4" gutterBottom>
              Dividers e Separadores
            </Typography>
            <Stack spacing={2}>
              <Typography>Conteúdo acima do divisor padrão</Typography>
              <Divider />
              <Typography>Conteúdo entre divisores</Typography>
              <Divider variant="middle" />
              <Typography>Divisor tracejado abaixo:</Typography>
              <Divider sx={{ borderStyle: 'dashed' }} />
              <Typography>Final da seção</Typography>
            </Stack>

            <Typography variant="h4" gutterBottom>
              Spacing e Box Model
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ p: 2, bgcolor: 'grey.100', border: 1, borderColor: 'grey.300' }}>
                <Typography>Box com padding 2 (16px)</Typography>
              </Box>
              <Box sx={{ p: 4, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <Typography>Box com padding 4 (32px)</Typography>
              </Box>
              <Box sx={{ m: 2, p: 3, bgcolor: 'secondary.light', borderRadius: 2 }}>
                <Typography>Box com margin 2 + padding 3 + borderRadius</Typography>
              </Box>
            </Stack>

            <Typography variant="h4" gutterBottom>
              Speed Dial (FAB)
            </Typography>
            <Box sx={{ position: 'relative', height: 200 }}>
              <SpeedDial
                ariaLabel="SpeedDial example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
              >
                <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copiar" />
                <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Salvar" />
                <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Imprimir" />
                <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Compartilhar" />
              </SpeedDial>
            </Box>
          </Stack>
        )}
      </Container>
    </GovBRThemePreview>
  )
}

// Stories individuais para cada seção
export const ColorsAndTypography: StoryObj = {
  render: () => (
    <GovBRThemePreview>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          Cores e Tipografia
        </Typography>

        {/* Cores */}
        <Typography variant="h4" gutterBottom>
          Paleta de Cores
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: 'repeat(6, 1fr)' },
            gap: 2,
            mb: 4,
          }}
        >
          {[
            { color: 'primary', name: 'Primary', hex: '#1351B4' },
            { color: 'secondary', name: 'Secondary', hex: '#FFD200' },
            { color: 'success', name: 'Success', hex: '#168821' },
            { color: 'warning', name: 'Warning', hex: '#F29F05' },
            { color: 'info', name: 'Info', hex: '#007FA3' },
            { color: 'error', name: 'Error', hex: '#D04F4F' },
          ].map(({ color, name, hex }) => (
            <Card key={color} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  bgcolor: `${color}.main`,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: `${color}.contrastText`, fontWeight: 'bold' }}
                >
                  {name}
                </Typography>
              </Box>
              <Box sx={{ p: 1 }}>
                <Typography variant="caption" display="block">
                  {hex}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Tipografia */}
        <Typography variant="h4" gutterBottom>
          Hierarquia Tipográfica
        </Typography>
        <Stack spacing={3}>
          <Typography variant="h1">H1 - Título Principal (responsivo)</Typography>
          <Typography variant="h2">H2 - Subtítulo de Seção</Typography>
          <Typography variant="h3">H3 - Título de Subseção</Typography>
          <Typography variant="h4">H4 - Título de Componente</Typography>
          <Typography variant="h5">H5 - TÍTULO DESTACADO (UPPERCASE)</Typography>
          <Typography variant="h6">H6 - MICRO TÍTULO (UPPERCASE)</Typography>
          <Typography variant="body1">
            Body1 - Texto principal com fonte Raleway, adequado para parágrafos longos e conteúdo
            principal. Este texto demonstra o line-height e espaçamento otimizados para leitura.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Body2 - Texto secundário menor, usado para informações complementares.
          </Typography>
          <Typography variant="caption">
            Caption - Texto pequeno para metadados, legendas e informações auxiliares.
          </Typography>
        </Stack>
      </Container>
    </GovBRThemePreview>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra a paleta de cores oficial do GovBR-DS e a hierarquia tipográfica responsiva.',
      },
    },
  },
}

export const FormControls: StoryObj = {
  render: () => {
    const [values, setValues] = React.useState({
      text: '',
      email: 'exemplo@anpd.gov.br',
      password: '',
      select: 'br',
      radio: 'option1',
      checkbox1: true,
      checkbox2: false,
      switch1: true,
      slider: 50,
    })

    return (
      <GovBRThemePreview>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h2" gutterBottom>
            Controles de Formulário
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
            }}
          >
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Campo de Texto"
                value={values.text}
                onChange={e => setValues(prev => ({ ...prev, text: e.target.value }))}
                placeholder="Digite aqui..."
              />

              <TextField
                fullWidth
                label="E-mail"
                type="email"
                value={values.email}
                onChange={e => setValues(prev => ({ ...prev, email: e.target.value }))}
              />

              <TextField
                fullWidth
                label="Senha"
                type="password"
                value={values.password}
                onChange={e => setValues(prev => ({ ...prev, password: e.target.value }))}
              />

              <TextField
                fullWidth
                label="Campo com Erro"
                error
                defaultValue="Valor inválido"
                helperText="Esta é uma mensagem de erro"
              />

              <FormControl fullWidth>
                <InputLabel>País</InputLabel>
                <Select
                  value={values.select}
                  onChange={e => setValues(prev => ({ ...prev, select: e.target.value }))}
                >
                  <MenuItem value="br">Brasil</MenuItem>
                  <MenuItem value="ar">Argentina</MenuItem>
                  <MenuItem value="uy">Uruguai</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack spacing={3}>
              <FormControl component="fieldset">
                <FormLabel>Opções de Radio</FormLabel>
                <RadioGroup
                  value={values.radio}
                  onChange={e => setValues(prev => ({ ...prev, radio: e.target.value }))}
                >
                  <FormControlLabel value="option1" control={<Radio />} label="Primeira opção" />
                  <FormControlLabel value="option2" control={<Radio />} label="Segunda opção" />
                  <FormControlLabel value="option3" control={<Radio />} label="Terceira opção" />
                </RadioGroup>
              </FormControl>

              <Box>
                <FormLabel>Checkboxes</FormLabel>
                <Stack>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.checkbox1}
                        onChange={e =>
                          setValues(prev => ({ ...prev, checkbox1: e.target.checked }))
                        }
                      />
                    }
                    label="Primeira opção"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.checkbox2}
                        onChange={e =>
                          setValues(prev => ({ ...prev, checkbox2: e.target.checked }))
                        }
                      />
                    }
                    label="Segunda opção"
                  />
                </Stack>
              </Box>

              <FormControlLabel
                control={
                  <Switch
                    checked={values.switch1}
                    onChange={e => setValues(prev => ({ ...prev, switch1: e.target.checked }))}
                  />
                }
                label="Switch com ícones ✓/✗"
              />

              <Box>
                <FormLabel>Slider: {values.slider}%</FormLabel>
                <Slider
                  value={values.slider}
                  onChange={(_, newValue) =>
                    setValues(prev => ({ ...prev, slider: newValue as number }))
                  }
                  marks={[
                    { value: 0, label: '0%' },
                    { value: 50, label: '50%' },
                    { value: 100, label: '100%' },
                  ]}
                />
              </Box>
            </Stack>
          </Box>
        </Container>
      </GovBRThemePreview>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra todos os controles de formulário com estilos GovBR-DS, incluindo foco dourado e estados de erro.',
      },
    },
  },
}

export const DataDisplay: StoryObj = {
  render: () => (
    <GovBRThemePreview>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          Exibição de Dados
        </Typography>

        <Typography variant="h4" gutterBottom>
          Tabela com Hover
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Usuário</TableCell>
                <TableCell>Departamento</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { nome: 'Ana Silva', depto: 'TI', status: 'Ativo', cor: 'success' as const },
                { nome: 'Bruno Costa', depto: 'RH', status: 'Pendente', cor: 'warning' as const },
                {
                  nome: 'Carla Santos',
                  depto: 'Financeiro',
                  status: 'Inativo',
                  cor: 'error' as const,
                },
              ].map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar>{row.nome.charAt(0)}</Avatar>
                      <Typography>{row.nome}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.depto}</TableCell>
                  <TableCell>
                    <Chip label={row.status} color={row.cor} size="small" />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h4" gutterBottom>
          Cards e Progress
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          <Card>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Progresso Linear
              </Typography>
              <LinearProgress variant="determinate" value={75} sx={{ mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                75% concluído
              </Typography>
            </Box>
          </Card>
          <Card>
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <CircularProgress variant="determinate" value={60} size={60} sx={{ mb: 2 }} />
              <Typography variant="h6">60%</Typography>
              <Typography variant="body2" color="text.secondary">
                Meta atingida
              </Typography>
            </Box>
          </Card>
        </Box>
      </Container>
    </GovBRThemePreview>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra componentes de exibição de dados como tabelas com hover, progress indicators e cards.',
      },
    },
  },
}

// Story principal (documentação completa)
export const DocumentacaoCompleta: StoryObj = {
  render: () => <GovBRThemeDocumentation />,
  parameters: {
    docs: {
      description: {
        story:
          'Documentação completa e interativa do tema GovBR-DS com todos os componentes Material-UI customizados.',
      },
    },
  },
}
