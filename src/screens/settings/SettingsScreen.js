import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import backgrounGradient from "../../../assets/background-gradient.png";
import SettingsListItem from "../../components/SettingsListItem";
import { getCounterOrder } from "../../store/selectors";
import { setCounter } from "../../store/actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  emptyListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyListText: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: "SourceSansPro",
    marginTop: 24,
    marginBottom: 24,
  },
});

export const settingsScreenOptions = ({ navigation }) => ({
  title: "Settings",
  headerTitleAlign: "left",
  headerLeft: () => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FontAwesome5
        name="arrow-left"
        size={21}
        style={{ paddingLeft: 16 }}
        color="white"
        onPress={() => navigation.goBack()}
      />
    </View>
  ),
});

const SettingsScreen = ({ counterOrder }) => {
  return (
    <ImageBackground
      source={backgrounGradient}
      resizeMode="stretch"
      style={styles.container}
    >
      {counterOrder && counterOrder.length ? (
        counterOrder.map((title) => (
          <SettingsListItem title={title} key={title} />
        ))
      ) : (
        <View style={styles.emptyListContainer}>
          <FontAwesome5
            name="clipboard"
            size={60}
            color="rgba(255,255,255,0.5)"
          />
          <Text style={styles.emptyListText}>
            You don&apos;t have any counters
          </Text>
        </View>
      )}
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  counterOrder: getCounterOrder(state),
  setCounterDispatch: setCounter,
});

export default connect(mapStateToProps)(SettingsScreen);
