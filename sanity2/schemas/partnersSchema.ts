// schemas/partnersSection.js

export const PartnersSection = {
    name: 'PartnersSection',
    title: 'Partners Section',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'sectionTitleHighlight',
        title: 'Section Title Highlight',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'partners',
        title: 'Partners',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'partner' }] }],
      },
    ],
  };
  
  // Define the 'partner' document
  export const Partner =  {
    name: 'partner',
    title: 'Partner',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image hotspot positioning
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  };
  