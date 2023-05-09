import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
    const [details, setDetails] = useState([])
    const [activeTab, setActiveTab] = useState('instructions')
    const params = useParams()

    const getRecipeDetails = async () => {
        fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(serverPromise => {
                serverPromise.json()
                    .then((data) => {
                        setDetails(data)
                    })
                    .catch(e => {
                        console.log(e);
                    });
            })
            .catch(function (e) {
                console.log(e);
            });
    }
    useEffect(() => {
        getRecipeDetails()
    }, [params.name])
    return (
        <DetailWrapper>
            <ImageCont>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </ImageCont>
            <Info>
                <ButtonCont>
                    <Button
                        className={activeTab === 'instructions' ? 'active' : ''}
                        onClick={() => setActiveTab('instructions')}
                    >Instructions</Button>
                    <Button
                        className={activeTab === 'ingredients' ? 'active' : ''}
                        onClick={() => setActiveTab('ingredients')}
                    >Ingredients</Button>
                </ButtonCont>
                {activeTab === 'instructions' &&
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }} ></p>
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }} ></p>
                    </div>
                }
                {activeTab === 'ingredients' &&
                    <ul>
                        {details.extendedIngredients.map(ingredients => {
                            return (
                                <li key={ingredients.id} >{ingredients.original}</li>
                            )
                        })}
                    </ul>
                }
            </Info>
        </DetailWrapper>
    );
}
const DetailWrapper = styled.div`
    margin-top: 7rem;
    margin-bottom: 4rem;
    display: flex;
    
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }
    p{
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.1rem;
        line-height: 2rem;
    }
    ul{
        margin-top: 2rem;
    }

`

const ImageCont = styled.div`
    /* width: 50%; */

    img{
        max-width: 450px;
        border-radius: 1rem;
    }

`
const ButtonCont = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;

`
const Button = styled.div`
    padding: 1rem 2rem;
    border: 2px solid #313131;
    color: #313131;
    font-weight: 600;
    margin-right: 2rem;
    background: #fff;
    cursor: pointer;
    transition: 0.3s;
`

const Info = styled.div`
    margin-left: 5rem;
`
export default Recipe;
