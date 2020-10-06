import React, {Component} from 'react'

class Form extends Component {
    state = {
        term: ''
    }
    handleChange = event => {
        this.setState({
            term: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state.term)
    }
    render(){
        return(
            <div>
                <h3 className="text-4xl text-center my-1"> Video Statstics</h3>
                    <form class="w-full max-w-xl mx-auto" onSubmit={this.handleSubmit}>
                        <div class="flex items-center border-b border-red-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"type= "text"placeholder= "Video tag" value={this.state.term} onChange={this.handleChange}/>
                        </div> 
                    </form>
            </div> 
        )
    }
}
export default Form