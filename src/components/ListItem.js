import {
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { useContext } from 'react'

import Label from './Label'
import Image from './Image'
import DataContext from '../context/DataContext'

const w = Dimensions.get('window').width

const ListItemStyle = {
  borderBottomWidth: 1,
  borderBottomColor: '#CCC',
  padding: 10,
  display: 'flex',
  flexDirection: 'row',
  gap: 30,
  width: w
}

const ListItem = ({ item, source }) => {


  const ctx = useContext(DataContext)

  const action = () => {
    if(source === 'cart') ctx.removeFromCart(item)
    if(source === 'list') ctx.setCurrentItem(item)
  }


  return(
    <TouchableOpacity style={ListItemStyle}
                      onPress={ () => action()}
      >
      <View style={{ flex: 1}}>
        <Image url={item.image} size={'small'} />
      </View>
      <View style={{flex: 4}}>
          <Label text={item.title} size={'medium'} />
          <Label text={item.status} size={'small'} />
      </View>
      <View style={{flex: 3}}>
        <Label text={item.price} size={'large'} />
      </View>
    </TouchableOpacity>
  )


}

export default ListItem