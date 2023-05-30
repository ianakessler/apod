import InputMask from 'react-input-mask'
import './input.css'


const Input = (props) =>{

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value)
        console.log(props.value)
    }
    
    return(

        <InputMask
        className='input'
        placeholder="2023/05/30"
        value={props.value}
        onChange={aoDigitar}
        mask="9999-99-99"
        />

    )

}


export default Input;