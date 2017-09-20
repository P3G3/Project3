import React, { Component } from 'react';

class InputForm extends Component {

  render() {
    return (
      <form
        className="add-faces-form"
        onSubmit={this.props.handleInputFormSubmit}
      >
        <input
          type="text"
          value={this.props.inputHappyValue}
          name="happy"
          placeholder="are you happy"
          onChange={this.props.handleInputHappyChange}
        /><br/>

        <input
          type="text"
          value={this.props.inputMadValue}
          name="mad"
          placeholder="are you mad?"
          onChange={this.props.handleInputMadChange}
        /><br/>

         <input
          type="text"
          value={this.props.inputURLValue}
          name="url"
          placeholder="Add IMG Url Here"
          onChange={this.props.handleInputURLChange}
        /><br/>

          <input
          type="text"
          value={this.props.result}
          name="result"
          placeholder="enter result here"
          onChange={this.props.handleInputResultChange}
        /><br/>

        <input
          type="text"
          value={this.props.user_id}
          name="user_id"
          placeholder="Add user id"
          onChange={this.props.handleInputUserChange}
        /><br/>

        <button id="submit">Add FaceForm!</button>
      </form>
    );
  }
}

export default InputForm;
