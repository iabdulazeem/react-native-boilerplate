import {Navigation} from 'react-native-navigation'

import Icon from 'react-native-vector-icons/Ionicons'


//Start tab based application

const startMainTabs=()=>{
    Promise.all([
        Icon.getImageSource("md-map",25),
        Icon.getImageSource("ios-share-alt",25),
        Icon.getImageSource("ios-menu",25)
    ]).then(sources=>{
        Navigation.startTabBasedApp({
            tabs:[
                {
                    screen:"awesome-places.FindPlace",
                    label:"Find Place",
                    title:"find Place",
                    icon:sources[0],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon:sources[2],
                                title:'Menu',
                                id:'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen:"awesome-places.SharePlace",
                    label:"Share Place",
                    title:"Share Place",
                    icon:sources[1],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon:sources[2],
                                title:'Menu',
                                id:'sideDrawerToggle'
                            }
                        ]
                    }
                }
            ],
            drawer:{
                left:{
                    screen:"awesome-places.SideDrawer"
                }
            }
        })
    })
}

export default startMainTabs;
