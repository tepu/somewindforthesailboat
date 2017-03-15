var normalEncounter = [
    "you pass",
    "you see",
    "you are greeted by",
    "you chance across",
    "you are winked at by",
    "you exchange a knowing glance with",
    "you reach for the same umbrella as",
    "you accidentally stare too long at"
];
var normalPerson = [
    "an episcopal bishop",
    "a soldier on leave",
    "a lively costermonger",
    "a constable making their rounds",
    "a gentleman, with no hat",
    "a woman in a wide-brimmed hat",
    "a prominent local politician",
    "two journalists, having a conversation"
];
var aftermathEncounter = [
    "you are dimly aware of",
    "you take no notice of",
    "you are surrounded by",
    "you press through",
    "you fight past",
    "you bump against"
];
var aftermathPerson= [
    "faceless bodies, gawking",
    "a blur of hollow faces",
    "a suffocating grey fog",
    "a sudden stillness",
    "the gathering crowds",
    "policemen shouting loudly"
];

var text = [
    {
        counter: 6,
        preamble: [
            "on the Sabbath",
            "while hunting in Nantes",
            "on your way to tiffin",
            "During the first bowl of the over (at Wembley)",
            "while carrying a cane and volume of Proust",
            "ascending the steps of parliment",
            "while reaching for your cigarette case",
            "during tiffin on the Seine",
            "at the green grocers",
            "on the promenade",
            "in the foyer of the office",
            "while finding your seat at the opera",
            "during the national anthem",
            "during a lecture on Ovid",
            "onboard a Brunel's Great Eastern steamer",
            "while smoking at the club"
        ],
        encounter: [
            "you pass",
            "you see",
            "you are greeted by",
            "you chance across",
            "you are noticed by"
        ],
        person: [
            "an episcopal bishop",
            "a soldier on leave",
            "a lively costermonger",
            "a constable making their rounds",
            "a gentleman, with no hat",
            "a woman in a wide-brimmed hat",
            "Her Majesty",
            "a prominent local politician",
            "two journalists, having a conversation",
            "a bishop in a mitre",
            "a line of convicts",
            "a shoeshining waif"
        ]
    }, {
        counter: 6,
        showDoNothing: true,
        preamble: [
            "after a fit of the whistles",
            "while waiting for a funicular",
            "while entering a funicular",
            "while exiting a funicular",
            "walking along the quay",
            "in a crowded funicular car",
            "on the funicular platform"
        ],
        encounter: [
            "you pass",
            "you see",
            "you are greeted by",
            "you chance across",
            "you are winked at by",
            "you exchange a knowing glance with",
            "you reach for the same umbrella as",
            "you accidentally stare too long at"
        ],
        person: [
            "Her Majesty",
            "il principe de Monaco",
            "a Japanese salaryman",
            "local fisherman Ernest Tronk",
            "a prominent local fisherman",
            "a procession of mourners",
            "a gang of tattooed stevedors",
            "a very inebriated funicular repairman",
            "Mr. Tronk, enjoying the morning air"
        ]
    }, {
        counter: 9,
        preamble: [
            "after a fit of the whistles",
            "finding yourself daydreaming,",
            "on the way to work",
            "while waiting for a funicular",
            "while entering a funicular",
            "while exiting a funicular",
            "at the docks",
            "in a crowded funicular",
            "in an empty funicular",
            "at the funicular platform",
            "in a tavern"
        ],
        encounter: [
            "you smile at",
            "you exchange gossip with",
            "you are pleased to see",
            "you anticipate meeting",
            "you are winked at by",
            "you exchange a knowing glance with",
            "you reach for the same umbrella as",
            "you accidentally stare too long at",
            "you bump into"
        ],
        person: [
            "that roguish charmer Ernest, smelling of the sea",
            "local fisherman Ernest Tronk",
            "a prominent local fisherman",
            "the salty old sea dog Ernest Tronk",
            "mariner extraordinare, Ernest Tronk",
            "a festive Ernest Tronk, dancing a reel",
            "that irrepressible scallywag Ernest Tronk",
            "one Ernest Tronk, a rapscallion of a herring trawler",
            "Mr. Tronk, enjoying the morning air",
            "that jocund fellow Ernest, up to his old tricks",
            "paragon of bonhomie Ernest Tronk, laughing his salty laugh"
        ]
    }, {
        counter  : 1,
        preamble : ["arriving late for your funicular"],
        encounter: normalEncounter,
        person   : normalPerson
    }, {
        counter  : 1,
        preamble : ["reaching the funicular just as the doors close"],
        encounter: normalEncounter,
        person   : normalPerson
    }, {
        counter  : 1,
        preamble : ["as everyone on the platform begins to shout"],
        encounter: ["you see"],
        person   : ["Ernest Tronk"]
    }, {
        counter  : 1,
        preamble : ["as the cable on the funicular snaps"],
        encounter: ["you see"],
        person   : ["Ernest Tronk"]
    }, {
        counter  : 1,
        preamble : ["as the brakes on the funicular fail"],
        encounter: ["you see"],
        person   : ["Ernest Tronk"]
    }, {
        counter  : 1,
        preamble : ["as the funicular jumps the tracks"],
        encounter: ["you see"],
        person   : ["Ernest Tronk"]
    }, {
        counter  : 1,
        preamble : ["frantically looking for another way down the mountain"],
        encounter: aftermathEncounter,
        person   : aftermathPerson
    }, {
        counter  : 1,
        preamble : ["riding a stolen bicycle down to the foot of the mountain"],
        encounter: aftermathEncounter,
        person   : aftermathPerson
    }, {
        counter  : 1,
        preamble : ["upon reaching the bottom of the funicular"],
        encounter: aftermathEncounter,
        person   : aftermathPerson
    }, {
        counter  : 1,
        preamble : ["jumping over the barricade"],
        encounter: aftermathEncounter,
        person   : aftermathPerson
    }, {
        counter  : 1,
        preamble : ["unsure how you got home"],
        encounter: aftermathEncounter,
        person   : aftermathPerson
    }, {    // funeral
        counter: 7,
        hideDoff: true,
        preamble : [
            "at the funeral",
            "after the funeral",
            "as the mayor declares a day of mourning",
            "walking alone at the wharf",
            "riding to work in the new funicular",
            "eating cold food",
            "coughing at the grocery store",
            "scraping toast into the sink",
            "pulling your coat tighter against a cold wind",
            "looking at the cracked skin on your hands",
            "you go to bed early lest"
        ],
        encounter: [
            "you stare vacantly at",
            "you mumble something you immediately forget to",
            "you try to ignore",
            "you turn around to avoid the haunted eyes of",
            "you do not notice",
            "you think of"
        ],
        person: [
            "the elder Mr. Tronk",
            "Ernest's mother",
            "one of Ernest's sisters",
            "an endless stream of strangers",
            "the formless shadows",
            "the abyss",
            "the silent, enveloping darkness",
            "the hollow men, rats feet over broken glass in a dry cellar",
            "a vacant, unfeeling god"
        ]
    }
];

function disableButton (elementID) {
    var element = document.getElementById(elementID);
    element.style.opacity = 0;
    element.classList.remove('clickable');
    element.onclick = '';
}

function enableButton (elementID) {
    var element = document.getElementById(elementID);
    element.style.opacity = 1;
    element.classList.add('clickable');
    element.onclick = updateText;
}

var actNum = 0;
var progress = 0;
var endStateCounter=0;
function updateText () {
    var act = text[actNum];

    if (!act) {
        endStateCounter++;
        document.getElementById('question').textContent =
            (endStateCounter % 2) ? "You wake up" : "You go to sleep";

        if (endStateCounter > 3 && endStateCounter <= 13) {
            document.body.style.opacity = 1 - (0.1 * (endStateCounter - 3));
        }

        return;
    }

    act.counter--;
    if (act.counter === 0) actNum++;

    progress++;
    var progressEl = document.getElementById('progress');
    progressEl.textContent = progress + "/20";
    if (progress > 7 && progress <= 17) {
        progressEl.style.opacity = 1 - (0.1 * (progress - 7));
    }

    if (act.showDoNothing) {
        act.showDoNothing = false;
        enableButton('doNothing');
    }

    if (act.hideDoff) {
        act.hideDoff = false;
        disableButton('doff');
        disableButton('doNotDoff');
    }

    // Generate a new question that is different from the current question
    var questionEl = document.getElementById('question');
    var newText = generateSentence(act);
    while (questionEl.textContent === newText) {
        newText = generateSentence(act);
    }

    questionEl.textContent = newText;
}

var generateSentence = function (act) {
    return [act.preamble, act.encounter, act.person]
        .map(_.sample)
        .join(' ')
        .trim()
        .replace(/^./, function (text) {
            return text.toUpperCase();
        });
};

document.addEventListener("DOMContentLoaded", function(event) {
    updateText();
});


