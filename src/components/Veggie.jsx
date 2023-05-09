import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

const Veggie = () => {
    const [veggie, setVeggie] = useState([])
    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {

        // const check = localStorage.getItem('veggie')

        // if(check){
        //     setVeggie(JSON.parse(check))
        // }else{
            fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
                .then(serverPromise => {
                    serverPromise.json()
                        .then((data) => {
                            setVeggie(data.recipes);
                            // localStorage.setItem('veggie', JSON.stringify(data.recipes))
                        })
                        .catch(e => {
                            console.log(e);
                        });
                })
                .catch(function (e) {
                    console.log(e);
                });
        // }

    }
    return (
        <div>
            <Wrapper>
                <h2>Vegetarian Picks</h2>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    gap: '2.5rem',
                    drag: 'free'
                }}>
                    {
                        veggie.map((recipe) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card >
                                        <Link to={'/recipe/' + recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title} />
                                            <Gradient/>
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </Wrapper>
        </div>
    );
}


const Wrapper = styled.div`
    margin: 4rem 0rem;
    padding: 0 1rem;
    cursor: pointer;

`;

const Card = styled.div`
    min-height: 12rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        position: absolute;
        left: 0;
        width:100%;
        height:100%;
        border-radius: 2rem;
        object-fit: cover;
    }
    p{
        width: 100%;
        height: 40%;
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        color: white;
        font-weight: 700;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;
const Gradient = styled.div`
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))
`
export default Veggie