import React, { Component } from 'react';

// const increment = (state, props) => {
//   const { max, step } = props;
//   if (state.count >= max) return;
//   return { count: state.count + step };
// };

const STORAGE_KEY = 'counterStorage';

const getStateInLocalStorage = () => {
  const storage = localStorage.getItem(STORAGE_KEY);
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

function storeStateInLocalStorage() {
  console.log('After', this.state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = getStateInLocalStorage();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.increment.bind(this);
  }

  // increment() {
  //   // this.setState({ count: this.state.count + 1 });
  //   this.setState((state) => {
  //     return { count: state.count + 1 };
  //   });
  //   this.setState((state) => {
  //     return { count: state.count + 1 };
  //   });
  //   this.setState((state) => {
  //     return { count: state.count + 1 };
  //   });
  // }

  // increment() {
  //   // this.setState({ count: this.state.count + 1 });
  //   this.setState(({ count }) => {
  //     return { count: count + 1 };
  //   });
  //   this.setState(({ count }) => {
  //     return { count: count + 1 };
  //   });
  //   this.setState(({ count }) => {
  //     return { count: count + 1 };
  //   });
  // }

  // increment() {
  //   this.setState(increment);
  // }

  // increment() {
  //   this.setState((state, props) => {
  //     const { max, step } = props;
  //     if (state.count >= max) return;
  //     return { count: state.count + step };
  //   });
  // }
  increment() {
    this.setState(
      (state, props) => {
        const { max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step };
      },
      // this function runs after the code has been updated
      // () => {
      //   console.log('After', this.state);
      //   localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      // },

      storeStateInLocalStorage.bind(this),
    );

    console.log('Before', this.state);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
