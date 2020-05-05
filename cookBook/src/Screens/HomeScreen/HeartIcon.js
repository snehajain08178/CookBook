import React, { Component } from 'react';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { orange, white } from './../../Colors/Colors';

class HeartIcon extends Component {
    render() {
        return(
            <View>
                <View>
                    <IconFont name='circle' size={55} color={orange}  />
                </View>
                <View>
                    <IconAnt name='heart' size={25} color={white} style={styles.heart}/>
                </View>
        </View>
        )
    }
}



const styles = StyleSheet.create({
    heart: {
        position: 'relative',
        top: -40,
        left: 10
    }
})

export default HeartIcon;