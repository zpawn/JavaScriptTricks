import React from "react";
import { render } from "react-dom";

const Form = () => (
    <form
        onSubmit={event => {
            event.preventDefault();

            const formData = Object.values(event.target).reduce((acc, current) => {
                const key = current.name;
                if (key) {
                    return {
                        ...acc,
                        [key]: current.value
                    };
                }
                return acc;
            }, {});

            console.log(formData);
        }}
    >
        <h2>Register page</h2>

        <label>
            <div>Username</div>
            <input type="text" name="username" placeholder="Username" />
        </label>

        <label>
            <div>Email</div>
            <input type="email" name="email" placeholder="Email" />
        </label>

        <label>
            <div>Password</div>
            <input type="password" name="password" placeholder="Password" />
        </label>

        <label>
            <div>About me</div>
            <textarea name="aboutMe" />
        </label>

        <div>
            <button>Submit</button>
        </div>
    </form>
);

render(<Form />, document.getElementById("root"));
