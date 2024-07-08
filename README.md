# tricolorfashion
JavaScript library for tricolorfashion.com
# main
```js
async function main(){
    const {tricolorfashion} = require('./tricolorfashion');
    const vpn= new tricolorfashion();
    let req=await vpn.my_ip()
    console.log(req)
}
main()
```
