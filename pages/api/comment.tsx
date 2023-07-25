import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

import posts from '@db/post'

/**
 * Controller to mock CRUD of comments
 *
 * Mock `POST` operation to add a comment to certain post.
 *
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const comment = JSON.parse(req.body)
    posts[comment.postId].comments?.push(comment.comment)

    await fs.writeFileSync('db/post.json', JSON.stringify(posts))
    res.status(200).json({ code: 'SUCCESS' })
  }
}
