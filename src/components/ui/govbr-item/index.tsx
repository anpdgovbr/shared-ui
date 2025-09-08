'use client'

import GovBRItemProps from './types'

export function GovBRItem(props: Readonly<GovBRItemProps>) {
  const { estado, divider, children } = props

  return estado ? (
    <div className={`br-item ${estado}`}>
      {children}
      {divider && <hr />}
    </div>
  ) : (
    <div className="br-item">
      {children}
      {divider && <hr />}
    </div>
  )
}
