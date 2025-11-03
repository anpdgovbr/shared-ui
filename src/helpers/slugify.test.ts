import { describe, expect, it } from 'vitest'

import { slugify } from './slugify'

describe('slugify', () => {
  it('should convert simple text to lowercase slug', () => {
    expect(slugify('Simple Text')).toBe('simple-text')
  })

  it('should handle multiple spaces', () => {
    expect(slugify('Título   com    múltiplos    espaços')).toBe('titulo-com-multiplos-espacos')
  })

  it('should remove accents and diacritics', () => {
    expect(slugify('Configurações Avançadas')).toBe('configuracoes-avancadas')
    expect(slugify('José André')).toBe('jose-andre')
    expect(slugify('Ação Específica')).toBe('acao-especifica')
  })

  it('should handle special characters', () => {
    expect(slugify('Dados Pessoais (CPF/RG)')).toBe('dados-pessoais-cpf-rg')
    expect(slugify('Email: test@example.com')).toBe('email-test-example-com')
    expect(slugify('Price: $99.99')).toBe('price-99-99')
  })

  it('should handle emojis and unicode symbols', () => {
    expect(slugify('Émojis 🎉 e símbolos especiais @#$')).toBe('emojis-e-simbolos-especiais')
    expect(slugify('Hello 👋 World 🌍')).toBe('hello-world')
  })

  it('should add prefix when text starts with number', () => {
    expect(slugify('123 Números no início')).toBe('id-123-numeros-no-inicio')
    expect(slugify('99 Problems', 'section')).toBe('section-99-problems')
  })

  it('should handle empty or invalid input', () => {
    expect(slugify('')).toBe('id')
    expect(slugify('   ')).toBe('id')
    expect(slugify('!@#$%', 'section')).toBe('section')
  })

  it('should use custom prefix when text starts with number', () => {
    expect(slugify('99 Problems', 'section')).toBe('section-99-problems')
    expect(slugify('123 Test', 'component')).toBe('component-123-test')
  })

  it('should limit slug length', () => {
    const longText = 'a'.repeat(150)
    const result = slugify(longText)
    expect(result.length).toBeLessThanOrEqual(100)
  })

  it('should handle consecutive hyphens', () => {
    expect(slugify('Word--with---many----hyphens')).toBe('word-with-many-hyphens')
  })

  it('should remove leading and trailing hyphens', () => {
    expect(slugify('---Leading and trailing---')).toBe('leading-and-trailing')
  })

  it('should handle mixed case with special characters', () => {
    expect(slugify('CamelCase & Special-Chars!')).toBe('camelcase-special-chars')
  })

  it('should handle Portuguese characters', () => {
    expect(slugify('Atenção à Proteção de Dados')).toBe('atencao-a-protecao-de-dados')
    expect(slugify('Informação Técnica')).toBe('informacao-tecnica')
  })

  it('should be idempotent for already valid slugs', () => {
    const validSlug = 'already-valid-slug'
    expect(slugify(validSlug)).toBe(validSlug)
  })

  it('should handle text with only special characters', () => {
    expect(slugify('!@#$%^&*()')).toBe('id')
    expect(slugify('___---___', 'test')).toBe('test')
  })
})
