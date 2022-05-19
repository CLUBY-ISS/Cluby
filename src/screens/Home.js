import React, { useState ,useEffect} from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from "react-native";
import axios from "axios";

import { Feather } from "@expo/vector-icons";

import {basic,colors } from "../components/utils/styles"

export default function ({ navigation }) {

    //defining the clubdata state
    const [clubs,setClubs] = useState([]);
   
    const [search,setSearch] = useState("");
// FETCHING DATA USING axios
useEffect(()=>{
    axios.get("http://localhost:3000/events")
    .then((response) => {
        console.log(response.data);
        setClubs(response.data)
    })
    .catch((error) => {
        alert(error)
    })
},[]);


    const [active, setActive]= useState(1);
    const showDetails=(item)=> {
        navigation.navigate("Profile");
    };
    const ClubData= [
        {
            name:"All",
            items:[

{
    _id: {
        $oid: "6281250a9da390f2924f6043"
    },
name : "GenZ",
by :"GenZ SMU",
description: "GenZ modeling Club",
image : "https://seeded-session-images.scdn.co/v1/img/artist/66yTxz8Vo6O6NWWuZs9irx/en"
},
                {
                    name:"Libertad",
                    by :"Libertad SMU",
                    
                    image: require("../../assets/Libertad.png"),
                    description:
                      "Libertad Radio Club",
                },
                {
                    name:"Enactus",
                    by :"Enactus SMU",
                    
                    image: require("../../assets/Enactus.png"),
                    description:
                      "Libertad Radio Club",
                },
                {
                    name:"Sports Club",
                    by :"Sports Club SMU ",
                    
                    image: require("../../assets/Sports Club.png"),
                    description:
                      "Sports Club",

                },
                {
                    name:"Comedy Zone Club",
                    by :"Comedy Zone Club SMU",
                    
                    image: require("../../assets/Comedy Zone Club.png"),
                    description:
                      "Comedy Club",

                },
                {
                    name:"Timum Club",
                    by :"Timum Club SMU",
                    
                    image: require("../../assets/Timum Club.png"),
                    description:
                      "Timum Club",

                },
                {
                    name:"Music Club",
                    by :"Music Club SMU",
                    
                    image: require("../../assets/Music.png"),
                    description:
                      "Music Club",

                },
                

            ],
        },
        {
            name:"Sports",
            items:[
                {
                    name:"Sports Club",
                    by :"Sports Club SMU ",
                    
                    image: require("../../assets/Sports Club.png"),
                    description:
                      "Sports Club",

                },

            ],

        },
        {
            name:"Comedy",
            items:[
                {
                    name:"Comedy Zone Club",
                    by :"Comedy Zone Club SMU",
                    
                    image: require("../../assets/Comedy Zone Club.png"),
                    description:
                      "Comedy Club",

                },
            ],
        },
        {
            name:"Psychology",
            items:[]
        },
        {
            name:"Art",
            items:[]
        },
        {
            name:"Timum",
            items:[
                {
                    name:"Timum Club",
                    by :"Timum Club SMU",
                    
                    image: require("../../assets/Timum Club.png"),
                    description:
                      "Timum Club",

                },

            ]
        },
        {
            name:"Music",
            items:[
                {
                    name:"Music Club",
                    by :"Music Club SMU",
                    
                    image: require("../../assets/Music.png"),
                    description:
                      "Music Club",

                },
            ]
        },
    ];
    return (
        <SafeAreaView Style={(basic.body, {paddingBottom :0})}>
            <SafeAreaView style={basic.inputSection}>
               <TextInput
                  placeholder="Search..."
                  placeholderTextColor={colors.placeholder}
                  style={basic.input}
                  value={search}
                  underlineColorAndroid="transparent"
                  onChangeText={
                      (text) => setSearch(text)
                  }
                />
                <Feather name="search" style ={basic.icon} />
                {console.log("ashjh")}
       
            </SafeAreaView>
            <SafeAreaView style={basic.categoryView}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {ClubData.map((category, index) =>{
                        return(
                            <TouchableOpacity
                              key={index}
                              style={basic.category}
                              onPress={() => setActive(index)}
                            >
                                <Text
                                   style={[
                                       basic.categoryText,
                                       active=== index && basic.activeCategory,
                                   ]}
                                >
                                   {category.name}
                                    
                                </Text>
                                {active === index && <View style ={basic.activeBorder} />}
                                
                            </TouchableOpacity>  

                        );
                    })}
          



                </ScrollView>
            </SafeAreaView>
            <ScrollView>
                <SafeAreaView style={basic.itemsView}>
                    {clubs.length !==0 &&
                       clubs.filter((item) =>item.name.toUpperCase().includes(search.toUpperCase()) || item.description.toUpperCase().includes(search.toUpperCase()) ).map((item,index) => {
                           return(
                                <TouchableOpacity
                                 onPress={() => showDetails(item)}
                               
                                 style={[basic.item, index % 2 === 1 && basic.drop] }
                                >
                                    <Image style={basic.itemImage} source={item.image} />
                                    <Text  style={basic.itemTitle}>{item.name} </Text>
                                    <Text  style={basic.itemSub}>by {item.by} </Text> 
                                </TouchableOpacity> 
                            );
                        })} 
                    
                    {!clubs.length && (
                        <Text style={basic.info}> No clubs for now </Text>
                    

                    )}    
                    
                </SafeAreaView>
            </ScrollView>

        </SafeAreaView>
    );

};

