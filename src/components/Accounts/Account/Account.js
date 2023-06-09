import classes from './Account.module.css'
import { Button } from '../../'

/**
 * Component to display the informations of an transaction
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.amount
 * @param {string} props.description
 *
 * @returns <Acount title={ ... } amount={ ... } description={ ... } />
 */
export default function Account(props) {
  const { title, amount, description } = props

  return (
    <section className={ classes.account }>
      <div className={ classes.accountContentWrapper }>
        <h3 className={ classes.accountTitle }>{ title }</h3>
        <p className={ classes.accountAmount }>{ amount }</p>
        <p className={ classes.accountAmountDescription }>{ description }</p>
      </div>

      <div className={ classes.accountContentWrapper+' '+classes.cta }>
        <Button text="View Transaction" cssClasses={ classes.transactionButton } />
      </div>
    </section>
  )
}
