import { GovBRSize } from '../../../types/GovBRTypes'
import { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

export interface AutoSyncProps<T = unknown> extends SharedUIComponentProps {
  onSync: () => Promise<void>
  syncInterval?: number
  maxErrorCount?: number
  syncAnimationDuration?: number
  successDuration?: number
  errorDuration?: number
  tooltipEnabled?: boolean
  resetTrigger?: T
  disabled?: boolean
  size?: GovBRSize
}
