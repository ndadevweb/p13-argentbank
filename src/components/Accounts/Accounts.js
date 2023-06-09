import Account from './Account/Account'

/**
 * Component to display informations about user Account
 *
 * @param {Object} prop
 * @param {Object} prop.accountInformations
 *
 * @returns <Accounts accountInformations={ ... } />
 */
export default function Accounts({ accountInformations }) {

  return (
    <>
      <h2 className="sr-only">Accounts</h2>

      { accountInformations.map((props, index) => <Account key={ index } { ...props } />) }
    </>
  )
}