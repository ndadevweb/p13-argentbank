import { useDocumentTitle } from "../../hooks/useDocumentTitle"

/**
 * Component to display Error page
 *
 * @returns <Error />
 */
export default function Error() {
  useDocumentTitle('Page not found')

  return (
    <div>
      <h1>404</h1>
      <p>This page does'nt not exists</p>
    </div>
  )
}
