import styled from 'styled-components'

export const Label = styled.label`
  margin-right: 24px;
  & {
    input {
      margin-left: 16px;
    }
  }
`

export const FullWidthLabel = styled.label`
  margin-right: 24px;

  & {
    input,
    textarea {
      width: 100%;
      margin-top: 8px;
      margin-bottom: 24px;
    }
  }
`

export const Input = styled.input`
  font-size: 1rem;
  padding: 8px 16px;
  border: 1px solid #e5dace;
  &:focus {
    border: 1px solid #e5dace;
  }
`

export const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 8px 16px;
  border: 1px solid #e5dace;
  &:focus {
    border: 1px solid #e5dace;
  }
`
