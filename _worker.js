
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//PB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://b7a392e2-4ef0-4496-90bc-1c37bb234904@cf.090227.xyz:443?encryption=none&security=tls&sni=edgetunnel-2z2.pages.dev&fp=random&type=ws&host=edgetunnel-2z2.pages.dev&path=%2F%3Fed%3D2048#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@125.227.83.21:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_21%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@125.227.83.22:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_22%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@125.227.83.24:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_24%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@125.227.83.25:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_25%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@125.227.83.26:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_26%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@211.72.35.152:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_152%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@211.72.35.155:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_155%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@211.72.35.157:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_157%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@211.72.35.158:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_158%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.248.114.183:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_183%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.248.114.184:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_184%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.248.114.185:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_185%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.248.114.186:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_186%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.248.114.187:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_187%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.249.3.125:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_125%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.249.3.227:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_227%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.249.3.228:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_228%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.249.3.229:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_229%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.249.3.230:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_230%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@60.249.3.231:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%A8%F0%9F%87%B3TW_231%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@194.104.146.113:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AD%F0%9F%87%B0HK_113%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@45.11.104.59:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AD%F0%9F%87%B0HK_59%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@45.11.104.94:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AD%F0%9F%87%B0HK_94%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@45.11.104.44:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AD%F0%9F%87%B0HK_044%20%40WangCai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@45.11.104.79:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AD%F0%9F%87%B0HK_079%20%40WangCai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@45.11.104.113:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AD%F0%9F%87%B0HK_113%20%40WangCai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@103.172.116.16:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_16%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@103.172.116.190:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_190%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@103.172.116.220:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_220%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@103.172.116.221:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_221%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@103.172.116.252:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_252%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@185.230.245.213:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_213%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@5.44.249.42:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_42%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@5.44.249.43:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_43%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@5.44.249.44:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_44%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@5.44.249.45:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_45%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@5.44.249.51:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%B8%F0%9F%87%ACSG_51%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@103.29.68.226:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_226%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@103.29.70.9:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_9%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@139.162.102.32:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_32%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@139.162.108.118:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_118%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@139.162.79.8:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_8%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@139.162.84.183:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_183%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.104.96.103:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_103%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.105.205.74:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_74%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.105.205.214:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_214%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.105.208.94:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_94%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.105.219.224:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_224%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.105.230.133:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_133%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@18.177.142.32:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_32%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@18.179.37.79:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_79%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@221.215.48.114:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_114%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@221.215.48.116:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_116%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@221.215.48.117:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_117%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@221.215.48.118:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_118%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@52.199.164.162:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_162%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@54.178.26.105:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_105%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@54.250.34.221:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_221%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@54.95.215.125:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_125%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.104.90.43:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_43%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@13.114.31.41:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_41%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@13.231.106.60:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_60%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@120.241.46.100:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_100%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@120.241.46.106:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_106%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@18.183.87.73:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_73%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@120.241.47.8:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_8%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@120.241.47.15:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_15%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@120.241.47.16:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_16%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@120.241.47.20:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_20%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@120.241.47.62:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_62%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@54.178.71.192:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_192%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@139.162.88.148:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_148%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@139.162.108.42:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_42%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@52.69.48.25:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_25%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.105.220.7:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_7%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@54.65.130.9:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_9%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@13.230.213.154:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_154%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@18.181.146.122:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_122%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@35.72.184.29:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_29%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@172.104.117.248:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_248%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@43.207.207.206:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_206%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@52.195.228.139:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_139%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@13.231.105.239:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%AF%F0%9F%87%B5JP_239%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@23.247.137.166:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_166%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@95.174.71.27:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_27%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@95.174.71.28:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_28%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@95.174.71.29:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_29%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@95.174.71.30:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_30%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@95.174.71.96:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_96%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@95.174.71.98:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_98%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@95.174.71.99:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_99%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@95.174.71.101:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_101%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@134.195.101.33:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_33%20%40wangcai_8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp0MHNybWR4cm0zeHlqbnZxejlld2x4YjJteXE3cmp1dg@134.195.101.50:2377?plugin=obfs-local%3Bobfs%3Dtls%3Bobfs-host%3D%28TG%20%40WangCai2%29f1f3227%3A111548#%F0%9F%87%BA%F0%9F%87%B8US_50%20%40wangcai_8

https://sub.xf.free.hr/auto
https://WARP.fxxk.dedyn.io/auto
`

let urls = [];
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

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * 99 * 1099511627776 * 1024)/2);
		total = total * 1099511627776 * 1024;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;
			// 创建一个AbortController对象，用于控制fetch请求的取消
			const controller = new AbortController();
	
			const timeout = setTimeout(() => {
				controller.abort(); // 取消所有请求
			}, 2000); // 2秒后触发
	

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			}
			
			try {
				const responses = await Promise.allSettled(urls.map(url =>
					fetch(url, {
						method: 'get',
						headers: {
							'Accept': 'text/html,application/xhtml+xml,application/xml;',
							'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
						},
						signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
					}).then(response => {
						if (response.ok) {
							return response.text().then(content => {
								// 这里可以顺便做内容检查
								if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
									//console.log("clashsub: " + url);
									订阅转换URL += "|" + url;
								} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
									//console.log("singboxsub: " + url);
									订阅转换URL += "|" + url;
								} else {
									//console.log("未识别" + url);
									return content; // 保证链式调用中的下一个then可以接收到文本内容
								}
								//console.log(content);
							});
						} else {
							return ""; // 如果response.ok为false，返回空字符串
						}
					})
				));	
			
				for (const response of responses) {
					if (response.status === 'fulfilled' && response.value) {
						const content = response.value;
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
			console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
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
	`
	return text ;
}

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

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
