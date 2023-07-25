import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { sendCommentSignal } from '@utils/socket'
import { addComment } from '@services/commentService'
import { Post } from '@types'
import { Button } from '@styled/button'
import { FullWidthLabel, TextArea } from '@styled/form'

type TCommentFormValue = {
  comment: string
}

export const CommentManage = ({ post }: { post: Post }) => {
  const router = useRouter()

  const { register, handleSubmit, reset } = useForm<TCommentFormValue>({
    defaultValues: {
      comment: '',
    },
  })

  const onSubmit = async (data: TCommentFormValue) => {
    try {
      await addComment(post.id, data.comment)

      sendCommentSignal(`A comment added to \"${post.title}\"`)

      router.replace(router.asPath)
      reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FullWidthLabel>
        Comment:
        <TextArea {...register('comment', { required: true })} />
      </FullWidthLabel>

      <Button type='submit'>Add</Button>
    </form>
  )
}
