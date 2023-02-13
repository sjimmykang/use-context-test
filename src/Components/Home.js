import React, { useContext } from "react";
import { UserContext } from './UserProvider';

const Home = () => {
    const { home } = useContext(UserContext);
    console.log('test at home',home);
    return (
        <div>
            <h2>Home</h2>
            {home.homeInfo}
        </div>
    )
}
 
export default Home;