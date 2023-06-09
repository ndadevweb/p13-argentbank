import classes from './Features.module.css'
import iconChat from '../../assets/icons/icon-chat.png'
import iconMoney from '../../assets/icons/icon-money.png'
import iconSecurity from '../../assets/icons/icon-security.png'
import Feature from './Feature/Feature'

/**
 * Component to display features
 *
 * @returns <Feature />
 */
export default function Features() {
  const features = [
    {
      iconSrc: iconChat,
      iconAlt: "Chat Icon",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      iconSrc: iconMoney,
      iconAlt: "Money Icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!"
    },
    {
      iconSrc: iconSecurity,
      iconAlt: "Security Icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe."
    }
  ]

  return (
    <section className={ classes.features }>
      <h2 className="sr-only">Features</h2>

      { features.map((item, index) => <Feature key={ index } { ...item } />) }
    </section>
  )
}
