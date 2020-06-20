const mongose = require('mongoose')
mongoose.set('useCreateIndex', true)
const noticeSchema = new mongose.Schema({
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    writer: { type: String, default: 'admin' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})
const Notice = mongoose.model('Notice', noticeSchema)

module.exports = Notice