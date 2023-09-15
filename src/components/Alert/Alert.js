import classes from './Alert.module.css'

/**
 * Component to display an alert message
 *
 * @param {Object} props
 * @param {String} props.text
 * @param {String} props.type error | success
 * @param {String} props.customClass
 *
 * @returns <Alert text="..." type="..." />
 */
export default function Alert(props) {
  const { text, type, customClass } = props

  return (
    <div className={ classes.alert+' '+classes[type]+' '+customClass }>{ text }</div>
  )
}
