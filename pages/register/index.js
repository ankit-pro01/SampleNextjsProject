import { useRouter } from "next/router";
import styled from "styled-components";
import Container from "../../components/Container/Container";
import Controls from "../../components/Controls/Controls";
import { Form, useForm, } from "../../components/Form/form";
import Layout from "../../components/Layout/Layout";

const initialValues = {
    firstName : "",
    lastName : "",
    email: "",
    password: "",
    confirmPassword: "",
}



const Content = styled.div`
    width: 100%;
    display: flex;
    padding: 40px;
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



export default function Register(){

    const route = useRouter()

    const { values, errors, setErrors, handleInputChange} = useForm(initialValues);

    const isEmpty = Object.values(values).every(x => x !== '');


    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('firstName' in fieldValues)
            temp.firstName =  fieldValues.firstName.length >= 3 ? "" : "Invalid"
        
        if ('lastName' in fieldValues)
            temp.lastName =  fieldValues.lastName.length >= 3 ? "" : "Invalid"

        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "email is incorrect."

        if ('password' in fieldValues)
            temp.password =  fieldValues.password > 6 ? "" : "Password should be greater than 6."

        if ('confirmPassword' in fieldValues)
            temp.confirmPassword =  fieldValues.confirmPassword === fieldValues.password ? "" : "Password did not match."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }



    const storeUserSession = () => {
        const appStorage = window.sessionStorage;
        
        appStorage.setItem('username', values.email);
        appStorage.setItem('password', values.password);

        route.push("/products")

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate()){
            storeUserSession()
        }
    }

    return(
        <Layout>
            <Container>
            <Content>

                <div>
                    <h5>SignUp</h5>
                    <p>We do not share details with any body</p>
                </div>

                <Form onSubmit = {handleSubmit}>
                    <Controls.Input 
                        name = "firstName"
                        label = "First Name"
                        errors = {errors}
                        validate
                        value = { values.firstName}
                        onChange = {handleInputChange}/>

                    <Controls.Input 
                        name = "lastName"
                        label = "Last Name"
                        errors = {errors}
                        validate
                        value = {values.lastName}
                        onChange = {handleInputChange}/>

                    <Controls.Input 
                        name = "email"
                        label = "Email"
                        errors = {errors}
                        validate
                        value = {values.email}
                        onChange = {handleInputChange}/>

                    <Controls.Input 
                        name = "password" 
                        label = "Password"
                        errors = {errors}
                        validate
                        value = {values.password}
                        onChange = {handleInputChange}/>

                    <Controls.Input 
                        name = "confirmPassword"
                        label = "Confirm Password"
                        errors = {errors}
                        validate
                        value = {values.confirmPassword}
                        onChange = {handleInputChange}/>

                    <Controls.Button type = "Submit" disabled = {!isEmpty}>Register</Controls.Button>
                </Form>
            </Content>

            </Container>
        </Layout>
    )
}