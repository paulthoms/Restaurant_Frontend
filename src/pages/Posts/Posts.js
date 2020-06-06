import React from 'react';
import CardNews from '../../component/card/CardNews';
import { useHistory } from 'react-router-dom';
import Filter from './Filter/Filter';

export default function Posts() {

    const history = useHistory();

    function handleLinkTo(id, title) {
        history.push(`/post/${title.toLowerCase().split(" ").join("-")}/${id}`);
    }

    return (
        <div className="content">
            <div className="main">

                <div className="filter_posts" >
                    <Filter />
                </div>

                <div className="list__posts" >
                    {
                        [
                            {
                                id: 1,
                                title: "Ronaldo in VietNam"
                            },
                            {
                                id: 2,
                                title: "Messi in VietNam"
                            }
                        ].map((item, index) => {
                            return (
                                <div style={{ padding: "10px 0px 10px 0px"}} key={index} onClick={() => handleLinkTo(item.id, item.title)} >
                                    <CardNews data={item} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )

}