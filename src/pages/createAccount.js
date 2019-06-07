/**
 * This is the account cration page.
 */

import React from "react";
import TextInput from "../components/textinput";
import Get from "../components/textinput"

function createAccount(props) {
    return (
    <div>
    <p>Create a new account </p>
    <TextInput id="fullName" info="Full Name"/>
    <TextInput id="email" info="Your email"/>
    </div>);
};



export default createAccount;