# Guia de Arquitetura para a anpd/shared-ui

Este documento descreve os padrões de arquitetura e as melhores práticas para o desenvolvimento de componentes na biblioteca `shared-ui` da ANPD. O objetivo é garantir consistência, manutenibilidade e evitar os conflitos de estilo que motivaram a criação deste guia.

> **Nota para Iniciantes:** Uma biblioteca de componentes compartilhada (`shared-ui`) é um projeto central que cria componentes de interface (botões, cards, etc.) uma única vez. Outros projetos da ANPD (como o `backlog-dim`) podem então usar esses componentes prontos, garantindo que a aparência e o comportamento da interface sejam consistentes em todas as aplicações.

## O Problema Original: Conflito de Estilos

A causa raiz dos problemas que enfrentamos foi um conflito entre duas metodologias de estilização:

1.  **O sistema de temas do Material-UI (MUI):** Altamente específico e baseado em CSS-in-JS.
2.  **O sistema de classes do Gov.br Design System (DS):** Baseado em classes CSS globais (ex: `.br-button`).

A tentativa de aplicar classes CSS do Gov.br DS em um componente MUI que já estava sendo estilizado pelo tema do MUI resultou em uma "guerra de especificidade", onde os estilos do tema sempre venciam, causando uma aparência quebrada ou inconsistente.

> **Nota Didática: Por que o Tema MUI Vence a "Guerra"?**
> O MUI usa uma técnica chamada CSS-in-JS. Em vez de você escrever CSS, você escreve objetos JavaScript. Em tempo de execução, o MUI converte isso em CSS e o injeta diretamente na página. Esse CSS injetado é extremamente específico (ex: nomes de classe gerados aleatoriamente como `.css-1a2b3c-MuiButton-root`). Uma classe CSS global simples como `.br-button` em um arquivo externo quase sempre perde para essas classes super específicas geradas dinamicamente. Por isso, tentar misturar os dois no mesmo elemento causa problemas.

## A Solução: A Arquitetura Híbrida

Para resolver isso, adotamos uma arquitetura de **modo duplo** para nossos componentes. Cada componente na `shared-ui` pode operar de duas maneiras, controladas pela propriedade `strictgovbr`.

### Princípio 1: Modo Padrão (MUI Theme) - `strictgovbr={false}` (default)

Este é o modo de operação principal e preferencial.

- **Como funciona:** O componente (ex: `GovBRButton`) renderiza o componente correspondente do MUI (ex: `<Button>`). A estilização é **inteiramente controlada pelo `govbrTheme.ts`** através da propriedade `styleOverrides`.
- **Vantagens:** Permite o uso de todo o poder e flexibilidade do sistema de temas do MUI, incluindo props como `variant`, `color`, `size`, etc. É a abordagem mais robusta e manutenível.
- **Responsabilidade do Componente:** O componente em si é "burro". Ele não contém lógica de estilo. Ele apenas repassa as propriedades para o componente MUI subjacente.

> **Nota Didática: O que é um Componente "Burro" (Dumb Component)?**
> É um conceito de design onde o componente não sabe como ele se parece. Sua única responsabilidade é receber propriedades (props) e passá-las para outro componente. Toda a lógica de aparência (estilo) é controlada externamente, neste caso, pelo `govbrTheme`. Isso torna o componente muito previsível e fácil de manter.

```tsx
// Exemplo de uso no modo padrão
<GovBRButton variant="contained" color="primary">
  Meu Botão
</GovBRButton>
```

### Princípio 2: Modo Estrito (Pure CSS) - `strictgovbr={true}`

Este modo é uma "válvula de escape" para garantir 100% de fidelidade visual ao Gov.br DS quando necessário.

- **Como funciona:** O componente (ex: `GovBRButton`) detecta a prop `strictgovbr` e renderiza um **elemento HTML padrão** (ex: `<button>`), não um componente MUI.
- **Vantagens:** Evita completamente o motor de estilos do MUI, eliminando qualquer conflito. O resultado é exatamente o que o CSS do Gov.br DS dita.
- **Responsabilidade do Componente:** O componente precisa mapear suas propriedades para as classes CSS corretas (ex: `inverted={true}` vira a classe `.inverted`).

> **Nota Didática: Por que renderizar um `<button>` HTML resolve o conflito?**
> Ao renderizar um elemento HTML simples, o motor de estilos do MUI não é ativado para aquele elemento. Não há `styleOverrides` ou classes CSS-in-JS sendo injetadas. O elemento fica "limpo", pronto para ser estilizado puramente pelas classes CSS globais do Gov.br DS que passamos para ele. É a forma de dizer: "MUI, não se envolva com este aqui".

```tsx
// Exemplo de uso no modo estrito
<GovBRButton strictgovbr inverted>
  Meu Botão
</GovBRButton>
```

---

## Estratégias de Estilização em Detalhe

Para construir uma biblioteca de alta qualidade, é crucial entender as melhores formas de implementar os estilos.

### 1. O Desafio: Mapeando o Gov.br-DS para o Tema MUI

Não existe uma ferramenta "mágica" para converter automaticamente o CSS do Gov.br para um tema MUI. O processo é manual porque as arquiteturas são diferentes.

- **Gov.br DS** aplica estilos a classes CSS em uma estrutura HTML específica (ex: `<button class="br-button primary">`).
- **MUI** aplica estilos a "slots" internos de seus componentes (ex: o slot `root` de um `MuiButton`) com base em props do React (ex: `color="primary"`).

O trabalho de desenvolvimento é, portanto, um **mapeamento manual**: decidir em qual "slot" do componente MUI devemos aplicar qual estilo do Gov.br.

> **Nota Didática: O que são "Slots" do MUI?**
> Pense em um componente MUI como uma boneca russa. O `MuiButton`, por exemplo, não é uma coisa só. Ele tem uma parte principal (o `root`), uma parte para o texto (`label`), e pode ter partes para ícones (`startIcon`, `endIcon`). Cada uma dessas partes é um "slot" que pode ser estilizado individualmente no tema.

### 2. A Melhor Abordagem: Mapeamento de Variáveis CSS (Tokens)

Esta é a abordagem **fortemente recomendada** para manter o tema sincronizado com o Gov.br DS. Ela combina o melhor dos dois mundos.

#### O "Automático" vs. o "Manual"

- **O que é "Automático":** O arquivo `core-tokens.min.css` do Gov.br DS nos dá os **valores** de design (cores, fontes, espaçamentos) em forma de variáveis CSS. Ao usar `var(--nome-da-variavel)`, garantimos que nosso componente sempre usará o valor atualizado e correto, de forma automática.
- **O que é "Manual":** O nosso trabalho é decidir **onde** aplicar essas variáveis. Precisamos mapear os valores (os tokens) à **estrutura** do componente MUI. É um trabalho de arquitetura, não de repetição.

> **Nota Didática: O que são "Tokens de Design"?**
> Um token é uma decisão de design transformada em uma variável. Em vez de dizer "a cor é `#1351B4`", você diz "a cor é a `cor interativa primária`". Essa decisão é armazenada em um token (a variável `--interactive`). Se a ANPD decidir mudar a cor primária no futuro, basta mudar o valor do token em um lugar, e todos os componentes que o usam serão atualizados automaticamente. É a base de um design system escalável.

#### Como Descobrir os Nomes das Variáveis

1.  **Use o DevTools do Navegador (Método Preferido):**
    - Abra a documentação do Gov.br DS e inspecione o componente que deseja replicar.
    - Na aba "Styles", observe as regras CSS. Você verá claramente o nome da variável sendo usada, por exemplo: `background-color: var(--interactive-light);`.
2.  **Consulte o Arquivo Fonte:** Alternativamente, abra `node_modules/@govbr-ds/core/dist/core-tokens.min.css` no seu editor para ver a lista completa de todas as variáveis disponíveis.

#### O Fluxo de Trabalho na Prática (Exemplo: Mapeando um Card)

1.  **Descobrir:** Inspecionando um `.br-card` na documentação do Gov.br, você nota que ele usa `background-color: var(--background);` e `box-shadow: var(--surface-shadow-sm);`.
2.  **Mapear:** No seu `govbrTheme.ts`, você cria a entrada para `MuiCard` e aplica as variáveis aos locais corretos da estrutura do MUI.

        ```javascript
        // em govbrTheme.ts
        MuiCard: {
          styleOverrides: {
            root: { // Onde aplicar? No elemento raiz (root) do MuiCard.
              backgroundColor: 'var(--background)',
              boxShadow: 'var(--surface-shadow-sm)',
            }
          }
        }
        ```

    Este mapeamento é um trabalho feito uma única vez por componente, que garante manutenibilidade e consistência a longo prazo.

### 3. Mapeamento Correto de Props para `className` no Modo `strictgovbr`

No modo estrito, precisamos converter as props do React em uma string de classes CSS. A biblioteca `classnames` é a ferramenta ideal para isso.

> **Nota Didática: Para que serve a biblioteca `classnames`?**
> Ela é uma pequena ferramenta que facilita a construção de uma string de `className` a partir de condições. Em vez de escrever lógicas complexas com `if/else` para montar a string, você passa um objeto onde as chaves são os nomes das classes e os valores são as condições (verdadeiro ou falso) para aplicá-las. Torna o código muito mais limpo.

**O Padrão de Implementação:**

```javascript
import classNames from 'classnames'

// Dentro da lógica do modo estrito do componente
const { color, size, inverted, fullWidth, className } = props

const finalClassName = classNames(
  'br-button', // 1. Sempre inclua a classe base do componente.
  className, // 2. Repasse qualquer `className` que venha de fora.

  // 3. Use um objeto para classes condicionais.
  {
    // 'nome-da-classe': condição-para-aplicar
    inverted: inverted,
    large: size === 'large',
    small: size === 'small',
    block: fullWidth, // Mapeia a prop do MUI para a classe do Gov.br
    primary: color === 'primary' && !inverted, // Condições podem ser mais complexas
    secondary: color === 'secondary' && !inverted,
  },
)
```

Este padrão garante que a lógica de classes seja limpa, legível e extensível.

---

## Como Adicionar Novos Componentes Corretamente

Siga estes passos para criar novos componentes para a biblioteca:

### Passo 1: Adicionar Estilos ao Tema (`govbrTheme.ts`)

Esta é a etapa mais importante. O objetivo é fazer o componente do MUI se parecer com o do Gov.br DS.

1.  Abra o arquivo `src/theme/govbrTheme.ts`.
2.  Na seção `components`, adicione uma nova entrada para o componente MUI que você está envolvendo (ex: `MuiCard`, `MuiTextField`).
3.  Use a chave `styleOverrides` para customizar a aparência do componente e de seus elementos internos. Consulte a documentação do Gov.br DS e do MUI para saber quais estilos aplicar.

### Passo 2: Criar o Componente Wrapper

1.  Crie a estrutura de arquivos do seu componente (ex: `src/components/ui/govbr-novo-componente/`).
2.  Crie o arquivo `index.tsx`. A implementação deve seguir o padrão de modo duplo.

    > **Nota:** Comece simples. Faça o modo padrão (MUI) funcionar primeiro. Adicione o modo `strictgovbr` apenas se houver uma necessidade real de 100% de fidelidade ao CSS do Gov.br para aquele componente.

### Passo 3: Atualizar os Tipos e Exportações

1.  Defina a interface de `Props` no arquivo `types.ts` do seu componente, estendendo as props do MUI e adicionando as suas.
2.  Exporte seu novo componente a partir do `src/components/index.ts` e do `src/index.ts` principal da biblioteca.

Seguindo este guia, garantimos que a `shared-ui` crescerá de forma coesa, poderosa e livre de conflitos de estilo.

---

## Além dos Wrappers: Componentes e Lógicas Customizadas da ANPD

Uma biblioteca compartilhada não vive apenas de wrappers. Seu maior valor está em centralizar código que é reutilizável em múltiplos projetos da ANPD. Isso inclui componentes complexos, layouts e hooks.

### 1. Criando Componentes Customizados (Específicos da ANPD)

Frequentemente, precisaremos de componentes que não existem no Gov.br DS nem no MUI (como o seu `auto-sync`).

**A Abordagem Correta:**

Sua abordagem de tentar seguir os princípios de design e cores do sistema existente foi a ideal. O objetivo é que, mesmo sendo um componente customizado, ele **pareça pertencer** ao mesmo ecossistema visual.

**Guia de Implementação:**

1.  **Construa com Primitivas:** Monte seu componente customizado usando os componentes básicos do MUI (`<Paper>`, `<Box>`, `<Typography>`) ou outros componentes já existentes na `shared-ui` (como o `GovBRButton`). Ao fazer isso, seu componente herdará automaticamente a maior parte do estilo do `govbrTheme`.

2.  **Estilize com o Tema:** Para estilos específicos do seu componente, use a prop `sx`. Mas, em vez de fixar valores (ex: `color: '#FFF'`), **acesse o tema** para buscar os tokens de design. Isso mantém a consistência.

    ```tsx
    // Ruim: Cor fixa, não respeita o tema
    <Box sx={{ backgroundColor: '#1351B4' }}>

    // Excelente: Usa um valor da paleta do tema
    <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
    ```

3.  **Sem Modo Estrito:** Como você corretamente presumiu, **componentes customizados não têm um modo `strictgovbr`**. Essa prop é exclusiva para componentes que são wrappers diretos de um equivalente no CSS do Gov.br DS.

### 2. Adicionando Hooks Customizados

A `shared-ui` é o local perfeito para hooks que encapsulam lógicas reutilizáveis entre os projetos da ANPD.

**Exemplos:**

- `useApiAnpd`: Um hook que centraliza chamadas para uma API específica da ANPD, tratando autenticação e erros.
- `useUsuarioLogado`: Um hook que busca e provê os dados do usuário logado.
- `useFeatureToggle`: Um hook que verifica se uma determinada funcionalidade está ativa no ambiente.

**Guia de Implementação:**

1.  **Localização:** Crie um diretório `src/hooks` para organizar os hooks.
2.  **Documentação:** Documente claramente o que o hook faz, quais seus parâmetros e o que ele retorna, usando JSDoc.
3.  **Exportação:** Exporte o hook a partir do `src/index.ts` da biblioteca para que os projetos consumidores possam importá-lo.

### 3. Movendo Componentes de Layout Reutilizáveis

Seu projeto `backlog-dim` provavelmente tem componentes de layout (cabeçalhos, sidebars, estruturas de página com grid) que seriam úteis em outros sistemas.

**O Processo de Migração:**

1.  **Identifique:** Encontre um componente de layout no projeto consumidor que possa ser reutilizado.
2.  **Generalize:** O passo mais importante. Remova qualquer lógica ou texto que seja específico do projeto original. Transforme esses dados específicos em `props`.

    _Exemplo:_ Em vez de um cabeçalho com o título fixo "Backlog DIM", crie um componente `<PageHeader>` que aceita uma prop `title`.

    ```tsx
    // Antes (no backlog-dim)
    function Header() {
      return <h1>Backlog DIM</h1>
    }

    // Depois (na shared-ui)
    function PageHeader({ title, children }) {
      return (
        <header>
          <h1>{title}</h1>
          <div>{children}</div>
        </header>
      )
    }
    ```

3.  **Reloque:** Mova os arquivos do componente generalizado para um novo diretório na `shared-ui`, como `src/components/layouts/`.
4.  **Estilize com o Tema:** Garanta que todos os elementos dentro do layout usem o `govbrTheme`.
5.  **Exporte:** Adicione o novo componente de layout ao `src/index.ts` da biblioteca.
