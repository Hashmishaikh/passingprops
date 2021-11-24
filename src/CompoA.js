import React from 'react';
import CompoB from './CompoB';

const CompoA = (props) => {
    return (
        <div>
            <CompoB text="I'm passing some data to Component B" />
        </div>
    )
}

export default CompoA;
