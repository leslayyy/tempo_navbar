import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';


const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/UPang.jpg")}
                        style={{
                            height: 150,
                            width: 150,
                            borderRadius: 100,
                            position: "absolute",
                            top: 135,
                            left: 105,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "0deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/Cite.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            position: "absolute",
                            top: 30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "0deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/CEA.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            position: "absolute",
                            top: 130,
                            left: -30,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "0deg" }
                            ]
                        }}
                    />

                    
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Connect with each other with chatting</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>Calling, Enjoy Safe and private texting</Text>
                    </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome