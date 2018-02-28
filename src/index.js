import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { API_KEY } from '../config.js';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new component. This component shuld produce some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'samsung' }, videos => {
            this.setState({ videos });
        });
    }

    render() {
        // const는 재할당 하지 못함
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page
// (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
