import React from 'react';
import Context from './State';

export default class GlobalState extends React.Component {
  state = {
    data: '',
  };

  //   addNewTask = task => {
  //     const list = [...this.state.tasks, task];
  //     this.setState({tasks: list});
  //   };

  //   deleteTask = taskId => {
  //     this.setState(this.state.tasks.splice(taskId, 1));
  //   };

  render() {
    return (
      <Context.Provider
        value={{
          data: this.state.data,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
