import React from 'react';

interface cardProprs {
    width?: string;
    height?: string;
    children?: React.ReactChild | React.ReactNode
}

const Card = ({width, height, children}: cardProprs) => {
    return (
        <div style={{width, height, border: '1px solid grey'}}>
            {children}
        </div>
    )
};

export default Card;