import React from "react";

function Header() {
  return (
    <div className="ui">
      <div className="ui menu" style={{ marginTop: "50px" }}>
        <div className="ui container center">
          <h2 className="ui center aligned icon header">
            <i
              className="address book icon"
              style={{ marginTop: "10px", color: "darkGreen" }}
            ></i>
            Contacts Manager
          </h2>
        </div>
      </div>

      <div className="ui container" style={{ marginTop: "50px" }}>
        <div
          className="ui menu"
          style={{ width: "190px", marginRight: "55%", float: "right" }}
        >
          <h2
            className="ui icon header"
            style={{ marginRight: "10%", marginLeft: "13%" }}
          >
            <i
              className="add user icon"
              style={{
                marginTop: "10px",
                color: "darkBlue",
                outerWidth: "400px",
              }}
            ></i>
            Add Contact
          </h2>
        </div>
      </div>

      <div className="ui container">
        <div
          className="ui menu"
          style={{ width: "190px", marginLeft: "50%", marginRight: "20px" }}
        >
          <h2
            className="ui icon header"
            style={{ marginRight: "10%", marginLeft: "13%" }}
          >
            <i
              className="address book outline icon"
              style={{
                marginTop: "10px",
                color: "darkRed",
                outerWidth: "400px",
              }}
            ></i>
            Contact List
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
