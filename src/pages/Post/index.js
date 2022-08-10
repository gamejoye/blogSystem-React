import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getInstance } from "../../utils/apis/axiosConfig";
import './index.css'
import Comments from "../Comments";


function Post(props) {
    const localtion = useLocation();
    const { title } = localtion.state;
    const [blog, setBlog] = useState({});
    useEffect(() => {
        getInstance.get('blogs/' + 'title', {
            params: {
                titles: title
            }
        }).then(
            (res) => { setBlog(res.data); }
        )
    }, [1]);
    return (
        <div className="post">
            <div className="blog">
                <div className="header">
                    <h1 className="h1">{blog.title}</h1>
                </div>
                <div className="content">
                    <p className="p">{blog.content}</p>
                </div>
            </div>
            <Comments title={title} />
        </div>
    )
}

export default Post;