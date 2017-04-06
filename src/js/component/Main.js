import React, {Component} from 'react';
import Picture from './Picture';

const Header = ({imageSRC, addTag, tags, activateTag}) => {
    return (
        <main className="main clearfix">
            <Picture tags={tags} addTag={addTag} activateTag={activateTag} imageSRC={imageSRC}/>
            <div className="tags-block">
                <div className="filters">
                    <div className="radio-holder">
                        <input type="radio" className="radio" name="filter" id="radio" defaultChecked/>
                        <label htmlFor="radio">Latest</label>
                    </div>
                    <div className="radio-holder">
                        <input type="radio" className="radio" name="filter" id="radio2"/>
                        <label htmlFor="radio2">All</label>
                    </div>
                </div>
                <div className="list-holder">
                    <ul className="tags-list">
                        {tags.map((tag, index) => {
                            return (<li key={index} onClick={() => activateTag(index)} className="tag clearfix">
                                <div className={`tag-icon ${tag.isActive ? 'active' : ''}`}>
                                    <i className="fa fa-bookmark"/>
                                </div >
                                <div className={`tag-text ${tag.isActive ? 'active' : ''}`}>
                                    {tag.description}
                                </div>
                            </li>)
                        }) }
                    </ul>
                </div>
            </div>
        </main>
    )
};

export default Header;
