import classes from './Alert.module.css'

/**
 * Component to display an alert message
 *
 * @param {Object} props
 * @param {String} props.text
 *
 * @returns <Alert text="..." />
 */
export default function Alert(props) {
  const { text } = props

  return (
    <div className={ classes.alert }>{ text }</div>
  )
}
