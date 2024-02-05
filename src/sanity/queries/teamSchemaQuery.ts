// query.js

export const teamSchemaQuery =`
*[_type == "teamSchema"][0] {
  teamSection {
    title,
    headerDetails,
    lead
  },
  teamMembers[] {
    name,
    position,
    description,
    
    "imageUrl": image.asset->url,
    socialLinks[] {
      platform,
      url
    }
  },
  mission {
    subheading,
    subsubheading,
    additionalText
  }
}
`;

