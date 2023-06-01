import { HeroContainerStyled, HeroContentStyled, HeroParagrapheSubTitleStyled, HeroParagrapheTextStyled } from './styles'

/**
 * Component to display informations about account
 *
 * @returns <Hero />
 */
export default function Hero() {
  return (
    <HeroContainerStyled>
      <HeroContentStyled>
        <h2 className="sr-only">Promoted Content</h2>
        <HeroParagrapheSubTitleStyled>No fees.</HeroParagrapheSubTitleStyled>
        <HeroParagrapheSubTitleStyled>No minimum deposit.</HeroParagrapheSubTitleStyled>
        <HeroParagrapheSubTitleStyled>High interest rates.</HeroParagrapheSubTitleStyled>
        <HeroParagrapheTextStyled>Open a savings account with Argent Bank today!</HeroParagrapheTextStyled>
      </HeroContentStyled>
    </HeroContainerStyled>
  )
}
