import { useRouter } from "next/router";
import styled from "styled-components";
import Container from "../../components/Container/Container";
import Controls from "../../components/Controls/Controls";
import ErrorWrapper from "../../components/ErrorsWrapper/ErrorWrapper";
import { Form, useForm } from "../../components/Form/form";
import Layout from "../../components/Layout/Layout";


const initialValues = {
    email : "",
    password : ""
}

const Content = styled.div`
    width: 100%;
    display: flex;
    padding: 40px;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;

    & form{
        margin: 10px;
        display: flex;
        width: 40%;
        flex-direction: column;

        @media (max-width: 425px){
            width: 100%
        } 
    }
`

export default function Login(){
    const route = useRouter()
    const {values, errors, setErrors, handleInputChange} = useForm(initialValues);


    const validate = (fieldValues = values) => {
        let validation = false
        const storage = window.sessionStorage;
        const username = storage.getItem('username')
        const password = storage.getItem('password')

        if(fieldValues.email === username)
            if(fieldValues.password === password)
            validation = true
        
        return validation
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate()){
            setErrors({"Login" : ""});
            route.push("/products")
        }
        else{
            setErrors({"Login" : "Invalid Credentials"})
        }
    }


    return(
        <Layout>
            <Container>
            <Content>
                <div className = "login-title">
                    <h5>Login</h5>
                    <p>Get Access to your wishlist recommendation </p>
                </div>
                <Form onSubmit = {handleSubmit}>
                    <Controls.Input 
                        name = "email"
                        label = "Email"
                        errors = {errors}
                        value = {values.email}
                        onChange = {handleInputChange}/>

                    <Controls.Input 
                        name = "password" 
                        label = "Password"
                        errors = {errors}
                        value = {values.password}
                        onChange = {handleInputChange}/>

                    {errors ? <ErrorWrapper error = {errors["Login"]}/> : null}

                    <Controls.Button type = "Submit" >Login</Controls.Button>
                </Form>
            </Content>
            </Container>
        </Layout>
    )
}