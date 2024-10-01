const responseTemplates = {
    greetings: [
        "Hello! How can I assist you today?",
        "Hi there! What can I do for you?"
    ],
    what: [
        "What do you mean by that? Can you give me more details?",
        "Could you clarify what you want to know?"
    ],
    how: [
        "That's a great question! Could you explain a bit more?",
        "I'm not sure about that. Can you provide more context?"
    ],
    where: [
        "Could you specify the location you are asking about?",
        "I need more information about what you're referring to."
    ],
    when: [
        "Can you tell me more about the timeframe you're asking about?",
        "I'm not certain. Could you clarify when?"
    ],
    why: [
        "That's an interesting point! What specifically are you curious about?",
        "Can you elaborate on why you're asking?"
    ],
    default: [
        "I’m not sure how to respond to that. Could you provide more details?",
        "I'm here to help, but I need more information."
    ]
};
export const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        return getRandomResponse(responseTemplates.greetings);
    }

    for (const [key, responses] of Object.entries(responseTemplates)) {
        if (lowerCaseMessage.includes(key)) {
            return getRandomResponse(responses);
        }
    }

    return getRandomResponse(responseTemplates.default);
};

const getRandomResponse = (responseArray) => {
    const randomIndex = Math.floor(Math.random() * responseArray.length);
    return responseArray[randomIndex];
};
