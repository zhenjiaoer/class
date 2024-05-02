
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
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk13.mmyjiedian.com:10013#%E5%89%A9%E4%BD%99%E6%B5%81%E9%87%8F%EF%BC%9A199.24%20GB
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk14.mmyjiedian.com:10014#%E7%A7%92%E7%A7%92%E4%BA%91.me
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk16.mmyjiedian.com:10016#%E7%A7%92%E7%A7%92%E4%BA%91.com
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk01.mmyjiedian.com:10001#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk02.mmyjiedian.com:10002#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk03.mmyjiedian.com:10003#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_3
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk04.mmyjiedian.com:10004#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_4
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk05.mmyjiedian.com:10005#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_5
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk06.mmyjiedian.com:10006#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_6
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk07.mmyjiedian.com:10007#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_7
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk08.mmyjiedian.com:10008#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk09.mmyjiedian.com:10009#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_9
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk10.mmyjiedian.com:10010#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_10
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk11.mmyjiedian.com:10011#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_11
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk12.mmyjiedian.com:10012#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_12
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk15.mmyjiedian.com:10015#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_15
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk17.mmyjiedian.com:10017#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_17
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk18.mmyjiedian.com:10018#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_18
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk19.mmyjiedian.com:10019#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_19
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@hk20.mmyjiedian.com:10020#%F0%9F%87%AD%F0%9F%87%B0%20Hong%20Kong_20
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp01.mmyjiedian.com:30001#%F0%9F%87%AF%F0%9F%87%B5%20Japan_1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp02.mmyjiedian.com:30002#%F0%9F%87%AF%F0%9F%87%B5%20Japan_2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp03.mmyjiedian.com:30003#%F0%9F%87%AF%F0%9F%87%B5%20Japan_3
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp04.mmyjiedian.com:30004#%F0%9F%87%AF%F0%9F%87%B5%20Japan_4
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp05.mmyjiedian.com:30005#%F0%9F%87%AF%F0%9F%87%B5%20Japan_5
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp06.mmyjiedian.com:30006#%F0%9F%87%AF%F0%9F%87%B5%20Japan_6
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp07.mmyjiedian.com:30007#%F0%9F%87%AF%F0%9F%87%B5%20Japan_7
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp08.mmyjiedian.com:30008#%F0%9F%87%AF%F0%9F%87%B5%20Japan_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp09.mmyjiedian.com:30009#%F0%9F%87%AF%F0%9F%87%B5%20Japan_9
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp10.mmyjiedian.com:30010#%F0%9F%87%AF%F0%9F%87%B5%20Japan_10
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp11.mmyjiedian.com:30011#%F0%9F%87%AF%F0%9F%87%B5%20Japan_11
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp12.mmyjiedian.com:30012#%F0%9F%87%AF%F0%9F%87%B5%20Japan_12
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp13.mmyjiedian.com:30013#%F0%9F%87%AF%F0%9F%87%B5%20Japan_13
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp14.mmyjiedian.com:30014#%F0%9F%87%AF%F0%9F%87%B5%20Japan_14
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp15.mmyjiedian.com:30015#%F0%9F%87%AF%F0%9F%87%B5%20Japan_15
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp16.mmyjiedian.com:30016#%F0%9F%87%AF%F0%9F%87%B5%20Japan_16
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp17.mmyjiedian.com:30017#%F0%9F%87%AF%F0%9F%87%B5%20Japan_17
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp18.mmyjiedian.com:30018#%F0%9F%87%AF%F0%9F%87%B5%20Japan_18
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp19.mmyjiedian.com:30019#%F0%9F%87%AF%F0%9F%87%B5%20Japan_19
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@jp20.mmyjiedian.com:30020#%F0%9F%87%AF%F0%9F%87%B5%20Japan_20
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg01.mmyjiedian.com:20001#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_01
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg02.mmyjiedian.com:20002#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_02
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg03.mmyjiedian.com:20003#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_03
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg04.mmyjiedian.com:20004#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_04
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg05.mmyjiedian.com:20005#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_05
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg06.mmyjiedian.com:20006#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_06
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg07.mmyjiedian.com:20007#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_07
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg08.mmyjiedian.com:20008#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_08
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg09.mmyjiedian.com:20009#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_09
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg10.mmyjiedian.com:20010#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_10
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg11.mmyjiedian.com:20011#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_11
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg12.mmyjiedian.com:20012#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_12
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg13.mmyjiedian.com:20013#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_13
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg14.mmyjiedian.com:20014#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_14
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@sg15.mmyjiedian.com:20015#%F0%9F%87%B8%F0%9F%87%AC%20Singapore_15
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@us01.mmyjiedian.com:50001#%F0%9F%87%BA%F0%9F%87%B8%20United%20States_1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@us02.mmyjiedian.com:50502#%F0%9F%87%BA%F0%9F%87%B8%20United%20States_2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@us03.mmyjiedian.com:50003#%F0%9F%87%BA%F0%9F%87%B8%20United%20States_3
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@us04.mmyjiedian.com:50004#%F0%9F%87%BA%F0%9F%87%B8%20United%20States_4
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@us05.mmyjiedian.com:50005#%F0%9F%87%BA%F0%9F%87%B8%20United%20States_5
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@us06.mmyjiedian.com:50006#%F0%9F%87%BA%F0%9F%87%B8%20United%20States_6
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@tw01.mmyjiedian.com:40006#%F0%9F%87%B9%F0%9F%87%BC%20Taiwan_1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@tw02.mmyjiedian.com:40007#%F0%9F%87%B9%F0%9F%87%BC%20Taiwan_2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@tw03.mmyjiedian.com:40008#%F0%9F%87%B9%F0%9F%87%BC%20Taiwan_3
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@kr01.mmyjiedian.com:40004#%F0%9F%87%B0%F0%9F%87%B7%20Korea_1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@kr02.mmyjiedian.com:40005#%F0%9F%87%B0%F0%9F%87%B7%20Korea_2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@vn01.mmyjiedian.com:40001#%F0%9F%87%BB%F0%9F%87%B3%20Vietnam_1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@vn02.mmyjiedian.com:40002#%F0%9F%87%BB%F0%9F%87%B3%20Vietnam_2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmYTcwOTE5My05NGM4LTQ1ODEtOTM2NC0yYjcyZjhkNDdjNTI@vn03.mmyjiedian.com:40003#%F0%9F%87%BB%F0%9F%87%B3%20Vietnam_3
https://sub.xf.free.hr/auto
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
