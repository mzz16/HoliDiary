package com.project.main.js;

import java.util.List;
import java.util.Map;

public interface SubscribeMapper {

	String[] getSubscribing(User u);

	SubscribeInfo getSubscribingInfo(Subscribe s);

	List<SubscribeInfo> mysubSearch(Map<String, String> element);

	int mysubCancel(String subscribeNo);

	Subscribe checkMySubscribe(Subscribe s);

	int subscribe(Subscribe subElement);

	String[] getSubscriber(User u);

	SubscribeInfo getSubscriberInfo(Subscribe s);



}
