import styled from 'styled-components'

export const Form = styled.form`
  max-width: 550px;
  width: 100%;
  font-weight: bold;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }

  p {
    margin-bottom: 8px;
    font-size: 16px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  display: flex;
  text-align: center;

  label {
    margin-right: 6px;
  }
  input {
    margin-right: 3px;
    font-size: 14px;
  }
}

`
