import styled from "styled-components";
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'
// We used NavLink Because we wanna work with active class -- in Link we don't have that
const Category = () => {
    return ( 
        <List>
            <SLink to={'/cuisine/italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/american'}>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/thai'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/japanese'}>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
`

const SLink = styled(NavLink)`
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(35deg, #494949, #313131);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    cursor: pointer;
    margin-right: 2rem;

    h4{
        font-size: 0.7rem;
        font-weight: 600;
        color: #fff;
    }

    svg{
        color: #fff;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`

export default Category;