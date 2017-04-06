import React, {Component} from 'react';
import Popover from 'react-bootstrap/es/Popover';
import Button from 'react-bootstrap/es/Button';
import ButtonToolbar from 'react-bootstrap/es/ButtonToolbar';
import Tooltip from 'react-bootstrap/es/Tooltip';
import omit from 'lodash/omit';
import $ from 'jquery';//only to calculate position

export default class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: [], popover: {open: false}};
    }

    openPopover(e) {
        if (e.target.className !== "picture-holder" || !this.props.imageSRC) return;
        let {pageX, pageY} = e;
        let $el = $(this.el);
        let leftOffset = $el.offset().left;

        pageX = Math.floor(pageX - leftOffset);
        pageY = pageY - 110;
        this.setState({popover: {open: true, x: pageX, y: pageY, description: '', isActive: true}})
    }

    editPopoverDescription(e) {
        this.setState({popover: {...this.state.popover, description: e.target.value}});
    }

    closePopover(e) {
        this.setState({popover: {open: false}})
    }

    render() {
        let {imageSRC, addTag, tags, activateTag} = this.props;

        return (
            <div onClick={this.openPopover.bind(this)}
                 ref={(el) => this.el = el}
                 style={{backgroundImage: imageSRC ? `url(${imageSRC}` : ''}}
                 className="picture-holder">

                {tags.map((tag, index) => <Tooltip placement="top"
                                                   onClick={() => activateTag(index)}
                                                   className={`in custom-tooltip ${tag.isActive ? 'active' : ''}`}
                                                   style={{left: `${tag.x}px`, top: `${tag.y}px`}}
                                                   id={`tooltip-top-${index}`}
                                                   key={index}>
                    </Tooltip>
                )}


                {this.state.popover.open ?
                    <Popover
                        id="popover-basic"
                        placement="right"
                        positionLeft={this.state.popover.x}
                        positionTop={this.state.popover.y}
                        arrowOffsetTop={15}
                        title="Add Tag Description"
                    >
                        <textarea onChange={this.editPopoverDescription.bind(this)}
                                  value={this.state.popover.description}
                                  rows="5"
                                  cols="25"
                                  placeholder="Enter tag description"/>
                        <ButtonToolbar className="popover-buttons">
                            <Button className="pull-right"
                                    onClick={() => {
                                        addTag(omit(this.state.popover, 'open'));
                                        this.closePopover();
                                    }}
                                    active>Save</Button>
                            <Button onClick={this.closePopover.bind(this)}
                                    className="pull-right"
                                    bsStyle="primary"
                                    active>Close</Button>
                        </ButtonToolbar>
                    </Popover>
                    : null}
            </div>

        )
    }
};
