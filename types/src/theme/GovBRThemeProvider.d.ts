import { PropsWithChildren } from 'react';
type Mode = 'theme' | 'css';
interface GovBRThemeContextType {
    mode: Mode;
    toggle: () => void;
}
export declare const useGovBRThemeMode: () => GovBRThemeContextType;
export declare function GovBRThemeProvider({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=GovBRThemeProvider.d.ts.map