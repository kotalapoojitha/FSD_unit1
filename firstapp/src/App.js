import React, { Component } from "react";
import Greetings from './Components/Greetings';
import Introduction from './Components/Introduction';
import Hobbies from "./Components/Hobbies";
import Qualifications from "./Components/Qualifications";

export default class App extends Component {
    render() {
        return (
            <div>
                <h1> I  am parent i.e App.js</h1>
                <h2> Greetings to you</h2>
                <Greetings />
                <Introduction />
                <Hobbies />
                <Qualifications />
            </div>
        )
    }
}