import { useState , useEffect } from 'react'
import {StyleSheet, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import DataContext from './src/context/DataContext'
import ProductList from "./src/components/ProductList";
import ProductDetail from "./src/components/ProductDetail";

const App = () => {

  const [data, setData] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [currentItem, setCurrentItem] = useState({})

  useEffect( () => {

    fetch('http://192.168.178.43:3000/data')
      .then( response => response.json())
      .then( response => {
          setData(response)
          setCurrentItem(response[0])
          setLoaded(true)
      })
  }, [])

  const renderContent = () => {
    if(isLoaded) {
      return(
        <>
          <ProductDetail />
          <ProductList />
        </>
      )
    }
  }

  return (
    <DataContext.Provider value={{ data, currentItem, setCurrentItem }} >
      <View style={styles.container}>
        { renderContent()  }
      </View>
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
