/**
 *  Module
 *
 * gTableTest Description
 */
angular.module('test', ['objectTable'])
	.controller('mainController', function($scope) {
		$scope.data = [{
				id: 01,
				name: "朱浩然",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 0,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 60,
				grade03: 0
			},
			{
				id: 02,
				name: "张振栋",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 0,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: -80,
				grade02: 50,
				grade03: 0
			},
			{
				id: 03,
				name: "傅禄翔",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: -80,
				grade02: 80,
				grade03: 0
			},
			{
				id: 04,
				name: "严建淮",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 0,
				work08: 0,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 75,
				grade03: 0
			},
			{
				id: 05,
				name: "徐凯楠",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 85,
				grade03: 0
			},
			{
				id: 06,
				name: "李康康",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 65,
				grade03: 0
			},
			{
				id: 07,
				name: "陈克行",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 08,
				name: "韩浩浩",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 09,
				name: "邬远峰",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 0,
				work03: 5,
				work04: 5,
				work05: 0,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 10,
				grade03: 0
			},
			{
				id: 10,
				name: "徐晗",
				preExam1: '免考',
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 0,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 35,
				grade02: 100,
				grade03: 0
			},
			{
				id: 11,
				name: "施希杰",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 10,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 5,
				grade02: 65,
				grade03: 0
			},
			{
				id: 12,
				name: "章驰恒",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 0,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 10,
				grade02: 60,
				grade03: 0
			},
			{
				id: 13,
				name: "夏彬慧",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 5,
				work03: 5,
				work04: 3,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 14,
				name: "张浩东",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 0,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 15,
				name: "潘承彬",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 16,
				name: "袁健苗",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 17,
				name: "王挺",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 70,
				grade03: 0
			},
			{
				id: 18,
				name: "周伊翔",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 0,
				work06: 5,
				work07: 0,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 60,
				grade03: 0
			},
			{
				id: 19,
				name: "陈波",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 60,
				grade03: 0
			},
			{
				id: 20,
				name: "邵家栋",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 0,
				work03: 5,
				work04: 5,
				work05: 0,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 21,
				name: "屠鑫波",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 0,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 95,
				grade03: 0
			},
			{
				id: 22,
				name: "包捷",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 65,
				grade03: 0
			},
			{
				id: 23,
				name: "屠林锋",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 0,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 5,
				grade02: 100,
				grade03: 0
			},
			{
				id: 24,
				name: "杨熔倪",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 25,
				name: "娄文依",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 3,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 26,
				name: "王志豪",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 85,
				grade03: 0
			},
			{
				id: 27,
				name: "郑檬涛",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 0,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 28,
				name: "丁磊",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 0,
				work03: 0,
				work04: 0,
				work05: 0,
				work06: 0,
				work07: 0,
				work08: 0,
				work09: 0,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: -30,
				grade02: 40,
				grade03: 0
			},
			{
				id: 29,
				name: "陈如谊",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 5,
				work03: 0,
				work04: 0,
				work05: 0,
				work06: 0,
				work07: 0,
				work08: 0,
				work09: 0,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 60,
				grade03: 0
			},
			{
				id: 30,
				name: "兰庆锋",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 5,
				grade02: 100,
				grade03: 0
			},
			{
				id: 32,
				name: "王锟",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 33,
				name: "朱善鸿",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 10,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 105,
				grade03: 0
			},
			{
				id: 34,
				name: "陈耀泽",
				preExam1: '免考',
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 10,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 116,
				grade03: 0
			},
			{
				id: 35,
				name: "黄书琛",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 0,
				work03: 5,
				work04: 5,
				work05: 0,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 85,
				grade03: 0
			},
			{
				id: 36,
				name: "季天浩",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 90,
				grade03: 0
			},
			{
				id: 37,
				name: "王成铠",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id: 38,
				name: "娄明磊",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: -30,
				grade02: 90,
				grade03: 0
			},
			{
				id: 39,
				name: "张桦",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 75,
				grade03: 0
			},
			{
				id: 40,
				name: "杨钦沨",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 3,
				work05: 0,
				work06: 5,
				work07: 0,
				work08: 0,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 30,
				grade03: 0
			},
			{
				id: 41,
				name: "吴义凯",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 0,
				work05: 3,
				work06: 5,
				work07: 0,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 85,
				grade03: 0
			},
			{
				id: 42,
				name: "鄢滟麟",
				preExam1: '免考',
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 10,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 55,
				grade02: 115,
				grade03: 0
			},
			{
				id: 43,
				name: "卢孙仲",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 0,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 10,
				grade02: 90,
				grade03: 0
			},
			{
				id:44,
				name:"郑文汉",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 85,
				grade03: 0
			},
			{
				id:45,
				name:"杨志谦",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 0,
				work03: 0,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 0,
				grade02: 100,
				grade03: 0
			},
			{
				id:46,
				name:"王昭锦",
				preExam1: 0,
				preExam2: 0,
				preExam3: 0,
				work01: 5,
				work02: 5,
				work03: 5,
				work04: 5,
				work05: 5,
				work06: 5,
				work07: 5,
				work08: 5,
				work09: 5,
				work10: 0,work11: 0,work12: 0,work13: 0,work14: 0,work15: 0,
				github: 5,
				grade02: 85,
				grade03: 0
			}
		];
		$scope.getGrade = function(data){
        //return if empty or not ready
        if(!data || !data.length) return;

        for(var i=0; i<data.length; i++){
          // totalNumber = totalNumber + parseFloat(data[i].money);
          data[i].isPreExame=false;
          data[i].preExam1Data=data[i].preExam1;
          data[i].preExam2Data=data[i].preExam2;
          data[i].preExam3Data=data[i].preExam3;
          if (data[i].preExam1=="免考"||data[i].preExam2=="免考"||data[i].preExam3=="免考") {
              data[i].preExam1Data=data[i].preExam2Data=data[i].preExam3Data=0;
              data[i].grade03=100;
              data[i].isPreExame=true;
          };
          data[i].grade01=data[i].preExam1Data+data[i].preExam2Data+data[i].preExam3Data+data[i].work01+data[i].work02+data[i].work03+data[i].work04+data[i].work05+data[i].work06+data[i].work07+data[i].work08+data[i].work09+data[i].work10+data[i].work11+data[i].work12+data[i].work13+data[i].work14+data[i].work15+data[i].github;
          data[i].grade04=$scope.toDecimal(data[i].grade01*0.3+data[i].grade02*0.2+data[i].grade03*0.5);
        }

    };

    $scope.toDecimal=function(x) {    
        var f = parseFloat(x);    
        if (isNaN(f)) {    
            return;    
        }    
        f = Math.round(x*100)/100;    
        return f;    
    }   
    
    $scope.getGrade($scope.data);
    $scope.data.time='2017.03.31';
    //$scope.getGrade($scope.data2);
})