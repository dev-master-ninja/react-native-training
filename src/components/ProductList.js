import { useContext } from 'react'
import { View, FlatList, Text } from 'react-native'
import DataContext from '../context/DataContext'
import ListItem from './ListItem'

const ProductListStyle = {
  flex: 1,
  display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
}

const ProductList = () => {

    const ctx = useContext(DataContext)

    return(
      <View style={ProductListStyle}>
        <FlatList
          data={ ctx.data }
          renderItem={({item}) => <ListItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    )


}

export default ProductList