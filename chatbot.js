'use strict';

class Robotinic {
    constructor(name) {
        this.name = name;
        this.userIntents = {};
        this.conversationFlow = [];
    }

    detectIntent(message) {
        // Simple intent detection logic
        if (message.includes('hello')) {
            return 'greet';
        } else if (message.includes('help')) {
            return 'help';
        }
        return 'unknown';
    }

    displayMessage(message) {
        console.log(`${this.name}: ${message}`);
    }

    handleUserInteraction(userInput) {
        const intent = this.detectIntent(userInput);
        this.conversationFlow.push({ userInput, intent });
        switch (intent) {
            case 'greet':
                this.displayMessage('Hello! How can I assist you today?');
                break;
            case 'help':
                this.displayMessage('Sure! What do you need help with?');
                break;
            default:
                this.displayMessage('Sorry, I didn’t understand that.');
        }
    }
}

// Export the Robotinic class
module.exports = Robotinic;