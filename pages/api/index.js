// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect'

const handler = nc()
  .get((req, res) => {
    res.json({ message: 'ok'})
    console.log('hello')
  })

export default handler;
