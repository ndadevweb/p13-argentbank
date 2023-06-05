import classes from './Hero.module.css'

/**
 * Component to display informations about account
 *
 * @returns <Hero />
 */
export default function Hero() {
  return (
    <div className={ classes.container }>
      <section className={ classes.hero }>
        <h2 className="sr-only">Promoted Content</h2>
        <p className={ classes.subtitle }>No fees.</p>
        <p className={ classes.subtitle }>No minimum deposit.</p>
        <p className={ classes.subtitle }>High interest rates.</p>
        <p className={ classes.text }>Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}
