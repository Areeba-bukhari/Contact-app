import React from "react";
import user from "../images/user.png";

const CardContact = (props) => {
     const { id, name, email } = props.contact;
     return (
         <div className="item">
         <img className="ui avatar image" scr={user} alt="user" />
           <div className= "content">
           <div className="header">{name}</div>
           <div>{email}</div>
         </div>
         <i 
           className="trash alternate outline icon"
                 style={{color:"red", marginTop: "7px" }}
           onClick={() => props.clickHandeler(id)}
       ></i>
       </div>
     );
};

export default ContactCard;
