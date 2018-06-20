import React from "react";
import { render } from "react-dom";

class Form extends React.Component {
    render() {
        return (
            <form
                onSubmit={event => {
                    event.preventDefault();

                    const formData = Object.entries(this.refs).reduce(
                        (acc, [key, input]) => ({
                            ...acc,
                            [key]: input.value
                        }),
                        {}
                    );

                    console.log(formData);
                }}
            >
                <h2>Register page</h2>

                <label>
                    <div>Username</div>
                    <input type="text" ref="username" placeholder="Username" />
                </label>

                <label>
                    <div>Email</div>
                    <input type="email" ref="email" placeholder="Email" />
                </label>

                <label>
                    <div>Password</div>
                    <input type="password" ref="password" placeholder="Password" />
                </label>

                <label>
                    <div>About me</div>
                    <textarea ref="aboutMe" />
                </label>

                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

render(<Form />, document.getElementById("root"));
