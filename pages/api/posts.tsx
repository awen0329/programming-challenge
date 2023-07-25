import { NextApiRequest, NextApiResponse } from 'next'

import posts from '@db/post'

/**
 * Controller to get all posts
 *
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(posts)
}
