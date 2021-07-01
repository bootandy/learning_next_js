
// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    console.log(req)
    res.status(200).json({text: 'Hello '+req.query['data'] })
}
