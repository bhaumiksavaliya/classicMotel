import React, { useEffect, useState } from 'react';
import Loader from '..';

const Timer = ({ children, delay = 2000 }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, delay));
            setIsLoaded(true);
        };

        fetchData();
    }, [delay]);

    return isLoaded ? children : <Loader />;
};

export default Timer;