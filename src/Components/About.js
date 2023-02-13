import React, { useContext } from "react";
import { UserContext } from './UserProvider';

const About = () => {
    const { home, about } = useContext(UserContext);
    home.setHomeInfo('changing home info state on About page')
    return (
        <div>
            <h2>About Page</h2>
            <div>home info using context:  {home.homeInfo}</div>
            <div>about info from same context:  {about.aboutInfo}</div>
        </div>
    )
}

export default About;