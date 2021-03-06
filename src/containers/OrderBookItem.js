'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const sellTag = ['卖5', '卖4', '卖3', '卖2', '卖1']
const bugTag = ['买1', '买2', '买3', '买4', '买5']
export default class OrderBookItem extends Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    
    render() {
        let i = Number(this.props.rowID)
        let tag = bugTag[i]
        if(this.props.type == 'SELL')
        {
            tag = sellTag[i]
        }
        return (
            <View style={styles.container}>
                <Text style={styles.itemTag}>{tag}</Text>
                <TouchableOpacity>
                    <Text style={styles.itemPrice}>{this.props.rowData['price']}</Text>
                </TouchableOpacity>
                <Text style={styles.itemVolume}>{this.props.rowData['volume']}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    itemTag:{
        marginLeft : 5,
        fontSize : 16,
    },
    itemPrice:{
        marginLeft : 15,
        marginRight : 15,
        fontSize : 16,
        color : 'green'
    },
    itemVolume:{
        fontSize : 16,
    }
})