import type { Page as PageType } from '@/payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import React, { cache } from 'react'
import * as console from 'node:console'
import { Sections } from '@/components/sections'
import AddContent from '@/components/AddContent'

// export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
//   const page = await queryPageBySlug({
//     slug,
//   })
//
//   return generateMeta({ doc: page })
// }

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  // const { isEnabled: draft } = draftMode()

  const payload = await getPayloadHMR({ config })

  const result = await payload.find({
    collection: 'pages',
    // draft,
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export default async function Page({ params: { slug = 'home' } }) {
  const url = '/' + slug

  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  const pageBuilder = page?.layout

  if (pageBuilder === null) {
    return <AddContent />
  }

  console.log(url)

  return (
    <>{pageBuilder?.map(Sections)}</>
  )
}

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const pages = await payload.find({
    collection: 'pages',
  })

  return pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => slug)
}
