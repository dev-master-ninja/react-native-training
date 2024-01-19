import { TouchableOpacity } from 'react-native'
import Image from './Image'

const ImageButton = ({ url, action }) => {
  return (
    <TouchableOpacity onPress={ () => action() }>
      <Image url={url} size={'small'} />
    </TouchableOpacity>
  )
}

export default ImageButton