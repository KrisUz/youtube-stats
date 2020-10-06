import React, {Component} from 'react'
import Tags from './Metrics/Tags'
import Info from './Metrics/Info'

class Results extends Component {
    render() {
        return (
            <div className="w-full container mx-auto m-24">
                <div id="tags">
                    <div class="px-2">
                    < div class ="flex flex-wrap" >
                        <Tags tags={this.props.tags} />
                       < Info title={this.props.title}
                                    channelTitle={this.props.channelTitle} views={this.props.views}/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results