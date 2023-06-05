import classes from './Account.module.css'
import { Button } from '../'

/**
 * Component to display the informations of an transaction
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.amount
 * @param {string} props.description
 *
 * @returns <Acount />
 */
export default function Account(props) {
  const { title, amount, description } = props

  return (
    <section className={ classes.container }>
      <div className={ classes.item }>
        <h3 className={ classes.title }>{ title }</h3>

        <p className={ classes.amount }>{ amount }</p>
        <p className={ classes.description }>{ description }</p>
      </div>

      <div className={ classes.item+' '+classes.centerRight }>
        <Button text="View transactions" />
      </div>
    </section>
  )
}
