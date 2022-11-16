import React from 'react';
import { Box, Image, Text, View, FlatList } from 'native-base';
import { TouchableOpacity } from 'react-native';



const VerticalCard = (props) => {

    const arr = [{ "name": "Bussiness", "b": 2 }, { "name": "Technology", "b": 2 }, { "name": "Sports", "b": 2 }, { "name": "Google", "b": 2 }, { "name": "Fitness", "b": 2 }]
    
    console.log(props.data);

    return (
        <>


            <FlatList
                data={props.data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <>
                        {index < 5 ? (

                            <Box mx={1} style={{ width: 232, height: 311 }} >

                                <Box width="100%" height="100%" mr="2">
                                    <Image source={{
                                        uri: item.urlToImage
                                    }} alt="image" style={{ width: "100%", height: "100%" }} resizeMode="contain" borderRadius="10" />

                                    <Box width="100%" position="absolute" my="2" flexDirection="row" justifyContent="space-around" >
                                        <View width="40%"  >
                                            <TouchableOpacity
                                                onPress={() => { props.query(item.name, index) }}
                                                style={{ width: 75, height: 22, backgroundColor: "#F4F4F4B2", justifyContent: "center", borderRadius: 10 }} >
                                                <Text
                                                    color="#000"
                                                    fontFamily="body"
                                                    fontWeight="400"
                                                    fontSize="12"
                                                    mb="0.5"
                                                    alignSelf="center"
                                                >{arr[index].name}</Text>

                                            </TouchableOpacity>
                                        </View>
                                        <View width="40%" justifyContent="flex-end" alignSelf="flex-end"  >
                                            <TouchableOpacity style={{ width: 12, height: 16, justifyContent: "center", borderRadius: 10, alignSelf: "flex-end" }} >
                                                <Image source={require("../assets/images/save.png")} />
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
                        ) : null}
                    </>

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />


        </>

    );
};

export default VerticalCard;