/**
 * Props comuns a todos os componentes do @anpdgovbr/shared-ui
 * permitindo forçar estritamente o govbr-ds.
 */
export interface SharedUIComponentProps {
    /**
     * Caso true, aplica estilos estritamente compatíveis
     * com o Design System do govbr-ds, bloqueando
     * customizações adicionais do componente.
     *
     * @remarks
     * Quando ativado, força o uso dos estilos CSS vindos do core do govbr-ds,
     * garantindo máxima compatibilidade com as diretrizes oficiais.
     *
     * @default false
     */
    strictGovBr?: boolean;
}
/**
 * Tipo utilitário para garantir que componentes GovBR sempre
 * herdem as props compartilhadas.
 *
 * @template T - Tipo base do componente
 * @example
 * ```ts
 * interface MyGovBRComponentProps extends GovBRComponentProps<BaseProps> {
 *   // props específicas do componente
 * }
 * ```
 */
export type GovBRComponentProps<T = {}> = T & SharedUIComponentProps;
//# sourceMappingURL=SharedUIComponentProps.d.ts.map