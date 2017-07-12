function handleTweets(tweets) {

    console.log(tweets);
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('twitter-feeds');
    var html = '';
    while(n < x) {
        el = document.createElement('p');
        el.innerHTML = tweets[n];
        console.log(tweets[n], n);
        html += '<div class="twitter-feeds__item">';
        html += '<!-- twitter feeds item image -->' +
            '<div class="twitter-feeds__item__image">' +
            '<img src="'+ el.querySelector('img').getAttribute("src") +'" alt="Twitter Avatar" class="img-circle" >' +
            '</div>' +
            '<!-- twitter feeds item content -->' +
            '<div class="twitter-feeds__item__content">' +
            '<div class="twitter-feeds__item__content__row">' +
            '<span class="twitter-feeds__item__content__name">' + el.querySelector('[data-scribe="element:name"]').innerHTML + '</span>' +
            '<span class="twitter-feeds__item__content__handle">'+ el.querySelector('[data-scribe="element:screen_name"]').innerHTML + '</span>' +
            '</div>' +
            '<div class="twitter-feeds__item__content__row">' +
            '<p class="twitter-feeds__item__content__text">'+ el.querySelector('p.tweet').innerHTML +'</p>'+
            '</div>';
        '</div>';
        html += '</div></div>';
        n++;
    }
    element.innerHTML = html;
}