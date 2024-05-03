
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
vless://b7a392e2-4ef0-4496-90bc-1c37bb234904@cf.090227.xyz:443?encryption=none&security=tls&sni=edgetunnel-2z2.pages.dev&fp=random&type=ws&host=edgetunnel-2z2.pages.dev&path=%2F%3Fed%3D2048#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
vmess://eyJhZGQiOiIxMjAuMjMzLjQzLjg1IiwiYWlkIjoiNjQiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiIiwiaWQiOiI0MTgwNDhhZi1hMjkzLTRiOTktOWIwYy05OGNhMzU4MGRkMjQiLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQxNzY2IiwicHMiOiI4MDUiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6IiIsInYiOiIyIn0=
vmess://eyJhZGQiOiIxMjAuMjMzLjQzLjg1IiwiYWlkIjoiNjQiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiIiwiaWQiOiI0MTgwNDhhZi1hMjkzLTRiOTktOWIwYy05OGNhMzU4MGRkMjQiLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQwODkwIiwicHMiOiI4MDYiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6IiIsInYiOiIyIn0=
vless://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@178.173.236.238:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&security=tls&sni=downloadhk.xn--4gq62f52gppi29k.com&fp=safari#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF01
vless://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@129.154.193.141:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&security=tls&sni=b295-23ap29-6bh.xn--4gq62f52gppi29k.com&fp=chrome#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD%E9%A6%96%E5%B0%94
vless://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@3bd9.55dca.e048.f65-fef1f.yfjcs.com:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfhk1.xn--4gq62f52gppi29k.com&fp=safari#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF1%E5%8F%B7
vless://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@3bd9.55dca.e048.f65-fef1f.yfjcs.com:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfhk1.xn--4gq62f52gppi29k.com&fp=firefox#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF2%E5%8F%B7
vless://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@188.42.145.72:443/?type=ws&encryption=none&host=y0nl2.yfjc.sbs&path=%2Fyfjc%2Fknl2&security=tls&sni=y0nl2.yfjc.sbs&fp=chrome#%F0%9F%87%B3%F0%9F%87%B1%E8%8D%B7%E5%85%B0%20%7C%20BT%E4%B8%8B%E8%BD%BD-0.1%E5%80%8D
vless://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@3bd9.55dba.e048.f65-fef1f.yfjcs.com:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&security=tls&sni=tw1.liangxinjichang.top&fp=chrome#%F0%9F%87%B9%F0%9F%87%BC%E5%8F%B0%E6%B9%BE%EF%BD%9C%E8%8A%82%E7%82%B9%E4%B8%8D%E5%8F%AF%E7%94%A8%E6%9B%B4%E6%96%B0%E8%AE%A2%E9%98%85
vless://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@152.70.126.104:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&security=tls&sni=b295-23us129-6bh.xn--4gq62f52gppi29k.com&fp=chrome#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD%E5%9C%A3%E4%BD%95%E5%A1%9E
vless://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@152.70.147.168:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&security=tls&sni=767w1-45dc0-9ocf2.xn--4gq62f52gppi29k.com&fp=safari#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD%E5%87%A4%E5%87%B0%E5%9F%8E
hy2://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@13.230.152.153:443/?insecure=1&sni=www.bing.com#%F0%9F%87%AF%F0%9F%87%B5%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%97%A5%E6%9C%AC%E4%B8%93%E7%BA%BF
hy2://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@13.114.72.141:443/?insecure=1&sni=www.bing.com#%F0%9F%87%AF%F0%9F%87%B5%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%97%A5%E6%9C%AC%E4%B8%93%E7%BA%BF2
hy2://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@13.229.141.123:443/?insecure=1&sni=www.bing.com#%F0%9F%87%B8%F0%9F%87%AC%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%96%B0%E5%8A%A0%E5%9D%A1%E4%B8%93%E7%BA%BF
hy2://55c00d11-7d8c-40ac-b8eb-bda3a50ae876@13.251.125.230:443/?insecure=1&sni=www.bing.com#%F0%9F%87%B8%F0%9F%87%AC%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%96%B0%E5%8A%A0%E5%9D%A1%E4%B8%93%E7%BA%BF2//Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:40756#%F0%9F%87%AE%F0%9F%87%B3%20%E5%8D%B0%E5%BA%A6-1@nn.auozzjs.lol:23390#%E6%B5%8B%E8%AF%95%E5%8B%BF%E9%80%89Y
trojan://93ec7261-1c92-4149-848a-26b6fb9fc4ce@in01.trojanyyds.xyz:443/?type=tcp&security=tls#%F0%9F%87%AF%F0%9F%87%B5JP-20.89.40.132-2028
trojan://share.mjj-home.com@185.212.56.168:443/?type=tcp&security=tls&allowInsecure=1#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC_Telegram%40kxswa%202
sn://wg?eNoNzrsOwVAYAOBDYrF5A7vk9Py_c08sFSWkQZRgU1oVcYnUpd36Dl7DavAaXoj1m74yIQS0pgCcGkmh-X7WCPmAQgqSMopOE6t1lExarhizAMxqLZU18YpbteJrG8bx34UIHUD9QledF40kMnnqZ-klyYNl3_jd5Cous7F_Azda437oBtGRt17hYT5sNzzwHh3fM5tsN8CecGAyTfMe619nJwEJ3kfxNju1ClIhpCj9v8G3KH7buzLy
trojan://0cdc54e5-c8e1-4350-a7b2-047e5f4c02f9@sg.mjt000.com:443/?type=tcp&security=tls&sni=sg.mjt000.com#%E6%97%A5%E6%9C%AC_Telegram%40kxswa
trojan://7d618f20-bbc7-11ee-a803-1239d0255272@104.16.149.118:443/?type=tcp&security=tls&sni=de1.test3.net#%F0%9F%8F%81RELAY-104.16.149.118-2175
trojan://tune7jerky7HAYRICK@ap-northeast-1.openssl3.com:443/?type=tcp&security=tls&sni=ap-northeast-1.openssl3.com#%F0%9F%87%A6%F0%9F%87%BAAU-103.224.212.212-5132
trojan://9KogHwaY7hVD@eu-east-ruo.openssl3.com:443/?type=tcp&security=tls&sni=eu-east-ruo.openssl3.com#%F0%9F%87%A6%F0%9F%87%BAAU-103.224.212.212-5543
trojan://e3d7e930-8d43-11ee-82cc-1239d0255272@51.38.65.155:443/?type=tcp&security=tls&sni=uk1.test3.net&allowInsecure=1#%F0%9F%87%AC%F0%9F%87%A7GB_388%60
trojan://96983eb4-c8f1-316e-ab00-500014ed3d8b@official.taipeicitygovernment.chernovtsy.ua:8443/?type=tcp&security=tls&sni=official.taipeicitygovernment.chernovtsy.ua&allowInsecure=1#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF_Telegram%40kxswa%2030
trojan://29ea82cf-f956-42b2-a5dc-35feea39e7ff@download1tw.windowsupdatea.com:443/?type=tcp&security=tls&sni=glc-tw1.windowsupdatea.com&allowInsecure=1#%F0%9F%87%B9%F0%9F%87%BCTW-36.228.216.176-1789
vmess://eyJhZGQiOiI4Mi4xNTYuMjI5LjIwNSIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiODIuMTU2LjIyOS4yMDUiLCJpZCI6IjI5MTAwNDlhLTZhNjItNGNiOC1kMmFhLTRiYmNjZjdjYjhiYiIsIm5ldCI6IndzIiwicGF0aCI6Ii92dHdvIiwicG9ydCI6IjgwODAiLCJwcyI6IkNOXzUyIiwic2N5IjoiYXV0byIsInNuaSI6IiIsInRscyI6IiIsInR5cGUiOiIiLCJ2IjoiMiJ9
sn://wg?eNoNzs0OwUAUQOEhsREPYd-knXuZtjOJBdKmPxEt1WCHqZKWhhBq1wfyACw9ma5O8q1OkxACOqrAuAqc1f2MOoR8wahNV6mKWg_bXdSpLvoGpQKACtNEKTZJIgWT25oSDoInCBqg-Q6DQrL-eRh42cuDFKxZOvWjHr_ErnF3lfyahrv16uiP82zw3p6W07Fig_20JjaX5dFHh2kwX9xeDvXuccHggI9gn5bFoCItQqpGPRz9quoPsOsybg
vmess://eyJhZGQiOiIxMjAuMjMzLjQzLjg1IiwiYWlkIjoiNjQiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiIiwiaWQiOiI0MTgwNDhhZi1hMjkzLTRiOTktOWIwYy05OGNhMzU4MGRkMjQiLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQxNzY2IiwicHMiOiI4MDUiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6IiIsInYiOiIyIn0=
trojan://d2698cf9-c47e-455c-8384-12e642cbba15@89.116.180.179:443/?type=tcp&security=tls&sni=p6us4.pqjc.buzz&allowInsecure=1#%F0%9F%87%BA%F0%9F%87%B8%20_US_%E7%BE%8E%E5%9B%BD%20%281%29
trojan://7d0f1f83-0f2f-4b90-930e-de44ac233fef@20.210.234.145:443/?type=tcp&security=tls&allowInsecure=1#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC_Telegram%40kxswa%203
vmess://eyJhZGQiOiIxMjAuMjMzLjQzLjg1IiwiYWlkIjoiNjQiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiIiwiaWQiOiI0MTgwNDhhZi1hMjkzLTRiOTktOWIwYy05OGNhMzU4MGRkMjQiLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQwODkwIiwicHMiOiI4MDYiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6IiIsInYiOiIyIn0=
trojan://3c4e10af98c30972@60.248.114.184:3306/?type=tcp&security=tls&allowInsecure=1#%F0%9F%87%A8%F0%9F%87%B3%20%E5%8F%B0%E6%B9%BE_Telegram%40kxswa%202
trojan://3c4e10af98c30972@60.248.114.187:3306/?type=tcp&security=tls&allowInsecure=1#%F0%9F%87%A8%F0%9F%87%B3%20%E5%8F%B0%E6%B9%BE_Telegram%40kxswa%205
trojan://3c4e10af98c30972@60.248.114.186:3306/?type=tcp&security=tls&allowInsecure=1#%F0%9F%87%A8%F0%9F%87%B3%20%E5%8F%B0%E6%B9%BE_Telegram%40kxswa%204
trojan://3c4e10af98c30972@60.248.114.185:3306/?type=tcp&security=tls&allowInsecure=1#%F0%9F%87%A8%F0%9F%87%B3%20%E5%8F%B0%E6%B9%BE_Telegram%40kxswa%202
vmess://eyJhZGQiOiIxNjcuODguMTg0LjExNiIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiIiwiaWQiOiIxNGFlYjY4Mi0yNGNhLTQ5MzMtZDVmZS0wMjZmOGIwOTZiNjciLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiLyIsInBvcnQiOiI1NTU1NSIsInBzIjoic3MiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9
trojan://6aWFNbrFDs@129.146.147.170:443/?type=tcp&security=tls&allowInsecure=1#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD_Telegram%40kxswa
trojan://96983eb4-c8f1-316e-ab00-500014ed3d8b@official.taipeicitygovernment.if.ua:8443/?type=tcp&security=tls&sni=official.taipeicitygovernment.if.ua&allowInsecure=1#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF_Telegram%40kxswa%2031
ss://YWVzLTI1Ni1nY206ZmFCQW9ENTRrODdVSkc3@172.99.190.198:2375#%F0%9F%93%B63%40oneclickvpnkeys
vless://009b7af9-7a82-4fd1-9a96-1605139fe7ed@23.227.60.130:80/?type=ws&encryption=none&host=bia-channel-hajimamadvpn.timeclassic.ir&path=%40HAJIMAMADVPN%3Fed%3D2048#%F0%9F%93%B61%40oneclickvpnkeys
vmess://eyJhZGQiOiIxODguMTE0Ljk2LjYiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6IiIsImlkIjoiNWIwYTQ4OWUtZTllYi00MWIxLTkwMmUtZDRhY2FkNjY3YmE2IiwibmV0IjoiZ3JwYyIsInBhdGgiOiJhcmdvIiwicG9ydCI6IjQ0MyIsInBzIjoi8J+TtjE0QG9uZWNsaWNrdnBua2V5cyIsInNjeSI6ImF1dG8iLCJzbmkiOiJhY2Nlc3NvcmllczguZnJlZWFpcmxhaW5lcy5jb20iLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiIiwidiI6IjIifQ==
vless://TMCUSTOMIZE@188.114.98.224:2095/?type=ws&encryption=none&host=V2ray-_-_-_-_-_-VPNCUSTOMIZE.keLLekcoLLection.com.&path=%2FV2rayCUSTOMIZE%3Fed%3D1024#%F0%9F%93%B612%40oneclickvpnkeys
vless://634cd931-0d24-45b7-bffd-e6d9a8ad1cda@la-dc02.miragemerchants.xyz:10443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=onlyfans.com&fp=edge&security=reality&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&sid=

https://hy2sub.pages.dev
`

//请将机场订阅链接填入上方
let urls = [];// https://subs.zeabur.app/clash , https://neko-warp.nloli.xyz/neko_warp.yaml

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link = "";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub);
		let sublinks = request.url ;
		//console.log(MainData,urls,sublinks);
		
		let warp = env.WARP ;
		if(warp && warp != "") sublinks += '|' + (await ADD(warp)).join('|');

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		let req_data = MainData;
		// 创建一个AbortController对象，用于控制fetch请求的取消
		const controller = new AbortController();

		const timeout = setTimeout(() => {
			controller.abort(); // 取消所有请求
		}, 1618); // 1.618秒后触发

		try {
			const responses = await Promise.allSettled(urls.map(url =>
				fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': `v2rayn/6.42 cmliu/CF-Workers-SUB ${userAgentHeader}`
					},
					signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
				}).then(response => {
					if (response.ok) {
						return response.text().then(content => {
							// 这里可以顺便做内容检查
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
								//console.log("clashsub: " + url);
								sublinks += "|" + url;
							} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								//console.log("singboxsub: " + url);
								sublinks += "|" + url;
							} else {
								return content; // 保证链式调用中的下一个then可以接收到文本内容
							}
						});
					} else {
						return ""; // 如果response.ok为false，返回空字符串
					}
				})
			));	
			//console.log(responses);
			for (const response of responses) {
				if (response.status === 'fulfilled') {
					const content = await response.value;
					req_data += base64Decode(content) + '\n';
				}
			}
		} catch (error) {
			//console.error(error);
		} finally {
			// 无论成功或失败，最后都清除设置的超时定时器
			clearTimeout(timeout);
		}
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const text = String.fromCharCode.apply(null, encodedData);

		//去重
		const uniqueLines = new Set(text.split('\n'));
		const result = [...uniqueLines].join('\n');
		//console.log(result);

		const base64Data = btoa(result);
		//console.log(base64Data);

		//console.log("自建节点: " + MainData,"订阅链接: " + urls,"转换链接: " + sublinks);

		let target = "v2ray";
		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			target = "clash";
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			target = "singbox";
		} else {
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}

		const subconverterUrl = `https://${subconverter}/sub?target=${target}&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
			
			const subconverterContent = await subconverterResponse.text();
			
			return new Response(subconverterContent ,{
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}

	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
