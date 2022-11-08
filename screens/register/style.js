import styled from "styled-components/native";

const Input = styled.TextInput`
    width: 60%;
    padding: 15px;
    border-radius: 30px;
    border: 1px solid black;
`
const Title = styled.Text`
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: bold;
`

const Button = styled.TouchableOpacity`
    width: 40%;
    paddingVertical: 25px;
    background-color: #05668d;
    margin-top: 35px;
    margin-bottom: 30px;
    borderRadius: 25px;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    text-align: center;
    fontWeight: 800;
    color: #fff;
`;

const Campo = ({title, placeholder, keyboardType, value, onChangeText}) => {
    return (<>
        <Title>{title}</Title>
        <Input placeholder={placeholder} keyboardType={keyboardType} value={value} onChangeText={onChangeText}/>

    </>)
}

const Btn = ({onPress, Title}) => {
    return (<>
        <Button onPress={onPress}>
            <ButtonText>{Title}</ButtonText>
        </Button>
    </>)
}

export { Campo, Btn }