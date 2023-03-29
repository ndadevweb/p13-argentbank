import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`

export const LinkDefaultStyled = styled(Link)`
  font-weight: bold;
  color: ${props => props.active !== true ? '#2c3e50' : '#42b983'}
`

export const LinkLogoStyled = styled(LinkDefaultStyled)`
  display: flex;
  align-items: center;
`

export const LinkSignInStyled = styled(LinkDefaultStyled)`
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`

export const ImgLogoStyled = styled.img`
  max-width: 100%;
  width: 200px;
`