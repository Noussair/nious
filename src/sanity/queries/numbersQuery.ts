// query.js
export const numbersQuery =`*[_type == "statSection"][0]{
    title,
    highlightTitle,
    subtitle,
    stats[]->{
      number,
      caption,
      backgroundColor
    },
    footerText
  }`;

