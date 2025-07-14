# 📦 shared-ui

> Biblioteca de componentes React com MUI v7 e padrão govbr-ds para a ANPD.

---

## 🚀 Sobre o Projeto

O `shared-ui` é uma biblioteca de componentes de interface de usuário (UI) modular e escalável, construída para padronizar e acelerar o desenvolvimento de aplicações front-end na Autoridade Nacional de Proteção de Dados (ANPD).

### ✨ Principais Características

- **Baseado em React 19+**: Utiliza os recursos mais recentes do React.
- **MUI v7**: Construído sobre o Material-UI para garantir consistência visual e acessibilidade.
- **Padrão GovBR-DS**: Inspirado nos princípios do Design System do Governo Federal.
- **TypeScript**: Totalmente tipado para um desenvolvimento mais seguro e robusto.
- **Testado**: Cobertura de testes com Vitest e Playwright.
- **Documentado com Storybook**: Componentes visualizáveis e documentados interativamente.

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **Material-UI (MUI)**
- **TypeScript**
- **Storybook**
- **Vite**
- **Vitest**
- **ESLint**
- **Prettier**
- **React Hook Form**

---

## 🏁 Começando

Siga estas instruções para configurar o ambiente de desenvolvimento local.

### Pré-requisitos

- Node.js (versão 20 ou superior)
- npm (versão 10 ou superior)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone git@github.com:anpdgovbr/shared-ui.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd shared-ui
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando o Storybook

Para visualizar e interagir com os componentes, inicie o Storybook:

```bash
npm run storybook
```

O Storybook estará disponível em `http://localhost:6006`.

---

## 🏗️ Estrutura de Componentes

A estrutura de componentes segue um padrão organizado para escalabilidade:

```
src/
├── components/
│   ├── GovBRAvatar/
│   ├── GovBRBreadcrumb/
│   ├── GovBRButton/
│   ├── GovBRCheckbox/
│   ├── GovBRFormCheckbox/
│   ├── GovBRFormInput/
│   ├── GovBRInput/
│   └── GovBRSignIn/
└── index.ts
```

---

## 📚 Como Usar

### Instalação em seu Projeto

Atualmente, a instalação é feita via Git. Futuramente, será disponibilizada no npm.

```bash
npm install git+ssh://git@github.com:anpdgovbr/shared-ui.git
```

### Exemplo de Uso

```tsx
import { GovBRButton } from '@anpdgovbr/shared-ui'

function MyComponent() {
  return <GovBRButton>Clique Aqui</GovBRButton>
}
```

Para componentes de formulário, utilize com `react-hook-form`:

```tsx
import { useForm } from 'react-hook-form'
import { GovBRFormInput } from '@anpdgovbr/shared-ui'

function MyForm() {
  const { control } = useForm()

  return <GovBRFormInput name="meuInput" control={control} label="Meu Input" />
}
```

> **Nota:** O projeto que consome a biblioteca deve ter `react`, `react-dom`, `@mui/material`, `@mui/icons-material` e `react-hook-form` como dependências, conforme definido em `peerDependencies`.

---

## 🔧 Scripts Disponíveis

| Script                    | Descrição                                     |
| ------------------------- | --------------------------------------------- |
| `npm run dev`             | Inicia o Storybook para desenvolvimento.      |
| `npm run build`           | Compila a biblioteca para produção (`dist/`). |
| `npm run storybook`       | Inicia o Storybook em `localhost:6006`.       |
| `npm run build-storybook` | Gera a versão estática do Storybook.          |
| `npm run test`            | Executa os testes com Vitest.                 |
| `npm run lint`            | Analisa o código com ESLint.                  |
| `npm run format`          | Formata o código com Prettier.                |

---

## 📝 Roadmap

- [ ] Suporte completo ao **govbr-ds**, com temas customizáveis.
- [ ] Adicionar mais componentes: `GovBRModal`, `GovBRNotification`, `GovBRTable`.
- [ ] Melhorar a documentação no Storybook com mais exemplos de uso.
- [ ] Integração com outros sistemas da ANPD.

---

## 🚀 Contribuições

Contribuições são bem-vindas! Para propor melhorias ou relatar problemas, abra uma [Issue](https://github.com/anpdgovbr/shared-ui/issues) ou envie um Pull Request.

---

## ✍️ Licença

Este projeto está licenciado sob a **Licença ISC**.

---

## 🛡 Desenvolvido pela

> **Divisão de Desenvolvimento e Sustentação de Sistemas**  
> Autoridade Nacional de Proteção de Dados - ANPD

### Time

- @lucianoedipo
- @gustavolimaf
