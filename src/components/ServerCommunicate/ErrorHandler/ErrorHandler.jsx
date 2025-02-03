import React from 'react';

import './ErrorHandler.scss';

export const ErrorHandler = ({ error }) => {
    return (
        <div className='ErrorHandler '>
            {error ? <div className='error'>{error.message}</div> : null}
        </div>
    )
}
