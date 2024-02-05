// Define a type for the image asset references

  // Define a type for the Partner
export   interface IPartner {
    _id: string;
    _type: 'partner';
    name: string;
    imageUrl: string,
    description: string;
  }
  
  // Define a type for the PartnersSection
export interface IPartnersSection {
    _id: string;
    _type: 'partnersSection';
    sectionTitle: string;
    sectionTitleHighlight:string,
    description: string;
    partners: IPartner[];
  }
  