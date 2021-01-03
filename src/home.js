import React,  {Component} from 'react';
import {StyleSheet, Dimensions, Text} from 'react-native';
import { SafeAreaView} from 'react-navigation';
import Map from '../src/components/map';

 Home = ()=> {
    
        return(
            <SafeAreaView forceInset={{top: 'always'}}>
                <Map />
                <Text>Test</Text>
            </SafeAreaView>         
            );
        }
    

export default Home;