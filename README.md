# 📦 ANPD Shared UI

> Biblioteca de componentes React com MUI e padrão Gov.BR para a ANPD.

![CI](https://github.com/anpdgovbr/shared-ui/actions/workflows/ci.yml/badge.svg)
![npm](https://img.shields.io/npm/v/@anpdgovbr/shared-ui.svg?logo=npm&logoColor=white)
![downloads (week)](https://img.shields.io/npm/dw/@anpdgovbr/shared-ui.svg?logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%3E%3D4.9-blue.svg?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-^19-61DAFB.svg?logo=react&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-^7-007FFF.svg?logo=mui&logoColor=white)
![GovBR DS](https://img.shields.io/badge/Gov.BR-@govbr--ds/core-4F8A10.svg?logo=government&logoColor=white)

---

## Sobre o Projeto

O `shared-ui` é uma **biblioteca de componentes compartilháveis da ANPD**, construída com React, TypeScript e Material-UI (MUI), seguindo os padrões visuais do **Gov.br Design System**.

### 🎯 Objetivo Principal

Centralizar e padronizar componentes de interface para todos os projetos da ANPD, garantindo:

- **Consistência visual** entre aplicações
- **Reutilização** de código e padrões
- **Manutenibilidade** centralizada
- **Conformidade** com Gov.br Design System

### 🏛️ Arquitetura Híbrida

Para atender aos requisitos do projeto, implementamos uma **arquitetura de modo duplo** que permite flexibilidade na utilização dos componentes:

- **Modo Padrão** (`strictgovbr={false}` - padrão): Componente MUI estilizado via `govbrTheme.ts`
- **Modo Estrito** (`strictgovbr={true}`): Elemento HTML puro com classes CSS do Gov.br DS

Esta arquitetura resolve questões técnicas de compatibilidade entre MUI (CSS-in-JS) e Gov.br DS (classes CSS globais).

## Instalação e Uso

Siga estes passos para usar a biblioteca em uma aplicação (ex: `backlog-dim`).

### Passo 1: Instalar a Biblioteca

```bash
npm install @anpdgovbr/shared-ui
```

### Passo 2: Instalar Dependências Parceiras (`peerDependencies`)

**Esta etapa é obrigatória.** A `shared-ui` espera que a sua aplicação forneça as seguintes bibliotecas. Instale-as no seu projeto:

```bash
npm install @emotion/react @emotion/styled @govbr-ds/core @mui/icons-material @mui/material react react-dom
```

### Passo 3: Configurar o Tema e CSS

No arquivo de layout principal da sua aplicação (geralmente `_app.tsx` ou `layout.tsx`), você precisa importar os estilos do Gov.br DS e envolver sua aplicação com o `GovBRThemeProvider`.

```tsx
// Em src/app/layout.tsx (ou equivalente)

// 1. Importe os arquivos de estilo do Gov.br DS
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

// 2. Importe o Provedor de Tema da nossa biblioteca
import { GovBRThemeProvider } from '@anpdgovbr/shared-ui'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* 3. Envolva sua aplicação com o Provedor */}
        <GovBRThemeProvider>{children}</GovBRThemeProvider>
      </body>
    </html>
  )
}
```

### Passo 4: Usar os Componentes

Agora você pode usar os componentes em qualquer lugar da sua aplicação.

**Exemplo 1: Modo Padrão (Recomendado)**

```tsx
import { GovBRButton } from '@anpdgovbr/shared-ui'

function MeuComponente() {
  return (
    <GovBRButton variant="contained" color="primary">
      Salvar
    </GovBRButton>
  )
}
```

**Exemplo 2: Modo Estrito (Quando Necessário)**

```tsx
import { GovBRButton } from '@anpdgovbr/shared-ui'

function MeuComponente() {
  return (
    <GovBRButton strictgovbr inverted>
      Cancelar
    </GovBRButton>
  )
}
```

---

## Desenvolvimento Local

Para contribuir com o desenvolvimento da `shared-ui`:

1.  Clone o repositório: `git clone git@github.com:anpdgovbr/shared-ui.git`
2.  Instale as dependências: `npm install`
3.  Execute o Storybook para ver os componentes em ação:

    ```bash
    npm run dev
    ```

---

## Contribuições

Contribuições são bem-vindas! Leia nosso **[Guia de Contribuição](./CONTRIBUTING.md)** para entender o processo de desenvolvimento, validação e submissão de Pull Requests.

---

## Licença

Este projeto está licenciado sob a **Licença MIT**.
