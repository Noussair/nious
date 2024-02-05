export interface ISkill {
    _id: string;
    name: string;
    percentage: number;
    description: string;
  }
  
 export interface ISkillsSection {
    _id: string;
    title: string;
    subtitle:string;
    highlight: string;
    subhighlight:string;
    description: string;
    skills: ISkill[];
  }
  