import React, {useState} from 'react';
import { LoginPage } from './LoginPage';

export const App = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div>
                    
            { true ? (
                <div className='flex flex-row flex-nowrap justify-start rounded-md'>
                    <div className='block grow-0 bg-gray-600 h-dvh w-40 rounded-l-md p-5'>



                    </div>
                    <div className='block grow shrink bg-indigo-600 h-dvh rounded-r-md p-5'>
                        <p>hei</p>
                    </div>

                </div>



            ) : (
                

                <LoginPage />


            )}

        
        

        </div>

    )
};
