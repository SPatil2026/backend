const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String,   // cloudinary URL
            required: true
        },
        thumbnail: {
            type: String,   // cloudinary URL
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        published: {
            type: Boolean,
            default: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }, 
    {
        timestamps: true
    }
);

videoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Video', videoSchema);