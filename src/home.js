import React,  {Component} from 'react';
import {StyleSheet, Dimensions, Text} from 'react-native';
import { SafeAreaView} from 'react-navigation';
import Map from '../src/components/map';

 const Home = ({navigation})=> {
    
        return(
            <SafeAreaView forceInset={{top: 'always'}}>
                <Map />
               
            </SafeAreaView>         
            );
        }
    

export default Home;