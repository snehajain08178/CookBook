import React, { Component} from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { grey, lightgrey, gainsboro, white, lightblue } from './../../Colors/Colors';

class FoodTypes extends Component {

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

    changeStyleOnPress = (index) => {
        this.setState({
            pressedIndex: index
        })
    }

    render(){
        return(
            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.types}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({item,index}) => (
                        <View style={ index === this.state.pressedIndex ? styles.flatListViewContainerPressed : styles.flatListViewContainer } >
                            <TouchableOpacity style={index === this.state.pressedIndex ? styles.flatListContainerPressed : styles.flatListContainer} onPress={() => this.changeStyleOnPress(index)}>
                                <Text style={styles.typesText}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatListViewContainer: {
        paddingHorizontal: 10,
        marginTop: 15
    },
    flatListViewContainerPressed: {
        paddingHorizontal: 10,
    },
    flatListContainerPressed: {
        backgroundColor: lightblue,
        borderRadius: 10,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    flatListContainer: {
        backgroundColor: gainsboro,
        borderRadius: 10,
        height: 120,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    typesText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})


export default FoodTypes