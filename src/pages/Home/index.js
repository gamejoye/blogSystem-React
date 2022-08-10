import React from "react";
import './index.css'

import { useState, useEffect } from "react";

import PostCard from "./PostCard";
import SelfCard from "./Aside/SelfCard";

import { getInstance } from "../../utils/apis/axiosConfig";
import { useNavigate } from "react-router-dom";
import { username } from "../../constant";

function Home(props) {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getInstance.get('blogs/byName', {
            params: {
                username: username
            }
        }).then(
            (res) => {
                setBlogs(res.data);
            }
        )
    }, [1])

    const posts = blogs.map((blog, index) => {
        return (
            <PostCard
                key = {index}
                blog={blog}
                onClick={() => { navigate('/post?title=' + blog.title, { state: { title: blog.title } }) }}
            />
        )
    })
    return (
        <div className="home">
            <div className="middle">
                {posts}
            </div>
            <div className="right">
                <SelfCard/>
            </div>
        </div>
    )
}

export default (Home);