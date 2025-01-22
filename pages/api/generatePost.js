// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { OpenAIApi, Configuration } from "openai"

export default async function handler(req, res) {
    console.log(process.env.OPENAI_API_KEY)
    const config =  new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(config);
    const topic = 'Cat Ownership'
    const keywords = 'First-time cat owner, kitten diet'

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-1106',
        messages: [{
            role:'system',
            content: 'You are an SEO friendly blog post generator called as BlogStandard. You are designed to output markdown text without frontmatter.'
        },{
            role: 'user',
            content:` 
            Generate me a Blog post on the following topic delimited by triple hyphens
            ----
            ${topic}
            ----
            Targeting the following comma seperated keywords delimited by triple hyphens: 
            ----
            ${keywords}
            ----
            `,
        }]
    })
    console.log(response.data.choices[0]?.message?.content)
    const postContent = response.data.choices[0]?.message?.content
    res.status(200).json({ name: 'generate post' })
  }
  