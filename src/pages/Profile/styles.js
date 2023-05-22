import styled from 'styled-components'

export const ContainerStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-bottom: 2rem;
`

export const Title1Styled = styled.h1`
  color: #FFF;
`

export const FormUserEditStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1.1rem;
  padding: 2rem 0 .5rem 0;

  input.profilFirstName {
    grid-column: 1;
  }

  input.profilLastName {
    grid-column: 2;
  }

  button.save {
    grid-column: 1;
    grid-row: 2;
    width: min-content;
    justify-self: end;
  }

  button.cancel {
    grid-row: 2;
    grid-column: 2;
    width: min-content;
  }
`