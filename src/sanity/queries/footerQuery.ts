export const query = `*[_type == "footer"]{
    brandName,
    brandHighlight,
    description,
    links[]{...},
    recentPosts[]{...},
    photoStream[]{..., "imageUrl": asset->url},
    copyright
  }`;
  