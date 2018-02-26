import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { API_KEY } from '../config.js';
import SearchBar from './components/search_bar';

YTSearch({ key: API_KEY, term: 'samsung' }, data => {
    console.log(data);
});

// Create a new component. This component shuld produce some html

const App = () => {
    // const는 재할당 하지 못함
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page
// (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
