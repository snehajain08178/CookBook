import React, { Component} from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { grey, lightgrey, gainsboro, white, lightblue } from './../../Colors/Colors';
import FoodTypes from './FoodTypes';

class HomeScreen extends Component {

    state={
        types: [
            'main course',
            'side dish',
            'dessert',
            'appetizer',
            'salad',
            'bread',
            'breakfast',
            'soup',
            'beverage',
            'sauce',
            'marinade',
            'fingerfood',
            'snack',
            'drink'
        ],
        pressedIndex : ''
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <FoodTypes data={this.state}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: white,
        flex: 1
    },
})

export default HomeScreen;