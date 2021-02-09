// NOTE: would fetch from Google Sheets but requires authentication
const data = require('./data.json')
const states = data

export default (req, res) => res.status(200).json(states)
