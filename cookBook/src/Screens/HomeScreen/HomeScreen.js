import React, { Component} from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { grey, lightgrey, gainsboro, white, lightblue, black } from './../../Colors/Colors';
import FoodTypes from './FoodTypes';
import { strings } from './../../Strings/Strings';
import axios from 'axios';
import { connect } from 'react-redux';
import { foodData } from './HomeScreenAction';
import { bindActionCreators } from 'redux';
import FoodTypeItems from './FoodTypeItems';
import IconAnt from 'react-native-vector-icons/AntDesign';

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
        axios.get(`https://api.spoonacular.com/recipes/search?&apiKey=419c7447ca9346d2940ca0b1907a67c3&type=${this.state.types[index]}`)
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
                <View>
                <View style={styles.searchIcon}>
                    <IconAnt name='search1' size={25} color={black} />
                </View>
                <Text style={styles.welcomeText}>{this.state.pressedIndex === -1 ? strings.WELCOME : this.state.types[this.state.pressedIndex]}</Text>
                </View>
                {this.state.pressedIndex ==-1 ?  <Image style={styles.image} source={{uri : 'https://d1cbe14be5894c8dcc3d-8a742a0d46bf003746b2a98abb2fa3cf.ssl.cf2.rackcdn.com/wp-content/uploads/2015/07/why-am-i-always-hungry-1.jpg'}} /> : <FoodTypeItems data={this.props.dataFoodType.foodTypeData} /> }
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
    searchIcon: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 4
    },
    welcomeText: {
        fontSize: 30,
        marginTop: 0,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 350
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