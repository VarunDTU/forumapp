export default async function Page({ params }) {
  const post = await getServerPostsViaId(params.id);
  console.log(post.data.attributes.ListOfAnswers);
  return (
    <div>
      hello{" "}
      {post.data.attributes.ListOfAnswers.answers.map((items) => {
        return <div>{items.text}</div>;
      })}
    </div>
  );
}
export async function getServerPostsViaId(id) {
  let header = {
    Authorization:
      "Bearer 0acb9abf5049c2ba5e3103b2c574449bacca38fe2524ba64d552adb36ffd6fc009891e76976797027cb09bcde5fab877604039b2b60ff3077176e4330be6c7a3076d5354b36c4a138d71d2622a695165eebacb9b1753c7e62b261080b97b82cb881e8f2ff9c530b27f052b07a4847d7b472e6e3bf29c74bc3261be0cb80db066",
  };
  const a = await fetch("http://localhost:1337/api/forum-posts/" + id, {
    headers: header,
    next: { revalidate: 10 },
  });

  const posts = await a.json();

  return posts;
}
