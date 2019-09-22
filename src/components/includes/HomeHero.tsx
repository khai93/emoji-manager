import React from 'react';

class HomeHero extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-inner">
                    <h1>
                    High quality emojis made by the community.
                    </h1>
                    <div className="search-ctn">
                        <input type="text" name="search_input" placeholder="Search for high quality emojis"></input>
                        <i className="fa fa-search"></i>
                    </div>
                    
                    <p>
                    <b>Suggested: </b>Laughing, Joy, HD, Crying, Nervous, GIFs, Discord, etc. 
                    </p>
                </div>
            </section>
        )
    }
}

export default HomeHero;