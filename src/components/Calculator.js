import  {useState} from 'react';
import ButtonHolder from './UI/ButtonHolder';
import Operations from './UI/Operations';
import Historial from './UI/Historial';

const Calculator = (props) =>{

    const [OperationTxt,SetOperationTxt] = useState('');
    const [solved,SetSolved] = useState(false);
    const [history, SetHistory] =useState('');

    function newOperation(){
        SetSolved(false);
    }

    function UpdateHistory(val){
        SetHistory(history+val);
    }

    function RefreshOperations(val){
        SetOperationTxt(val);
        
        if(val===OperationTxt){         
            //Solve equation
            //Separate the equation in two numbers
            //Get the symbol of operation
            //Solve problem.
            let operator="+"
            let arr;
            let answer=0;
            let op="";         
            if(OperationTxt.includes(operator)){
                arr = OperationTxt.split("+");
                answer = Number(arr[0])+Number(arr[1]);
                op="+";
            }
            operator="-";
            if(OperationTxt.includes(operator)){
                arr = OperationTxt.split("-");
                answer = Number(arr[0])-Number(arr[1]);
                op="-";
            }
            operator="x";
            if(OperationTxt.includes(operator)){
                arr = OperationTxt.split("x");
                answer = Number(arr[0])*Number(arr[1]);
                op="x";
            }
            operator="/";
            if(OperationTxt.includes(operator)){
                arr = OperationTxt.split("/");
                if(arr[1]!=="0"){
                    answer = Number(arr[0])/Number(arr[1]);
                    op="/";
                }
            }
            console.log(answer);
            SetOperationTxt(answer);
            if(op!==""){
                UpdateHistory(arr[0]+" "+op+" "+arr[1]+" = "+ answer+"\n");
            }                
            
            SetSolved(true);          
        }else{
            SetSolved(false);
        }
    }

    return <div>
        <Operations valText={OperationTxt} />
        <ButtonHolder onInputUpdate={RefreshOperations} valSolved={solved} currentVal={OperationTxt} OnNewOperation={newOperation} />
        <Historial innerText={history} />
    </div>
};

export default Calculator;