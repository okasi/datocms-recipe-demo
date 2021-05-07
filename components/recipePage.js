import React from 'react'
import { Image } from 'react-datocms'
import ReactMarkdown from 'react-markdown'
import Container from './container'
import Layout from './layout'
import Navbar from './navbar'
import SectionSeparator from './section-separator'

export default function RecipePage({ recipe }) {
  return (
    <>
      <Navbar></Navbar>
      <Layout className="-mt-4">
        <Container>
          {/* Hero */}
          <section
            style={{
              height: '95vh',
              width: '100vw',
              position: 'relative',
              left: '50%',
              right: '50%',
              marginLeft: '-50vw',
              marginRight: '-50vw',
              maxHeight: '1080px',
            }}
          >
            {/* Background image */}
            <Image
              data={recipe.featureImage.responsiveImage}
              className="h-full w-full absolute inset-0"
              pictureStyle={{ objectFit: 'cover' }}
            />

            {/* Info Box */}
            <div className="max-w-7xl mx-auto">
              <div
                className="absolute top-48 z-10 bg-white p-8 rounded-3xl w-full max-w-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.81)',
                  backdropFilter: 'blur(7.5px)',
                }}
              >
                <p className="text-sm font-light">
                  ⏳ Time - {recipe.time} min
                </p>
                <p className="text-sm font-light">
                  🏋️‍♀️ Difficulty - {recipe.difficulty?.difficulty}
                </p>
                <h1 className="text-3xl font-extrabold mt-2">{recipe.title}</h1>
                <p className="font-bold text-md mt-2">
                  ⭐️⭐️⭐️⭐️⭐️ 5{' '}
                  <span className="font-light">
                    {'\u00A0'}|{'\u00A0'} 1200 ratings
                  </span>{' '}
                </p>
                <p className="mt-2 text-md">{recipe.description}</p>
                <button className="rounded-full px-4 py-2 mt-2 border-gray-400 hover:opacity-75 font-bold border-2">
                  ✍️ Rate recipe
                </button>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto">
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full max-w-md">
                <div className="bg-green-100 p-8 w-full rounded-br-3xl">
                  <h3 className="text-4xl font-semibold mb-2">Ingredients</h3>
                  {recipe.recipes ? (
                    <h4 className="font-semibold text-lg mt-2">
                      {recipe.title}
                    </h4>
                  ) : null}
                  <ul>
                    {recipe.ingredients.map((ingredient) => (
                      <li className="text-lg" key={ingredient.name.name}>
                        {ingredient.amount} {ingredient.unit.name}{' '}
                        {ingredient.name.name}
                      </li>
                    ))}
                  </ul>
                  {recipe.recipes?.map((item) => {
                    return (
                      <>
                        <h4 className="font-semibold text-lg mt-2">
                          {item.recipe.title}
                        </h4>
                        <ul>
                          {item.recipe.ingredients.map((ingredient) => (
                            <li className="text-lg" key={ingredient.name?.name}>
                              {ingredient?.amount} {ingredient.unit?.name}{' '}
                              {ingredient.name?.name}
                            </li>
                          ))}
                        </ul>
                      </>
                    )
                  })}
                </div>

                <div>
                  <div className="flex flex-row items-center text-xl font-medium mt-2">
                    <p className="mr-2">Recipe by {recipe.author.name}</p>

                    <Image
                      data={recipe.author.image.responsiveImage}
                      style={{
                        height: '32px',
                        width: '32px',
                        borderRadius: '100%',
                      }}
                    />
                  </div>

                  <div className="flex flex-row items-center text-xl font-medium mt-2">
                    <p className="mr-2">Photo by {recipe.photographer.name}</p>

                    <Image
                      data={recipe.photographer.image.responsiveImage}
                      style={{
                        height: '32px',
                        width: '32px',
                        borderRadius: '100%',
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col ml-24 mt-8 w-full">
                <h3 className="text-4xl font-semibold mb-6">Instructions</h3>
                <ul>
                  {recipe.recipes ? (
                    <h4 className="font-semibold text-2xl mb-8">
                      {recipe.title}
                    </h4>
                  ) : null}
                  <ul>
                    {recipe.steps.map((step, index) => (
                      <li
                        className="text-lg font-medium border-b border-gray-200 w-full pb-6 mb-6"
                        key={index}
                      >
                        <div className="w-10 h-10 bg-green-500 rounded-full  text-white font-bold mr-4 inline-flex flex-col justify-center items-center m-auto">
                          {index + 1}
                        </div>
                        {step.procedure}
                      </li>
                    ))}
                  </ul>

                  {recipe.recipes?.map((item) => {
                    return (
                      <>
                        <h4 className="font-semibold text-2xl mt-2 mb-8">
                          {item.recipe.title}
                        </h4>
                        <ul>
                          {item.recipe.steps.map((step, index) => (
                            <li className="text-lg font-medium border-b border-gray-200 w-full pb-6 mb-6" key={index}>
                              <div className="w-10 h-10 bg-green-500 rounded-full text-white font-bold mr-4 inline-flex flex-col justify-center items-center m-auto">
                                {index + 1}
                              </div>
                              {step.procedure}
                            </li>
                          ))}
                        </ul>
                      </>
                    )
                  })}
                </ul>

                <h3 className="text-4xl font-semibold mb-6 mt-4">Video</h3>
                {recipe.video && (
                  <iframe
                    width="512px"
                    height="288px"
                    src={recipe.video}
                  ></iframe>
                )}

                <SectionSeparator></SectionSeparator>

                {recipe.extra && (
                  <>
                    <h3 className="text-4xl font-semibold mb-6">Extra</h3>
                    <ReactMarkdown
                    className="mb-12"
                      children={recipe.extra}
                      components={{
                        h1: ({ node, ...props }) => (
                          <h1 className="font-bold text-2xl mt-4" {...props} />
                        ),
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </section>

          {/* <pre>{JSON.stringify(mealRecipe, 0, 2)}</pre> */}
        </Container>
      </Layout>
    </>
  )
}
