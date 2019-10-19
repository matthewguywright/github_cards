import React from 'react';
import CardList from "./components/CardList";
import SearchForm from "./components/SearchForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profiles: []
    }
  }

  addNewProfile = (profileData) => {
      this.setState(prevState => ({
          profiles: [...prevState.profiles, profileData]
      }));
  }

  render = () => {
    return (
        <div className='card'>
          <div className='card-header'>{this.props.title}</div>
             <div className="card-body">
                <SearchForm onSubmit={this.addNewProfile} />
             </div>
          <div className="card-body">
            <CardList profiles={this.state.profiles} />
          </div>
        </div>
    );
  }
}

export default App;
