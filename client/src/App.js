import React, {  Component } from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

class App extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <h1>Create Post</h1>
                <PostCreate/>
                <hr/>
                <h1>Post List</h1>
                <PostList/>
            </div>
        );
    }
}

export default App;