var text = [
    {   // initial
        counter: 6,
        preamble : [
            "",
            "while hunting in Nantes",
            "during a routine inspection",
            "on your way to tiffin",
            "During the first bowl of the over (at Wembley)",
            "while carrying a cane and volume of Proust",
            "ascending the steps of parliment",
            "while reaching for your cigarette case",
        ],
        encounter: [
            "you pass",
            "you see",
            "you are greeted by",
            "you chance across"
        ],
        person   : [
            "an episcopal bishop",
            "a soldier on leave",
            "a gentleman, with no hat,",
            "a woman in a wide-brimmed hat",
            "Her Majesty",
            "a prominent local politician",
            "two journalists, having a conversation,"
        ],
        setting  : [
            "in the hallway of a hospital",
            "in the vestibule of a church",
            "in the foyer of an office",
            "during tiffin on the Seine",
            "at the green grocers",
            "at a parade",
            "on the promenade"
        ]
    }, {    // wacky
        counter: 6,
        preamble : [
            "after a fit of the whistles",
            "while waiting for a funicular",
            "while entering a funicular",
            "while exiting a funicular",
            "walking along the quay"
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
        person   : [
            "an episcopal bishop",
            "Her Majesty",
            "a Japanese salaryman",
            "a prominent local politician",
            "local fisherman Ernest Tronk",
            "a prominent local fisherman",
            "well-known charlatan Ernest Tronk",
            "a very inebriated funicular repairman"
        ],
        setting  : [
            "in the hallway of a hospital",
            "in the vestibule of a church",
            "in a funicular",
            "in a crowded trolly car",
            "at the funicular platform"
        ]
    }, {    // tronk
        counter: 10,
        preamble : [
            "after a fit of the whistles",
            "finding yourself daydreaming,",
            "on the way to work",
            "while waiting for a funicular",
            "while entering a funicular",
            "while exiting a funicular"
        ],
        encounter: [
            "you smile at",
            "you exchange gossip",
            "you are pleased to see",
            "you anticipate meeting",
            "you are winked at by",
            "you exchange a knowing glance with",
            "you reach for the same umbrella as",
            "you accidentally stare too long at"
        ],
        person   : [
            "a rogueish charmer, smelling of the sea,",
            "local fisherman Ernest Tronk",
            "a prominent local fisherman",
            "well-known charlatan Ernest Tronk",
            "that irrepressible scallywag Ernest Tronk",
            "a rapscallion of a herring vendor"
        ],
        setting  : [
            "at the docks",
            "in a crowded funicular",
            "in an empty funicular",
            "waiting for the funicular",
            "in a tavern",
            "at the funicular platform"
        ]
    }, {    // accident
        counter: 5,
        preamble : [
            "arriving late for your funicular",
            "reaching the funicular just as the doors close",
            "as the brakes on the funicular fail",
            "as the cable on the funicular snaps",
            "as the funicular jumps the tracks",
            "as the funicular pulley tears away from the face of the cliff"
        ],
        encounter: [
            "you see"
        ],
        person   : [
            "Ernest Tronk"
        ],
        setting  : [
            ""
        ]
    }, {    // aftermath
        counter: 7,
        preamble : [
            "frantically looking for another way down the mountain",
            "upon reaching the bottom of the funicular",
            "riding a stolen bicycle down the goat path to the foot of the mountain",
            "standing behind the barricade",
            "jumping over the barricade"
        ],
        encounter: [
            "you are dimly aware of",
            "you take no notice of",
            "you are surrounded by",
            "you press through"
        ],
        person   : [
            "faceless bodies, gawking",
            "a blur of hollow faces",
            "a suffocating grey fog",
            "a sudden stillness",
            "the gathering crowds",
            "policemen shouting loudly"
        ],
        setting  : [
            ""
        ]
    }, {    // funeral
        counter: 10,
        preamble : [
            "at the funeral",
            "as the mayor declares a day of mourning",
            "walking alone at the wharf",
            "riding to work in the new funicular"
        ],
        encounter: [
            "you stare vacantly at",
            "you mumble something you immediately forget",
            "you try to ignore",
            "you turn around to avoid the eyes of"
        ],
        person   : [
            "the elder Mr. Tronk",
            "Ernest's mother",
            "a repoter",
            "an endless stream of strangers",
            "the formless shadows"
        ],
        setting  : [
            ""
        ]
    }
];

var actNum = 0;
var progress = 0;
function generateSentence () {
    var act = text[actNum];
    act.counter--;
    if (act.counter === 0) actNum++;

    document.getElementById('question').textContent =
        [act.preamble, act.encounter, act.person]
            .map(_.sample)
            .join(' ')
            .trim()
            .replace(/^./, function (text) {
                return text.toUpperCase();
            });
}

document.addEventListener("DOMContentLoaded", function(event) {
    generateSentence();
});


