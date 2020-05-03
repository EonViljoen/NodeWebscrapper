const axios = require('axios');
const cheerio = require('cheerio')
const puppeteer = require('puppeteer');

const url = 'https://manga4life.com/read-online/Tower-Of-God-chapter-57-index-3.html';

puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => {
        return page.goto(url, {waitUntil: 'load', timeout: 0}).then(function() {
            return page.content();
        });
        // console.log(page);
    })
    .then(html => {
        const $ = cheerio.load(html);
        const imageUrls = [];
         //console.log($('.MainContainer').find('.ImageGallery').find('.ng-scope').find('.ng-scope').find('img').attr('src'))
        $('.MainContainer').find('.ImageGallery').find('.ng-scope').find('.ng-scope').find('img').attr('src').each(function() {
            //console.log($(this));
            imageUrls.push({
                 url: $(this).text(),
             });
        });
        // console.log(imageUrls);
    })
    .catch(console.error);
    

    //.find('.ng-scope').find('img')

// axios(url)
//     .then(response => {
//         const html = response.data;
//         const $ = cheerio.load(html);
//         const infoblock = $('Bocy').html();
//         console.log(infoblock)

        // const imgArreay = [];

        // infoblock.each(function () {
        //     const url = $(this).find('');
        //     console.log(url)

            // imgArreay.push({
            //     url
            // });
        // });
        // console.log(imgArreay);

    // })
    // .catch(console.error);

// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';

// axios(url)
//   .then(response => {
//     const html = response.data;
//     const $ = cheerio.load(html)
//     const statsTable = $('.statsTableContainer > tr');
//     console.log(statsTable);
    // const topPremierLeagueScorers = [];

    // statsTable.each(function () {
    //   const rank = $(this).find('.rank > strong').text();
    //   const playerName = $(this).find('.playerName > strong').text();
    //   const nationality = $(this).find('.playerCountry').text();
    //   const goals = $(this).find('.mainStat').text();

    //   topPremierLeagueScorers.push({
    //     rank,
    //     name: playerName,
    //     nationality,
    //     goals,
    //   });
    // });

    // console.log(topPremierLeagueScorers);
//   })
//   .catch(console.error);