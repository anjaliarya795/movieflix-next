import React from 'react';
import Button from './components/browse_button/Button';

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>

            <Button url={"./movie"} Button_text={"Browse"} />

        </div>
        );
}

export default NotFound;
 