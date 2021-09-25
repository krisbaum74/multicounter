import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import backgrounGradient from '../../../assets/background-gradient.png';
import HeaderButtonGroup from '../../components/HeaderButtonsGroup';
import HomeListItem from '../../components/HomeListItem';
import { showInputAlert } from '../../services/AlertService';
import { addCounter } from '../../store/actions';
import { getCounterOrder } from '../../store/selectors';
import store from '../../store/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sample: {
    color: "white",
    fontFamily: "SourceSansPro"
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
              onPress: text => store.dispatch(addCounter(text))
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
      {counterOrder.map((title) => (
        <HomeListItem title={title} key={title}/>
      ))}
    </ImageBackground>
  );
}

const mapStateToProps = (state) => ({
  counterOrder: getCounterOrder(state)
});

export default connect(mapStateToProps)(HomeScreen);