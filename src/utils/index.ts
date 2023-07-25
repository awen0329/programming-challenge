import { PostContent } from '@types'

/**
 * Check which fields of post was updated and just returns them.
 *
 * @param origin PostContent
 * @param update PostContent
 * @returns Partial<PostContent>
 */
export const getUpdateParts = (origin: PostContent, update: PostContent) => {
  const res: Partial<PostContent> = {}

  let k: keyof PostContent

  for (k in origin) {
    if (origin[k] != update[k]) {
      if (k === 'date') {
        res[k] = update[k]
      } else {
        res[k] = update[k]
      }
    }
  }

  return res
}
