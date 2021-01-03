import React,  {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

class Detail extends Component {

    render () {
        return (
            console.log(this.props),
            <View style={styles.center}>
                <Text style={styles.title}>{this.props.route.params.screenName}
                </Text>
                <Button        
                title='View Top Tabs'
                onPress={() => this.props.navigation.navigate('Top Tabs', {name: "param 1"})}
                />
                <Button
                title='View Bottoms Tabs'
                onPress={() => this.props.navigation.navigate('Bottom Tabs', {name: "param 2"})}
                />
                    <Button
                title='Pass Data Back'
                onPress={() => this.props.navigation.navigate('Home', {data: "Hello"})}
                />
            </View>
        );
        }
    }

export default Detail;