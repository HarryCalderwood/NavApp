import { Row } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  
  //Login screen styles
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  

  inputContainer: {
    flex: 6,
    width: '100%',
    backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginBtnContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    flex: 2,
    width: '100%',
  backgroundColor: "grey",
  justifyContent: 'center',
  alignItems: 'center',
  },

  regBtnContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: "yellow",
    justifyContent: 'center',
    alignItems: 'center',
  },
  

  title: {
    fontSize: 50,
    marginBottom: 60,

  },

  forgot: {
    color: "grey",
    fontSize: 20,
 
  },

  inputText: {
    height: 50,
    fontSize: 20,
    color: "black",
    borderColor: 'black',
    borderWidth: 2,
    paddingLeft: 8,
    borderColor: "black",
  },

  loginBtn: {
    
    backgroundColor: "black",
    borderRadius: 25,
    height: '60%',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },

  regNewUserdBtn: {
    width: "60%",
    backgroundColor: "grey",
    borderRadius: 25,
    height: '35%',
    justifyContent: "center",
    marginTop: 40
  },

  btnText: {
    color: "white",
    fontSize: 20
  },

  inputLabel: {
    fontSize: 20,
    marginBottom: 5,
    color: "grey"
  },
  


  

//Multi component styles
container: {
  height: windowHeight,
},

headerContainer: {
  flex: 2,
  width: '100%',
  backgroundColor: "purple",
  justifyContent: 'center',
  alignItems: 'center',

},

footerContainer: {
  flex: 2,
  width: '100%',
  backgroundColor: "pink",
  justifyContent: 'center',
  alignItems: 'center',

},

//map tab styles
 

  map: {
    ...StyleSheet.absoluteFillObject
  },

  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 40
  },

  cardContainer: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: 200,
    width: 300,
    marginBottom: 100,
    borderRadius: 24
  },

  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  },

  cardText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center'
  },

  cardImage: {
    height: 170,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },


//mapOverlays tab styles
 
  overlayMap: {
  flex: 8,
  height: windowHeight, 
  width: windowWidth
},

  greenText: {
    fontSize: 30,
    color: 'green', 
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: 40
  },

  blueText: {
    fontSize: 30,
    color: 'blue', 
  },

  labelContainer: {
    marginTop: 40,
    flexDirection: 'row',
  },
   
  calloutContainer: {

  }
  
});