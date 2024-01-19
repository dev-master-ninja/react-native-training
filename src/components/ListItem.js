import { View } from 'react-native'
import Label from './Label'
import Image from './Image'

const ListItemStyle = {
  borderBottomWidth: 1,
  borderBottomColor: '#CCC',
  padding: 10,
  display: 'flex',
  flexDirection: 'row',
  gap: 30,
  width: 320,
}

const ListItem = ({ item }) => {

  return(
    <View style={ListItemStyle}>
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
    </View>
  )


}

export default ListItem