export const ourWorkSectionQuery = `
*[_type == "workSection"][0]{
  _id,
  title,
  highlightTitle,
  headerDetails,
  highlightHeaderDetails,
  leadText,
  "categories": *[_type == "category"],
  "gallery": gallery[]->{
    _id,
    title,
    subTitle,
    "image": {
      "url": image.asset->url,
    },
    description,
    icon,
    "categories": categories[]->{
      _id,
      title,
      identifier
    }
  }
}
`;
