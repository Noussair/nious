export const SkillSchema = {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'percentage',
        title: 'Percentage',
        type: 'number',
        validation: (Rule: { min: (arg0: number) => { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.min(0).max(100).error('Percentage must be between 0 and 100')
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  };

// schemas/skillsSection.js

export const skillsSchema = {
    name: 'skillsSection',
    title: 'Skills Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'highlight',
        title: 'Highlight',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Sub Title',
        type: 'string',
      },
      {
        name: 'subhighlight',
        title: 'Subtitle Highlight',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'skill' }] }],
      },
    ],
  };
  

 
