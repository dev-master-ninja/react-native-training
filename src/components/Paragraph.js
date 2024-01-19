import { Text, Dimensions } from 'react-native'

const ParagraphStyle = {
  fontSize: 14,
  width: Dimensions.get('window').width - 40,
  height: 200,
  color: 'rgba(0,0,0,0.6)',
  padding: 10,

}

const Paragraph = ({ text }) => {

  return (
    <Text style={ParagraphStyle}>
      { text }
    </Text>
  )
}

export default Paragraph