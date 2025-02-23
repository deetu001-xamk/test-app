import React, {useState} from 'react';

export const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        
    <div className='flex min-h-full flex-1 flex-col justify-center px-5 py-10'>
            <div className='mx-auto w-full max-w-sm'>
                <svg className='mx-auto h-14 w-auto' width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.2551 1.61586C38.1803 0.653384 39.4368 0.112671 40.7452 0.112671C46.6318 0.112671 52.1793 0.112674 57.6424 0.112685C68.6302 0.112708 74.1324 13.9329 66.3629 22.0156L49.4389 39.6217C48.662 40.43 47.3335 39.8575 47.3335 38.7144V23.2076L49.2893 21.1729C50.8432 19.5564 49.7427 16.7923 47.5451 16.7923H22.6667L37.2551 1.61586Z" fill="#3A04FF"></path>
                    <path d="M32.7449 38.3842C31.8198 39.3467 30.5633 39.8874 29.2549 39.8874C23.3683 39.8874 17.8208 39.8874 12.3577 39.8874C1.36983 39.8873 -4.13236 26.0672 3.63721 17.9844L20.5612 0.378369C21.3381 -0.429908 22.6666 0.142547 22.6666 1.28562L22.6667 16.7923L20.7108 18.8271C19.1569 20.4437 20.2574 23.2077 22.455 23.2077L47.3335 23.2076L32.7449 38.3842Z" fill="#3A04FF"></path>
                </svg>
                <h1>Kirjaudu sisään</h1>
            </div>

            <div>
                <form>
                    <div>
                        <label htmlFor="username">
                            Käyttäjätunnus
                        </label>
                        <div>
                            <input
                                type='username'
                                name='username'
                                required
                                autoComplete='email'
                                />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>
                                Salasana
                            </label>
                            <div>
                                <a href='#'>Unohtuiko salasana?</a>
                            </div>
                        </div>
                        <div>
                            <input
                                type='password'
                                name='password'
                                required
                                autoComplete='current-password'
                                />

                        </div>
                    </div>
                    <div>
                        <button type='submit'>
                        Kirjaudu sisään
                        </button>
                    </div>

                </form>
            </div>
            

    </div>

    );


}
