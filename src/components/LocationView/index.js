import {ListItem, Image, Name, Desc} from './styledComponents'

const LocationView = props => {
  const {locationData} = props
  const {name, imageUrl, description} = locationData

  return (
    <ListItem>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <Desc>{description}</Desc>
    </ListItem>
  )
}

export default LocationView
