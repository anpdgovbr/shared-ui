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
const indexFile = path.join(typesDir, 'index.d.ts');

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
