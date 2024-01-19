import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Label from "./src/components/Label"
import Button from "./src/components/Button"
import Paragraph from "./src/components/Paragraph"
import Image from "./src/components/Image"
import ImageButton from "./src/components/ImageButton"
import ListItem from "./src/components/ListItem"

export default function App() {

  const item = {
    title: 'iPhone 15',
    price: '$ 500',
    status: 'refurbished',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846357281'
  }


  return (
    <View style={styles.container}>
      <ListItem item={ item } />
      <Image url={ 'https://picsum.photos/300/300' } size={'large'}/>
      <ImageButton  url={ 'https://picsum.photos/200/200' } action={ () => alert('hi mom!') } />
      <Paragraph text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} />
      <Button text={'Click me'} action={ () => alert('hi') }  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
