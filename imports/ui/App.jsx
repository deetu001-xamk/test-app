import React, {useState} from 'react';
import { LoginPage } from './LoginPage';

export const App = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div>
                    
            { false ? (
                <>
                    <h1 className="text-3xl">Welcome to Meteor!</h1>
                </>



            ) : (
                

                <LoginPage />


            )}

        
        

        </div>

    )
};
