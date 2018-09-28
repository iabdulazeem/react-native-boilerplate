import React from 'react';
import { StyleSheet,ScrollView } from 'react-native';

import Listitem from '../Listitem/Listitem'

const PlaceList= (props) => {
    const placesOutput=props.places.map(place => (
    <Listitem
     key={place.key}
     placeName={place.name}
     placeImage={place.image}
     onItemPressed={ () => props.onItemSelected(place.key)}/>
    ));
     return <ScrollView style={styles.listItemContainer}>{placesOutput}</ScrollView>
}


const styles=StyleSheet.create({
    listItemContainer:{
        width:"100%"
      }
})

export default PlaceList;