import React from 'react';

const ComponentsRender = ({ children }) => {
    return (
        <div className="components-render">
            {React.cloneElement(children, { className: 'animated-component' })}
        </div>
    );
};

export default ComponentsRender;
