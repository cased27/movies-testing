it('Shows an autocomplete', () => {
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Avengers' },
                { Title: 'Dark Knight' },
                { Title: 'Wonder Woman' }
            ];
        },
        renderOption(movie) {
            return movie.Title;
        }
    })
});