import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback, Text, Button } from 'react-native';
import { Icon } from 'native-base';

const HomeButton = (props) => {
    const {bgCol, icon, onPress, text} = props;
    return(
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
        >
            <View style={[styles.mainButton, {backgroundColor: bgCol}]}>
            <Icon name="home" size={50} />
            <Text style={styles.btnText}>LKLKJ</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

HomeButton.propTypes = {
    bgCol: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func,
    text: PropTypes.string
}

const styles = {
    mainButton: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 10
    },
    btnText: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 16
    },
    btnTextWrap: {
        
    }
}

export default HomeButton;