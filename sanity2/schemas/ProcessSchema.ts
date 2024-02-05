export default {
    name: 'ProcessSection',
    title: 'Process Section',
    type: 'document',
    fields: [
        {
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
        },
        {
            name: 'highlightedTitle',
            title: 'Highlighted Title',
            type: 'string',
        },
        {
            name: 'headerText',
            title: 'Header Text',
            type: 'string', 
        },
        {
            name: 'headerHighlight',
            title: 'Header Highlight',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'processSteps',
            title: 'Process Steps',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'processStep'}]}],
        },
    ],
};

// For process steps
export const processStep = {
    name: 'processStep',
    title: 'Process Step',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
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
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
};
