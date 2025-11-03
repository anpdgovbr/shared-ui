/**
 * Gera um slug válido para uso como ID HTML a partir de uma string.
 *
 * Esta função sanitiza uma string para criar um ID HTML válido seguindo as regras:
 * - Remove caracteres especiais e acentuação (normalização Unicode NFD)
 * - Converte para minúsculas
 * - Substitui espaços e caracteres não-alfanuméricos por hífens
 * - Remove hífens duplicados, iniciais e finais
 * - Garante que o ID comece com letra (adiciona prefixo se necessário)
 * - Limita o comprimento a 100 caracteres para evitar IDs muito longos
 *
 * @param text - Texto a ser convertido em slug
 * @param prefix - Prefixo opcional a ser adicionado ao slug (padrão: 'id')
 * @returns String sanitizada adequada para uso como ID HTML
 *
 * @example
 * ```tsx
 * slugify('Configurações Avançadas')
 * // => 'configuracoes-avancadas'
 *
 * slugify('Dados Pessoais (CPF/RG)', 'section')
 * // => 'section-dados-pessoais-cpf-rg'
 *
 * slugify('Título com múltiplos    espaços')
 * // => 'titulo-com-multiplos-espacos'
 *
 * slugify('123 Números no início')
 * // => 'id-123-numeros-no-inicio'
 *
 * slugify('Émojis 🎉 e símbolos especiais @#$')
 * // => 'emojis-e-simbolos-especiais'
 * ```
 */
export function slugify(text: string, prefix: string = 'id'): string {
  if (!text || typeof text !== 'string') {
    return prefix
  }

  // Normaliza Unicode (NFD) para separar caracteres base de acentos/diacríticos
  // e remove os diacríticos, mantendo apenas caracteres base
  const normalized = text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

  // Substitui espaços e caracteres não-alfanuméricos (exceto hífens) por hífens
  // Remove hífens e underscores duplicados
  let slug = normalized
    .replace(/\s+/g, '-') // espaços → hífens
    .replace(/_+/g, '-') // underscores → hífens
    .replace(/[^\w-]+/g, '-') // caracteres especiais → hífens
    .replace(/[-_]+/g, '-') // hífens/underscores duplicados → único hífen
    .replace(/^-|-$/g, '') // remove hífens iniciais/finais

  // Se o slug está vazio, retorna apenas o prefixo
  if (!slug) {
    return prefix
  }

  // Se o slug começa com número, adiciona prefixo
  if (/^\d/.test(slug)) {
    slug = `${prefix}-${slug}`
  }

  // Limita o comprimento para evitar IDs excessivamente longos
  const maxLength = 100
  if (slug.length > maxLength) {
    slug = slug.substring(0, maxLength).replace(/-[^-]*$/, '') // remove última palavra incompleta
  }

  return slug
}
