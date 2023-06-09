import { useEffect } from 'react'

/**
 * Change Title of the document
 *
 * @param {String} title
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = 'Argent Bank - '+title
  }, [title])
}