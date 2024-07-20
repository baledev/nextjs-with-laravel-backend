import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

interface AuthSessionStatusProps extends ComponentProps<'div'> {
  status: string
}

const AuthSessionStatus = ({
  status,
  className,
  ...props
}: AuthSessionStatusProps) => {
  return (
    <>
      {status && (
        <div
          className={cn('font-medium text-sm text-green-600', className)}
          {...props}
        >
          {status}
        </div>
      )}
    </>
  )
}

export default AuthSessionStatus
