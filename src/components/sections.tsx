import Hero from './Hero'

export const Sections = (section: any) => {
  switch (section.blockType) {
    case 'hero':
      return (
        <Hero {...section} key={section.blockType} />
      )


    default:
      return (
        <div className="py-10 text-center">
          <h1>Please add Section content to page in Sanity CMS</h1>
        </div>
      )
  }
}
