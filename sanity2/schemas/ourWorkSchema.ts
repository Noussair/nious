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
        name: 'subTitle',
        title: 'Sub Title',
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
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'header',
                title: 'Header',
                type: 'string',
              },
              {
                name: 'content',
                title: 'Content',
                type: 'text', // or 'block' or any other type that suits your content
              },
            ],
            preview: {
              select: {
                title: 'header',
                subtitle: 'content',
              },
            },
          },
        ],
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
  