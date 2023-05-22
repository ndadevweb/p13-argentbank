import { AccountStyled, AccountAmountStyled, AccountAmountDescriptionStyled, AccountTitleStyled, AccountContentWrapperStyled } from './styles'
import { ButtonStyled } from '../Button/Button'

export default function Account(props) {
  const { title, amount, description } = props

  function handleViewTransactions(event) {
    alert('view transactions')
  }

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
        <ButtonStyled onClick={ handleViewTransactions }>View transactions</ButtonStyled>
      </AccountContentWrapperStyled>
    </AccountStyled>
  )
}