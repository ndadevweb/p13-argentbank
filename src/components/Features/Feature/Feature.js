import classes from './Feature.module.css'

/**
 * Component to display feature item
 *
 * @param {Object} props
 * @param {String} props.iconSrc
 * @param {String} props.iconAlt
 * @param {String} props.iconTitle
 * @param {String} props.iconText
 *
 * @returns <Feature iconSrc={ ... } iconAlt={ ... } title={ ... } text={ ... } />
 */
export default function Feature(props) {
  const { iconSrc, iconAlt, title, text } = props

  return (
    <div className={ classes.featureItem }>
      <img src={ iconSrc } alt={ iconAlt } className={ classes.featureIcon } />
      <h3 className={ classes.featureItemTitle }>{ title }</h3>
      <p>{ text }</p>
    </div>
  )
}