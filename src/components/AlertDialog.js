import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { hideAlert } from '../store/actions';
import { getAlertContent, getAlertType, isAlertShown } from '../store/selectors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: 'white',
    width: 250,
    borderRadius: 8,
  },
  text: {
    fontFamily: 'SourceSansPro',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 8,
  },
  textInput: {
    margin: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#80808088',
    fontFamily: 'SourceSansPro',
    fontSize: 16,
  },
  title: {
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  mainBody: {
    backgroundColor: 'white',
  },
  buttons: {
    flexDirection: 'row',
    backgroundColor: '#80808044',
  },
  button: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  buttonMarginRight: {
    marginRight: 2,
  },
  buttonRadiusLeft: {
    borderBottomLeftRadius: 8,
  },
  buttonRadiusRight: {
    borderBottomRightRadius: 8,
  },
});

function AlertDialog({
  visible, type, title, contentText, success, cancel, hideAlert: closeAlert,
}) {
  const [text, setText] = useState();
  if (!visible) {
    return null;
  }
  const onButtonPress = (button) => {
    closeAlert();
    if (button && button.onPress) {
      if (type === 'Text') {
        button.onPress();
      } else {
        button.onPress(text);
      }
    }
  };
  return (
    <View style={styles.background}>
      <View style={styles.alertBox}>
        <Text style={[styles.title, styles.text]}>
          {title || 'Are you sure?'}
        </Text>
        <View style={styles.mainBody}>
          {type === 'Input' ? (
            <TextInput value={contentText} onChangeText={setText} style={styles.textInput} />
          ) : (
            <Text style={styles.text}>
              {contentText}
            </Text>
          )}
        </View>
        {type === 'Warning' ? (
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.buttonRadiusRight, styles.buttonRadiusLeft]}
              onPress={() => onButtonPress(success)}
            >
              <Text style={styles.text}>
                {(success && success.text) || 'OK' }
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.buttonMarginRight, styles.buttonRadiusLeft]}
              onPress={() => onButtonPress(cancel)}
            >
              <Text style={styles.text}>
                {(cancel && cancel.text) || 'Cancel' }
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonRadiusRight]}
              onPress={() => onButtonPress(success)}
            >
              <Text style={styles.text}>
                {(success && success.text) || 'Yes' }
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  const {
    title, text, success, cancel,
  } = getAlertContent(state) || {};
  return {
    visible: isAlertShown(state),
    type: getAlertType(state),
    title,
    contentText: text,
    success,
    cancel,
  };
};

const mapDispatchToProps = {
  hideAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);
