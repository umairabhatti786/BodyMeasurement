import React, { Children, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, StatusBar, Text, FlatList } from "react-native";
import sizeHelper from "../../utils/Helpers";
import { images } from '../../assets/images';
import { CommonActions } from "@react-navigation/native";
import CustomText from "../../components/Text";
import { theme } from '../../utils/Themes';
import { fonts } from '../../utils/Themes/fonts';


const PermissionCard = ({
    image,
    title,
    sentence
}: any) => {
    return (
    <View>
            <View
            style={styles.card}
        >
            <View
                style={styles.picContainer}
            >
                <Image
                    source={image}
                    style={{
                        width: sizeHelper.calWp(50),
                        height: sizeHelper.calWp(50)
                    }}
                />
            </View>
            <View>
                <CustomText
                    text={title}
                    size={22}
                    fontWeight="700"
                    fontFam={fonts.Lato_Bold}
                />
                <CustomText
                    text={sentence}
                    size={20}
                    fontWeight="600"
                    fontFam={fonts.Lato_SemiBold}
                    color={theme.colors.greytext}
                />
            </View>
        </View>
    </View>
    );
};

export default PermissionCard;


const styles = StyleSheet.create({
    
    card: {
        flexDirection: 'row',
        width: '100%',
        height: sizeHelper.calHp(100),
        backgroundColor: theme.colors.grey,
        borderRadius: sizeHelper.calWp(20),
        padding: sizeHelper.calWp(20),
        gap: sizeHelper.calWp(20),
        marginBottom: sizeHelper.calHp(30)
    },
    picContainer: {
        backgroundColor: theme.colors.white,
        padding: sizeHelper.calWp(16),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: sizeHelper.calHp(70),
        borderRadius: sizeHelper.calWp(20)
    },
});