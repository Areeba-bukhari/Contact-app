import React from "react";

class AddContact extends React.Component {
    state  = {
        name: "",
        email: "",
    };    

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
            alert("ALl the fields are mandatory!");
        }
            return;
    }    
    this.props.addContactHandler(this.state);
    this.setState({ name:"", email:""});
    console.lod(this.state);
 
    class AddContact extends React.Component {   
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field" >
                    <label>Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    value={this.state.name}
                    onChange={ (e) => this.setState({ name: e.target.v})} />
                 </div>
                 <div className="field">
                    <label>Email</label>
                    <input
                     type="text"
                     name="Email"
                     placeholder="Email"
                     value={this.state.email}
                    onChange={ (e) => this.setState({ email: e.target.v})}    
                    />
                </div>
                <button className="ui button blue">Add</button>
              </form>
          </div>
          );
        }
    } 
      export default AddContact;
