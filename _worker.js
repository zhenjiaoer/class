
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
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hkt.jjjjjj.icu:40981#%E5%89%A9%E4%BD%99%E6%B5%81%E9%87%8F%EF%BC%9A1680.07%20GB
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hkt.jjjjjj.icu:40981#%E8%B7%9D%E7%A6%BB%E4%B8%8B%E6%AC%A1%E9%87%8D%E7%BD%AE%E5%89%A9%E4%BD%99%EF%BC%9A20%20%E5%A4%A9
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hkt.jjjjjj.icu:40981#%E5%A5%97%E9%A4%90%E5%88%B0%E6%9C%9F%EF%BC%9A2024-05-23
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hkt.jjjjjj.icu:40981#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AFHKT%E5%AE%B6%E5%AE%BD
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hka1.jjjjjj.icu:54001#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF_A1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hka2.jjjjjj.icu:54002#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF_A2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hka3.jjjjjj.icu:54003#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF_A3
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hka4.jjjjjj.icu:54004#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF_A4
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hka5.jjjjjj.icu:54005#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF_A5
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk01.jjjjjj.icu:44423#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-01_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk02.jjjjjj.icu:41365#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-02_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk03.jjjjjj.icu:44552#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-03_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk04.jjjjjj.icu:45465#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-04_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk05.jjjjjj.icu:43217#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-05_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk06.jjjjjj.icu:22074#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-06_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk07.jjjjjj.icu:44301#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-07_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk08.jjjjjj.icu:24808#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-08_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk09.jjjjjj.icu:14642#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-09_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk10.jjjjjj.icu:14713#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-10_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk12.jjjjjj.icu:53249#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-12_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk13.jjjjjj.icu:40700#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-13_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@hk14.jjjjjj.icu:53250#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-14_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp01.jjjjjj.icu:30207#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-01_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp02.jjjjjj.icu:30206#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-02_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp03.jjjjjj.icu:30205#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-03_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp04.jjjjjj.icu:30204#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-04_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp05.jjjjjj.icu:30203#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-05_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp06.jjjjjj.icu:30202#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-06_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp07.jjjjjj.icu:30201#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-07_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp08.jjjjjj.icu:30005#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-08_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp09.jjjjjj.icu:30004#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-09_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp10.jjjjjj.icu:30003#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-10_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp11.jjjjjj.icu:30500#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-11_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp12.jjjjjj.icu:30501#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-12_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp13.jjjjjj.icu:30002#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-13_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@jp14.jjjjjj.icu:30502#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-14_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@sg01.jjjjjj.icu:40517#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-1_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@sg02.jjjjjj.icu:40519#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-2_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@sg03.jjjjjj.icu:38902#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-3_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@sg04.jjjjjj.icu:40520#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-4_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@sg05.jjjjjj.icu:40005#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-5_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:45070#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-6_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:45071#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-7_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:45072#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-8_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:45073#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-9_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:45074#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-10_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@kr01.jjjjjj.icu:49705#%F0%9F%87%B0%F0%9F%87%B7%20%E9%9F%A9%E5%9B%BD-01
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:40702#%F0%9F%87%B0%F0%9F%87%B7%20%E9%9F%A9%E5%9B%BD-02
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:49505#%F0%9F%87%B0%F0%9F%87%B7%20%E9%9F%A9%E5%9B%BD-03
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@us01.jjjjjj.icu:40702#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD-01
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@us02.jjjjjj.icu:40393#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD-02
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@us03.jjjjjj.icu:49584#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD-03
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@us04.jjjjjj.icu:40703#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD-04
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@us05.jjjjjj.icu:40601#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD-05
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:40756#%F0%9F%87%AE%F0%9F%87%B3%20%E5%8D%B0%E5%BA%A6-1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@tw01.jjjjjj.icu:20701#%F0%9F%87%B9%F0%9F%87%BC%20%E5%8F%B0%E6%B9%BE-1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@tw02.jjjjjj.icu:20702#%F0%9F%87%B9%F0%9F%87%BC%20%E5%8F%B0%E6%B9%BE-2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@tw03.jjjjjj.icu:30401#%F0%9F%87%B9%F0%9F%87%BC%20%E5%8F%B0%E6%B9%BE-3
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:30499#%F0%9F%87%B9%F0%9F%87%BC%20%E5%8F%B0%E6%B9%BE-4
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@vn01.jjjjjj.icu:40711#%F0%9F%87%BB%F0%9F%87%B3%20%E8%B6%8A%E5%8D%971-GPT%E4%B8%93%E7%94%A8-%E5%8E%9F%E7%94%9F
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:40718#%F0%9F%87%A6%F0%9F%87%BA%20%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:40720#%F0%9F%87%B2%F0%9F%87%BE%20%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@de01.jjjjjj.icu:54177#%F0%9F%87%A9%F0%9F%87%AA%20%E5%BE%B7%E5%9B%BD
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@ca01.jjjjjj.icu:40717#%F0%9F%87%A8%F0%9F%87%A6%20%E5%8A%A0%E6%8B%BF%E5%A4%A7
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:10002#%F0%9F%87%B3%F0%9F%87%B1%20%E8%8D%B7%E5%85%B0_%E4%BD%8F%E5%AE%85
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:40722#%F0%9F%87%BA%F0%9F%87%A6%20%E4%B9%8C%E5%85%8B%E5%85%B0
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:27001#%F0%9F%87%AE%F0%9F%87%AA%20%E7%88%B1%E5%B0%94%E5%85%B0
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:40710#%F0%9F%87%AE%F0%9F%87%A9%20%E5%8D%B0%E5%BA%A6%E5%B0%BC%E8%A5%BF%E4%BA%9A
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@ru01.jjjjjj.icu:40721#%F0%9F%87%B7%F0%9F%87%BA%20%E4%BF%84%E7%BD%97%E6%96%AF
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@es01.jjjjjj.icu:40723#%F0%9F%87%AA%F0%9F%87%B8%20%E8%A5%BF%E7%8F%AD%E7%89%99
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:40708#%F0%9F%87%A6%F0%9F%87%AA%20%E8%BF%AA%E6%8B%9C
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:10004#%F0%9F%87%AE%F0%9F%87%B9%20%E6%84%8F%E5%A4%A7%E5%88%A9
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@fr01.jjjjjj.icu:40713#%F0%9F%87%AB%F0%9F%87%B7%20%E6%B3%95%E5%9B%BD_%E4%BD%8F%E5%AE%85
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@gb01.jjjjjj.icu:40712#%F0%9F%87%AC%F0%9F%87%A7%20%E8%8B%B1%E5%9B%BD
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@tr01.jjjjjj.icu:41719#%F0%9F%87%B9%F0%9F%87%B7%20%E5%9C%9F%E8%80%B3%E5%85%B6
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo5YzJiZjU0Zi01ZjEzLTRkNzEtYjg2Ni0zYTNmMjNjNGQ4NmI@nn.auozzjs.lol:23390#%E6%B5%8B%E8%AF%95%E5%8B%BF%E9%80%89Y
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
