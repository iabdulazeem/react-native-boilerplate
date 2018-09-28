import React, { Component } from "react";
import { StyleSheet, View, TextInput,Button } from 'react-native';

class PlaceInput extends Component{

    state={
        placeName:""
      };
      placeNameChangeHandler = val => {
        this.setState({
          placeName: val
        })
      }
      placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
          return;
        }
        this.props.onItemAdded(this.state.placeName)
        //following code not coming from rn course, i added that
        this.setState({
            placeName:""
        })
      }

    render(){
        return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            onChangeText={this.placeNameChangeHandler}
            value={this.state.placeName}
            placeholder='An Awesome Placeholder'/>
          <Button
            title='Add'
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}/>
        </View>
        );
    }
    
}

const styles=StyleSheet.create({
    inputContainer: {
        backgroundColor: '#fff',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:"90%"
      },
      placeInput:{
        width:"70%"
      },
      placeButton:{
        width:"30%"
      }
})

export default PlaceInput;