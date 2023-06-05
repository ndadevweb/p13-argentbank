import classes from './Button.module.css'

/**
 * Component to display button
 *
 * @param {Object} props
 * @param {String} props.text
 *
 * @returns <Button text="..." />
 */
export default function Button(props) {
  const { text, handleClick } = props

  return (
    <button
      className={ classes.btn }
      onClick={ handleClick }
    >
      { text }
    </button>
  )
}
