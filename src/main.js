
import styles from "./index.less";
import dd from "./index.css";
import React from "react";
// import xingkong from "../assets/星空壁纸.jpeg";

class Test {
    constructor() {
        // document.writeText("hello world");
        this.renderDom();
        // this.renderImage();
    }
    
    renderDom() {
        const dom = document.createElement("div");
        dom.className = styles.container + " " + dd.container;
        dom.innerText = 'hello world for mare';
        document.body.appendChild(dom);
    }

    // renderImage() {
    //     const image = document.createElement("img");
    //     image.src = xingkong;
    //     document.body.appendChild(image);
    // }

}

new Test();
// 
console.log('haha');

console.log('缓存了？？？');

console.log('没有吧？what??热重载？？？');

// 测试 devServer proxy
// fetch("/api/getUser", { body: JSON.stringify({userId: '123'}), method: 'POST'}).then(res => {
//     console.log(res);
// }, err => {
//     console.log(err);
// })