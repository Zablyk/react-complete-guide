import React from 'react';

const withClass = (WrappedComponent, ClassName) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    ); 
};


export default withClass