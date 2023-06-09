import { Features, Hero } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
/**
 * Component to display homepage
 *
 * @returns <Home />
 */
export default function Home() {
  useDocumentTitle('Home Page')

  return (
    <main>
      <Hero />
      <Features />
    </main>
  )
}
