import Head from 'next/head'
import { useQuerySubscription } from 'react-datocms'
import Container from '../../components/container'
import Layout from '../../components/layout'
import SectionSeparator from '../../components/section-separator'
import { request } from '../../lib/datocms'
import { Image } from 'react-datocms'
import ReactMarkdown from 'react-markdown'
import Navbar from '../../components/navbar'
import responsiveImageFragment from '../../lib/responsiveImageFragment'

export async function getStaticPaths() {
  const data = await request({
    query: `
  {
    allRecipes(locale: sv) {
      slug
    }
  }
   `,
  })

  console.log(data)

  return {
    paths: data.allRecipes.map((recipe) => `/recipe/se/${recipe.slug}`),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
query RecipeBySlug($slug: String) {
  recipe(filter: {slug: {eq: $slug}}) {
    ...recipeFragment
    recipes {
      recipe {
        ...recipeFragment
      }
    }
  }
}

${recipeFragment}

${responsiveImageFragment}
    `,
    preview,
    variables: {
      slug: params.slug,
    },
  }

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest, preview),
            token: process.env.DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  }
}

export default function Post({ subscription, preview }) {
  const {
    data: { recipe },
  } = useQuerySubscription(subscription)

  return <RecipePage recipe={recipe} />
}
