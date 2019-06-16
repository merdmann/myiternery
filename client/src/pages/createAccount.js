/**
 * This is the account cration page.
 */

import React from "react";
import TextInput from "../components/textinput";
import Form from "../components/form";

function createAccount(props) {
    return (
    <div>
    <p>Create a new account </p>
    <Form>
        <TextInput id="fullName" info="Full Name"/>
        <TextInput id="email" info="Your email"/>
    </Form>
    </div>);
};

export default createAccount;