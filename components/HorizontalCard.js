import React from 'react';
import { View, Text, Box, FlatList, Image, HStack, VStack, Center } from 'native-base'

import { TouchableOpacity } from "react-native";

const HorizontalCard = (props) => {

    const arr = [{ "name": "All", "b": 2 }, { "name": "Android", "b": 2 }, { "name": "Cricket", "b": 2 }, { "name": "Iphone", "b": 2 }, { "name": "Google", "b": 2 }]

    return (
        <>

            <View style={{ width: "100%" }}>
                <FlatList
                    data={props.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View width="90%" alignSelf="center" bg="white" my={2} borderRadius="10px" py={2} >
                            <HStack justifyContent="space-between" width="95%" alignSelf="center" >
                                <Text color="#8E8E8E" fontSize="12px" fontWeight="400" >1 day ago</Text>
                                <Center marginRight={1}>
                                    <TouchableOpacity style={{ width: 12, height: 16, justifyContent: "center", borderRadius: 10, alignSelf: "flex-end" }} >
                                        <Image source={require("../assets/images/save.png")} alt="Image" />
                                    </TouchableOpacity>
                                </Center>
                            </HStack>

                            <HStack justifyContent="space-between" width="95%" alignSelf="center" marginTop={2} >

                                <VStack width="50%" >
                                    <Text fontSize="16px" fontWeight="500" >{item.title.slice(0,40)}</Text>
                                    <Text fontSize="14px" fontWeight="400">{item.description?item.description.slice(0, 50):"NA"}</Text>
                                </VStack>

                                <View width="112px" >

                                    <Image source={{
                                        uri: `${item.urlToImage}`
                                    }} alt="image" style={{ width: "100%", height: 118 }} resizeMode="contain" borderRadius="16" />

                                </View>

                            </HStack>

                            <HStack width="95%" alignSelf="center" >
                                <Text color="#E56584" fontSize="12px" fontWeight="400" >{item.author? item.author: "NA"} * </Text>
                                <Text color="#072D4B" fontSize="12px" fontWeight="400" >Daily Beast </Text>
                            </HStack>

                        </View>
                    )}
                />

            </View>

        </>
    );
};



export default HorizontalCard;
