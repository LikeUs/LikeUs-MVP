
App.accessRule("*");
App.info({
  id: 'com.likeus',
  name: 'LikeUs',
  description: 'An iOS app built with Meteor',
  version: '0.0.1'
});

App.icons({
  'iphone': 'resources/icons/Icon.png',
  'iphone_2x': 'resources/icons/Icon-60@2x.png',
	'iphone_3x': 'resources/icons/Icon-60@3x.png',
	'ipad': 'resources/icons/Icon-76.png',
	'ipad_2x': 'resources/icons/Icon-76@2x.png'
});

App.launchScreens({
  'iphone': 'resources/splash/640x920.png',
  'iphone5': 'resources/splash/640x1096.png',
  'iphone6': 'resources/splash/750x1294.png',
  'iphone6p_portrait': 'resources/splash/1242x2148.png'	
});
