'use strict';
// 所有角色数据都是娱乐测试的设计参数，而非对真人的心理测量。
const KEYS=['A','S','B','E','M','D','L','G','C'];
const NAMES=['主动性','敏感度','边界感','表达度','共情力','直接度','释怀力','修复意愿','掌控欲'];
const CHARACTERS= [
  {
    "name": "张萌",
    "v": [
      95,
      45,
      35,
      85,
      75,
      70,
      65,
      80,
      90
    ],
    "tags": [
      "热情仗义",
      "社交达人",
      "情商MAX"
    ],
    "quote": "你喜欢收藏马克杯，我依然给你买",
    "desc": "你是朋友圈里的大姐大，也是那个永远闲不下来的人。你喜欢张罗、喜欢照顾大家。聚会冷场三秒，你会比任何人都先坐不住，第一个跳出来找话题、把气氛重新撑起来。大家因为你的一点小安排而开心的样子，是你最踏实的时候；那种被需要、被惦记的感觉，比什么夸奖都管用。\n\n重情，也讲分寸；会算利弊，但算完还是把人情放在前面。真出了事，站出来兜底的多半是你。和你成为朋友，是件很安心的事。你看上去无所不能，但其实也很希望有人能记得你的喜好、主动照顾你一次。"
  },
  {
    "name": "马天宇",
    "v": [
      20,
      90,
      95,
      20,
      90,
      35,
      80,
      25,
      15
    ],
    "tags": [
      "温柔细腻",
      "高边界",
      "体面"
    ],
    "quote": "成年人的体面就是，不给对方任何难堪的台阶",
    "desc": "你看上去很好相处，总是能接住他人的情绪，也很少和谁发生激烈冲突。但真正能走进你内心的人，可能寥寥无几。你很懂别人的难处，也习惯把自己的难处轻轻带过。你不喜欢麻烦别人，更不喜欢被过度热情包围。别人觉得你情绪稳定，只有你知道，有些事情不是不难过，只是不想说，也没必要说。"
  },
  {
    "name": "王子璇",
    "v": [
      55,
      80,
      60,
      50,
      80,
      65,
      65,
      70,
      30
    ],
    "tags": [
      "付出",
      "要面子",
      "勇敢果断"
    ],
    "quote": "我不想和你做朋友了",
    "desc": "你对朋友的好，几乎不经过大脑，是会默默记住朋友需要什么、然后悄悄做好的人。比起漂亮的话，你更相信实际行动。你很重感情，有时也会不自觉地把别人的需求放在自己前面。你不是没有脾气，只是很多时候愿意忍一忍。但当失望积累到某个程度，你也能突然变得果断。"
  },
  {
    "name": "许飞",
    "v": [
      35,
      100,
      50,
      40,
      90,
      40,
      20,
      90,
      35
    ],
    "tags": [
      "大文豪",
      "深情",
      "细腻敏感"
    ],
    "quote": "我画地为牢啊，厉娜",
    "desc": "你是一个内心藏着很多故事的人。一起无所事事的午后、某一次告别的场景，都可能在你心里停留很久。你有自己的骄傲，不喜欢把委屈摊开解释，可又忍不住希望有人能真正读懂你。你看起来清醒，面对重要的人却未必做得到洒脱。你不擅长主动靠近，但你分得清里外，认得出的真心，只要那个人找你，你一定会去。"
  },
  {
    "name": "厉娜",
    "v": [
      65,
      20,
      75,
      75,
      65,
      90,
      100,
      50,
      10
    ],
    "tags": [
      "自洽",
      "天真纯粹",
      "活在当下"
    ],
    "quote": "大米饭还是香啊～",
    "desc": "你身上有一种很难得的轻盈。爱就爱全部，恨也恨全部，中间没有那么多弯弯绕绕。你不让生活因为一件不愉快的事就停下来。难过可以难过，但饭还是要好好吃，觉还是要好好睡。你不喜欢猜心思，也不想在复杂的关系里兜圈子。你欣赏真实的人，珍视真挚的友谊，习惯直接表达自己的想法和爱。有人觉得你太简单，其实你只是不愿把精力消耗在无意义的纠结上。"
  },
  {
    "name": "青稚",
    "v": [
      85,
      20,
      55,
      55,
      35,
      95,
      80,
      90,
      95
    ],
    "tags": [
      "执着卷王",
      "直球行动",
      "顿感"
    ],
    "quote": "先救根儿！",
    "desc": "你是一个认定了目标就会尽全力去做的人，相信努力永远不会骗人。虽然在情感上有些迟钝，但遇到问题会去主动想办法解决。有时可能太专注于自己认定的逻辑，看不到对方可能只是需要被理解和被看见。你的直接和顿感有时候会不小心伤害到朋友，但一旦意识到自己伤害了重要的人，你会认真反思，并努力改变。"
  },
  {
    "name": "白小纯",
    "v": [
      80,
      90,
      10,
      90,
      75,
      85,
      25,
      60,
      30
    ],
    "tags": [
      "嘴硬心软",
      "一点就炸",
      "重情义"
    ],
    "quote": "泥，怎么嫩ze样子嗦呢！",
    "desc": "你是那种情绪写在脸上，却总不肯轻易认输的人。嘴上可能还在生气，行动上却已经忍不住关心对方。你很在意朋友的态度，也希望自己的真心能被认真对待。熟悉你的人都知道，你嘴上不饶人，其实心特别软。你愿意付出，也渴望被坚定地选择。"
  },
  {
    "name": "张泉灵",
    "v": [
      60,
      70,
      80,
      70,
      100,
      75,
      95,
      90,
      10
    ],
    "tags": [
      "共情达人",
      "理性观察",
      "顶级磕学家"
    ],
    "quote": "磕拉了……",
    "desc": "恭喜你，开出了隐藏人物！\n\n别人来《后会友期》是为了修复友情，你来是为了研究人类到底怎么交朋友的。你能理解一个人的委屈，也看得见另一个人的无奈。你知道每个人都有自己的局限，成熟的友情没有谁对谁错，重要的是允许不同的人拥有不同的答案。"
  }
];
// 每个答案格式：[显示文字, {维度代码:计分}]
const QUESTIONS=[
  [
    "朋友群里有人提议周末聚会，但大家迟迟定不下来。你会？",
    [
      [
        "主动拉群、找餐厅、确认时间，把所有人都安排妥当。",
        {
          "A": 2,
          "C": 2
        }
      ],
      [
        "先问问大家的想法，尽量找到所有人都满意的方案。",
        {
          "M": 2,
          "C": -2
        }
      ],
      [
        "直接提出一个最有效率的方案，可以就赶紧定。",
        {
          "D": 2,
          "C": 2
        }
      ],
      [
        "等大家商量好再说，去哪儿都行，开心最重要。",
        {
          "A": -2,
          "L": 2
        }
      ]
    ]
  ],
  [
    "你的好朋友最近心情很差，来找你倾诉。你的第一反应是？",
    [
      [
        "认真听他说，尽量理解他为什么这么难过。",
        {
          "M": 2,
          "S": 2
        }
      ],
      [
        "帮他分析到底哪里出了问题，提出可行的解决办法。",
        {
          "C": 2,
          "D": 2
        }
      ],
      [
        "完全代入进去，忍不住替他打抱不平。",
        {
          "E": 2,
          "S": 2
        }
      ],
      [
        "带他去吃顿好的、玩点开心的，让他暂时忘记烦恼。",
        {
          "L": 2,
          "A": 2
        }
      ]
    ]
  ],
  [
    "如果你和朋友一起旅行，你最可能是？",
    [
      [
        "负责安排一切的人，生怕大家玩得不尽兴。",
        {
          "A": 2,
          "M": 2
        }
      ],
      [
        "随性派，行程可以没有，但好吃的一定不能错过。",
        {
          "L": 2,
          "C": -2
        }
      ],
      [
        "目标明确，提前规划路线，高效完成所有想玩的项目。",
        {
          "C": 2,
          "D": 2
        }
      ],
      [
        "喜欢慢慢观察，享受和朋友聊天、分享心事的过程。",
        {
          "S": 2,
          "M": 2
        }
      ]
    ]
  ],
  [
    "朋友准备做一个你认为不太明智的重要决定。",
    [
      [
        "忍不住帮他分析利弊，甚至替他考虑好后续安排。",
        {
          "C": 2,
          "M": 1
        }
      ],
      [
        "直接指出问题，希望他别再浪费时间。",
        {
          "D": 2,
          "M": -2
        }
      ],
      [
        "即使不赞同，也会尊重他的选择。",
        {
          "B": 2,
          "C": -2
        }
      ],
      [
        "更想先知道他为什么这样决定，以及背后的感受。",
        {
          "M": 2,
          "D": -2
        }
      ]
    ]
  ],
  [
    "刚进入一个完全陌生的朋友圈，你通常会？",
    [
      [
        "主动和大家打招呼，很快就能找到共同话题。",
        {
          "A": 2,
          "E": 2
        }
      ],
      [
        "先安静观察，熟悉之后才会慢慢展现真实的自己。",
        {
          "A": -2,
          "S": 2
        }
      ],
      [
        "不太擅长寒暄，等待别人主动来找我。",
        {
          "A": -2,
          "E": -1
        }
      ],
      [
        "没人来找我也没关系，一个人待着挺舒服。",
        {
          "B": 2,
          "A": -2
        }
      ]
    ]
  ],
  [
    "你给朋友发了一段很认真的消息，对方只回复了一个“哈哈”。",
    [
      [
        "有点失落，会忍不住想他是不是没有认真看。",
        {
          "S": 2,
          "L": -2
        }
      ],
      [
        "直接问他：“你到底有没有认真看啊！”",
        {
          "D": 2,
          "E": 2
        }
      ],
      [
        "没什么特别的感觉，可能他只是比较忙。",
        {
          "L": 2,
          "S": -2
        }
      ],
      [
        "以后可能不会再向他分享这么多内心想法。",
        {
          "B": 2,
          "E": -2
        }
      ]
    ]
  ],
  [
    "如果你很喜欢一个朋友，你通常会怎么表现？",
    [
      [
        "主动约他见面、送礼物、关心他的生活。",
        {
          "A": 2,
          "E": 2
        }
      ],
      [
        "默默记住他的喜好，在他需要的时候出现。",
        {
          "M": 2,
          "E": -2
        }
      ],
      [
        "经常关心对方、打闹、撒娇，表达亲近。",
        {
          "E": 2,
          "B": -2
        }
      ],
      [
        "不一定频繁联系，但会给他足够的自由和信任。",
        {
          "B": 2,
          "L": 2
        }
      ]
    ]
  ],
  [
    "你发现朋友最近和另一个人走得特别近，你会？",
    [
      [
        "有点失落，但不会主动表现出来。",
        {
          "S": 2,
          "E": -2
        }
      ],
      [
        "感到吃醋，可能半开玩笑地问他：“你是不是把我忘了？！”",
        {
          "E": 2,
          "B": -2
        }
      ],
      [
        "很正常，每个人都可以有不同的朋友。",
        {
          "B": 2,
          "L": 2
        }
      ],
      [
        "主动约他出去玩，创造更多相处机会。",
        {
          "A": 2,
          "G": 2
        }
      ]
    ]
  ],
  [
    "朋友说了一句话，让你感到不舒服。你通常会？",
    [
      [
        "当时不说，但后来可能会反复想起。",
        {
          "S": 2,
          "L": -2
        }
      ],
      [
        "直接告诉他这句话让我不舒服。",
        {
          "D": 2,
          "B": 2
        }
      ],
      [
        "可能当场怼回去，过一会儿就忘了。",
        {
          "E": 2,
          "L": 2
        }
      ],
      [
        "先考虑他是不是无心的，尽量理解他的处境。",
        {
          "M": 2,
          "D": -2
        }
      ]
    ]
  ],
  [
    "哪一种友情最让你感到安心？",
    [
      [
        "不用经常联系，但彼此尊重，谁也不会越界。",
        {
          "B": 2,
          "E": -2
        }
      ],
      [
        "即使有些心事说不出口，对方也能理解的默契。",
        {
          "S": 2,
          "M": 2
        }
      ],
      [
        "可以热烈地表达喜欢，也可以毫无顾忌地打闹。",
        {
          "E": 2,
          "B": -2
        }
      ],
      [
        "彼此都很靠谱，遇到问题会一起想办法。",
        {
          "G": 2,
          "C": 2
        }
      ]
    ]
  ],
  [
    "你和一个很重要的朋友发生了严重争执。你最可能？",
    [
      [
        "主动找他沟通，希望尽快解决问题。",
        {
          "G": 2,
          "A": 2
        }
      ],
      [
        "暂时不联系，让自己冷静下来，也给彼此空间。",
        {
          "B": 2,
          "E": -2
        }
      ],
      [
        "感到受伤，气头上可能说一些狠话，但心里还是舍不得。",
        {
          "E": 2,
          "L": -2
        }
      ],
      [
        "认真回想整件事，越想越觉得有些话没说清楚。",
        {
          "S": 2,
          "L": -2
        }
      ]
    ]
  ],
  [
    "一个曾经伤害过你的老朋友，几年后突然联系你。",
    [
      [
        "过去的事情一下子涌上心头，其实我一直没有完全忘记。",
        {
          "S": 2,
          "L": -2
        }
      ],
      [
        "可以礼貌回应，但不一定愿意重新亲近。",
        {
          "B": 2,
          "G": -2
        }
      ],
      [
        "愿意重新聊聊，也许我们都已经改变了。",
        {
          "G": 2,
          "M": 2
        }
      ],
      [
        "没必要纠结过去，现在聊得来就聊，聊不来也没关系。",
        {
          "L": 2,
          "S": -2
        }
      ]
    ]
  ],
  [
    "你发现自己一直在主动维护一段友情，但对方似乎没有那么在乎。",
    [
      [
        "试着主动沟通，希望找到更舒服的相处方式。",
        {
          "G": 2,
          "M": 2
        }
      ],
      [
        "慢慢减少联系，不再强求。",
        {
          "B": 2,
          "G": -2
        }
      ],
      [
        "会感到很委屈，但在心里又忍不住为对方开脱。",
        {
          "S": 2,
          "M": 2
        }
      ],
      [
        "觉得不值得再花那么多精力，干脆把注意力放回自己身上。",
        {
          "L": 2,
          "B": 2
        }
      ]
    ]
  ],
  [
    "你和朋友产生了误会，但你觉得自己并没有错。",
    [
      [
        "会主动解释清楚，即使要多花一些时间。",
        {
          "G": 2,
          "D": 2
        }
      ],
      [
        "不想再解释，真正懂我的人自然会懂。",
        {
          "E": -2,
          "S": 2
        }
      ],
      [
        "先听听他为什么会这么理解，看看是不是双方都有问题。",
        {
          "M": 2,
          "G": 2
        }
      ],
      [
        "不想让事情太复杂，指出误会，这不是我的错。",
        {
          "D": 2,
          "C": 2
        }
      ]
    ]
  ],
  [
    "一段曾经非常亲密的友情结束了。很久以后，你会？",
    [
      [
        "有些人可能一辈子都忘不了。即使再也不联系，只要他需要我，我依然愿意为他付出一切。",
        {
          "S": 2,
          "G": 2
        }
      ],
      [
        "有过美好的回忆就足够了。人总是要往前走的，不必执着于重新拥有。",
        {
          "L": 2,
          "B": 2
        }
      ],
      [
        "谁想他了啊！但如果他突然来找我，我还是会非常开心并释放善意。",
        {
          "E": 2,
          "G": 2
        }
      ],
      [
        "会想想当初的问题出在哪里。如果还有机会，也愿意坦诚地重新认识彼此。",
        {
          "G": 2,
          "M": 2
        }
      ]
    ]
  ],
  [
    "当你特别难过时，你最希望？",
    [
      [
        "一个人消化，不想给别人添麻烦。",
        {
          "B": 2,
          "E": -2
        }
      ],
      [
        "有人主动发现我的难过，告诉我他在乎我。",
        {
          "S": 2,
          "E": 2
        }
      ],
      [
        "找信任的人倾诉，把所有委屈都说出来。",
        {
          "E": 2,
          "B": -2
        }
      ],
      [
        "做点别的事转移注意力，比如吃东西、睡觉、打游戏。",
        {
          "L": 2,
          "S": -2
        }
      ]
    ]
  ],
  [
    "朋友告诉你：“你有时候太强势了，让我觉得有压力。”",
    [
      [
        "有点意外，但会认真反思，尝试调整自己的方式。",
        {
          "G": 2,
          "M": 2
        }
      ],
      [
        "感觉很委屈，我明明是为了他好。",
        {
          "C": 2,
          "S": 2
        }
      ],
      [
        "直接问：“你希望我具体怎么改变？”",
        {
          "D": 2,
          "G": 2
        }
      ],
      [
        "觉得每个人有自己的相处方式，实在不合适也不用勉强。",
        {
          "B": 2,
          "L": 2
        }
      ]
    ]
  ],
  [
    "假如你发现自己好心办了坏事，让朋友受到伤害。",
    [
      [
        "想办法弥补，用行动证明自己的歉意。",
        {
          "G": 2,
          "C": 2
        }
      ],
      [
        "会很自责，忍不住反复想自己哪里做错了。",
        {
          "S": 2,
          "L": -2
        }
      ],
      [
        "认真听听对方的感受，不急于替自己解释。",
        {
          "M": 2,
          "C": -2
        }
      ],
      [
        "坦诚道歉，承担责任，但也不会一直责怪自己。",
        {
          "D": 2,
          "L": 2
        }
      ]
    ]
  ],
  [
    "如果友情可以用一句话来形容，你最认同哪句？",
    [
      [
        "我可以不说爱你，但如果有一天你需要我，我愿意把自己拥有的一切都给你。",
        {
          "S": 2,
          "G": 2
        }
      ],
      [
        "互相包容彼此的缺点，一直在彼此身边。",
        {
          "M": 2,
          "G": 2
        }
      ],
      [
        "我对你好，是因为我愿意。至于我们能走多远，不必强求。",
        {
          "B": 2,
          "L": 2
        }
      ],
      [
        "真正的朋友不一定时刻陪伴，但应该让彼此都成为更好的人。",
        {
          "M": 2,
          "G": 2
        }
      ]
    ]
  ],
  [
    "如果你收到《后会友期》的邀请，你最期待的是？",
    [
      [
        "终于有机会把那些积压多年的委屈和真心话说出来。",
        {
          "S": 2,
          "E": 2
        }
      ],
      [
        "主动向曾经走散的朋友伸出手，看看能不能重新开始。",
        {
          "G": 2,
          "A": 2
        }
      ],
      [
        "和老朋友一起享受当下！吵过架又怎样，我还是很想见到他们。",
        {
          "E": 2,
          "G": 2
        }
      ],
      [
        "我没有任何友谊相关的困扰，只想坐观察席大磕特磕。",
        {
          "M": 2,
          "L": 2
        }
      ]
    ]
  ],
  [
    "如果有一天你特别难过，想找个人打电话说说心里话，你会？",
    [
      [
        "脑海里立刻浮现好几个名字，有人陪我聊聊就会好很多。",
        {
          "E": 2,
          "B": -2
        }
      ],
      [
        "有一两个特别信任的人，只有在他们面前我才能卸下防备。",
        {
          "S": 2,
          "M": 1
        }
      ],
      [
        "有朋友，但我一般不会主动倾诉，不想麻烦别人。",
        {
          "B": 1,
          "E": -2
        }
      ],
      [
        "好像没有一个能真正说心里话的人，很多事情只能自己消化。",
        {
          "B": 2,
          "E": -2
        }
      ]
    ]
  ]
];
// 张泉灵隐藏结局：Q20-D，且除Q20外至少2次选择用户标注（泉）的答案。
const HIDDEN={questionIndex:19,optionIndex:3,support:[[3,2],[3,3],[8,3],[11,3],[13,2],[17,2]],minSupport:2};
const app=document.getElementById('app');
let current=0,answers=Array(QUESTIONS.length).fill(null),page='home';
function elEscape(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function header(){return '<header class="topline"><span class="brand">AFTER FRIENDSHIP · 后会友期</span><span>友情人格实验室</span></header>';}
function renderHome(){page='home';app.innerHTML=`<div class="wrap">${header()}<section class="hero"><div class="eyebrow">THE FRIENDSHIP QUIZ</div><h1>你最像《后会友期》<br>里的<em>谁？</em></h1><p>我们用不同的方式爱朋友。<br>有人热烈，有人安静；有人难以放下，有人学会释怀。<br>21个选择，遇见你的友情人格。</p><div class="orbits"><div class="orbit"></div><div class="orbit"></div><div class="bubble a">重逢</div><div class="bubble b">沟通</div><div class="bubble c">回忆</div><div class="bubble d">释怀</div><div class="middle">Friendship</div></div><button class="pill" id="start">开始测试 →</button><div class="smallprint">21道题 · 约3分钟 · 7+1（隐藏）种人物结局</div></section><p class="mini">非官方粉丝创作 · 仅供娱乐</p></div>`;document.getElementById('start').onclick=()=>{current=0;answers=Array(QUESTIONS.length).fill(null);renderQuestion();};}
function renderQuestion(){page='question';const q=QUESTIONS[current],selected=answers[current];app.innerHTML=`<div class="wrap">${header()}<section class="panel"><div class="qhead"><span>友情人格探索</span><span>${String(current+1).padStart(2,'0')} / ${QUESTIONS.length}</span></div><div class="progress"><div style="width:${(current+1)/QUESTIONS.length*100}%"></div></div><div class="qtag">QUESTION ${String(current+1).padStart(2,'0')}</div><h2 class="qtitle">${elEscape(q[0])}</h2><div class="answers">${q[1].map((a,i)=>`<button class="answer ${selected===i?'selected':''}" data-choice="${i}"><span class="letter">${'ABCD'[i]}</span><span>${elEscape(a[0])}</span></button>`).join('')}</div><div class="actions"><button class="plain" id="back">← ${current===0?'返回首页':'上一题'}</button><button class="pill" id="next" ${selected===null?'disabled':''}>${current===QUESTIONS.length-1?'查看我的结果 →':'下一题 →'}</button></div></section><p class="mini">没有标准答案，请选择最贴近你真实反应的一项。</p></div>`;document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{answers[current]=Number(b.dataset.choice);renderQuestion();});document.getElementById('back').onclick=()=>{if(current===0)renderHome();else {current--;renderQuestion();}};document.getElementById('next').onclick=()=>{if(answers[current]===null)return;if(current<QUESTIONS.length-1){current++;renderQuestion();}else renderResult();};}
function calculate(){
 const raw=Object.fromEntries(KEYS.map(k=>[k,0]));
 const positive=Object.fromEntries(KEYS.map(k=>[k,0]));
 const negative=Object.fromEntries(KEYS.map(k=>[k,0]));
 QUESTIONS.forEach((q,i)=>{
  KEYS.forEach(k=>{
   const vals=q[1].map(o=>o[1][k]||0);
   positive[k]+=Math.max(0,...vals);
   negative[k]+=Math.abs(Math.min(0,...vals));
  });
  const val=q[1][answers[i]][1];
  for(const k in val)raw[k]+=val[k];
 });
 const scaled={};
 KEYS.forEach(k=>{
  const cap=raw[k]>=0?positive[k]:negative[k];
  scaled[k]=cap?Math.max(0,Math.min(100,Math.round(50+50*raw[k]/cap))):50;
 });
 return scaled;
}
// 根据整份题库对四个选项等概率作答的精确理论均值计算的中性基线。
// 避免选项计分偏正时，让所有人都被判成最靠近中间值的角色。
const ANSWER_BASELINE=KEYS.map(k=>{
 // 各选项等概率选择时的期望原始分数，映射到相同的九维量表。
 let p=0,n=0,mean=0;
 QUESTIONS.forEach(q=>{const vals=q[1].map(o=>o[1][k]||0);p+=Math.max(0,...vals);n+=Math.abs(Math.min(0,...vals));mean+=vals.reduce((a,b)=>a+b,0)/4;});
 const cap=mean>=0?p:n;
 return cap?50+50*mean/cap:50;
});
const PROFILE_CENTRE=KEYS.map((_,i)=>CHARACTERS.slice(0,7).reduce((sum,c)=>sum+c.v[i],0)/7);
function match(scores){
 const qualified=answers[HIDDEN.questionIndex]===HIDDEN.optionIndex&&HIDDEN.support.filter(([i,j])=>answers[i]===j).length>=HIDDEN.minSupport;
 if(qualified)return CHARACTERS[7];
 const userVector=KEYS.map((k,i)=>scores[k]-ANSWER_BASELINE[i]);
 const len=v=>Math.sqrt(v.reduce((s,x)=>s+x*x,0));
 // 比较性格特征的相对方向，不用原始绝对距离；仍保留九维画像的完整数值。
 return CHARACTERS.slice(0,7).filter(c=>c.name!=="马天宇"||scores.B>=70).map(c=>{
  const profile=c.v.map((v,i)=>v-PROFILE_CENTRE[i]);
  const dot=userVector.reduce((s,v,i)=>s+v*profile[i],0);
  const similarity=dot/(len(userVector)*len(profile)+1e-9);
  return {c,similarity};
 }).sort((a,b)=>b.similarity-a.similarity)[0].c;
}
function chart(scores){const cx=230,cy=215,r=145,pt=(i,rad)=>{const angle=-Math.PI/2+i*2*Math.PI/KEYS.length;return [(cx+rad*Math.cos(angle)).toFixed(1),(cy+rad*Math.sin(angle)).toFixed(1)].join(',')};const rings=[20,40,60,80,100].map(n=>`<polygon points="${KEYS.map((_,i)=>pt(i,r*n/100)).join(' ')}" fill="none" stroke="#77738d" stroke-opacity=".3"/>`).join('');const spokes=KEYS.map((_,i)=>`<line x1="${cx}" y1="${cy}" x2="${pt(i,r).split(',')[0]}" y2="${pt(i,r).split(',')[1]}" stroke="#77738d" stroke-opacity=".3"/>`).join('');const poly=`<polygon points="${KEYS.map((k,i)=>pt(i,r*scores[k]/100)).join(' ')}" fill="#f3bf96" fill-opacity=".23" stroke="#f3bf96" stroke-width="3" stroke-linejoin="round"/>`;const labels=KEYS.map((k,i)=>{const [x,y]=pt(i,r+31).split(',');return `<text x="${x}" y="${y}" fill="#ede8ee" font-size="13" text-anchor="middle" dominant-baseline="middle">${NAMES[i]}</text>`}).join('');return `<svg class="chart" viewBox="0 0 460 445" role="img" aria-label="九维友情人格雷达图">${rings}${spokes}${poly}${labels}</svg>`;}
function portrait(name){const safe=elEscape(name);return `<div class="portrait"><img id="portraitImg" alt="${safe}人物照片" style="display:none"><div class="missing" id="portraitPlaceholder">${safe}</div></div>`;}
function setPortrait(name){const img=document.getElementById('portraitImg'),placeholder=document.getElementById('portraitPlaceholder');const extensions=['jpg','jpeg','png','webp'];let i=0;function next(){if(i>=extensions.length)return;img.src=`images/${encodeURIComponent(name)}.${extensions[i++]}`;}img.onload=()=>{img.style.display='block';placeholder.style.display='none';};img.onerror=next;next();}
function renderResult(){if(answers.some(x=>x===null)){current=answers.findIndex(x=>x===null);renderQuestion();return;}page='result';const scores=calculate(),person=match(scores),hidden=person.name==='张泉灵';app.innerHTML=`<div class="wrap">${header()}<section class="result"><div class="eyebrow">YOUR FRIENDSHIP PERSONA</div>${hidden?'<div class="hidden-badge">✧ 解锁隐藏结局 ✧</div>':''}<h1>你最像《后会友期》里的<br><em>${elEscape(person.name)}</em></h1><div class="subtitle">《后会友期》· 友情人格测试</div>${portrait(person.name)}<div class="quote">“${elEscape(person.quote)}”</div><div class="tags">${person.tags.map(t=>`<span class="tag">${elEscape(t)}</span>`).join('')}</div><div class="panel"><div class="qtag">YOUR STORY</div><p class="desc">${elEscape(person.desc).replace(/\n\n/g,"</p><p class=\"desc\">")}</p><div class="chart-wrap"><h2>你的九维友情人格图谱</h2>${chart(scores)}<p class="legend">九项分数来自本次21题的相对计分，不代表人格优劣或心理测量结果。</p></div></div><div class="footer-actions"><button class="pill" id="share">分享结果 ↗</button><button class="pill secondary" id="again">再测一次 ↺</button></div><p class="footnote">非官方粉丝创作，仅供娱乐。人物画像取材于观众对节目表现的解读，不代表真人的心理特质或真实立场。</p></section></div>`;setPortrait(person.name);document.getElementById('again').onclick=renderHome;document.getElementById('share').onclick=async()=>{const text=`我在《后会友期》友情人格测试里最像「${person.name}」！\n快来看看你是谁：${location.href.split('#')[0]}`;if(navigator.share){try{await navigator.share({title:'你最像《后会友期》里的谁？',text,url:location.href.split('#')[0]});return;}catch(e){if(e.name==='AbortError')return;}}try{await navigator.clipboard.writeText(text);toast('结果文案和链接已复制');}catch(e){toast('复制失败，可手动复制网址');}};}
function toast(t){const n=document.createElement('div');n.className='toast';n.textContent=t;document.body.appendChild(n);setTimeout(()=>n.remove(),2300);}
renderHome();
