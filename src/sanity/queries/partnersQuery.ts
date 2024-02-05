export const partnersQuery = `*[_type == "PartnersSection"][0]{
    sectionTitle,
    sectionTitleHighlight,
    description,
    partners[]->{
      name,
      "imageUrl": image.asset->url,
      description
    }
  }`;
