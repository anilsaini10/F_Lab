import { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, Dimensions, StyleSheet, ActivityIndicator } from "react-native";
import { View, Text, Button, Image, Center } from "native-base";
import VerticalCard from "../components/VerticalCard";
import HorizontalCard from "../components/HorizontalCard";
import Header from "../components/Header";

import axios from "axios";

var data = [
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Mariella Moon",
        "title": "Award-winning video editing app LumaFusion comes to Android and Chrome OS",
        "description": "LumaFusion, a well-regarded video editing app for iPhones, iPads and Macs, is finally making its way to Android and Chrome OS devices. Shortly after it won best iPad app of the year in 2021, thanks to its ability to make complex video editing easy to do using…",
        "url": "https://www.engadget.com/award-winning-video-editor-lumafusion-android-chrome-os-105529414.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/059f45d0-6014-11ed-bcf3-69279146ba5d",
        "publishedAt": "2022-11-09T10:55:29Z",
        "content": "LumaFusion, a well-regarded video editing app for iPhones, iPads and Macs, is finally making its way to Android and Chrome OS devices. Shortly after it won best iPad app of the year in 2021, thanks t… [+1335 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Emma Roth",
        "title": "How to find your IP address",
        "description": "Here’s how to find your IP address on macOS, iOS, Windows, and Android. We’ll also tell you how to find your public IP address.",
        "url": "https://www.theverge.com/23351435/ip-address-how-to-find-macos-windows-ios-android-iphone",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/s_VneuUp1JLTgoq-1Uqt7DiTUG0=/0x0:2040x1360/1200x628/filters:focal(1039x795:1040x796)/cdn.vox-cdn.com/uploads/chorus_asset/file/23968389/226053_boostWifi.0.jpg",
        "publishedAt": "2022-10-25T13:00:00Z",
        "content": "Samar Haddad / The Verge\r\n\n \n\n An IP (internet protocol) address is a unique string of numbers assigned to every device that can connect to the internet. That includes your phone, laptop, desktop com… [+4692 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Jess Weatherbed",
        "title": "Here’s when your Samsung phone or tablet might get Android 13",
        "description": "A One UI 5.0 release schedule has reportedly appeared on the Korean-language version of Samsung’s Members App, detailing a complete list of Android 13-based releases through February 2023.",
        "url": "https://www.theverge.com/2022/10/26/23424170/android-13-update-samsung-release-schedule",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/Pjm7BEuVYE2KI7w1hxBV622CEhA=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23227357/cwelch_220204_5008_0016.jpg",
        "publishedAt": "2022-10-26T09:41:15Z",
        "content": "The Samsung Galaxy S22 family is expected to recieve the update by the end of October 2022, with additional Samsung devices to follow. | Photo by Chris Welch / The Verge\r\n\n \n\n A One UI 5.0 release sc… [+2226 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gizmodo.com"
        },
        "author": "Florence Ion",
        "title": "Google's Latest Android Messaging Update Has Some iMessage Vibes",
        "description": "Google is turning the Messages app into its own bonafide variation on iMessages. The company’s announcement details a bundle of features coming to the Android app, including emoji reactions for iPhone users and voice message transcriptions. But the kicker is …",
        "url": "https://gizmodo.com/google-adds-exclusive-features-to-android-messaging-1849679026",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/229eda0c8bab91e2365d590c42c3c4bd.png",
        "publishedAt": "2022-10-20T13:00:00Z",
        "content": "Google is turning the Messages app into its own bonafide variation on iMessages. The companys announcement details a bundle of features coming to the Android app, including emoji reactions for iPhone… [+2937 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Jon Porter",
        "title": "Chrome is the next Android app to get tablet-focused updates",
        "description": "Google is rolling out a series of user interface updates for its Chrome browser on Android tablets. They include changes to how Chrome handles tabs and an option to have the browser always request the desktop website.",
        "url": "https://www.theverge.com/2022/10/18/23410418/chrome-android-tablet-app-update-tabs-desktop-website-interface-improvements",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/PXAhUxcBjPM9eV_A5TN1WBMjTfA=/0x0:2142x1200/1200x628/filters:focal(1071x600:1072x601)/cdn.vox-cdn.com/uploads/chorus_asset/file/24087157/Screen_Shot_2022_10_06_at_3.59.45_PM.png",
        "publishedAt": "2022-10-18T17:00:00Z",
        "content": "Google is updating its Android apps ahead of the launch of its Pixel Tablet (pictured) next year. | Image: Google\r\n\n \n\n Google is rolling out a series of user interface updates for its Chrome browser… [+2218 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Mitchell Clark",
        "title": "250 million devices run Android Go — but the new version is more demanding",
        "description": "There are a lot of people running Android Go, but the new version based on Android 13 includes higher RAM requirements along with new features like Material You.",
        "url": "https://www.theverge.com/2022/10/19/23413420/google-android-go-material-you-customization-250-million-users-2gb-ram",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/tXWJgw3k7hv4BKhnRbWFiojI7ck=/0x0:1000x488/1200x628/filters:focal(500x244:501x245)/cdn.vox-cdn.com/uploads/chorus_asset/file/24124627/Material_you_assets.max_1000x1000.png",
        "publishedAt": "2022-10-19T22:13:07Z",
        "content": "250 million devices run Android Go but the new version is more demanding\r\n250 million devices run Android Go but the new version is more demanding\r\n / Android 13 Go adds Material You customization an… [+1957 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Jessica Conditt",
        "title": "Google is rolling out Chrome improvements on Android tablets today",
        "description": "Google has turned its attention to tablets with today's Chrome on Android update, which focuses on improving tab navigation. The update introduces a side-by-side tab design that makes swapping open pages easier, and an auto-scroll back feature that brings you…",
        "url": "https://www.engadget.com/chrome-android-tablet-update-tabs-pixel-170059836.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/eca6c7d0-4f04-11ed-bfcf-bf6d64c9bd30",
        "publishedAt": "2022-10-18T17:00:59Z",
        "content": "Google has turned its attention to tablets with today's Chrome on Android update, which focuses on improving tab navigation. The update introduces a side-by-side tab design that makes swapping open p… [+959 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Barbara Krasnoff",
        "title": "How to record a phone conversation with an Android phone",
        "description": "For legal reasons, Google has disabled the ability to record a phone call on an Android phone, but there are three useful workarounds you can try instead.",
        "url": "https://www.theverge.com/23428368/record-talk-android-google-how-to",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/xJc94SPoOUPPT1cvbVEiGUmK82s=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016604/VRG_Illo_HT007_K_Radtke_Pixel_03__1_.jpg",
        "publishedAt": "2022-11-09T21:17:40Z",
        "content": "Samar Haddad / The Verge\r\n\n \n\n There are a number of legitimate reasons that you’d want to record a phone call. For example, when you’re talking to a medical professional about, say, test results, yo… [+4117 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Cameron Faulkner",
        "title": "Razer’s Edge is one sharp-looking cloud gaming Android handheld",
        "description": "Razer has announced the Edge Wi-Fi and Edge 5G with Verizon. It’s an Android tablet running Qualcomm’s G3X chipset, with a focus on streaming games over the cloud. It’ll debut in January starting at $399.99.",
        "url": "https://www.theverge.com/2022/10/15/23392481/razer-edge-android-cloud-gaming-tablet-qualcomm-price-release-date-specs",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/97_Rxwlk7PUJ6NhrxoFQyj_tN_8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24109967/razeredgehero.jpg",
        "publishedAt": "2022-10-15T18:00:00Z",
        "content": "$399.99 is an aggressive price for a promising Android handheld that has a 6.8-inch OLED screen with 144Hz refresh rate. | Image: Razer\r\n\n \n\n Razer is finally showing off the Edge, its portable Andro… [+2916 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Lifehacker.com"
        },
        "author": "Jake Peterson",
        "title": "You Can Make Your Phone Calls Sound Clearer on Pixel",
        "description": "When Google announced the Pixel 7 and Pixel 7 Pro earlier this month, it revealed new features for Android 13, including Clear Calling. This option makes phone calls easier to hear by reducing background noises and improving vocal quality. Although Clear Call…",
        "url": "https://lifehacker.com/you-can-make-your-phone-calls-sound-clearer-on-pixel-1849699221",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3869f15113f31487f367918ed8a7be85.jpg",
        "publishedAt": "2022-10-25T16:30:00Z",
        "content": "When Google announced the Pixel 7 and Pixel 7 Pro earlier this month, it revealed new features for Android 13, including Clear Calling. This option makes phone calls easier to hear by reducing backgr… [+1792 chars]"
    },
]
const Home = (props) => {



    const [currentButton, setCurrentButton] = useState([true, false, false, false, false]);
    const [searchQuery, setSearchQuery] = useState("all");
    const [refresh, setRefresh] = useState(true);
    const [allNews, setAllNews] = useState([]);
    const [loading, setLoading] = useState(false);


    // This function is used to show to current active button.
    const handleCurrentButton = (index) => {

        var temp = [false, false, false, false, false];
        temp[index] = true;
        setCurrentButton(temp);

    };

    // This function is used to get data(query) from child component (Vertical card).
    const handleQuerySearch = (query, index) => {

        setSearchQuery(query);
        console.log("QUERY =>", query);
        getAllNews();

    }

    const getAllNews = (index) => {

        const url = `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&apiKey=03e5b8eb9f084a3a8630b6ba0fc86b1a`;

        // Make Activity Indicator true.
        setLoading(true);

        axios.get(url).then((res) => {

            res = res.data.articles;

            console.log(res);

            // update the new data.
            setAllNews(res);

            // Make Activity Indicator false.
            setLoading(false);


        }).catch(error => {

            console.log(error);

        })

        setRefresh(!refresh);

    }

    useEffect(() => {

        // getAllNews();

    }, [])


    const arr = [{ "name": "All" }, { "name": "Android" }, { "name": "Cricket" }, { "name": "Iphone" }, { "name": "Google" }]


    return (
        <>
            {loading ? (
                <View flex={1} justifyContent="center" >
                    <ActivityIndicator size="large" color="tomato" />
                    <Text color="tomato" alignSelf="center" >Loading...</Text>
                </View>
            ) : (
                <>
                    <Header />

                    <ScrollView flex={1} zIndex={1} >

                        <View marginTop="5%" ></View>

                        <HorizontalCard data={data} />

                        <View marginTop="15%" ></View>

                    </ScrollView>

                    <TouchableOpacity
                        onPress={() => { props.navigation.navigate("DetailsScreen", { data: arr }) }}
                        style={styles.buttonStyle} >
                        <Center>
                            <Image source={require("../assets/images/earthSearch.png")} width="20px" height="20px" alt="Image" />
                        </Center>
                        <Center>
                            <Text style={styles.buttonTextStyle} >Explore</Text>
                        </Center>
                    </TouchableOpacity>
                </>
            )
            }

        </>
    );
};



export default Home;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#E56584',
        width: 140,
        height: 49,
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        position: 'absolute',
        bottom: 40,
        elevation: 2,
        zIndex: 2,
        flexDirection: "row",
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "700",
        marginLeft: 6
    }
})
