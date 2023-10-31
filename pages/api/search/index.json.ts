import { client } from "../../../.tina/__generated__/client";

export default async (req, res) => {
  const PageData = [];
  const postsResponse = await client.queries.postConnection()
  const posts = postsResponse.data.postConnection.edges.map(x => {
    PageData.push({
        keywords: x.node.keywords,
        title: x.node.title,
        author: x.node.author,
        excerpt: x.node.desc,
        filename: "/post/"+x.node._sys.filename
      });
  })
  res.status(200).send(PageData);
  res.end();
  };