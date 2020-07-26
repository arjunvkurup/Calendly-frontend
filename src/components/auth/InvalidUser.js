import React from "react";
import NavBar from "../layout/NavBar";

function InvalidUser() {
    return(
        <div>
            <NavBar />
            <div className='demo-app-main'>
                <h2>Not a registered user, Please SignUp.</h2>
            </div>
        </div>
    );
}
export default InvalidUser;