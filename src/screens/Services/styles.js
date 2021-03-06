import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #0B6623;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 25px;
    z-index: 0;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 33px;
    margin-bottom: 25%;
    margin-left: 50px;
`;

export const HeaderTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #58C878;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;