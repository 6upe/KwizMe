const {Configuration, OpenAIApi} = require("openai");

const config = new Configuration ({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
    const prompt = "Tell me a joke";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 1,
    });

    console.log(response.data);
}

runPrompt();