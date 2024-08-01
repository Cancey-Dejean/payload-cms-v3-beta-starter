export const HeroSection = {
  slug: 'hero',
  admin: {
    useAsTitle: 'headline',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
    },
    {
      name: 'bodyText',
      type: 'richText',
      label: 'Body Text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
