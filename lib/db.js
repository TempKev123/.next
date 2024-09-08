import mongoose from 'mongoose'
const MONGODB_URI = 'mongodb+srv://kevindityam:gmq0YJjQG0cqvUmc@cluster0.wcnn0.mongodb.net/' //i got around .env yaay
if (!MONGODB_URI) {
    throw new Error(
        'db.js:Please define the MONGODB_URI environment variable inside .env',
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(MONGODB_URI, opts)
        .then(mongoose => {
            console.log('DB connected')
            // console.debug(mongoose)
            // return mongoose
        })
    }
    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default dbConnect