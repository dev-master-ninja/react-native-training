import { TouchableOpacity, Text } from 'react-native'
import Label from "./Label";

const ButtonStyle = {
  backgroundColor: '#1B99D1',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10,
  paddingBottom: 10,
  margin: 20,
  borderRadius: 20
}

const Button = ({ text, action }) => {

  return(
    <TouchableOpacity style={ ButtonStyle } onPress={ () => action() }>
        <Label text={text} size={'medium'} />
    </TouchableOpacity>
  )

}

export default Button