import { StyleSheet, Dimensions, StatusBar } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  //Login screen styles

  inputContainer: {
    flex: 6,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  regBtnContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    paddingTop: "12%",
  },

  forgotPassword: {
    color: "black",
    fontSize: 20,
    marginTop: "5%",
  },

  inputText: {
    height: "20%",
    fontSize: 20,
    color: "black",
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 8,
    borderColor: "black",
    width: "60%",
  },

  loginBtn: {
    backgroundColor: "black",
    borderRadius: 25,
    height: "40%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  regNewUserdBtn: {
    width: "60%",
    backgroundColor: "grey",
    borderRadius: 25,
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontSize: 20,
  },

  inputLabel: {
    fontSize: 20,
    marginBottom: 5,
    color: "grey",
  },

  //Multi component styles
  container: {
    flex: 1,
  },

  scrollView: {},

  switchView: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },

  textInput: {
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  flexHalfContainer: {
    flex: 0.7,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  flex1Container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  flex2Container: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  flex3Container: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  flex4Container: {
    flex: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  flex12Container: {
    flex: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
  },

  center: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  footerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  //map tab styles

  infoModalTextContainer: {
    flex: 1,
    paddingTop: 30,
    paddingRight: 10,
    paddingLeft: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  infoImage: {
    justifyContent: "center",
    width: 100,
    height: 150,
  },

  mapView: {
    height: "100%",
    width: "100%",
    flex: 10,
  },

  map: {
    flex: 6,
  },

  carousel: {
    position: "absolute",
    bottom: 0,
  },

  cardContainer: {
    backgroundColor: "rgba(0,0,0,0.9)",
    height: 200,
    width: 300,
    marginBottom: 10,
    borderRadius: 24,
  },

  cardTitle: {
    color: "white",
    fontSize: 22,
    alignSelf: "center",
  },

  cardText: {
    color: "white",
    fontSize: 16,
    alignSelf: "center",
  },

  cardImage: {
    height: 170,
    width: 300,
    bottom: 0,
    position: "absolute",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  modal: {
    justifyContent: "center",
    alignItems: "center",
  },

  infoModalCard: {
    flex: 1,
    height: "80%",
    borderColor: "white",
    borderWidth: 2,
    marginTop: "20%",
    marginBottom: "10%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  editModalCard: {
    height: "70%",
    borderColor: "white",
    borderWidth: 2,

    marginTop: "20%",

    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  // briefing page

  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    marginRight: 10,
  },
  briefingCard: {
    marginBottom: 5,
    marginTop: 5,
  },

  //mapOverlays tab styles

  overlayMap: {
    flex: 8,
    height: windowHeight,
    width: windowWidth,
  },

  greenText: {
    fontSize: 30,
    color: "green",
  },

  boldText: {
    fontWeight: "bold",
    fontSize: 40,
  },

  blueText: {
    fontSize: 30,
    color: "blue",
  },

  labelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#ebedf0",
  },

  calloutContainer: {
    borderColor: "red",
  },

  //Camera

  camera: {},

  //Settings

  optionRow: {
    borderBottomColor: "black",
    borderWidth: 1,
    flex: 1,
    marginBottom: "2%",
    marginTop: "2%",
  },
  surface: {
    padding: 8,
    height: 80,
    marginTop: 10,
    width: "100%",
    paddingLeft: 20,
    justifyContent: "center",
    elevation: 4,
  },
  surfaceText: {
    fontSize: 20,
  },
});
