import Head from 'next/head'
import { useQuerySubscription } from 'react-datocms'
import Container from '../components/container'
import Layout from '../components/layout'
import { request } from '../lib/datocms'

export async function getServerSideProps() {
  const graphqlRequest = {
    query: `
      {
        allRecipes {
          title
          slug
        }
      }
    `,
  }

  return {
    props: {
      subscription: {
        initialData: await request(graphqlRequest),
      },
    },
  }
}

export default function Index({ subscription }) {
  const {
    data: { allRecipes },
  } = useQuerySubscription(subscription)

  return (
    <>
      <Layout>
        <Container>
          <h1>All recipes</h1>
          {allRecipes.map((recipe) => (
            <>
              <a href={'/recipe/' + recipe.slug} className="recipelink">
                {recipe.title}
              </a>
              <br></br>
            </>
          ))}
          <style jsx>{`
            .recipelink {
              font-size: 48px;
              font-weight: bold;
              color: blue;
            }
          `}</style>
        </Container>
      </Layout>
    </>
  )
}
