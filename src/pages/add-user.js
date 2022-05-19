import React from 'react';

function App() {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Thank you, the user has been added.');
    }

    return (
        <div className="user-form">
            <h1><font size={"+2"}>Add a New User</font></h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>First Name</p>
                        <input name="first-name"/>
                        <p>Last Name</p>
                        <input name="last-name"/>
                        <p>Email</p>
                        <input name="email"/>
                        <p>Occupation</p>
                        <input name="occupation"/>
                    </label>
                </fieldset>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default App;