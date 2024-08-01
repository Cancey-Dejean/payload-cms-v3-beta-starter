import Link from 'next/link'
import React from 'react'

import type { Page } from '@/payload-types'
import { cn } from '@/lib/utils'

type CMSLinkType = {
  // appearance?: 'inline' | ButtonProps['variant']
  // variant?: ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string
  newTab?: boolean
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | string | number
  }

  type?: 'custom' | 'reference'
  url?: string
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,

    // variant,
    // appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    url,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
        reference.value.slug
      }`
      : url

  if (!href) return null

  // const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  // if (appearance === 'inline') {
  //   return (
  //     <Link className={cn(className)} href={href || url || '#link'} {...newTabProps}>
  //       {label && label}
  //       {children && children}
  //     </Link>
  //   )
  // }

  return (
    // <Button asChild className={className} size={size} variant={variant}>
    //
    // </Button>
    <Link className={cn(className)} href={href || url || '#link'} {...newTabProps}>
      {label && label}
      {children && children}
    </Link>
  )
}
