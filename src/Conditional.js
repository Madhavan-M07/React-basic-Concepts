// Conditional UI rendering - Render UI based on conditions using :
// Ternary Operators 
// Logical && Operators
// if-else statement

import React, { useState } from "react";

const LoginToggle = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? <h2>Welcome, User!</h2> : <h2>Please Log in</h2>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default LoginToggle;


// Conditional Rendering uses ? :, &&, or if-else for dynamic UI. These are the Conditional Rendering in Reactjs