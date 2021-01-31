import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 16,

  },
  inputView: {
    width: "100%",
    backgroundColor: "green",
    borderRadius: 25,
    height: 100,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },

  forgot: {
    marginTop: 60,
    color: "grey",
    fontSize: 20
  },

  inputText: {
    height: 50,
    fontSize: 20,
    color: "black",
    borderColor: 'black',
    marginBottom: 25,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: "grey",
    width: 250,
    height: 40,
  },

  loginBtn: {
    width: "25%",
    backgroundColor: "black",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 10
  },

  loginText: {
    color: "white"
  },

  body: {
    fontSize: 20,
    marginBottom: 5,
    color: "grey"
  },

  map: {
    ...StyleSheet.absoluteFillObject
  },

  container: {
    height: Dimensions.get('screen').height
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

  ipaText: {
    fontSize: 20,
    color: 'green'

  },

  boldText: {
    fontWeight: 'bold',
    alignItems: 'center'
  },

  stoutText: {
    fontSize: 20,
    color: 'blue'
  },

  labelContainer: {
   

    
   
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: 200,
    width: 300,
    marginBottom: 100,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20
  },
   
  calloutContainer: {
    bottom: 0,
    marginBottom: 40,
    



  }
  



});