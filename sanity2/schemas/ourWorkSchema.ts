export default {
    name: 'workSection',
    title: 'Work Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'highlightTitle',
        title: 'Highlight in Title',
        type: 'string',
      },
      {
        name: 'headerDetails',
        title: 'Header Details',
        type: 'string',
      },
      {
        name: 'highlightHeaderDetails',
        title: 'Highlight in Header Details',
        type: 'string',
      },
      {
        name: 'leadText',
        title: 'Lead Text',
        type: 'text',
      },
      {
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'galleryItem' }] }],
      }
    ],
  };
  
  export const galleryItem = {
    name: 'galleryItem',
    title: 'Gallery Item',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'category' }],
          },
        ],
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'icon',
        title: 'Icon Class Name',
        type: 'string',
      },
    ],
  };
  
  export const category = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'identifier',
        title: 'Identifier',
        description: 'Unique identifier used to categorize gallery items',
        type: 'string',
      },
    ],
  };
  