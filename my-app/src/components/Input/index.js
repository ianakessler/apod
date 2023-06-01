import InputMask from 'react-input-mask'
import './input.css'


const Input = (props) =>{

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value)
        console.log(props.value)
    }
    
    return(

        <InputMask
        className='input'
        placeholder={`${year}/${month}/${day}`}
        value={props.value}
        onChange={aoDigitar}
        mask="9999-99-99"
        />

    )

}


export default Input;