import { FormSignIn } from '../../components'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

/**
 * Component to display signin page
 *
 * @returns <Signin />
 */
export default function Signin() {
  useDocumentTitle('Signin')

  return (
    <main className="main bg-dark">
      <FormSignIn />
    </main>
  )
}
