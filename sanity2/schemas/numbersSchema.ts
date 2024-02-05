// schemas/stat.js
export const statItem =  {
    name: 'stat',
    title: 'Stat',
    type: 'document',
    fields: [
      {
        name: 'number',
        title: 'Number',
        type: 'number',
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'backgroundColor',
        title: 'Background Color',
        type: 'string',
      },
    ],
  };


// schemas/statSection.js
export const statSection =  {
    name: 'statSection',
    title: 'Statistics Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'highlightTitle',
        title: 'Highlight Title Part',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'stats',
        title: 'Stats',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'stat' }],
          },
        ],
      },
      {
        name: 'footerText',
        title: 'Footer Text',
        type: 'string',
      },
    ],
  };
  
  