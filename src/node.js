const rq = require('request-promise');

AIUI.create("v2.1",  function(aiui,  err){
	requestObject = aiui.getRequest().getObject();
	var response = aiui.getResponse();
    var updatedIntent = aiui.getUpdatedIntent();
    var context = aiui.getContext();
	console.log(context);
	// 判断请求类型
	var requestType =requestObject.request.type;
	console.log("技能请求类型为:" + requestType);
	if(requestType === "LaunchRequest"){
		// 会话保持活动状态
		response.withShouldEndSession(false);
	} else if(requestType === "IntentRequest"){
		// 会话保持活动状态
		response.withShouldEndSession(false);
		// 获取当前意图名
		var intentName = requestObject.request.intent.name;
        console.log("本次意图来自:" + intentName);
        let data;
        let intenturl = "http://autodev.openspeech.cn/mp-center/v1.0/app/entry?mpId=ea168e5f2923401f85175e20246146dd&md5=d5107159832f0e152af351d0a1b54c9c#Intent;action=android.intent.action.VIEW;package=com.iflytek.autofly.miniprogram;S.miniprogramid=ea168e5f2923401f85175e20246146dd;end"
		switch(intentName){
			case 'searchScenery':
				var dialogState= requestObject.request.dialogState;
				if( updatedIntent.getSlotNormValue('city') ){
					var keyword = updatedIntent.getSlotNormValue('city');
				}else{
					var keyword = updatedIntent.getSlotNormValue('scenery');
				}
				data=({
				  "application": {
				     "android": {
                        "method": "startService",
                        "intenturi": intenturl,
				         "contextData":"{\'keyword\':'"+ keyword +"',\'method':\'search\'}"
					 }
				  }
				});
				response.setData(data);
				response.setOutputSpeech("好的，主人！");
				break;
	    	case 'nearbyscenery':
				data=({
				"application": {
				 "android": {
				    "method": "startService",
                    "intenturi": intenturl,
				    "contextData":"{\'method\':\'nearbySe\'}"
				 }
				}
				});
				response.setData(data);
				response.setOutputSpeech("好的，主人！");
				break;
			default:
				response.setOutputSpeech("主人，很抱歉，暂时无法支持");
	            break;
		}
	} else if (requestType === "SessionEndedRequest") {
        response.withShouldEndSession(true);
    }
	aiui.commit();
})