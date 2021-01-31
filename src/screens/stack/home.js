import React from 'react';
import { SafeAreaView } from 'react-navigation';
import Map from '../bottomTabs/map.js';

export default class Home extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }}>
                <Map/>
            </SafeAreaView>
        );
    }
}     
