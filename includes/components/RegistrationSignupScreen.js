import React, { Component } from 'react';

import {
    Image,
    Text,
    TextInput,
    View,
    StyleSheet,
    Button,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const registrationBackground = require('../../assets/images/registration_background.png');
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class RegistrationLoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            confirmEmail: '',
            password: '',
        };
    }

    signup() {
        //do something
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={registrationBackground}>
                    <Image style={{ width: width*.7, height: 75, alignItems: 'center', overflow: 'visible', marginBottom: 30 }} source={require('../../assets/images/header-mobile-lg.png')} />
                    <View>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(email) => this.setState({email})}
                            placeholder="Email"
                            value={this.state.email}
                        />
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(confirmEmail) => this.setState({confirmEmail})}
                            placeholder="Verify email"
                            value={this.state.confirmEmail}
                        />
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(password) => this.setState({password})}
                            placeholder="Password"
                            value={this.state.password}
                        />
                        <TouchableOpacity onPress={this.signup}>
                            <View style={styles.rectangularButton}>
                                <Text style={styles.standardText}>Sign up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    standardText: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    inputText: {
        height: 40,
        width: width*.8,
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
        marginBottom: 10,
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#1daecd',
        textAlign: 'center'
    },
    rectangularButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 45,
        width: width*.8,
        backgroundColor: "#1daecd",
        marginBottom: 10,
        padding: 5,
    }
});