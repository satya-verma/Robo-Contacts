import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Scrollbars } from 'react-custom-scrollbars';
import ErrorBoundaries from '../components/ErrorBoundaries';
import { robots } from '../components/robots';
import { connect } from 'react-redux';
import './App.css';
import { setSearchField } from '../action';

const mapStateToProps = (state) => {
    return { searchField: state.searchField };
}

const mapDispatchToProps = (dispatch) => {
    return { onSearchChange: (event) => dispatch(setSearchField(event.target.value)) }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) });
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (!robots.length) {
            return (
                <div>
                    <h1 className="tc">Loading...</h1>
                    <h1 className="tc">refresh if does not load</h1>
                </div>
            )
        } else {
            return (
                <Scrollbars style={{ height: '100vh' }}>
                    <div className="pa1 tc">
                        <link href="https://fonts.googleapis.com/css2?family=Quantico&display=swap" rel="stylesheet"></link>
                        <div id="pallete" className="tc ma3 pa1 br3 mt5 pb4 shadow-4 ">
                            <h1 id="title" className="f1 garamond">Robo-Contacts</h1>
                            <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
