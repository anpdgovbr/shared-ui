// ===== EXEMPLOS DE USO - COMPONENTES PADRONIZADOS =====
// Demonstra o uso dos componentes reestruturados seguindo o novo padrão shadcn/ui
// Todos os componentes agora seguem kebab-case e exportação nomeada para tree-shaking

// Import centralizado de todos os componentes (permite tree-shaking automático)
import {
  AutoSync,
  GovBRAvatar,
  GovBRBreadcrumb,
  GovBRButton,
  GovBRCheckbox,
  GovBRFormCheckbox,
  GovBRFormInput,
  GovBRInput,
  GovBRRadio,
  GovBRSignIn,
} from '@anpdgovbr/shared-ui'

// Exemplo completo usando componentes reestruturados
export function ExamplePage() {
  // Dados de exemplo para o breadcrumb
  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: 'Cidadão', href: '/cidadao' },
    { label: 'Consultas', href: '/cidadao/consultas' },
    { label: 'Resultado' }, // Página atual (sem href)
  ]

  return (
    <div className="gov-page">
      {/* Header com navegação */}
      <header className="header">
        <div className="header-content">
          <h1>Sistema ANPD</h1>

          {/* Avatar do usuário (modo estrito para demonstrar density e letter) */}
          <GovBRAvatar strictgovbr density="medium" tooltip="João Silva" className="">
            JS
          </GovBRAvatar>

          {/* Componente de sincronização automática */}
          <AutoSync
            onSync={async () => console.log('Sincronizando...')}
            resetTrigger={null}
            size="small"
          />
        </div>
      </header>

      {/* Navegação estrutural */}
      <nav className="breadcrumb-nav">
        <GovBRBreadcrumb
          strictgovbr
          links={breadcrumbItems.map((it) => ({ url: it.href ?? '#', label: it.label }))}
          className=""
        />
      </nav>

      {/* Conteúdo principal */}
      <main className="main-content">
        <section className="content-section">
          <h2>Consulta de Dados Pessoais</h2>

          {/* Formulário com componentes padronizados */}
          <form className="gov-form">
            {/* Input padrão */}
            <GovBRInput
              strictgovbr
              id="nome"
              label="Nome completo"
              placeholder="Digite seu nome completo"
              govbrSize="medium"
              clearBlock="md"
              inline={false}
            />

            {/* Checkboxes */}
            <GovBRCheckbox
              id="terms"
              label="Li e aceito os termos de uso"
              className=""
              disabled={false}
            />

            <GovBRCheckbox
              id="newsletter"
              label="Desejo receber informações por email"
              className=""
              disabled={false}
            />

            {/* Radio buttons */}
            <fieldset className="radio-group">
              <legend>Gênero:</legend>
              <GovBRRadio
                name="gender"
                value="M"
                label="Masculino"
                disabled={false}
                checked={false}
                onChange={() => {}}
              />
              <GovBRRadio
                name="gender"
                value="F"
                label="Feminino"
                disabled={false}
                checked={false}
                onChange={() => {}}
              />
            </fieldset>

            {/* Botões de ação */}
            <div className="form-actions">
              <GovBRButton
                color="primary"
                type="submit"
                size="large"
                circle={false}
                inverted={false}
                loading={false}
                clearBlock="md"
                className=""
                sx={{}}
              >
                Consultar Dados
              </GovBRButton>

              <GovBRButton
                color="secondary"
                variant="outlined"
                type="button"
                circle={false}
                inverted={false}
                loading={false}
                clearBlock="md"
                className=""
                sx={{}}
              >
                Limpar Formulário
              </GovBRButton>
            </div>

            {/* Componente de login */}
            <GovBRSignIn onClick={() => console.log('Entrar com gov.br')} className="" />
          </form>
        </section>
      </main>
    </div>
  )
}

// ===== EXEMPLO COM REACT HOOK FORM =====
// Demonstra integração com formulários controlados
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  terms: boolean
}

export function ReactHookFormExample() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      terms: false,
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Formulário com React Hook Form</h2>

      <GovBRFormInput
        name="name"
        control={control}
        label="Nome completo"
        placeholder="Digite seu nome"
        rules={{ required: 'Nome é obrigatório' }}
        required
      />

      <GovBRFormInput
        name="email"
        control={control}
        label="Email"
        placeholder="Digite seu email"
        type="email"
        rules={{
          required: 'Email é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email inválido',
          },
        }}
        required
      />

      <GovBRFormCheckbox
        name="terms"
        control={control}
        label="Li e aceito os termos de uso"
        rules={{ required: 'Você deve aceitar os termos' }}
        required
      />

      <GovBRButton
        type="submit"
        color="primary"
        circle={false}
        inverted={false}
        loading={false}
        clearBlock="md"
        className=""
        sx={{}}
      >
        Enviar Formulário
      </GovBRButton>
    </form>
  )
}
