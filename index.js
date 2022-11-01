// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(workplace = "go to the office") {
    return `This Monday, I will ${workplace}.`;
};

function wrapAdjective(symbol = "*") {
    return function (descriptor = "a special programmer") {
        return `You are ${symbol}${descriptor}${symbol}!`};
    };