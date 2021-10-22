import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import backgrounGradient from '../../../assets/background-gradient.png';
import HeaderButtonGroup from '../../components/HeaderButtonsGroup';
import HomeListItem from '../../components/HomeListItem';
import { showInputAlert, showWarningAlert } from '../../services/AlertService';
import { addCounter } from '../../store/actions';
import { getCounterOrder, getCounters } from '../../store/selectors';
import store from '../../store/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  emptyListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyListText: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: "SourceSansPro",
    marginTop: 24,
    marginBottom: 24
  }
});

export const homeScreenOptions = ({ navigation }) => ({
  headerRight: () => (
    <HeaderButtonGroup buttons={[
      {
        icon: "cog",
        onPress: () => navigation.navigate("Settings")
      },
      {
        icon: "plus",
        onPress: () => {
          showInputAlert({
            title: "Enter counterName",
            success: {
              onPress: text => {
                if (getCounters(store.getState())[text]) {
                  showWarningAlert({ title: "Can't create counter", text: "That name already exists. Please choose another name" })
                } else {
                  store.dispatch(addCounter(text))
                }
              }
            }
          })
        }
      }
    ]} />
  )
});

function HomeScreen({counterOrder}) {
  return (
    <ImageBackground source={backgrounGradient} resizeMode="stretch" style={styles.container}>
      {counterOrder && counterOrder.length ? counterOrder.map((title) => (
        <HomeListItem title={title} key={title}/>
      )) : (
          <View style={styles.emptyListContainer}>
            <FontAwesome5 name="clipboard" size={60} color="rgba(255,255,255,0.5)"/>
            <Text style={styles.emptyListText}>
              You don't have any counters
            </Text>
          </View>
      )}
    </ImageBackground>
  );
}

const mapStateToProps = (state) => ({
  counterOrder: getCounterOrder(state)
});

export default connect(mapStateToProps)(HomeScreen);