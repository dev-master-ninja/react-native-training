import { useContext } from 'react'
import {View, FlatList, Dimensions} from 'react-native'
import DataContext from "../context/DataContext";
import ListItem from "./ListItem";
import Button from "./Button";

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const ShoppingCartStyle = {
  backgroundColor: '#FFF',
  borderRadius: 15,
  padding: 20,
  margin: 20,
  marginTop: 80,
  width: w - 40,
  height: h - 120
}
const ShoppingCart = ({ hideWindow }) => {

  const ctx = useContext(DataContext)

  return(
    <View style={ShoppingCartStyle}>
      <FlatList
        data={ ctx.shoppingCart }
        renderItem={({item}) => <ListItem item={item} source={'cart'} />}
        keyExtractor={item => item.id}
      />
      <Button text={"Close"}
              action={ () => hideWindow()} />
    </View>
  )

}

export default ShoppingCart