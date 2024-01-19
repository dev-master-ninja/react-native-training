import { Image as ExpoImage } from 'expo-image';

const ImageStyle = {
  small: { width: 50, height: 50},
  medium:  { width: 150, height: 150},
  large: { width: 250, height: 250},
}

const Image = ({ url, size }) => {

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return(
    <ExpoImage
      style={ImageStyle[size]}
      source={ url }
      placeholder={blurhash}
      contentFit="cover"
      transition={1000}
    />
  )

}

export default Image