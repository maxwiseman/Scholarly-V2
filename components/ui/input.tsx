import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, ...props }, ref) => {
    const iconProps = {
      className: 'w-4 h-4',
    }
    var iconWithProps
    // @ts-ignore
    if (icon) iconWithProps = React.cloneElement(icon, iconProps)

    return (
      <div className={cn(className, 'text-muted-foreground relative')}>
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary transition-[border] disabled:cursor-not-allowed disabled:opacity-50',
            className,
            icon ? 'pl-8' : 'pl-3'
          )}
          ref={ref}
          {...props}
        />
        {icon ? (
          <div className='absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-4 h-4 w-4'>
            {iconWithProps}
          </div>
        ) : null}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
