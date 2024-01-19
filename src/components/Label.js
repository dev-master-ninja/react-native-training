import { Text } from 'react-native'

const LabelStyle = {
  small: {
    fontSize: 12
  },
  medium: {
    fontSize: 18
  },
  large: {
    fontSize: 28
  }
}

const Label = ({ text, size }) => {

  return(
    <Text style={LabelStyle[size]}>{ text }</Text>
  )

}

export default Label