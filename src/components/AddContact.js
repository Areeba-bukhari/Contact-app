import React from "react";

class AddContact extends React.Component {
    state  = {
        name: "",
        email: "",
    };    
}

    add = (e) => {
    e.preventDefault();
    if (this.state.name === ""|| this.state.email === "") {

        alert("ALl the fields are mandatory!");
        return;
    }    
    this.props.addContactHandler(this.state);
    this.setstate({ name: "*, email: "" });
}; 
render() {
return
‹div className= "ui main";
<h2>Add Contact</h2>
‹form className»"ul form" onSubmit=(this .add)>
‹div className="field"
(label Name‹/ label
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.email}
               </div>
                <button className= " ui button blue">Add</button>
                </div>