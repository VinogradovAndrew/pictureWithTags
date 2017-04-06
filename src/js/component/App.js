import React, {Component} from 'react';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {backGroundImageSRC: null, tags: []};
    }

    changeBackgroundImage(src) {
        this.setState({backGroundImageSRC: src, tags: []});
    }

    addTag(tag) {
        let disactivatedTags = this.state.tags.map((tag)=>{
            tag.isActive = false;
            return tag;
        });

        this.setState({tags: [...disactivatedTags, tag]});
    }

    activateTag(tagIndex) {
        let tags = this.state.tags;

        let mappedTags = tags.map((tag, index) => {
            if (index === tagIndex) {
                tag.isActive = true;
                return tag;
            } else {
                tag.isActive = false;
                return tag;
            }
        });

        this.setState({tags: mappedTags});
    }

    render() {
        return (
            <div className="wrapper">
                <Header changeBackgroundImage={this.changeBackgroundImage.bind(this)}/>
                <Aside />
                <Main tags={this.state.tags}
                      addTag={this.addTag.bind(this)}
                      activateTag={this.activateTag.bind(this)}
                      imageSRC={this.state.backGroundImageSRC}/>
            </div>
        )
    }
}


