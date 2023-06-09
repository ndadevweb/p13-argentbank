import { THEME_BG_DARK } from '../../components/Main/Main'
import { Main, FormSignIn } from '../../components'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

/**
 * Component to display signin page
 *
 * @returns <Signin />
 */
export default function Signin() {
  useDocumentTitle('Signin')

  return (
    <Main theme={ THEME_BG_DARK }>
      <FormSignIn />
    </Main>
  )
}
