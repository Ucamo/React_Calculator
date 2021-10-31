
import styles from './Button.module.css';

const Button = (props) => {

    function SetValues() {
        props.parentCallBack(props.buttonText,props.btnType);
    }

    return <button className={styles.btnCalc} type="button" onClick={ SetValues }>{props.buttonText}</button>;
};

export default Button;