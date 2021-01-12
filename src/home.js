import React,  {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import { SafeAreaView} from 'react-navigation';
import Map from '../src/components/map';

 
    export default class Home extends React.Component {
        render() {
        return(
            <SafeAreaView forceInset={{top: 'always'}}>
             
            
                <Map />
                
               
            </SafeAreaView>         
            );
     

        }
  }     
