import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Linking,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Title,
  Text,
  Headline,
  TextInput,
  Paragraph,
  Button,
} from "react-native-paper";
import { styles } from "../styles/styles";
import Modal from "react-native-modal";
import { ScrollView } from "react-native-gesture-handler";
export default class PrivacyModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.props.modalPrivacyVisible}
        onBackdropPress={this.props.privacyModalClose._handlePrivacyModalClose}
      >
        <View style={styles.settingsModalCard}>
          <View
            style={{ marginRight: "60%", marginTop: 10, position: "relative" }}
          >
            <TouchableOpacity
              onPress={this.props.privacyModalClose._handlePrivacyModalClose}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                color="black"
                size={30}
                style={{ marginLeft: 15, marginRight: 15 }}
              />
            </TouchableOpacity>
          </View>
          <Headline> Privacy Information</Headline>
          <View style={styles.settingsInfo}>
            <ScrollView style={{ height: 600 }}>
              <Title>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Title>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://policies.google.com/privacy?hl=en-US"
                  )
                }
              >
                <Title style={{ marginTop: 10, marginLeft: 30 }}>
                  Want to find out more?
                </Title>
                <Image
                  style={{ height: 250, width: 250, marginLeft: 30 }}
                  source={require("../images/PrivacyIcon.jpg")}
                />
              </TouchableOpacity>
              <Paragraph style={{ marginBottom: 20 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </Paragraph>

              <Paragraph style={{ marginBottom: 20 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </Paragraph>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}
