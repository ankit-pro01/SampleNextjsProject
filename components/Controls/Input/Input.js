import styled from "styled-components";
import ErrorWrapper from "../../ErrorsWrapper/ErrorWrapper";



const StyledInput = styled.div`
    display: flex;
    flex-flow: column;

    & input{
        margin-bottom: 20px;
        outline: 0;
        height: 25px;
        position: relative;
        border-width :  0px 0px 2px 0px;
        border-color: ${(props) => { console.log("props", props) ; return props.errors ? "red": "grey"}};


        &:focus{
            border-color: #87CEEB;
        }

        &:not([value = ""]){
            border-color: #87CEEB;
            border-color: ${props => props.errors ? "red": "#87CEEB"};

        }
    }

    & :not([value = ""]) + label{
        margin-top: -12px;
        color: #87CEEB;


    }

    &:focus-within label{
        color : #87CEEB;
        margin-top: -12px;

    }
    & label {
        display: flex;
        pointer-events: none;
        color : grey;
        position: absolute;
        z-index: 1;
        font-size: small;
    }
`

export default function Input(props){

    const { name, label, errors, validate , ...others } = props;

    return(
            <StyledInput >
                <input name = {name} errors = {errors}  {...others}/>
                {(errors[name] && validate)? <ErrorWrapper error = {errors[name]}/>: null}
                <label>{label}</label>

            </StyledInput>
    )
}