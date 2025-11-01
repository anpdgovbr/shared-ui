#!/usr/bin/env node

/**
 * Script para criar arquivo types/index.d.ts após build de tipos
 * 
 * Este arquivo re-exporta todos os tipos de types/src/index.d.ts
 * para compatibilidade com o campo "types" do package.json
 */

const fs = require('fs');
const path = require('path');

const typesDir = path.join(__dirname, '..', 'types');
const typesSrcIndexFile = path.join(typesDir, 'src', 'index.d.ts');
const indexFile = path.join(typesDir, 'index.d.ts');

// Validar que o arquivo types/src/index.d.ts foi gerado pelo TypeScript
if (!fs.existsSync(typesSrcIndexFile)) {
  console.error('❌ Erro: types/src/index.d.ts não foi encontrado');
  console.error('   O TypeScript deve gerar este arquivo antes de criar o re-export');
  console.error('   Verifique se o comando "tsc --emitDeclarationOnly --outDir types" foi executado com sucesso');
  process.exit(1);
}

const content = `/**
 * Arquivo de tipos principal da biblioteca @anpdgovbr/shared-ui
 * 
 * Re-exporta todos os tipos de ./src/index.d.ts para compatibilidade
 * com o campo "types" do package.json
 * 
 * Este arquivo é gerado automaticamente pelo script scripts/create-types-index.cjs
 */

export * from './src/index';
`;

// Criar diretório se não existir
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir, { recursive: true });
}

// Escrever arquivo
fs.writeFileSync(indexFile, content, 'utf-8');

console.log('✅ Arquivo types/index.d.ts criado com sucesso');
