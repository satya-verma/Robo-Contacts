import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div id="body" className="pa1">
                <link href="https://fonts.googleapis.com/css2?family=Quantico&display=swap" rel="stylesheet"></link>
                <div id="pallete" className="tc ma5 pa1 br3 pb4 shadow-4 ">
                    <h1 id="title" className="f1 garamond">Robo-Contacts</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            </div>
        );
    }
}

export default App;