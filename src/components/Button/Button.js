import classes from './Button.module.css'

/**
 * Component to display button
 *
 * @param {Object}   props
 * @param {String}   props.text
 * @param {Function} props.handleClick
 * @param {Boolean}  props.isDisabled
 * @param {String}   props.type
 * @param {String}   props.cssClasses
 *
 * @returns <Button text="..." handleClick={ ... } isDisabled={ ... } />
 */
export default function Button(props) {
  const { text, handleClick, isDisabled, type, cssClasses } = props

  const classDisabled = isDisabled === true ? classes.btnDisabled : null

  const classesList = cssClasses ? cssClasses : classes.btn

  return (
    <button
      className={ classesList+' '+classDisabled }
      onClick={ handleClick }
      disabled={ isDisabled === true }
      type={ type ? type : 'button' }
    >
      { text }
    </button>
  )
}
