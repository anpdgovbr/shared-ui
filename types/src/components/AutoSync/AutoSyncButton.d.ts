export interface AutoSyncButtonProps<T = unknown> {
  onSync: () => Promise<void>
  syncInterval?: number
  maxErrorCount?: number
  syncAnimationDuration?: number
  successDuration?: number
  errorDuration?: number
  tooltipEnabled?: boolean
  resetTrigger?: T
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}
export default function AutoSyncButton<T = unknown>({
  onSync,
  syncInterval,
  maxErrorCount,
  syncAnimationDuration,
  successDuration,
  errorDuration,
  tooltipEnabled,
  resetTrigger,
  disabled,
  size,
}: Readonly<AutoSyncButtonProps<T>>): import('react/jsx-runtime').JSX.Element
//# sourceMappingURL=AutoSyncButton.d.ts.map
