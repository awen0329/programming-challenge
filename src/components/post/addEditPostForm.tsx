import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import moment from 'moment'
import { styled } from 'styled-components'

import { addPost, updatePost } from '@services/postService'
import { Post, PostContent } from '@types'
import { getUpdateParts } from '@utils'
import { FullWidthLabel, Input } from '@styled/form'
import { Button } from '@styled/button'

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required.'),
  date: Yup.date().required('Publication date is required.'),
})

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubmitButton = styled(Button)`
  width: 240px;
  height: 60px;
`

export const AddEditPostForm = ({ post }: { post?: Post }) => {
  const router = useRouter()
  const { id, comments, ...postContent } = post || ({} as Post)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostContent>({
    //@ts-ignore
    resolver: yupResolver(schema),
    defaultValues: {
      title: postContent.title || '',
      summary: postContent.summary || '',
      content: postContent.content || '',
      date: moment(new Date(postContent.date || new Date())).format('YYYY-MM-DD'),
    },
  })

  const onSubmit = async (data: PostContent) => {
    try {
      if (!id) {
        addPost(data)
      } else {
        const updated = getUpdateParts(postContent, data)
        // Call update api endpoint when there is a really update
        if (Object.keys(updated).length) {
          updatePost(id, getUpdateParts(postContent, data))
        }
      }

      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FullWidthLabel>
        Title:
        <Input {...register('title')} />
        <span>{errors?.title?.message || ''}</span>
      </FullWidthLabel>

      <FullWidthLabel>
        Summary:
        <Input {...register('summary')} />
      </FullWidthLabel>

      <FullWidthLabel>
        Content:
        <Input {...register('content')} />
      </FullWidthLabel>

      <FullWidthLabel>
        Date:
        <Input type='date' {...register('date')} />
        <span>{errors?.title?.message || ''}</span>
      </FullWidthLabel>

      <ButtonContainer>
        <SubmitButton type='submit'>Submit</SubmitButton>
      </ButtonContainer>
    </form>
  )
}
