import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Button, Input, View, Text, HStack, Spinner, Heading } from "native-base";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase/config";

import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [Loading, setLoading] = useState(false);

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [passwordErrorText, setPasswordErrorText] = useState("");
    const [EmailErrorText, setEmailErrorText] = useState("");

    const [LoginButton, setLoginButton] = useState(true);

    const HandleSignup = () => {

        if (email.length == "") {
            setEmailErrorText("Enter Valid email");
            setEmailError(true);
            return;
        }

        if (password != password2) {
            setPasswordErrorText("Password should match!")
            setPasswordError(true);
            return;
        }

        if (password.length < 6) {
            setPasswordErrorText("Minimum 6 character !")
            setPasswordError(true);
            return;
        }



        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        if (email.length > 0 && password.length > 0) {

            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

                alert("Account is created");
                const user = userCredential;
                setLoading(true);

                setEmailError(false);
                setPasswordError(false);
                setEmailErrorText("");
                setPasswordErrorText("");

                AsyncStorage.setItem("UserLogin", "true").then(() => {
                    setLoading(false);
                })
                props.navigation.navigate("Home");


            }).catch((error) => {
                setEmailErrorText("Email already exists!");
                setEmailError(true);
                console.log("Error =>>>", error);
            })

        }
    }

    const HandleSignin = () => {

        if (email.length == "") {
            setEmailErrorText("Please Enter a Valid Email");
            setEmailError(true);
            return;
        }

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        if (email.length > 0 && password.length > 0) {
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);

            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {

                const user = userCredential;
                console.log("Current user details =>>>>>> ", user.UserCredentialImpl);
                setLoading(true);

                AsyncStorage.setItem("UserLogin", "true").then(() => {
                    setLoading(false);
                });

                AsyncStorage.setItem("UserEmail", email).then(() => {
                    setLoading(false);
                });

                setEmailError(false);
                setPasswordError(false);
                setEmailErrorText("");
                setPasswordErrorText("");

                props.navigation.navigate("Home");
                // props.navigation.reset({ index: 0, routes: [{ name: 'Card' }], });
                // props.navigation.navigate("Card");

            }).catch((error) => {
                console.log("Error, ", error);
                setEmailErrorText("Invalid credentials");
                setPasswordErrorText("Invalid credentials");
                setEmailError(true);
                setPasswordError(true);
            })

        };
    };

    return (

        <>

            {Loading ? (
                <View flex={1} justifyContent="center">
                    <HStack space={2} justifyContent="center">
                        <Spinner color="indigo.500" size={25} />
                        <Heading color="indigo.500" fontSize="16px" alignSelf="center" >
                            Loading...
                        </Heading>
                    </HStack>
                </View>
            ) : (
                <View flex={1} justifyContent="center" >


                    <View width="80%" alignSelf="center">
                        <Input height={50} fontSize={15} variant="outline" value={email} onChangeText={(text) => setEmail(text)} placeholder="Email" />
                        {emailError ? (
                            <Text fontSize="12px" color="red.500" >{EmailErrorText}</Text>
                        ) : (null)}

                    </View>

                    <View marginTop="5%"></View>

                    <View width="80%" alignSelf="center">
                        <Input type="password" height={50} fontSize={15} value={password} onChangeText={(text) => setPassword(text)} variant="outline" placeholder="Password" />
                        {passwordError ? (
                            <Text fontSize="12px" color="red.500" >{passwordErrorText}</Text>
                        ) : (null)}
                    </View>

                    <View marginTop="5%"></View>

                    {LoginButton ? (
                        null
                    ) : (
                        <View width="80%" alignSelf="center">
                            <Input type="password" height={50} fontSize={15} value={password2} onChangeText={(text) => setPassword2(text)} variant="outline" placeholder="Confirm Password" />
                            {passwordError ? (
                                <Text fontSize="12px" color="red.500" >{passwordErrorText}</Text>
                            ) : (null)}
                        </View>
                    )}

                    {LoginButton ? (
                        <TouchableOpacity onPress={() => { setLoginButton(false); setEmail(""); setPassword(""); setPassword2(""); }} >
                            <Text color="red.500" alignSelf="center" marginTop="5%" >Click here to signup</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => { setLoginButton(true); setEmail(""); setPassword(""); setPassword2(""); }} >
                            <Text color="red.500" alignSelf="center" marginTop="5%" >Click here to login</Text>
                        </TouchableOpacity>
                    )}



                    <View marginTop="10%"></View>

                    {LoginButton ? (
                        <Button width="30%" alignSelf="center" onPress={() => { HandleSignin() }}>Login</Button>
                    ) : (
                        <Button width="30%" alignSelf="center" onPress={() => { HandleSignup() }}>Signup</Button>
                    )}

                </View>
            )}



        </>
    );
};

export default LoginScreen;