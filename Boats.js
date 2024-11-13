import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    Image: {
        width:200,
        height:250
    },
    Title: {
        fontStyle: 'bold',
        fontSize: 30
    },
    Boat: {
        borderWidth: 1,
        backgroundColor: 'lightblue'
    },
    BoatIcon: {
        color: 'gray'
    }
});

const Boat = ({name, description, picture, iconcolor}) => {
    return (
        <View style={styles.Boat}>
            <Icon name="sailboat" size={50} color={iconcolor} />
            <Text style={styles.Title}>
                {name}
            </Text>
            <Text style={styles.Text}>
                {description}
            </Text>
            <Image source={picture} style={styles.Image}/>
        </View>
    )
}

const AllBoats = () => {
    return (
        <ScrollView>
            <Boat name='Sea Ray 500 Sundancer'
                  description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                  picture={require("../L2Boats/assets/img/sea_ray.jpg")}
                  iconcolor='red'/>

            <Boat name='Four Winns Horizon 180'
                  description='A sporty look and refined details truly set the Horizon 180 above all others.'
                  picture={require("../L2Boats/assets/img/four_winns.jpg")}
                  iconcolor='yellow'/>

            <Boat name='Flipper 640 ST'
                  description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                  picture={require("../L2Boats/assets/img/flipper.jpg")}
                  iconcolor='green'/>

            <Boat name='Princess V48'
                  description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                  picture={require("../L2Boats/assets/img/princess.jpg")}
                  iconcolor='blue'/>

            <Boat name='Bayliner 175 Bowrider'
                  description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                  picture={require("../L2Boats/assets/img/bayliner.jpg")}
                  iconcolor='violet'/>

            <Boat name='Fairline Targa 47'
                  description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                  picture={require("../L2Boats/assets/img/fairline.jpg")}
                  iconcolor='orange'/>
        </ScrollView>
    )
}
export default AllBoats;
