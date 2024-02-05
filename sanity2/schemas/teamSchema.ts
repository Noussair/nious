// schemas/teamSchema.js (example filename)
export default {
    name: 'teamSchema',
    title: 'Team Section',
    type: 'document',
    fields: [
      {
        name: 'teamSection',
        title: 'Team Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'headerDetails',
            title: 'Header Details',
            type: 'string',
          },
          {
            name: 'lead',
            title: 'Lead',
            type: 'text',
          },
        ],
      },
      {
        name: 'teamMembers',
        title: 'Team Members',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'position',
                title: 'Position',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
                description: 'Image of the team member',
              }
            ],
          },
        ],
      },
      {
        name: 'mission',
        title: 'Mission',
        type: 'object',
        fields: [
          {
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
          },
          {
            name: 'subsubheading',
            title: 'SubSubheading',
            type: 'string',
          },
          {
            name: 'additionalText',
            title: 'Additional Text',
            type: 'text',
          },
        ],
      },
    ],
  };