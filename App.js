import { useState , useEffect } from 'react'
import {StyleSheet, View, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './src/components/Button'

import DataContext from './src/context/DataContext'
import ProductList from "./src/components/ProductList";
import ProductDetail from "./src/components/ProductDetail";
import ShoppingCart from "./src/components/ShoppingCart";

const App = () => {

  const [data, setData] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [currentItem, setCurrentItem] = useState({})
  const [shoppingCart, setShoppingCart] = useState([])
  const [showShoppingCart, setShowShoppingCart] = useState(false)

  const updateShoppingCart = (item) => {
    setShoppingCart(p => ([...p, item]))
  }

  const removeFromCart = (item) => {
    const s = shoppingCart.filter(current => current.id !== item.id)
    setShoppingCart(s)
  }

  useEffect( () => {

    fetch('http://192.168.178.43:3000/data')
      .then( response => response.json())
      .then( response => {
          setData(response)
          setCurrentItem(response[0])
          setLoaded(true)
          // setShoppingCart(response)
      })
  }, [])

  const renderContent = () => {
    if(isLoaded) {
      return(
        <>
          <ProductDetail />
          <ProductList />
          <Button text={"Show Shopping Cart"}
                  action={ () => setShowShoppingCart(true)} />
        </>
      )
    }
  }

  return (
    <DataContext.Provider value={{ data,
                                   currentItem,
                                   setCurrentItem,
                                   shoppingCart,
                                   updateShoppingCart,
                                   removeFromCart
                                }} >
      <View style={styles.container}>
        { renderContent()  }
      </View>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={showShoppingCart}
      >
          <ShoppingCart hideWindow={ () => setShowShoppingCart(false)}/>

      </Modal>
    </DataContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
