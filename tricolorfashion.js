class tricolorfashion{
    constructor(){
        this.api = "https://ext.tricolorfashion.com"
        this.api_2 = "https://c6gj-static.net/users"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async ip_list(){
        let req=await fetch(`${this.api}/hss-free.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async my_ip(){
        let req=await fetch(`${this.api_2}/get_user?source=login&tz_offset=-180`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {tricolorfashion};