import { createContext, useState } from "react";

/* https://stackoverflow.com/questions/60866924/how-to-pass-multiple-states-through-react-context-api */

export const UserContext = createContext();
/* this get fed straight into UserProvider, and THIS IS WHAT GETS IMPORTED INTO OTHER PAGES */

/* UserProvider is just used in the index.js */
const UserProvider = ({children}) => {
    const [homeInfo, setHomeInfo] = useState('basic home info');
    const [aboutInfo, setAboutInfo] = useState('About info stuff');

    return (
        <UserContext.Provider
            value={{
                home: {homeInfo, setHomeInfo},
                about: {aboutInfo, setAboutInfo}
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;