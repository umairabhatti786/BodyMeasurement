import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, StatusBar } from "react-native";
import Modal from "react-native-modal";

import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";
import CustomButtom from "../Button";





const CustomModal = ({ isVisible, setIsVisible, onPress }: any) => {

    return (
        <Modal
            animationIn="slideInUp"
            animationOut="slideOutDown"
            isVisible={isVisible}
            backdropColor="rgba(0,0,0,0.1)"
            onBackdropPress={() => setIsVisible(false)}
            onBackButtonPress={() => setIsVisible(false)}
            
        >
            
            <StatusBar
            backgroundColor={"rgba(0,0,0,0.1)"}
            />
            <View
            style={styles.modalOverlay}
            >
                <View
                style={styles.mainContainer}
            >
                <View
                style={{gap:sizeHelper.calWp(20)}}
                >
                    <CustomText
                    text={"Aviso"}
                    size={28}
                    fontFam={fonts.Lato_Bold}
                    fontWeight='700'
                    style={{textAlign:'center'}}
                />
                <CustomText
                    text={"Apagar todos os dados?"}
                    size={24}
                    fontFam={fonts.Lato_Bold}
                    fontWeight='700'
                />
                </View>
                <View style={styles.align}>
                    <TouchableOpacity
                    onPress={onPress}
                        style={styles.selectionZonestyle}
                    >
                        <CustomText
                            text={"Cancelar"}
                            size={26}
                            fontFam={fonts.Lato_SemiBold}
                            fontWeight='600'
                            color={theme.colors.primary}
                            style={{
                                textAlign: 'center'
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.selectionZonestyle}
                    >
                        <CustomText
                            text={"Confirmar"}
                            size={26}
                            fontFam={fonts.Lato_SemiBold}
                            fontWeight='600'
                            color={theme.colors.red}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            
        </Modal>
    );
};

export default CustomModal;

const styles = StyleSheet.create({
    modalOverlay:{
        flex:1,
        justifyContent:'flex-end'
    },
    mainContainer: {
        width: '95%',
        borderWidth: 1,
        borderColor: theme.colors.greydot,
        borderRadius: sizeHelper.calWp(30),
        backgroundColor: theme.colors.white,
        alignSelf: 'center',
        marginTop: sizeHelper.calHp(40),
        alignItems: 'center',
        justifyContent: 'center',
        padding: sizeHelper.calWp(30),
        gap:sizeHelper.calWp(20)
    },
    selectionZonestyle: {
        width: '50%',
        borderWidth: 1,
        borderColor: theme.colors.greydot,
        borderRadius: sizeHelper.calWp(20),
        backgroundColor: theme.colors.white,
        alignSelf: "flex-start",
        marginTop: sizeHelper.calHp(20),
        alignItems: 'center',
        justifyContent: 'center',
        padding: sizeHelper.calWp(20)
    },
    align: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: sizeHelper.calWp(20)
    },
});
