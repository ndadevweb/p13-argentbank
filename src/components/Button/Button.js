import classes from './Button.module.css'

/**
 * Component to display button
 *
 * @param {Object}   props
 * @param {String}   props.text
 * @param {Function} props.handleClick
 * @param {Boolean}  props.isDisabled
 *
 * @returns <Button text="..." handleClick={ ... } isDisabled={ ... } />
 */
export default function Button(props) {
  const { text, handleClick, isDisabled } = props

  const classDisabled = isDisabled === true ? classes.btnDisabled : ''

  return (
    <button
      className={ classes.btn+' '+classDisabled }
      onClick={ handleClick }
      disabled={ isDisabled === true }
    >
      { text }
    </button>
  )
}
