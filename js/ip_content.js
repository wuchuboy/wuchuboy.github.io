//获取当前IP地址和浏览器标识
function getbrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}


function IPCallBack(data) {
    console.log(data)
    var ip_content = document.querySelector(".ip_content");
    ip_content.innerHTML = '欢迎来自 <span class="p" style=" color:red ">' + data["addr"] + "</span> 的小伙伴<br>" + '访问IP为： <span class="p" style=" color:blue " >' + data["ip"] + '</span><br>浏览器版本：<span class="p" style=" color:green ">' + getbrowserInfo() + '</span>';
}

function loadIPData() {
    var script = document.createElement('script');
    script.src = 'https://whois.pconline.com.cn/ipJson.jsp'; // 替换为实际的 JSONP URL
    document.body.appendChild(script);
}

// 调用函数加载 IP 数据
loadIPData();