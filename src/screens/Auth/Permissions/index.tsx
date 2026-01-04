import React, { Children, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, StatusBar, Text, FlatList } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { images } from "../../../assets/images";
import { CommonActions } from "@react-navigation/native";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButton from "../../../components/Button";

const cards = [
    {
        Image: images.camera,
        title: "Câmera",
        sentence: 'Para captar fotos do seu corpo'
    },
    {
        Image: images.motion_sensor,
        title: "Motion Sensors",
        sentence: 'Para detetar o ângulo da câmara'
    }
]

const Permissions = ({ navigation }: any) => {

    return (
        <>
            <ScreenLayout>
                <View
                    style={{
                        paddingHorizontal: sizeHelper.calWp(10)
                    }}
                >
                    <View>
                        <View style={styles.shieldContainer}>
                            <Image
                                source={images.shield}
                                style={{
                                    width: sizeHelper.calWp(55),
                                    height: sizeHelper.calWp(55)
                                }}
                            />
                        </View>
                        <CustomText
                            text={"Permissões Necessárias"}
                            size={45}
                            fontWeight="700"
                            fontFam={fonts.PlayfairDisplay_Bold}
                            style={{
                                marginTop: sizeHelper.calHp(30)
                            }}
                        />
                        <CustomText
                            text={"Para captar as suas medidas, precisamos de acesso à câmara e aos sensores de movimento do seu dispositivo."}
                            size={20}
                            fontWeight="600"
                            color={theme.colors.greytext}
                            fontFam={fonts.Lato_Medium}
                            style={{
                                marginTop: sizeHelper.calHp(30),
                                marginBottom: sizeHelper.calHp(250),
                            }}
                        />
                    </View>
                    <FlatList
                        data={cards}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item, index }) =>
                                <View
                                    style={styles.card}
                                >
                                    <View
                                        style={styles.picContainer}
                                    >
                                        <Image
                                            source={item.Image}
                                            style={{
                                                width: sizeHelper.calWp(50),
                                                height: sizeHelper.calWp(50)
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <CustomText
                                            text={item.title}
                                            size={22}
                                            fontWeight="700"
                                            fontFam={fonts.Lato_Bold}
                                        />
                                        <CustomText
                                            text={item.sentence}
                                            size={20}
                                            fontWeight="600"
                                            fontFam={fonts.Lato_SemiBold}
                                            color={theme.colors.greytext}
                                        />
                                    </View>
                                </View>
                        }
                    />
                    <View
                        style={styles.buttonView}
                    >
                        <CustomButton
                            text="Permitir o acesso"
                            onPress={()=>navigation.navigate("GDPR")}
                        />
                    </View>
                    <View
                        style={{
                            padding: sizeHelper.calWp(20)
                        }}
                    >
                        <Text
                            style={styles.text}
                        >
                            Ao continuar, você concorda com nossos
                            <CustomText
                                size={18}
                                text={" Termos de Serviço "}
                                color={theme.colors.primary}
                                textDecorationLine="underline"
                                fontFam={fonts.Lato_Medium}
                                fontWeight="600"
                                />
                            e
                            <CustomText
                                size={18}
                                text={"  Política de Privacidade. "}
                                color={theme.colors.primary}
                                fontWeight="600"
                                textDecorationLine="underline"
                                fontFam={fonts.Lato_Medium}
                                
                                />
                        </Text>
                    </View>
                </View>
            </ScreenLayout>
        </>
    );
};

export default Permissions;

const styles = StyleSheet.create({
    text: {
        color: theme.colors.greytext,
        fontSize: sizeHelper.calHp(18),
        fontWeight: "600",
        fontFamily: fonts.Lato_Medium,
        textAlign: 'center',
        marginTop: sizeHelper.calHp(24),
    },
    shieldContainer: {
        backgroundColor: theme.colors.primary,
        width: sizeHelper.calWp(130),
        height: sizeHelper.calWp(130),
        borderRadius: sizeHelper.calWp(999),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: theme.colors.primary,
        elevation: 20,
        shadowOpacity: 1,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: sizeHelper.calHp(50)
    },
    card: {
        flexDirection: 'row',
        width: '100%',
        height: sizeHelper.calHp(100),
        backgroundColor: theme.colors.grey,
        borderRadius: sizeHelper.calWp(20),
        padding: sizeHelper.calWp(20),
        gap: sizeHelper.calWp(20),
        marginBottom:sizeHelper.calHp(30)
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
    buttonView: {
        marginTop: sizeHelper.calHp(300),
        gap: sizeHelper.calWp(30)
    }
});
