import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1348430675238678528"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="JoeBiden"
                    options={{height: 400}}
                />
                <TwitterShareButton
                />
            </div>
        </div>
    )
}

export default Widgets;