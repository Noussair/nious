export const HeroSectionSchema =  {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'preTitleThin',
        title: 'Pre-title (Thin Font Weight)',
        type: 'string'
      },
      {
        name: 'preTitleHighlighted',
        title: 'Pre-title (Highlighted)',
        type: 'string'
      },
      {
        name: 'mainTitle',
        title: 'Main Title',
        type: 'string'
      },
      {
        name: 'mainTitleHighlighted',
        title: 'Main Title (Highlighted)',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
    ]
  };