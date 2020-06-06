import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPage from './HeaderPage/HeaderPage';
import CardHeaderPageSmall from '../../component/card/CardHeaderSmall';
import TabWidget from '../../component/Tab/TabWidget';
import CardNews from '../../component/card/CardNews';
import ListItem from '../../component/List/ListItem';
var changToEnglish = require('../../common/CommonFunction');

export default function Music() {
    const history = useHistory();
    function handleLinkTo(id, country, title) {
        history.push(`/music-page/${country}/${title != undefined ? changToEnglish(title).split(" ").join("-") : "undefined"}/${id + 1}`);
    }

    return (
        <div className="content">
            <div className="main" >
                <div className="banner" >
                    <div className="banner_left banner_music" >
                        <HeaderPage />
                    </div>
                    <div className="banner_right" >
                        {
                            [1, 2].map((item, index) => {
                                return <CardHeaderPageSmall key={index} />
                            })
                        }
                    </div>
                </div>
                <div className="section">
                    <TabWidget listTabs={
                        [
                            {
                                name: "Vietnam",
                                component:
                                    <ListItem
                                        data={[{ title: "có anh ở đây rồi" }, 2, 3, 4, 5, 6, 7]}
                                        handleLinkTo={handleLinkTo}
                                        country={"vietnam"}
                                    />
                            },
                            {
                                name: "US-UK",
                                component:
                                    <ListItem
                                        data={[1, 2, 3, 4, 5, 6, 7]}
                                        handleLinkTo={handleLinkTo}
                                        country={"us-uk"}
                                    />
                            },
                            {
                                name: "China",
                                component:
                                    <ListItem
                                        data={[1, 2, 3, 4, 5, 6, 7]}
                                        handleLinkTo={handleLinkTo}
                                        country={"china"}
                                    />
                            }
                        ]
                    } />
                </div>
            </div>
        </div>
    )

}