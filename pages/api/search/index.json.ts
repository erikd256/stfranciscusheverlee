import { client } from "../../../.tina/__generated__/client";
import { Blocks } from "../../../components/blocks-renderer";

export default async (req, res) => {
  const PageData = [];
  const postsResponse = await client.queries.postConnection()
  const posts = postsResponse.data.postConnection.edges.map(x => {
    PageData.push({
        keywords: x.node.keywords,
        title: x.node.title,
        author: x.node.author,
        excerpt: x.node.excerpt,
        filename: x.node._sys.filename,
        date: x.node.date
      });
  })
  res.status(200).json(PageData);
  res.end();
  };