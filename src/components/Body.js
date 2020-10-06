import React, { Component } from 'react'
import Form from './Form'
import Results from './Results'
import Youtube from '../Various/Youtube'

class Body extends Component {
    state ={
        tags: [],
        title: '',
        channelTitle: '',
        views: ''
    }
    //This function will send the term created here to the form.
    handleSubmit = async (term) =>{
        const response = await Youtube.get('/videos', {
        params: {
            id: term
        }
        })
        this.setState({
            everything: response.data.items,
            tags: response.data.items[0].snippet.tags,
            title: response.data.items[0].snippet.title,
            channelTitle: response.data.items[0].snippet.channelTitle,
            views: response.data.items[0].statistics.viewCount
        })
    }

    render( ) {
        return(
            <div className="w-full container mx-auto my-12">
                <Form handleFormSubmit={this.handleSubmit}/> 
                <Results tags={this.state.tags} title={this.state.title}
               channelTitle={this.state.channelTitle} views={this.state.views}/>
            </div>   // this will call the function above to the form
        )
    }    
}

export default Body