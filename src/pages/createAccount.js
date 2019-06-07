/**
 * This is the account cration page.
 */

import React from "react";
import TextInput from "../components/textinput";

function createAccount(props) {
    return (
    <div>
    <p>Create a new account </p>
    <TextInput info="Full Name"/>
    <TextInput info="Your email"/>
    </div>);
};


export default createAccount;