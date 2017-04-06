import React, {Component} from 'react';

export default class DropArea extends Component{
    constructor(props){
        super(props);
        this.state = {isElementOver:false};
    }

    openFileExplorer(){
        this.fileInput.click();
    }

    saveFile(e){
        let file = e.target.files[0];
        let source = window.URL.createObjectURL(file);
        this.props.changeBackgroundImage(source);

    }

    componentDidMount(){
        let self = this;
        this.el.addEventListener("drop", self.drop.bind(self), false);
        this.el.addEventListener("dragenter", self.dragenter.bind(self), false);
        this.el.addEventListener("dragleave", self.dragleave.bind(self), false);
    }

    dragenter(e){
        e.stopPropagation();
        e.preventDefault();

        this.setState({isElementOver: true})
    }

    dragleave(e){
        e.stopPropagation();
        e.preventDefault();

        this.setState({isElementOver: false})
    }

    drop(e){
        e.stopPropagation();
        e.preventDefault();

        let dt = e.dataTransfer;
        let file = dt.files[0];
        let source = window.URL.createObjectURL(file);
        this.setState({isElementOver: false});
        this.props.changeBackgroundImage(source);
    }

    render() {
        return (
            <div ref={(el) => this.el = el}
                 style={{borderColor:this.state.isElementOver ? 'grey' : '#202e3e'}}
                 className="drop-area rounded-area">
                <i className="fa fa-cloud-upload" aria-hidden="true"/>
                Drop or <span className="browse" onClick={() => this.openFileExplorer()}>browse...</span>
                <input ref={(el) => this.fileInput = el} onChange={(e) => this.saveFile(e)} type="file" accept="image/*"/>
            </div>
        )
    }
};
