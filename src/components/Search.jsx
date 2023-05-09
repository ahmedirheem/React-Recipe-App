import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {

    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e)=>{
        e.preventDefault()
        navigate('/searched/' + input)
    }

    return (
        <Form onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type='text' onChange={(e) => {
                    setInput(e.target.value)
                    // navigate('/searched/' + input)
                    }} />
            </div>
        </Form>
    );
}

const Form = styled.form`
    margin: 2rem 10rem;
    position: relative;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 1rem;
    
    div{
        width: 100%;
    }

    input{
        width: 100%;
        border: none;
        outline: none;
        background: none;
        padding: 0.7rem 1rem 0.7rem 2.5rem;
        font-size: 1.2rem;
        color: #fff
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: #fff
    }
`

export default Search;