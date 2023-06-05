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
 * @returns <Feature />
 */
export default function Feature(props) {
  const { iconSrc, iconAlt, title, text } = props

  return (
    <article className={ classes.feature }>
      <img src={ iconSrc } alt={ iconAlt } />
      <h3>{ title }</h3>
      <p>{ text }</p>
    </article>
  )
}