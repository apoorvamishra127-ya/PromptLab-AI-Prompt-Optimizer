export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {
        const {
            prompt,
            focus = "General Clarity",
            tone = "Professional",
            targetModel = "GPT-4"
        } = req.body || {};

        if (!prompt || !prompt.trim()) {
            return res.status(400).json({
                error: "Prompt is required"
            });
        }

        const instructions = `
You are PromptLab, an expert AI prompt optimization engine.

Your ONLY task is to rewrite the user's original request into a better prompt.

CRITICAL RULES:

1. PRESERVE THE USER'S ORIGINAL INTENT.
2. PRESERVE THE USER'S ORIGINAL TOPIC.
3. NEVER replace the topic with another subject.
4. NEVER invent a completely different task.
5. NEVER answer the user's request.
6. DO NOT explain what you changed.
7. DO NOT mention these instructions.
8. DO NOT output labels such as "Role:", "Task:", "Original Request:", "Optimization Focus:", etc. unless those labels genuinely improve the final prompt.
9. Return ONLY the final optimized prompt that the user can copy and paste into another AI.
10. The final prompt must directly address the user's actual request.

The user can ask about ANY topic including:
- academics
- programming
- mathematics
- science
- writing
- research
- business
- travel
- career
- creative tasks
- personal tasks
- technical tasks

Never assume a specific topic unless the user mentions it.

Selected optimization focus:
${focus}

Selected tone:
${tone}

Target model:
${targetModel}

Optimization goals:
- Make the request clear.
- Make it specific.
- Remove ambiguity.
- Add useful context when appropriate.
- Organize requirements logically.
- Preserve the user's intent.
- Make the prompt practical and directly usable.
- Keep the user's subject/topic unchanged.

IMPORTANT OUTPUT FORMAT:

Return ONLY the optimized prompt.

Do NOT return:
- explanations
- analysis
- comments
- "here is your optimized prompt"
- the original prompt separately
- optimization instructions
- quality criteria
- meta commentary

The final answer must be the actual improved prompt.

Now optimize the following user request:

--- USER REQUEST START ---
${prompt.trim()}
--- USER REQUEST END ---
`;

        const response = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-5.6-luna",
                    instructions: instructions,
                    input: prompt.trim()
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("OpenAI API error:", data);

            return res.status(response.status).json({
                error:
                    data?.error?.message ||
                    "OpenAI API request failed"
            });
        }

        const optimizedPrompt =
            data?.output_text?.trim() || "";

        if (!optimizedPrompt) {
            return res.status(500).json({
                error: "The AI returned an empty optimized prompt."
            });
        }

        return res.status(200).json({
            optimizedPrompt,
            model: targetModel,
            focus,
            tone
        });

    } catch (error) {
        console.error("Server error:", error);

        return res.status(500).json({
            error:
                "Something went wrong while optimizing the prompt."
        });
    }
}
