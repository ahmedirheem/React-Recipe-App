import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from 'framer-motion'

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    const params = useParams()

    const getCuisine = async (name) => {

        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            .then(serverPromise => {
                serverPromise.json()
                    .then((data) => {
                        // console.log(data.results);
                        setCuisine(data.results)
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
        getCuisine(params.type)
    }, [params.type])

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {
                cuisine.map(item => {
                    return (
                        <Card key={item.id}>
                            <Link to={'/recipe/' + item.id}>
                                <img src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                            </Link>
                        </Card>
                    )
                })
            }
        </Grid>
    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
`
const Card = styled.div`

    img{
        border-radius: 2rem;
        width: 100%;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`
export default Cuisine;