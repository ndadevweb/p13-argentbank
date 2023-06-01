import { AccountStyled, AccountAmountStyled, AccountAmountDescriptionStyled, AccountTitleStyled, AccountContentWrapperStyled } from './styles'
import { ButtonStyled } from '../Button/Button'

/**
 * Component to display the informations of an transaction
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.amount
 * @param {string} props.description
 * @returns <Acount />
 */
export default function Account(props) {
  const { title, amount, description } = props

  return (
    <AccountStyled>
      <AccountContentWrapperStyled>
        <AccountTitleStyled>
          { title }
        </AccountTitleStyled>

        <AccountAmountStyled>
          { amount }
        </AccountAmountStyled>

        <AccountAmountDescriptionStyled>
          { description }
        </AccountAmountDescriptionStyled>
      </AccountContentWrapperStyled>
      {/* <!-- account content wrapper cta --> */}

      <AccountContentWrapperStyled>
        <ButtonStyled>View transactions</ButtonStyled>
      </AccountContentWrapperStyled>
    </AccountStyled>
  )
}
