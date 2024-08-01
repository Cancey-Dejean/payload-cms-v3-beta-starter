import type { CollectionConfig } from 'payload'
import { HeroSection } from '@/blocks/Hero'


export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'internalName',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'internalName',
      type: 'text',
      label: 'Internal Name',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Layout',
      blocks: [
        // @ts-ignore
        HeroSection,
      ],
    },

  ],
}
