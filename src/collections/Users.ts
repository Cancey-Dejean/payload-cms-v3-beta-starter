import type { CollectionConfig } from 'payload'
// import TestComponent from '@/components/TextComponent'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed

  ],
}
