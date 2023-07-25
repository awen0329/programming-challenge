import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #585755;
  border: 1px solid #d9d9d9;
  color: white;
  border-radius: 5px;
  padding: 20px;
  width: 350px;
  cursor: pointer;

  &:hover {
    background-color: #6b6b69;
  }
`

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Summary = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const PostDate = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const EM = styled.em`
  font-size: 0.6rem;
`
