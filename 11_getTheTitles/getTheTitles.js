const getTheTitles = function(books) {
    var titles = [];
    for (let i = 0; i < books.length; i++) {
        if ('title' in books[i]) {
            titles.push(books[i].title);
        }
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
