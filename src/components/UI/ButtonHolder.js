import  {useState} from 'react';
import Button from './Button';
import styles from './Button.module.css';

const ButtonHolder = (props) =>{

    const [input,updateInput] = useState('');

    function InputUpdate(val){
        props.onInputUpdate(val);
    }

    function handleNewOperation(){
        props.OnNewOperation();
    }

    function handleInput(val,type){
        let value= "0";
        
        if(type==="num"|| type==="ope"){
            value=input+val;
        }
        if(type==="cle"){
            value='';
        }
        if(type==="res"){
            value=input;
        }
        if(props.valSolved){
            if(type==="num"|| type==="ope"){
                value=props.currentVal+val;
            }
            handleNewOperation();
            if(value===input){
                value="0";
            }
        }

        updateInput(value);
        console.log(value);
        InputUpdate(value);
    }

    return <div className={styles.buttonHolder}>
    <Button buttonText="7" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="8" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="9" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="/" parentCallBack={handleInput} btnType="ope"/>
    <Button buttonText="4" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="5" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="6" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="x" parentCallBack={handleInput} btnType="ope"/>
    <Button buttonText="1" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="2" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="3" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="+" parentCallBack={handleInput} btnType="ope"/>
    <Button buttonText="0" parentCallBack={handleInput} btnType="num"/>
    <Button buttonText="C" parentCallBack={handleInput} btnType="cle"/>
    <Button buttonText="=" parentCallBack={handleInput} btnType="res"/>
    <Button buttonText="-" parentCallBack={handleInput} btnType="ope"/>
    </div>;
};

export default ButtonHolder;