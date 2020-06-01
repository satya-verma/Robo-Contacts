import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Scrollbars } from 'react-custom-scrollbars';
import ErrorBoundaries from '../components/ErrorBoundaries';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ robots: json }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }


    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (!robots.length) {
            return <h1 className="tc">Loading...</h1>
        } else {
            return (
                <Scrollbars style={{ height: '100vh' }}>
                    <div className="pa1 tc">
                        <link href="https://fonts.googleapis.com/css2?family=Quantico&display=swap" rel="stylesheet"></link>
                        <div id="pallete" className="tc ma4 pa1 br3 mt5 pb4 shadow-4 ">
                            <h1 id="title" className="f1 garamond">Robo-Contacts</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                            <ErrorBoundaries>
                                <Scrollbars style={{ height: 350 }}>
                                    <CardList className="tc" robots={filteredRobots} />
                                </Scrollbars>
                            </ErrorBoundaries>
                        </div>
                    </div>
                </Scrollbars>
            );
        }
    }

}

export default App;