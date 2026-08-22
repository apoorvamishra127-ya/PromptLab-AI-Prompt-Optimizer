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

        const optimizationInstructions = `
You are an expert AI prompt engineer.

Your job is to transform the user's original prompt into a high-quality,
specific, clear, and useful prompt.

IMPORTANT RULES:
1. Preserve the user's ORIGINAL INTENT and TOPIC.
2. Never replace the user's topic with a random example.
3. The user may ask about ANYTHING: academics, coding, travel, writing,
   business, research, creative work, personal tasks, etc.
4. Do not assume the topic is healthcare, Operating Systems, or any other
   specific subject unless the user actually mentions it.
5. Improve the prompt rather than answering the prompt.
6. Return ONLY the optimized prompt, not an explanation of your changes.

SELECTED OPTIMIZATION FOCUS:
${focus}

FOCUS INSTRUCTIONS:
- General Clarity: improve clarity, specificity, completeness,
  remove ambiguity, and organize the request logically.
- Specificity: add useful details, assumptions, constraints, and
  measurable requirements where appropriate.
- Conciseness: remove unnecessary repetition while preserving meaning.
- Structure: organize the prompt into logical sections and instructions.
- Accuracy: make requirements precise and reduce possible misinterpretation.

SELECTED TONE:
${tone}

TONE INSTRUCTIONS:
- Professional: polished and professional language.
- Academic: systematic, educational, precise terminology.
- Conversational: natural, friendly, easy-to-understand language.
- Direct: concise, action-oriented instructions.

TARGET MODEL:
${targetModel}

Make the optimized prompt appropriate for the selected target model,
but DO NOT change the user's original intent.

ORIGINAL USER PROMPT:
<<<
${prompt}
>>>

Return the final optimized prompt only.
`;

        const response = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-5.6-luna",
                input: optimizationInstructions
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("OpenAI API error:", data);

            return res.status(response.status).json({
                error: data?.error?.message || "OpenAI API request failed"
            });
        }

        return res.status(200).json({
            optimizedPrompt: data.output_text || "",
            model: targetModel,
            focus,
            tone
        });

    } catch (error) {
        console.error("Server error:", error);

        return res.status(500).json({
            error: "Something went wrong while optimizing the prompt."
        });
    }
}
