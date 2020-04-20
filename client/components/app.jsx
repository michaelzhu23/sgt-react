import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    return (
      <header>
        <div className="container col-12 my-4">
          <div className="row align-items-end">
            <Header/>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
