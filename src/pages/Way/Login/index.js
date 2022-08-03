import React from "react";
import { useState } from "react";
import { Button, Input } from "antd";
import './index.css'

import { baseUrl } from "../../../constant";
import { postInstance } from "../../../utils/apis/axiosConfig";
import { useNavigate } from "react-router";

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    var isSuccess;
    function handlerSubmit() {
        postInstance.post(baseUrl + 'function/' + "login", {
            username: username,
            password: password
        }).then(
            (res) => {
                isSuccess = res.data;
                if (isSuccess !== 'failed') {
                    document.cookie = "username=" + isSuccess.name;
                }
            }
        )
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }
    return (
        <div className="first">
            <div className="second">
                <h1>Login</h1>
                <Input
                    placeholder="Enter your username"
                    onChange={(e) => { setUsername(e.target.value) }}
                    className="third"
                />
                <Input.Password placeholder="enter password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="third"
                />
                <Button id="submit"
                    onClick={handlerSubmit}
                    className="third"
                >login</Button><br />
                <p>没有用户?<a onClick={props.toRegister}>注册</a></p>
            </div>
        </div>
    )
}
export default Login;