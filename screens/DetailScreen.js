import React from 'react';
import { Box, Image, Text, View, FlatList } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const DetailsScreen = (props) => {

    // console.log(props.route.params.data);

    return (
        <>

            <Box mx={1} style={{ width: "100%", height: "70%", marginTop: 50, flex: 1, backgroundColor: "tranparent" }} >

                <Box width="100%" height="100%" mr="2">
                    <Image source={{
                        uri: "https://www.marketingdirecto.com/wp-content/uploads/2022/10/Hacia-un-nuevo-modelo-de-distribucion-eficiente-y-sostenible.jpg"
                    }} alt="image" style={{ width: "100%", height: "100%" }} resizeMode="contain" borderRadius="10" />


                    <Box width="100%" position="absolute" my="2" marginLeft={2} >
                        <TouchableOpacity onPress={() => { props.navigation.goBack(); }} >
                            <AntDesign name="arrowleft" color="white" size={24} />
                        </TouchableOpacity>
                    </Box>

                    <Box width="100%" position="absolute" marginTop="10%" my="2" flexDirection="row" justifyContent="space-around" >

                        <View width="40%"  >
                            <TouchableOpacity style={{ width: 75, height: 22, backgroundColor: "#F4F4F4B2", justifyContent: "center", borderRadius: 10 }} >
                                <Text
                                    color="#000"
                                    fontFamily="body"
                                    fontWeight="400"
                                    fontSize="12"
                                    mb="0.5"
                                    alignSelf="center"
                                >Technology</Text>

                            </TouchableOpacity>
                        </View>
                        <View width="40%" justifyContent="flex-end" alignSelf="flex-end"  >
                            <TouchableOpacity style={{ width: 20, height: 20, justifyContent: "center", borderRadius: 10, marginRight: 10, alignSelf: "flex-end" }} >
                                <Image source={require("../assets/images/save.png")} alt="Image" />
                            </TouchableOpacity>
                        </View>

                    </Box>

                    <Box position="absolute" bottom="5" px="3">
                        <Text
                            color="#FFC6D3"
                            fontFamily="body"
                            fontWeight="400"
                            fontSize="12"
                            mb="0.5"
                        >10 Hour ago</Text>

                        <Text
                            color="#fff"
                            fontFamily="body"
                            fontWeight="600"
                            fontSize="14"
                            mb="1"
                            ml={1}
                        >Lyft Revenue Grew Last Quarter Though Rider Numbers Were Below Expectations</Text>

                        <Text
                            color="#ffffff"
                            fontFamily="body"
                            fontWeight="400"
                            fontSize="12"
                            mb="0.5"
                            marginTop="1"
                        >Lyft Inc.s stock fell Monday after...</Text>


                        <Box flexDirection="row" marginTop="2">
                            <Text
                                color="#ffffff"
                                fontFamily="body"
                                fontWeight="600"
                                fontSize="10"
                                mb="0.5"
                            >Pratika Rana * </Text>
                            <Text
                                color="#ffffff"
                                fontFamily="body"
                                fontWeight="600"
                                fontSize="10"
                                mb="0.5"
                            >The Wall Street Journal</Text>
                        </Box>

                    </Box>


                </Box>
            </Box >

        </>
    );
};



export default DetailsScreen;
