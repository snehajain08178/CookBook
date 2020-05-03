import React, { Component} from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { grey, lightgrey, gainsboro, white, lightblue } from './../../Colors/Colors';
import FoodTypes from './FoodTypes';
import { strings } from './../../Strings/Strings';
import axios from 'axios';
import { connect } from 'react-redux';
import { foodData } from './HomeScreenAction';
import { bindActionCreators } from 'redux';

class HomeScreen extends Component {

    constructor(props){
        super(props)    
    }

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
        pressedIndex : -1
    }


    changeStyleOnPress = (index) => {
        this.setState({
            pressedIndex: index
        })
        axios.get('https://api.spoonacular.com/recipes/search?&apiKey=419c7447ca9346d2940ca0b1907a67c3&type=main course')
            .then((response) => {
                //console.log(JSON.stringify(response.data.results,null,6));
                this.props.onFoodData(response.data.results)
                //console.log(this.props.dataFoodType)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <Text style={styles.welcomeText}>{this.state.pressedIndex === -1 ? strings.WELCOME : this.state.types[this.state.pressedIndex]}</Text>
                <FoodTypes data={this.state} highlightItem={this.changeStyleOnPress} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: white,
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    welcomeText: {
        fontSize: 30,
        marginTop: 20
    }
})

const mapStateToprops = state => {
    return{
        dataFoodType: state.FoodDataTypeReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFoodData : bindActionCreators(foodData,dispatch),
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(HomeScreen);