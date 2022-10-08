require("./main.js")
// js 实现递归去遍历所有文件后，放到下面数组中监听后重新require即可
// console.log('...高');

if(module.hot){
    module.hot.accept('./main.js', (res1, res2) => {
        console.log(res1, res2);
        require("./main.js");
    })
}