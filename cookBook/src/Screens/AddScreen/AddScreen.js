import React, { Component} from 'react';
import { Text, View } from 'react-native';
import IconSimple from 'react-native-vector-icons/FontAwesome';

class AddScreen extends Component {
    render(){
        return(
            <View style={{backgroundColor:'white',flex:1}}>
                <IconSimple name="rocket" size={30} color="#900" />
            </View>
        )
    }
}

export default AddScreen;