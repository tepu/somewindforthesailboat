var preamble = [
    "",
    "while hunting in Nantes",
    "during a routine inspection",
    "on your way to tiffin",
    "after several minutes of loud whistling",
    "while waiting for a furnicular",
    "while entering a furnicular",
    "while exiting a furnicular"
    ];

var encounter = [
    "you pass",
    "you see",
    "you are greeted by",
    "you chance across",
    "you are winked at by",
    "you exchange a knowing glance with",
    "you reach for the same umbrella as",
    "accidentally stare too long at"
    ];

var person = [
    "an episcopal bishop",
    "a gentleman, with no hat,",
    "a woman in a wide-brimmed hat",
    "Her Majesty",
    "a Japanese salaryman",
    "a prominent local politician",
    "local fisherman Ernest Tronk",
    "a prominent local fisherman",
    "well-known charlatan Ernest Tronk",
    "il principe di Monaco"
    ];

var setting = [
    "in the hallway of a hospital",
    "in the vestibule of a church",
    "in a furnicular",
    "in a crowded trolly car",
    "in the foyer of an office",
    "during tiffin on the Seine",
    "in a bordello",
    "in a coal mine",
    "in the furnicular platform",
    "at the green grocers",
    "at a parade",
    "on the promenade"
    ];

function generateSentence () {
    document.getElementById('question').textContent =
        [preamble, encounter, person, setting]
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


