import classes from './Main.module.css'

export const THEME_BG_DARK = 'THEME_BG_DARK'

/**
 * Component Main to wrap components
 *
 * @param {Object} props
 * @param {Object} props.children
 * @param {String} props.theme
 *
 * @returns <Main theme={ ... } />
 */
export default function Main({ children, theme }) {

  const classesMain = theme === THEME_BG_DARK
    ? classes.main+' '+classes.bgDark
    : null

  return (
    <main className={ classesMain }>
      { children }
    </main>
  )
}