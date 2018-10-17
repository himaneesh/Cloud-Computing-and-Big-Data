const Hello = new Set(["HI", "HEY", "HOWDY", "HEYA", "HOLA", "HELLO", "SUP", "KONNICHIWA", "ALOHA"]);
const Goodbye = new Set(["BYE", "SEE YA", "CYA", "LATER", "ADIOS", "SAYONARA", "SEEYA"]);
const Greeting = new Set(["WHAT'S UP", "HOW'S IT GOING", "HOW ARE YOU", "NICE DAY", "GOOD MORNING", "GOOD NIGHT"])
const Name = new Set(["WHAT IS YOUR NAME", "WHAT'S YOUR NAME", "WHO ARE YOU", "WHAT DO THEY CALL YOU", "COMO TE LLAMAS"])

function f(line) {
    line
}

function f(line) {

    const Hello = new Set(["HI", "HEY", "HOWDY", "HEYA", "HOLA", "HELLO", "SUP", "KONNICHIWA", "ALOHA"]);
    const Goodbye = new Set(["GOODBYE", "BYE", "SEE YA", "CYA", "LATER", "ADIOS", "SAYONARA", "SEEYA"]);
    const Greeting = new Set(["WHAT'S UP", "HOW'S IT GOING", "HOW ARE YOU", "NICE DAY", "GOOD MORNING", "GOOD NIGHT"])
    const Name = new Set(["WHAT IS YOUR NAME", "WHAT'S YOUR NAME", "WHO ARE YOU", "WHAT DO THEY CALL YOU", "COMO TE LLAMAS"])
    line = line.toUpperCase();
    // const response;
    var response;
    if (Hello.has(line)) {
        response = 'Hello';
    } else if (Goodbye.has(line)) {
        response = 'Bye! Have A Good Day!';
    } else if (Greeting.has(line)) {
        response = 'Thank you! Everything\'s fine with me, hope the same for you';
    } else if (Name.has(line)) {
        response = 'My Name is Sherlocks';
    } else {
        response = 'I\'m sorry I don\'t understand';
    }
    return response;
}

exports.handler = async (event) => {
    var response={};
    var answer;
    console.log(event.key1);
    answer = f(event.key1)
    response = {
        statusCode: 200,
        body: JSON.stringify(answer)
    };
    return response;
};
