import React, {Component} from 'react'
import {View} from 'react-native'

import PlaceInput from '../../components/PlaceInput/PlaceInput'

import {connect} from 'react-redux'
import {addPlace} from '../../store/actions/index'


class SharePlace extends Component{

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = event =>{
        if(event.type==="NavBarButtonPress"){
            if(event.id==="sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side:"left"
                });
            }
        }
    }

    placeAddedHandler=placeName=>{
        this.props.onAddPlace(placeName);
    }
    render (){
        return(
            <View>
                <PlaceInput onItemAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onAddPlace: (placeName)=>dispatch(addPlace(placeName))
    };
}

export default connect(null,mapDispatchToProps)(SharePlace);