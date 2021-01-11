import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({ 
            displayName: "Robin Varghese",
            userName: "robin_varg",
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/678070592524824577/xD_S52Qf_400x400.jpg"
        });

        setTweetMessage("");
        setTweetImage("");
    }
    
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        src="https://pbs.twimg.com/profile_images/678070592524824577/xD_S52Qf_400x400.jpg"
                    />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's happening?"
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    type="text"
                    placeholder="Enter image url"
                />
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;