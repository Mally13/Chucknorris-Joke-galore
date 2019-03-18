import React, { Component } from "react";
import imagine from "../../Icons/bean.jpg";
import home from "../../Icons/home.png";

class Sidebar extends Component {
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo" height="110">
          <div className="logo-img">
          <img src={home} alt="home.png" width="75" height="40" />
          </div>
        </div>  
        </div>
    );
  }
}

export default Sidebar;
