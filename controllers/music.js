const env = require('dotenv').config(),
    api = require('genius-api'),
    genius = new api(process.env.GENIUS_CLIENT_ACCESS_TOKEN),
    Music = require('../models/music')

class MusicController {

    static searchSong(req, res) {
        // console.log(req.query)
        genius.search(req.query.q)
            .then(response => {
                res.status(200).json(response.hits)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getSong(req, res) {
        genius.song(req.params.id)
            .then(response => {
                res.status(200).json(response.song)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static all(req, res) {
        Music
            .find({})
            .then(musics => {
                // if (!musics.length) {
                //   res.status(404).json({
                //     msg: 'There is no music found, please upload a new one'
                //   })
                // } else {
                res.status(200).json(musics)
                    // }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    msg: err.message
                })
            })
    }

    static create(req, res) {
        // getImage(req.body.title)
        //   .then(data => {

        //     let input = {
        //       title: req.body.title,
        //       artist: req.body.artist,
        //       url: req.file.cloudStoragePublicUrl,
        //     //   user: req.user._id
        //     }

        //     return Music
        //       .create(input)
        //   })
        let input = {
            title: req.body.title,
            artist: req.body.artist,
            url: req.file.cloudStoragePublicUrl,
            //   user: req.user._id
        }
        Music.create(input)
            .then(music => {
                res.status(201).json(music)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })

    }

    static update(req, res) {
        let input = {
            title: req.body.title,
            artist: req.body.artist,
            url: req.file.cloudStoragePublicUrl,
            img_url: data,
            user: req.user._id
        }

        Music
            .findByIdAndUpdate({ _id: req.params.id }, input, { new: true })
            .then(music => {
                res.status(200).json(music)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })
    }

    static delete(req, res) {
        Music
            .findByIdAndDelete({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                    msg: 'Music has been deleted',
                    id: req.params.id
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Internal Server Error',
                    Error: err
                })
            })
    }

}

module.exports = MusicController