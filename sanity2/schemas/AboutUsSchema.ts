export const AboutUsSchema = {
    name: 'aboutSection',
    title: 'About Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'titleHighlighted',
        title: 'Title Highlighted',
        type: 'string'
      },
      {
        name: 'subTitle',
        title: 'Sub Title',
        type: 'string'
      },
      {
        name: 'subTitleHilighted',
        title: 'Sub Title Highlighted',
        type: 'string'
      },
      {
        name: 'detail',
        title: 'Detail',
        type: 'string'
      },
      {
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
                {
                    title: "Icon",
                    name: "icon",
                    type: "iconPicker",
                    options: {
                        storeSvg: true,
                        providers: ["f7", "fa", "mdi", "sa", "hi", "fi", "si", "li"]
                    }
                },
              {
                name: 'title',
                title: 'Title',
                type: 'string'
              },
              {
                name: 'titleHighlighted',
                title: 'Title Highlighted',
                type: 'string'
              },
              {
                name: 'text',
                title: 'Text',
                type: 'text'
              }
            ]
          }
        ]
      }
    ]
  };