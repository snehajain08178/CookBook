import React, { Component } from 'react';
import { Text, View ,TouchableOpacity, FlatList, StyleSheet,Image } from 'react-native';
import { grey, lightgrey, gainsboro, white, lightblue } from './../../Colors/Colors';
import axios from 'axios';
import HeartIcon from './HeartIcon';

class FoodTypeItems extends Component {

    recipieApi = (id) => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=419c7447ca9346d2940ca0b1907a67c3`)
            .then((response) => {
                // console.log("re...........",JSON.stringify(response,null,6))
            })
            .catch((error) => console.log("error",error))
    }

    render(){
        return(
            <View>
                <FlatList 
                    data={this.props.data}
                    horizontal={true}
                    keyExtractor={(index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item,index}) => (
                        <View style={styles.flatlistViewContainer}>
                            <TouchableOpacity style={styles.flatlistMainContainer} onPress={() => this.recipieApi(item.id)}>
                                <View style={styles.heartIcon}>
                                    <HeartIcon />
                                </View>
                                <View style={styles.imageView}>
                                    <Image style={styles.image} source={{uri: `https://spoonacular.com/recipeImages/${item.image}`}}/>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.time}>Time: {item.readyInMinutes} mins</Text>
                                    <Text style={styles.time}>Servings: {item.servings}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatlistViewContainer: {
        paddingHorizontal: 20,
    },
    flatlistMainContainer: {
        width: 200,
        height: 370,
        backgroundColor: lightblue,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    heartIcon:{
        marginLeft: -15
    },
    imageView: {
        marginTop: -75
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginLeft: 100
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    time: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 5
    },
})

export default FoodTypeItems;