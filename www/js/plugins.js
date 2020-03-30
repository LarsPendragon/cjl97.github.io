// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"false","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.13 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_ClassChangeCore","status":true,"description":"v1.13 This plugin creates a system where your player\ncan change classes through the main menu.","parameters":{"---General---":"","Class Command":"Class","Auto Add Menu":"true","Show Command":"true","Enable Command":"true","Auto Place Command":"true","Default Icon":"78","Maintain Levels":"1","Unlocked Classes":"0","---Command Window---":"","Class Change Command":"Class","Show Class Change":"true","Enable Class Change":"true","Show Skill Learn":"false","Finish Command":"Finish","Text Alignment":"center","---Window Settings---":"","Current Class Color":"17","Class Level Format":"LV%1","Class Level Font Size":"20"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.50 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_PartyLimitGauge","status":true,"description":"v1.11 (Requires YEP_SkillCore.js) A party-wide skill\nresource is accessible across all members of a unit.","parameters":{"---General---":"","Gauge Increments":"1","Party Text Size":"28","Draw Cost Icon":"false","Cost Color":"6","Cost Format":"%1","Cost Font Size":"20","---Party---":"","Show Party Gauge":"true","Per Party Member":"0","Party Max Bonus":"100","Party Gauge X":"Graphics.boxWidth - width - 4","Party Gauge Y":"Graphics.boxHeight - statusHeight - height - 4","Party Width":"max.clamp(100, 400)","Party Gauge Color 1":"14","Party Gauge Color 2":"6","Party Gauge Icon":"87","Party Icon Align":"right","Party Text Buffer X":"0","Party Text Buffer Y":"10","---Troop---":"","Show Troop Gauge":"false","Per Troop Member":"100","Troop Max Bonus":"0","Troop Gauge X":"4","Troop Gauge Y":"Graphics.boxHeight - statusHeight - height - 4","Troop Width":"max.clamp(100, 400)","Troop Gauge Color 1":"10","Troop Gauge Color 2":"2","Troop Gauge Icon":"309","Troop Icon Align":"left","Troop Text Buffer X":"0","Troop Text Buffer Y":"8","---Limit Gain---":"","Reset Gauge":"true","Battle Start":"0","Take HP Damage":"0","Deal HP Damage":"0","Heal HP Damage":"0","Take MP Damage":"0","Deal MP Damage":"0","Heal MP Damage":"0","Gain State":"0","Deal State":"0","Killed Ally":"0","Killed Foe":"5","Win Battle":"10","Flee Battle":"-100","Lose Battle":"-1000"}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"v1.12 (Requires YEP_SkillCore.js) Cooldowns can be applied\nto skills to prevent them from being used continuously.","parameters":{"---Cooldown---":"","Cooldown Format":"%1CD","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"-10","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","Cooldown Bypass List":"[]","---Warmup---":"","Warmup Format":"%1WU","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75","---Battle Core---":"","Time Based":"false","Turn Time":"100"}},
{"name":"YEP_InstantCast","status":true,"description":"v1.12 Allows skills/items to be instantly cast after being\nselected in the battle menu.","parameters":{"Instant Icon":"0"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.16 Alter the basic mechanics behind buffs and states\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"false","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_UtilityCommonEvents","status":true,"description":"v1.01 Make common events occur at specific gameplay points\nsuch as on loading, after battles, etc.","parameters":{"---General---":"","Load Game Event":"0","Battle Won Event":"17","Escape Battle Event":"0","Close Menu Event":"0","---Vehicles---":"","Boat Enter Event":"0","Boat Exit Event":"0","Ship Enter Event":"0","Ship Exit Event":"0","Airship Enter Event":"0","Airship Exit Event":"0"}}
];