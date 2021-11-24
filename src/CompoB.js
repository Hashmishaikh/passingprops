import React from 'react';
import Proptypes from 'prop-types';

const CompoB = ({text}) => {
    return (
        <div>
            <h4>{text}</h4>
        </div>
    )
}

CompoB.propTypes = {
    text: Proptypes.string
}
export default CompoB;
