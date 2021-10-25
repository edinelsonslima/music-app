import { createContext, Dispatch, SetStateAction, useState } from 'react';

type StopContextProps = {
    stop: string;
    setStop: Dispatch<SetStateAction<string>>;
};

type StopProviderProps = {
    children: JSX.Element;
};

const StopContext = createContext({} as StopContextProps);

const StopProvider = (props: StopProviderProps) => {
    const [stop, setStop] = useState('stop');
    
    return (
        <StopContext.Provider value={{ setStop, stop }}>
            {props.children}
        </StopContext.Provider>
    );
};

export { StopContext, StopProvider };
