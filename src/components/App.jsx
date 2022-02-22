import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import React from 'react';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodBtn = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralBtn = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badBtn = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <Feedback
          goodBtn={this.goodBtn}
          neutralBtn={this.neutralBtn}
          badBtn={this.badBtn}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
