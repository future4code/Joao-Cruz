import React from "react";
import UserRegistration from "./components/formPage";
import UserList from "./components/userList";
import styled from "styled-components";


class App extends React.Component {
  state = {
    userRegistration: true
  }
  changePage = () => {
    this.setState({userRegistration: !this.state.userRegistration})
  }
  render(){
    const currentPage = this.state.userRegistration ? ( <UserRegistration/>) : ( <UserList/>)   //ternario
    return (
      <div>
        {currentPage}
        <button onClick={this.changePage}>Change</button>
        
      </div>
    );
  }
}

export default App;