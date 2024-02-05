interface SocialLink {
    platform: string;
    url: string;
  }
  
  interface TeamMember {
    name: string;
    position: string;
    description: string;
    socialLinks: SocialLink[];
    imageUrl:string
  }
  
  interface TeamSection {
    title: string;
    headerDetails: string;
    lead: string;
  }
  
  interface Mission {
    subheading: string;
    subsubheading:string;
    additionalText: string;
  }
  
  export interface TeamSchema {
    teamSection: TeamSection;
    teamMembers: TeamMember[];
    mission: Mission;
  }
  