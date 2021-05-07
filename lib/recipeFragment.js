export default `
fragment recipeFragment on RecipeRecord {
  id
  slug
  title
  description
  time
  difficulty {
    difficulty
  }
  featureImage {
    responsiveImage {
      ...responsiveImageFragment
    }
  }
  author {
    name
    image {
      responsiveImage(imgixParams: {faceindex: "1", h: "600", w: "600", fit: facearea, facepad: "2.5"}) {
        ...responsiveImageFragment
      }
    }
  }
  photographer {
    name
    image {
      responsiveImage(imgixParams: {faceindex: "1", h: "600", w: "600", fit: facearea, facepad: "2.5"}) {
        ...responsiveImageFragment
      }
    }
  }
  steps {
    procedure
  }
  video
  ingredients {
    name {
      name
    }
    amount
    unit {
      name
    }
  }
  extra
}
`