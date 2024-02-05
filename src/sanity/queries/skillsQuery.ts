export const skillsQuery = `*[_type == "skillsSection"][0]{
    title,
    highlight,
    subtitle,
    subhighlight,
    description,
    skills[]->{
      name,
      percentage,
      description
    }
  }`