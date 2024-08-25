import { client } from '../../../tina/__generated__/client'

const postsResponse = await client.queries.postConnection()
const pagesResponse = await client.queries.pageConnection()

const posts = postsResponse.data.postConnection.edges.map((post) => {
  return { slug: post.node._sys.filename, description: post.node.desc }
})
const pages = pagesResponse.data.pageConnection.edges.map((post) => {
  return { slug: post.node._sys.filename, description: post.node.label}
})

const index = posts.concat(pages);

export default async (req, res) => {
    res.status(200)
    res.end(JSON.stringify(index))
  }
    