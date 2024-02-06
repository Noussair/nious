export interface IWorkSection {
    _id: string;
    title: string;
    highlightTitle: string;
    headerDetails: string;
    highlightHeaderDetails: string;
    leadText: string;
    gallery: GalleryItem[];
    categories:Category[];
  }
  
  export interface GalleryItem {
    _id: string;
    title: string;
    subTitle:string;
    image: SanityImage;
    categories: Category[];
    description: IHeaderContentPair[];
    icon: string;
  }
  
  export interface Category {
    _id: string;
    title: string;
    identifier: string;
  }
  
  export interface IHeaderContentPair {
    header: string;
    content: string; // or any other type that represents your content structure
  }
  // Reference to a category
  interface CategoryReference {
    _ref: string; // Reference to the Category's _id
    _type: string; // Should be 'category'
  }
  
  // Assuming you have a definition for Sanity's image type
  interface SanityImage {
    url:string;
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  }
  