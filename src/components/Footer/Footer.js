import classes from './Footer.module.css'

/**
 * Component to display website footer
 *
 * @returns <Footer />
 */
export default function Footer() {
  return (
    <footer className={ classes.footer }>
      <p className={ classes.footerText }>Copyright 2020 Argent Bank</p>
    </footer>
  )
}
