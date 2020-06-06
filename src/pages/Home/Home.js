import React from 'react';
import SlideShow from './slide/SlideShow';
import ListTop from './list-top/ListTop';
import TopView from '../../component/widget/TopView';
import LastestPost from './lastest-posts/LastestPost';
import HorizonTopView from '../../component/widget/HorizonTopView';
import ComplexMusicSports from './music-sports/ComplexMusicSports';
import LastestNews from './lastest-news/LastestNews';

export default function Home() {

    return (
        <div className="content">
            <div className="main" >
                <div className="banner" >
                    <div className="banner_left" >
                        <SlideShow />
                    </div>
                    <div className="banner_right" >
                        <TopView name={"Top View"} content={<ListTop />} />
                    </div>
                </div>
                <div className="section" >
                    <HorizonTopView name="Lastest Posts" content={<LastestPost />} />
                </div>
                <div className="section" >
                    <ComplexMusicSports />
                </div>
                <div className="section_news" >
                    <HorizonTopView name = "Lastest News" content={<LastestNews/>} />
                </div>
            </div>
        </div>
    )

}