import { useContext } from 'react'
import { Dimensions, View, ImageBackground } from 'react-native'
import DataContext from '../context/DataContext'

const ProductDetail = () => {

  const ctx = useContext(DataContext)

  const w = Dimensions.get('window').width

  return(
    <ImageBackground source={{ uri: ctx.currentItem.image }}
                     resizeMode={'cover'}
                     style={{ height: 300, width: w }}>


    </ImageBackground>
  )

}


export default ProductDetail