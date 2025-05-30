class IndexController {
    getArtworks(req, res) {
        // This method will retrieve a list of artworks to be displayed on the homepage.
        const artworks = [
            { id: 1, title: 'Starry Night', artist: 'Vincent van Gogh' },
            { id: 2, title: 'Mona Lisa', artist: 'Leonardo da Vinci' },
            { id: 3, title: 'The Persistence of Memory', artist: 'Salvador Dalí' }
        ];
        res.render('index', { artworks });
    }
}

module.exports = IndexController;