# 📦 shared-ui

> Biblioteca de componentes React com MUI v7 e padrão govbr-ds para a ANPD.

![CI](https://github.com/anpdgovbr/shared-ui/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node Version](https://img.shields.io/badge/node-20%2B-brightgreen)
![TypeScript](https://img.shields.io/badge/built%20with-TypeScript-blue)
![Storybook](https://img.shields.io/badge/docs-Storybook-orange)

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
- **CI com GitHub Actions**: Build e lint automáticos em Pull Requests.
- **Hooks com Husky**: Pre-commit e pre-push com lint, format e type-check automáticos.

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
- **Husky + Lint-Staged**

---

## 🏁 Começando

Siga estas instruções para configurar o ambiente de desenvolvimento local.

### Pré-requisitos

- Node.js (versão 20 ou superior)
- npm (versão 10 ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:anpdgovbr/shared-ui.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd shared-ui
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure os hooks:

   ```bash
   npm run prepare
   ```

5. Mantenha sua branch atualizada com a `main`:
   ```bash
   git checkout -b minha-feature main
   git pull origin main
   ```

### Executando o Storybook

```bash
npm run storybook
```

O Storybook estará disponível em `http://localhost:6006`.

---

## 📚 Como Usar

### Instalação via Git

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

Para formulários com `react-hook-form`:

```tsx
import { useForm } from 'react-hook-form'
import { GovBRFormInput } from '@anpdgovbr/shared-ui'

function MyForm() {
  const { control } = useForm()
  return <GovBRFormInput name="meuInput" control={control} label="Meu Input" />
}
```

> **Nota:** O projeto consumidor deve declarar `react`, `@mui/material`, `@mui/icons-material` e `react-hook-form` como dependências.

---

## 🏗️ Estrutura de Componentes

```text
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

## 🔧 Scripts Disponíveis

| Script                    | Descrição                                 |
| ------------------------- | ----------------------------------------- |
| `npm run dev`             | Inicia o Storybook para desenvolvimento.  |
| `npm run build`           | Compila a biblioteca (`types` + `dist`).  |
| `npm run storybook`       | Inicia o Storybook em `localhost:6006`.   |
| `npm run build-storybook` | Gera versão estática do Storybook.        |
| `npm run test`            | Executa os testes com Vitest.             |
| `npm run lint`            | Verifica erros de lint.                   |
| `npm run format`          | Formata com Prettier.                     |
| `npm run type-check`      | Verifica tipos com `tsc --noEmit`.        |
| `npm run check`           | Executa lint, type-check e testes juntos. |

---

## 📝 Roadmap

- [ ] Suporte completo ao govbr-ds com tokens CSS customizáveis.
- [ ] Novos componentes (`GovBRModal`, `GovBRNotification`, `GovBRTable`).
- [ ] Melhoria da documentação com exemplos avançados.
- [ ] Integração com outras aplicações da ANPD.

---

## 🤝 Contribuições

Contribuições são bem-vindas!

1. Crie uma branch a partir da `main`:
   ```bash
   git checkout -b minha-feature main
   git pull origin main
   ```
2. Desenvolva seguindo o guia de componentes.
3. Valide com:
   ```bash
   npm run check
   ```
4. Faça commit e push:
   ```bash
   git add .
   git commit -m "feat: nova feature"
   git push origin minha-feature
   ```
5. Abra um Pull Request na interface do GitHub.

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
- @eduHanjos0411
