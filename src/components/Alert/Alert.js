import classes from './Alert.module.css'

/**
 * Component to display an alert message
 *
 * @param {Object} props
 * @param {String} props.text
 * @param {String} props.type (success, error)
 *
 * @returns <Alert text="..." />
 */
export default function Alert(props) {
  const { text, type } = props

  return (
    <div className={ classes.alert }>{ text }</div>
  )
}
