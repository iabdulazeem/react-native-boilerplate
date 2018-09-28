import React,{Component} from 'react';
import {connect} from 'react-redux'
import { View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/dist/Ionicons';

import {deletePlace} from '../../store/actions/index'

class PlaceDetails extends Component{
    onDeleteHandler=()=>{
        this.props.onDeletePlace(this.props.selectedPlace.key)
        this.props.navigator.pop({
            animated: true,
            animationType: 'fade'
        });
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{this.props.selectedPlace.name} </Text>
                </View>
                <View >
                    <TouchableOpacity onPress={this.onDeleteHandler}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name="ios-trash" color="blue"/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View> 
        )
    }
};

const styles=StyleSheet.create({
    container:{
        margin: 20
    },
    placeImage:{
        width: "100%",
        height: 200
    },
    placeName:{
        fontWeight: "bold",
        textAlign:"center",
        fontSize:25,
        margin:10
    },
    deleteButton:{
        alignItems:"center"
    }
});

const mapDispatchToProps=dispatch=>{
    return{
        onDeletePlace : key => dispatch(deletePlace(key))
    }
}

export default connect(null,mapDispatchToProps)(PlaceDetails);