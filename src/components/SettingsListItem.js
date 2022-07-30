import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Icon, CheckBox } from "@rneui/themed";
import { connect } from "react-redux";
import { getCounters } from "../store/selectors";
import { setVisibility } from "../store/actions";

const SettingsListItem = ({
  counter: {
    title,
    count,
    visibility: { reset, decrease, increase },
  },
  setCounterDispatch,
}) => {
  const [expanded, setExpanded] = useState(false);
  const titleText = "Toggle button visibility";
  const checkBoxColor = "white";
  const setResetVisibility = () => {
    setCounterDispatch({
      title,
      count: count,
      visibility: {
        reset: !reset,
        decrease: decrease,
        increase: increase,
      },
    });
  };
  const setDecreaseVisibility = () => {
    setCounterDispatch({
      title,
      count: count,
      visibility: {
        reset: reset,
        decrease: !decrease,
        increase: increase,
      },
    });
  };
  const setIncreaseVisibility = () => {
    setCounterDispatch({
      title,
      count: count,
      visibility: {
        reset: reset,
        decrease: decrease,
        increase: !increase,
      },
    });
  };

  const onPressAccordianHandler = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <View style={{ marginBottom: 4 }}>
      <ListItem.Accordion
        noRotation={true}
        icon={
          <Icon
            name={"caret-down"}
            color={"white"}
            type="font-awesome-5"
            size={21}
          />
        }
        containerStyle={styles.accordian}
        content={
          <>
            <ListItem.Content style={{ marginLeft: 0 }}>
              <ListItem.Title style={styles.listItemTitle}>
                {title}
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={onPressAccordianHandler}
      >
        <View style={styles.optionsView}>
          <Text style={styles.optionsText}>{titleText}</Text>
          <View style={styles.checkBoxesView}>
            <CheckBox
              containerStyle={styles.checkBoxContainer}
              checkedColor={checkBoxColor}
              uncheckedColor={checkBoxColor}
              center
              titleProps={{
                style: styles.checkBoxTitleStyle,
              }}
              title="Reset"
              checked={reset}
              onPress={setResetVisibility}
            />
            <CheckBox
              containerStyle={styles.checkBoxContainer}
              checkedColor={checkBoxColor}
              uncheckedColor={checkBoxColor}
              center
              titleProps={{
                style: styles.checkBoxTitleStyle,
              }}
              title="Decrease"
              checked={decrease}
              onPress={setDecreaseVisibility}
            />
            <CheckBox
              containerStyle={styles.checkBoxContainer}
              checkedColor={checkBoxColor}
              uncheckedColor={checkBoxColor}
              center
              titleProps={{
                style: styles.checkBoxTitleStyle,
              }}
              title="Increase"
              checked={increase}
              onPress={setIncreaseVisibility}
            />
          </View>
        </View>
      </ListItem.Accordion>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  counter: getCounters(state)[ownProps.title],
});

const mapDispatchToProps = {
  setCounterDispatch: setVisibility,
};

const styles = StyleSheet.create({
  checkBoxTitleStyle: { color: "#F5F5F5", fontFamily: "SourceSansPro" },
  checkBoxesView: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 5,
  },
  optionsView: {
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  checkBoxContainer: {
    paddingLeft: 0,
    marginLeft: 0,
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: "#F5F5F500",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 4,
    alignItems: "center",
  },
  accordian: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 12,
  },
  optionsText: {
    color: "#F5F5F5",
    fontFamily: "SourceSansPro",
    textAlign: "left",
  },
  listItemTitle: {
    color: "#F5F5F5",
    fontWeight: "400",
    fontFamily: "SourceSansPro",
    marginLeft: 0,
    fontSize: 14,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsListItem);
