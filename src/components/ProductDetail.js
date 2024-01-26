import { useContext } from 'react'
import { Dimensions, View, ImageBackground } from 'react-native'
import DataContext from '../context/DataContext'
import Label from './Label'
import Button from "./Button";
const ProductDetail = () => {

  const ctx = useContext(DataContext)

  const w = Dimensions.get('window').width

  return(
    <ImageBackground source={{ uri: ctx.currentItem.image }}
                     resizeMode={'cover'}
                     style={{ height: 300, width: w }}>

      <View style={{ height: 300,
                     width: w, padding: 40,
                     display: 'flex', justifyContent: 'flex-end',
                     backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <View style={{ display: 'flex', flexDirection: 'row'}}>
        <View style={{ flex: 5}}>
          <Label text={ctx.currentItem.title } size={'large'} color={'white'}/>
          <Label text={ctx.currentItem.status } size={'medium'} color={'white'}/>
        </View>
          <Button text={'Add to cart'}
                  action={ () => ctx.updateShoppingCart(ctx.currentItem)} />
        </View>
      </View>
    </ImageBackground>
  )

}


export default ProductDetail