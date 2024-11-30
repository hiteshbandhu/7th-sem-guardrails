import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL : "https://api.x.ai/v1"
})

export async function POST(request: Request) {
  // Get user session using server-side client
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { input, type, data: trainingData } = await request.json()

    // Generate safety analysis prompt
    const systemPrompt = `You are a prompt engineer. Use the following training data given as examples in the user input.
    
    Your task is to generate a system prompt that will create an AI guardrail system. The guardrail system should analyze inputs and ensure they follow similar safe patterns to the training data.
    
    The prompt you generate should instruct the AI to respond in this JSON format:
    {
      "allowed": boolean,
      "reason": string, 
      "suggested_modification": string // Only if not allowed
    }
    
    Generate a detailed system prompt that will enable the AI to effectively analyze inputs based on the patterns, content, and safety characteristics demonstrated in the training data. 
    
    Output only the prompt inside <prompt> tags and nothing else.`

    const response = await openai.chat.completions.create({
      model: "grok-beta",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Use this user training data as examples : ${trainingData}` }
      ],
      temperature: 0.4,
    })

    const analysis = response.choices[0].message.content
    console.log(analysis)

    // Generate a unique endpoint ID
    const endpointId = crypto.randomUUID()

    // Store prompt and analysis in database using server-side client
    const { error: insertError } = await supabase
      .from('guardrails')
      .insert({
        user_id: user.id,
        endpoint_id: endpointId,
        prompt_text: analysis,
        created_at: new Date().toISOString()
      })

    if (insertError) {
      throw new Error('Failed to save prompt')
    }

    return NextResponse.json({ analysis, endpointId })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
