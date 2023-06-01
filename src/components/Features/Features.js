import { FeaturesStyled, FeatureItemStyled, FeatureImgIconStyled, FeatureItemTitleStyled } from './styles'
import iconChat from '../../assets/icons/icon-chat.png'
import iconMoney from '../../assets/icons/icon-money.png'
import iconSecurity from '../../assets/icons/icon-security.png'

/**
 * Component to display features
 *
 * @returns <Feature />
 */
export default function Features() {

  return (
    <FeaturesStyled>
      <h2 className="sr-only">Features</h2>

      <FeatureItemStyled>
        <FeatureImgIconStyled src={ iconChat } alt="Chat Icon" />
        <FeatureItemTitleStyled>You are our #1 priority</FeatureItemTitleStyled>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </FeatureItemStyled>

      <FeatureItemStyled>
        <FeatureImgIconStyled src={ iconMoney } alt="Money Icon" />
        <FeatureItemTitleStyled>More savings means higher rates</FeatureItemTitleStyled>
        <p>
          The more you save with us, the higher your interest rate will be!
        </p>
      </FeatureItemStyled>

      <FeatureItemStyled>
        <FeatureImgIconStyled src={ iconSecurity } alt="Security Icon" />
        <FeatureItemTitleStyled>Security you can trust</FeatureItemTitleStyled>
        <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
        </p>
      </FeatureItemStyled>
    </FeaturesStyled>
  )
}
