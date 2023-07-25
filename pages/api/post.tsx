import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

import posts from '@db/post'

/**
 * Function to get the post by its id from json-database file
 * @param id string  This is the post id
 * @returns a post
 */
const getPostById = (id: string) => posts.find((post) => post.id === id)

/**
 * Controller of CRUD of post by id
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method == 'GET') {
      const { post_id } = req.query
      const post = getPostById(post_id as string)

      res.status(200).json(post)
    } else if (req.method == 'POST') {
      const post = JSON.parse(req.body)

      await fs.writeFileSync(
        'db/post.json',
        JSON.stringify([...posts, { ...post, id: posts.length.toString(), comments: [] }]),
      )

      res.status(200).json({ code: 'SUCCESS' })
    } else if (req.method == 'PUT') {
      const { id, post } = JSON.parse(req.body)

      const idx = posts.findIndex((post) => post.id === id)
      posts[idx] = { ...posts[idx], ...post }

      await fs.writeFileSync('db/post.json', JSON.stringify(posts))
      res.status(200).json({ code: 'SUCCESS' })
    }
  } catch (err) {
    res.status(500).json({ code: 'ERROR' })
  }
}
