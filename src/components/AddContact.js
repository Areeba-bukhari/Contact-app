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
    this.setstate({ name: "*, email: "
 
    class AddContact extends React.Component {   
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field" >
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" />
                 </div>
                 <div className="field">
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Email" />
                </div>
                <button className="ui button blue">Add</button>
              </form>
          </div>
          );
        }
    } 
      export default AddContact;
