module.exports = {
    proxy: {
        '/api': {    //将www.exaple.com印射为/apis
            target: 'http://www.51bangma.com',  // 接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域  
            onProxyRes(proxyRes, req, res) {
                var cookies = proxyRes.headers['set-cookie']
                if (cookies == null || cookies.length == 0) {
                    delete proxyRes.headers['set-cookie']
                    return
                }
                for (var i = 0,n = cookies.length; i < n; i++) {
                    if(cookies[i].match(/^JSESSIONID=[^;]+;[\s\S]*Path=\/[^;]+/)){
                        cookies[i] = cookies[i].replace(/Path=\/[^;]+/,'Path=/');
                    }
                }

                proxyRes.headers['set-cookie'] = cookies;
            },
            historyApiFallback: true       
        }
    }
}