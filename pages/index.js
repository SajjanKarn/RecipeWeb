import { createClient } from "contentful";

export default function Recipes({ recipes }) {
  console.log(recipes);
  return <div className="recipe-list">Recipe List</div>;
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });
  return {
    props: {
      recipes: res.items,
    },
  };
}
