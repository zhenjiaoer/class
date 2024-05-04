
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
vmess://eyJhZGQiOiIxMjAuMjMyLjI0Mi4xMTciLCJhaWQiOiI2NCIsImFscG4iOiIiLCJmcCI6IiIsImhvc3QiOiIiLCJpZCI6IjQxODA0OGFmLWEyOTMtNGI5OS05YjBjLTk4Y2EzNTgwZGQyNCIsIm5ldCI6InRjcCIsInBhdGgiOiIiLCJwb3J0IjoiNDE0OTIiLCJwcyI6Iue+juWbvSh5dWRvdTY2LmNvbSDnjonosYblhY3otLnoioLngrkpIiwic2N5IjoiYXV0byIsInNuaSI6IiIsInRscyI6IiIsInR5cGUiOiIiLCJ2IjoiMiJ9
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.176.24.4:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.176.24.64:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@199.181.197.158:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@188.244.122.210:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E5%BE%B7%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.59.218.22:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@164.38.155.75:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E8%8B%B1%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vmess://eyJhZGQiOiIxOTIuNzQuMjM3LjExOCIsImFpZCI6IjY0IiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6Ind3dy44NzIzODk3NS54eXoiLCJpZCI6ImFjOWQ3NWZhLWNkZjgtNGFjZS04MDEyLTNmY2Q5YmM5ODliOSIsIm5ldCI6IndzIiwicGF0aCI6Ii9wYXRoLzE2MjgyMjIyMTczMCIsInBvcnQiOiI0MDAwMCIsInBzIjoi576O5Zu9Iiwic2N5IjoiYXV0byIsInNuaSI6Ind3dy44NzIzODk3NS54eXoiLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiIiwidiI6IjIifQ==
vmess://eyJhZGQiOiIzOC4xMS4xNy4yMSIsImFpZCI6IjY0IiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6Ind3dy44OTAwNDU5Ni54eXoiLCJpZCI6IjQxODA0OGFmLWEyOTMtNGI5OS05YjBjLTk4Y2EzNTgwZGQyNCIsIm5ldCI6IndzIiwicGF0aCI6Ii9wYXRoLzE2MjgyMjIyMTczMCIsInBvcnQiOiIzMTAwMSIsInBzIjoi576O5Zu95Y2O55ub6aG/Q29nZW506YCa5L+h5YWs5Y+4Iiwic2N5IjoiYXV0byIsInNuaSI6Ind3dy44OTAwNDU5Ni54eXoiLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiIiwidiI6IjIifQ==
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.148.105.124:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@31.22.116.225:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E8%8B%B1%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@154.197.121.253:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E6%96%B0%E5%8A%A0%E5%9D%A1%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.109.21.139:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@170.114.46.140:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@192.65.217.3:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E6%BE%B3%E6%B4%B2%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@167.68.11.100:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.174.138.220:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.159.219.195:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@170.114.45.190:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@108.165.216.188:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@31.22.116.155:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E8%8B%B1%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.142.120.11:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@147.78.140.163:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@31.43.179.80:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E9%9F%A9%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@167.68.11.106:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.18.250.41:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@192.65.217.41:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E6%BE%B3%E6%B4%B2%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@167.68.11.247:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.133.247.80:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E6%96%B0%E5%8A%A0%E5%9D%A1%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.8.211.59:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@147.78.140.242:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.80.111.198:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.135.9.144:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E5%BE%B7%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.142.120.3:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@88.216.66.38:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@31.43.179.102:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E9%9F%A9%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@31.12.75.46:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E6%97%A5%E6%9C%AC%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.148.107.81:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@181.214.1.227:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@167.68.11.191:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.238.228.212:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.148.107.47:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.159.218.21:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.159.217.231:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@188.42.88.26:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.176.26.2:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@89.116.161.250:8443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@140.99.233.156:2087/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@147.78.140.131:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.148.106.116:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@31.43.179.20:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@193.9.49.80:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@199.181.197.237:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@164.38.155.25:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E8%8B%B1%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.148.105.233:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@91.193.58.119:2053/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E8%8B%B1%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.238.228.222:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.238.228.109:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@192.65.217.71:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E6%BE%B3%E6%B4%B2%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@89.116.180.161:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@91.193.58.98:2096/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E8%8B%B1%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@181.214.1.139:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@181.214.1.107:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@188.42.145.178:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.148.105.225:8443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@205.233.181.182:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vmess://eyJhZGQiOiJ6Zi5sYWxheXVuLmN5b3UiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6InpmLmxhbGF5dW4uY3lvdSIsImlkIjoiYjE1NTNhYmUtNmYxZi0zMjg4LWJmYzItOTA4YjJmOWZjNGZjIiwibmV0Ijoid3MiLCJwYXRoIjoiL3YycmF5IiwicG9ydCI6IjQ3OTMxIiwicHMiOiLnvo7lm70oeXVkb3U2Ni5jb20g546J6LGG5YWN6LS56IqC54K5KSIsInNjeSI6ImF1dG8iLCJzbmkiOiIiLCJ0bHMiOiIiLCJ0eXBlIjoiIiwidiI6IjIifQ==
vmess://eyJhZGQiOiJkYXRhLWhrLXYxLnVzYWJvb2tzLmNvbS5jbiIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiZGF0YS1oay12MS51c2Fib29rcy5jb20uY24iLCJpZCI6ImIxNDc4ZTI0LTQ5MTYtM2FiZS04ZjE3LTE1OTMxMDEyZWNiZSIsIm5ldCI6IndzIiwicGF0aCI6Ii9kZWJpYW4iLCJwb3J0IjoiMjAyMDYiLCJwcyI6Iue+juWbvSh5dWRvdTY2LmNvbSDnjonosYblhY3otLnoioLngrkpIiwic2N5IjoiYXV0byIsInNuaSI6IiIsInRscyI6IiIsInR5cGUiOiIiLCJ2IjoiMiJ9
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@129.227.139.137:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E9%A6%99%E6%B8%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@118.163.128.81:13688/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E5%8F%B0%E6%B9%BE%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@103.148.72.147:1443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E9%A6%99%E6%B8%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vmess://eyJhZGQiOiJ6Zi5sYWxheXVuLmN5b3UiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6ImhrLmxhbGF5dW5zc2wueHl6IiwiaWQiOiJiMTU1M2FiZS02ZjFmLTMyODgtYmZjMi05MDhiMmY5ZmM0ZmMiLCJuZXQiOiJ3cyIsInBhdGgiOiIvdjJyYXkiLCJwb3J0IjoiNDc5MzEiLCJwcyI6Iue+juWbvSh5dWRvdTY2LmNvbSDnjonosYblhY3otLnoioLngrkpIiwic2N5IjoiYXV0byIsInNuaSI6IiIsInRscyI6IiIsInR5cGUiOiIiLCJ2IjoiMiJ9
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@103.118.244.200:20001/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@45.251.240.229:34237/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E6%97%A5%E6%9C%AC%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://f775978b-6e22-41a8-ae5e-5f9779e6745f@31.22.116.134:2096/?type=ws&encryption=none&host=juzibaipiao.5112233.xyz&path=%2F%3Fed%3D2048&security=tls&sni=juzibaipiao.5112233.xyz#%E8%8B%B1%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://f775978b-6e22-41a8-ae5e-5f9779e6745f@14.102.228.210:2096/?type=ws&encryption=none&host=juzibaipiao.5112233.xyz&path=%2F%3Fed%3D2048&security=tls&sni=juzibaipiao.5112233.xyz#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
ss://bm9uZTowY2Y1MjAxNi1iYTk4LTMxOWQtZGU4Yy04NGRiZmFjOWNjY2M@42.240.130.243:33237#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@61.220.41.143:36633/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E5%8F%B0%E6%B9%BE%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@103.44.255.27:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E7%BE%8E%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@185.176.24.12:443/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E4%BF%84%E7%BD%97%E6%96%AF%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@112.168.91.60:18888/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E9%9F%A9%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@221.161.19.212:25647/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E9%9F%A9%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@121.181.87.111:12405/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E9%9F%A9%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://2cd6ed0f-636e-4e6c-9449-5a263d7a0fa5@146.56.151.32:19/?type=ws&encryption=none&host=cfed.tgzdyz2.top&path=tg%40zdyz2&security=tls&sni=cfed.tgzdyz2.top#%E9%9F%A9%E5%9B%BD%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vless://f775978b-6e22-41a8-ae5e-5f9779e6745f@89.116.161.250:8443/?type=ws&encryption=none&host=juzibaipiao.5112233.xyz&path=%2F%3Fed%3D2048&security=tls&sni=juzibaipiao.5112233.xyz#%E6%96%B0%E5%8A%A0%E5%9D%A1%28yudou66.com%2B%E7%8E%89%E8%B1%86%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9%29
vmess://eyJhZGQiOiIxMjAuMjMzLjQyLjgzIiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6IiIsImhvc3QiOiJkYXRhLWhrLXYxLnNod2pma3cuY24iLCJpZCI6ImIxNDc4ZTI0LTQ5MTYtM2FiZS04ZjE3LTE1OTMxMDEyZWNiZSIsIm5ldCI6IndzIiwicGF0aCI6Ii9kZWJpYW4iLCJwb3J0IjoiMjAyMDciLCJwcyI6Iue+juWbvSh5dWRvdTY2LmNvbSDnjonosYblhY3otLnoioLngrkpIiwic2N5IjoiYXV0byIsInNuaSI6IiIsInRscyI6IiIsInR5cGUiOiIiLCJ2IjoiMiJ9

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
