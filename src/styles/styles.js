import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height

export const styles=StyleSheet.create({
center: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    fontSize:36,
    marginBottom: 16,
}


});