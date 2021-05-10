import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HeaderText from "../../components/header";
import RandomNewsItem from "../../components/randomNewsItem";
import { setHomeScreenSaga } from "./saga/action";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const randomNewsItems = useSelector(state => state.reducerHomeScreen.randomNewsItems, shallowEqual);

    useEffect(() => {
        dispatch(setHomeScreenSaga());
    }, []);
    return(
        <View style={{flex: 1}}>
            <HeaderText />
            <ScrollView style={{paddingVertical: 10, backgroundColor: 'orange'}}>
                {randomNewsItems.map((item, index) => {
                    console.log('url', item?.url);
                    return <RandomNewsItem 
                        key={index}
                        item={item}
                    />
})}
            </ScrollView>
        </View>
    );
}

export default HomeScreen;