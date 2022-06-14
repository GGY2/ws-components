import React from 'react';
import './SuggestedVideo.css';
import Card from 'react-bootstrap/Card';


const videoUrl = [
    {
        url: 'https://www.youtube.com/embed/WRlGteWa1cY',
        title: 'Fighting on the road',
        description: 'Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming...'
    },
    {
        url: 'https://www.youtube.com/embed/tLmStxxzhkI',
        title: 'Counting bullets',
        description: 'Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming...'
    },
    {
        url: 'https://www.youtube.com/embed/YlZ1xpm2h1k',
        title: 'Where is Francis?',
        description: 'Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming...'
    },
    {
        url: 'https://www.youtube.com/embed/BCiNjLq0S60',
        title: 'Let\'s dance',
        description: 'Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming...'
    },
    {
        url: 'https://www.youtube.com/embed/g7q60i_Lh_E',
        title: 'Hard fight',
        description: 'Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming Lorem ipsum is coming...'
    },
];


const SuggestedVideo = () => {
    return(
    <>
        {
            videoUrl.map((video, index) => {
                return(
                    <Card key={index} className="suggestedVideoCard" style={{border:'none', flexDirection:'row'}}>
                        <Card.Body style={{display:'flex', flexDirection:'row'}}>
                            <React.Fragment>
                                <iframe width="120px" height="100px" src={video.url} frameborder="0" allow="accelerometer autoplay 
                                    clipboard-write encrypted-media gyroscope picture-in-picture" allowfullscreen></iframe>
                                    <div style={{display:'flex', flexDirection: 'column'}}>
                                    <div style={{marginLeft:'20px'}}>
                                    <Card.Title style={{fontSize:'17px'}}>{video.title}</Card.Title>
                                    </div>
                                    <div style={{marginLeft:'20px'}}>
                                    {video.description}
                                    </div>
                                </div>
                            </React.Fragment>
                        </Card.Body>
                    </Card>
                )
            })
        }
    </>
    
    );
};

export default SuggestedVideo;