function Song(title, artist, peak_position) {
    this.date = date;
    this.title = title;
    this.artist = artist;
    this.peak_position = peak_position;
    this.id = "";
    this.duration_ms = "";
    this.tempo = "";
    this.time_signature = "";
    this.mode = "";
    this.key = "";
    this.loudness = "";
    this.danceability = "";
    this.energy = "";

    this.beatdiff_mean = "";
    this.beatdiff_variance = "";
    this.beatdiff_skewness = "";
    this.beatdiff_kurtosis = "";
    this.beatdiff_standard_deviation = "";
    this.beatdiff_80th_percentile = "";
    this.beatdiff_min = "";
    this.beatdiff_max = "";
    this.beatdiff_range = "";
    this.beatdiff_median = "";

    this.timebre_1_mean = "";
    this.timebre_1_variance = "";
    this.timebre_1_skewness = "";
    this.timebre_1_kurtosis = "";
    this.timebre_1_standard_deviation = "";
    this.timebre_1_80th_percentile = "";
    this.timebre_1_min = "";
    this.timebre_1_max = "";
    this.timebre_1_range = "";
    this.timebre_1_median = "";

    this.timebre_2_mean = "";
    this.timebre_2_variance = "";
    this.timebre_2_skewness = "";
    this.timebre_2_kurtosis = "";
    this.timebre_2_standard_deviation = "";
    this.timebre_2_80th_percentile = "";
    this.timebre_2_min = "";
    this.timebre_2_max = "";
    this.timebre_2_range = "";
    this.timebre_2_median = "";

    this.timebre_3_mean = "";
    this.timebre_3_variance = "";
    this.timebre_3_skewness = "";
    this.timebre_3_kurtosis = "";
    this.timebre_3_standard_deviation = "";
    this.timebre_3_80th_percentile = "";
    this.timebre_3_min = "";
    this.timebre_3_max = "";
    this.timebre_3_range = "";
    this.timebre_3_median = "";

    this.timebre_4_mean = "";
    this.timebre_4_variance = "";
    this.timebre_4_skewness = "";
    this.timebre_4_kurtosis = "";
    this.timebre_4_standard_deviation = "";
    this.timebre_4_80th_percentile = "";
    this.timebre_4_min = "";
    this.timebre_4_max = "";
    this.timebre_4_range = "";
    this.timebre_4_median = "";

    this.timebre_5_mean = "";
    this.timebre_5_variance = "";
    this.timebre_5_skewness = "";
    this.timebre_5_kurtosis = "";
    this.timebre_5_standard_deviation = "";
    this.timebre_5_80th_percentile = "";
    this.timebre_5_min = "";
    this.timebre_5_max = "";
    this.timebre_5_range = "";
    this.timebre_5_median = "";

    this.timebre_6_mean = "";
    this.timebre_6_variance = "";
    this.timebre_6_skewness = "";
    this.timebre_6_kurtosis = "";
    this.timebre_6_standard_deviation = "";
    this.timebre_6_80th_percentile = "";
    this.timebre_6_min = "";
    this.timebre_6_max = "";
    this.timebre_6_range = "";
    this.timebre_6_median = "";

    this.timebre_7_mean = "";
    this.timebre_7_variance = "";
    this.timebre_7_skewness = "";
    this.timebre_7_kurtosis = "";
    this.timebre_7_standard_deviation = "";
    this.timebre_7_80th_percentile = "";
    this.timebre_7_min = "";
    this.timebre_7_max = "";
    this.timebre_7_range = "";
    this.timebre_7_median = "";

    this.timebre_8_mean = "";
    this.timebre_8_variance = "";
    this.timebre_8_skewness = "";
    this.timebre_8_kurtosis = "";
    this.timebre_8_standard_deviation = "";
    this.timebre_8_80th_percentile = "";
    this.timebre_8_min = "";
    this.timebre_8_max = "";
    this.timebre_8_range = "";
    this.timebre_8_median = "";

    this.timebre_9_mean = "";
    this.timebre_9_variance = "";
    this.timebre_9_skewness = "";
    this.timebre_9_kurtosis = "";
    this.timebre_9_standard_deviation = "";
    this.timebre_9_80th_percentile = "";
    this.timebre_9_min = "";
    this.timebre_9_max = "";
    this.timebre_9_range = "";
    this.timebre_9_median = "";

    this.timebre_10_mean = "";
    this.timebre_10_variance = "";
    this.timebre_10_skewness = "";
    this.timebre_10_kurtosis = "";
    this.timebre_10_standard_deviation = "";
    this.timebre_10_80th_percentile = "";
    this.timebre_10_min = "";
    this.timebre_10_max = "";
    this.timebre_10_range = "";
    this.timebre_10_median = "";

    this.timebre_11_mean = "";
    this.timebre_11_variance = "";
    this.timebre_11_skewness = "";
    this.timebre_11_kurtosis = "";
    this.timebre_11_standard_deviation = "";
    this.timebre_11_80th_percentile = "";
    this.timebre_11_min = "";
    this.timebre_11_max = "";
    this.timebre_11_range = "";
    this.timebre_11_median = "";

    this.timebre_12_mean = "";
    this.timebre_12_variance = "";
    this.timebre_12_skewness = "";
    this.timebre_12_kurtosis = "";
    this.timebre_12_standard_deviation = "";
    this.timebre_12_80th_percentile = "";
    this.timebre_12_min = "";
    this.timebre_12_max = "";
    this.timebre_12_range = "";
    this.timebre_12_median = "";

}

var songs = [];
var promises = [];
// Call API:https://api.spotify.com/v1/search?q=track%3ALac%20troi%20artist%3ASon%20Tung%20MTP&type=track
let token = "BQB2EREMili5adeUdnfFO2wrK2Ki4jYeHS45lLWFJsOp6g7G18uCKdh6izoSf89_h_yXrF4HiR6BI1vJ-hqvsVpe-gEKU2q7AycvEp5yl0-na7M7hA1Sz7hxJ4x7mQgV0im4cs5IlGxSEp4pZfR6rjGy7wnd9ec";
let Authorization = "Bearer " + token;

// send Get ID
function GetId(song) {
    // return new Promise(resolve => {
        var linkRequest = "https://api.spotify.com/v1/search?q=track:" + song.title + " artist:" + song.artist + "&type=track";
        var xhttp = new XMLHttpRequest();
        function reqListener() {
            // resolve(JSON.parse(this.responseText));
            if (this.readyState === 4 && this.status === 200) {
                var parsedData = JSON.parse(this.responseText);
                if (parsedData.tracks.items.length > 0) {
                    console.log(n++);
                    song.id = parsedData.tracks.items[0].id;
                    GetFeatures(song);
                    GetAnalysis(song);
                    GetArtistPopularity(song);
                }

            } else {

            }
        }
        xhttp.addEventListener("load", reqListener);
        xhttp.open("GET", linkRequest, false);
        xhttp.setRequestHeader("Authorization", Authorization);
        xhttp.send();
    // });

}


// Get a Track by Call API: https://api.spotify.com/v1/tracks/{id}
// Get popularity
function GetArtistPopularity(song) {
    // return new Promise(resolve => {
    var linkRequest = "https://api.spotify.com/v1/tracks/" + song.id;
    var xhttp = new XMLHttpRequest();
    function reqListener() {
        if (this.readyState === 4 && this.status === 200) {
            var parsedData = JSON.parse(this.responseText);

            var artist_popularity =0;
            parsedData.artists.forEach(function (artist) {
                GetArtist(artist);
                var popularity = artist.popularity;
                if(popularity > artist_popularity){
                    artist_popularity = popularity;
                }
            });
            song.artist_popularity = artist_popularity;
        } else {

        }
    }
    xhttp.addEventListener("load", reqListener);
    xhttp.open("GET", linkRequest, false);
    xhttp.setRequestHeader("Authorization", Authorization);
    xhttp.send();
}

// Call API: https://api.spotify.com/v1/artists/{id}
// Get artists for a Track
function GetArtist(artist) {
    // return new Promise(resolve => {
    var linkRequest = "https://api.spotify.com/v1/artists/" + artist.id;
    var xhttp = new XMLHttpRequest();
    function reqListener() {
        if (this.readyState === 4 && this.status === 200) {
            var parsedData = JSON.parse(this.responseText);
            artist.popularity = parsedData.popularity;
        } else {

        }
    }
    xhttp.addEventListener("load", reqListener);
    xhttp.open("GET", linkRequest, false);
    xhttp.setRequestHeader("Authorization", Authorization);
    xhttp.send();
}

// Call API: https://api.spotify.com/v1/audio-features/{id}
// Get Audio Features for a Track
function GetFeatures(song) {
    // return new Promise(resolve => {
        var linkRequest = "https://api.spotify.com/v1/audio-features/" + song.id;
        var xhttp = new XMLHttpRequest();
        function reqListener() {
            if (this.readyState === 4 && this.status === 200) {
                var parsedData = JSON.parse(this.responseText);
                song.duration_ms = parsedData.duration_ms;
                song.tempo = parsedData.tempo;
                song.time_signature = parsedData.time_signature;
                song.mode = parsedData.mode;
                song.key = parsedData.key;
                song.loudness = parsedData.loudness;
                song.danceability = parsedData.danceability;
                song.energy = parsedData.energy;
                song.speechiness = parsedData.speechiness;
                song.acousticness = parsedData.acousticness;
                song.instrumentalness = parsedData.instrumentalness;
                song.liveness = parsedData.liveness;
                song.valence = parsedData.valence;


            } else {

            }
        }
        xhttp.addEventListener("load", reqListener);
        xhttp.open("GET", linkRequest, false);
        xhttp.setRequestHeader("Authorization", Authorization);
        xhttp.send();
}

// Call API: https://api.spotify.com/v1/audio-analysis/{id}
// Get Audio Analysis for a Track
function GetAnalysis(song) {
    // return new Promise(resolve => {
        var linkRequest = "https://api.spotify.com/v1/audio-analysis/" + song.id;
        var xhttp = new XMLHttpRequest({async:false});
        function reqListener() {
            if (this.readyState === 4 && this.status === 200) {
                var parsedData = JSON.parse(this.responseText);

                var duration_arr = [];
                var timebre1_arr = [];
                var timebre2_arr = [];
                var timebre3_arr = [];
                var timebre4_arr = [];
                var timebre5_arr = [];
                var timebre6_arr = [];
                var timebre7_arr = [];
                var timebre8_arr = [];
                var timebre9_arr = [];
                var timebre10_arr = [];
                var timebre11_arr = [];
                var timebre12_arr = [];


                parsedData.beats.forEach(function (beat) {
                    duration_arr.push(beat.duration);
                });

                parsedData.segments.forEach(function (segment) {
                    timebre1_arr.push(segment.timbre[0]);
                    timebre2_arr.push(segment.timbre[1]);
                    timebre3_arr.push(segment.timbre[2]);
                    timebre4_arr.push(segment.timbre[3]);
                    timebre5_arr.push(segment.timbre[4]);
                    timebre6_arr.push(segment.timbre[5]);
                    timebre7_arr.push(segment.timbre[6]);
                    timebre8_arr.push(segment.timbre[7]);
                    timebre9_arr.push(segment.timbre[8]);
                    timebre10_arr.push(segment.timbre[9]);
                    timebre11_arr.push(segment.timbre[10]);
                    timebre12_arr.push(segment.timbre[11]);
                });

                song.beatdiff_mean = mean(duration_arr);
                song.beatdiff_variance = variance(duration_arr);
                song.beatdiff_skewness = sampleSkewness(duration_arr);
                song.beatdiff_kurtosis = sampleKurtosis(duration_arr);
                song.beatdiff_standard_deviation = standardDeviation(duration_arr);
                song.beatdiff_80th_percentile = quantile(duration_arr, 0.8);
                song.beatdiff_min = min(duration_arr);
                song.beatdiff_max = max(duration_arr);
                song.beatdiff_range = song.beatdiff_max - song.beatdiff_min;
                song.beatdiff_median = median(duration_arr);

                song.timebre_1_mean = mean(timebre1_arr);
                song.timebre_1_variance = variance(timebre1_arr);
                song.timebre_1_skewness = sampleSkewness(timebre1_arr);
                song.timebre_1_kurtosis = sampleKurtosis(timebre1_arr);
                song.timebre_1_standard_deviation = standardDeviation(timebre1_arr);
                song.timebre_1_80th_percentile = quantile(timebre1_arr, 0.8);
                song.timebre_1_min = min(timebre1_arr);
                song.timebre_1_max = max(timebre1_arr);
                song.timebre_1_range = song.timebre_1_max - song.timebre_1_min;
                song.timebre_1_median = median(timebre1_arr);

                song.timebre_2_mean = mean(timebre2_arr);
                song.timebre_2_variance = variance(timebre2_arr);
                song.timebre_2_skewness = sampleSkewness(timebre2_arr);
                song.timebre_2_kurtosis = sampleKurtosis(timebre2_arr);
                song.timebre_2_standard_deviation = standardDeviation(timebre2_arr);
                song.timebre_2_80th_percentile = quantile(timebre2_arr, 0.8);
                song.timebre_2_min = min(timebre2_arr);
                song.timebre_2_max = max(timebre2_arr);
                song.timebre_2_range = song.timebre_2_max - song.timebre_2_min;
                song.timebre_2_median = median(timebre2_arr);

                song.timebre_3_mean = mean(timebre3_arr);
                song.timebre_3_variance = variance(timebre3_arr);
                song.timebre_3_skewness = sampleSkewness(timebre3_arr);
                song.timebre_3_kurtosis = sampleKurtosis(timebre3_arr);
                song.timebre_3_standard_deviation = standardDeviation(timebre3_arr);
                song.timebre_3_80th_percentile = quantile(timebre3_arr, 0.8);
                song.timebre_3_min = min(timebre3_arr);
                song.timebre_3_max = max(timebre3_arr);
                song.timebre_3_range = song.timebre_3_max - song.timebre_3_min;
                song.timebre_3_median = median(timebre3_arr);

                song.timebre_4_mean = mean(timebre4_arr);
                song.timebre_4_variance = variance(timebre4_arr);
                song.timebre_4_skewness = sampleSkewness(timebre4_arr);
                song.timebre_4_kurtosis = sampleKurtosis(timebre4_arr);
                song.timebre_4_standard_deviation = standardDeviation(timebre4_arr);
                song.timebre_4_80th_percentile = quantile(timebre4_arr, 0.8);
                song.timebre_4_min = min(timebre4_arr);
                song.timebre_4_max = max(timebre4_arr);
                song.timebre_4_range = song.timebre_4_max - song.timebre_4_min;
                song.timebre_4_median = median(timebre4_arr);

                song.timebre_5_mean = mean(timebre5_arr);
                song.timebre_5_variance = variance(timebre5_arr);
                song.timebre_5_skewness = sampleSkewness(timebre5_arr);
                song.timebre_5_kurtosis = sampleKurtosis(timebre5_arr);
                song.timebre_5_standard_deviation = standardDeviation(timebre5_arr);
                song.timebre_5_80th_percentile = quantile(timebre5_arr, 0.8);
                song.timebre_5_min = min(timebre5_arr);
                song.timebre_5_max = max(timebre5_arr);
                song.timebre_5_range = song.timebre_5_max - song.timebre_5_min;
                song.timebre_5_median = median(timebre5_arr);

                song.timebre_6_mean = mean(timebre6_arr);
                song.timebre_6_variance = variance(timebre6_arr);
                song.timebre_6_skewness = sampleSkewness(timebre6_arr);
                song.timebre_6_kurtosis = sampleKurtosis(timebre6_arr);
                song.timebre_6_standard_deviation = standardDeviation(timebre6_arr);
                song.timebre_6_80th_percentile = quantile(timebre6_arr, 0.8);
                song.timebre_6_min = min(timebre6_arr);
                song.timebre_6_max = max(timebre6_arr);
                song.timebre_6_range = song.timebre_6_max - song.timebre_6_min;
                song.timebre_6_median = median(timebre6_arr);

                song.timebre_7_mean = mean(timebre7_arr);
                song.timebre_7_variance = variance(timebre7_arr);
                song.timebre_7_skewness = sampleSkewness(timebre7_arr);
                song.timebre_7_kurtosis = sampleKurtosis(timebre7_arr);
                song.timebre_7_standard_deviation = standardDeviation(timebre7_arr);
                song.timebre_7_80th_percentile = quantile(timebre7_arr, 0.8);
                song.timebre_7_min = min(timebre7_arr);
                song.timebre_7_max = max(timebre7_arr);
                song.timebre_7_range = song.timebre_7_max - song.timebre_7_min;
                song.timebre_7_median = median(timebre7_arr);

                song.timebre_8_mean = mean(timebre8_arr);
                song.timebre_8_variance = variance(timebre8_arr);
                song.timebre_8_skewness = sampleSkewness(timebre8_arr);
                song.timebre_8_kurtosis = sampleKurtosis(timebre8_arr);
                song.timebre_8_standard_deviation = standardDeviation(timebre8_arr);
                song.timebre_8_80th_percentile = quantile(timebre8_arr, 0.8);
                song.timebre_8_min = min(timebre8_arr);
                song.timebre_8_max = max(timebre8_arr);
                song.timebre_8_range = song.timebre_8_max - song.timebre_8_min;
                song.timebre_8_median = median(timebre8_arr);

                song.timebre_9_mean = mean(timebre9_arr);
                song.timebre_9_variance = variance(timebre9_arr);
                song.timebre_9_skewness = sampleSkewness(timebre9_arr);
                song.timebre_9_kurtosis = sampleKurtosis(timebre9_arr);
                song.timebre_9_standard_deviation = standardDeviation(timebre9_arr);
                song.timebre_9_80th_percentile = quantile(timebre9_arr, 0.8);
                song.timebre_9_min = min(timebre9_arr);
                song.timebre_9_max = max(timebre9_arr);
                song.timebre_9_range = song.timebre_9_max - song.timebre_9_min;
                song.timebre_9_median = median(timebre9_arr);

                song.timebre_10_mean = mean(timebre10_arr);
                song.timebre_10_variance = variance(timebre10_arr);
                song.timebre_10_skewness = sampleSkewness(timebre10_arr);
                song.timebre_10_kurtosis = sampleKurtosis(timebre10_arr);
                song.timebre_10_standard_deviation = standardDeviation(timebre10_arr);
                song.timebre_10_80th_percentile = quantile(timebre10_arr, 0.8);
                song.timebre_10_min = min(timebre10_arr);
                song.timebre_10_max = max(timebre10_arr);
                song.timebre_10_range = song.timebre_10_max - song.timebre_10_min;
                song.timebre_10_median = median(timebre10_arr);

                song.timebre_11_mean = mean(timebre11_arr);
                song.timebre_11_variance = variance(timebre11_arr);
                song.timebre_11_skewness = sampleSkewness(timebre11_arr);
                song.timebre_11_kurtosis = sampleKurtosis(timebre11_arr);
                song.timebre_11_standard_deviation = standardDeviation(timebre11_arr);
                song.timebre_11_80th_percentile = quantile(timebre11_arr, 0.8);
                song.timebre_11_min = min(timebre11_arr);
                song.timebre_11_max = max(timebre11_arr);
                song.timebre_11_range = song.timebre_11_max - song.timebre_11_min;
                song.timebre_11_median = median(timebre11_arr);

                song.timebre_12_mean = mean(timebre12_arr);
                song.timebre_12_variance = variance(timebre12_arr);
                song.timebre_12_skewness = sampleSkewness(timebre12_arr);
                song.timebre_12_kurtosis = sampleKurtosis(timebre12_arr);
                song.timebre_12_standard_deviation = standardDeviation(timebre12_arr);
                song.timebre_12_80th_percentile = quantile(timebre12_arr, 0.8);
                song.timebre_12_min = min(timebre12_arr);
                song.timebre_12_max = max(timebre12_arr);
                song.timebre_12_range = song.timebre_12_max - song.timebre_12_min;
                song.timebre_12_median = median(timebre12_arr);
            } else {

            }
        }
        xhttp.addEventListener("load", reqListener);
        xhttp.open("GET", linkRequest, false);
        xhttp.setRequestHeader("Authorization", Authorization);
        xhttp.send();
        songs.push(song);
}


var data = [];
var dataResult = [];
var n = 1;
function handleFileSelect(evt) {
    var file = evt.target.files[0];

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
            data = results.data;
            data.forEach(function (song) {
                if (song.date) {

                    GetId(song);


                }
            });
            var result = CSV(songs);
            exportFile(result, "data.csv");
            console.log("----------DONE------------");




        }
    });
}

function CSV(songs) {
    var empConnects = [];
    songs.forEach(function (song) {
        empConnects.push([
            "\"" + song.date + "\"",
            "\"" + song.title + "\"",
            "\"" + song.artist + "\"",
            "\"" + song.peak_position + "\"",
            "\"" + song.id + "\"",
            "\"" + song.artist_popularity + "\"",
            "\"" + song.speechiness + "\"",
            "\"" + song.acousticness + "\"",
            "\"" + song.instrumentalness + "\"",
            "\"" + song.liveness + "\"",
            "\"" + song.valence + "\"",
            "\"" + song.duration_ms + "\"",
            "\"" + song.tempo + "\"",
            "\"" + song.time_signature + "\"",
            "\"" + song.mode + "\"",
            "\"" + song.key + "\"",
            "\"" + song.loudness + "\"",
            "\"" + song.danceability + "\"",
            "\"" + song.energy + "\"",
            "\"" + song.beatdiff_mean + "\"",
            "\"" + song.beatdiff_variance + "\"",
            "\"" + song.beatdiff_skewness + "\"",
            "\"" + song.beatdiff_kurtosis + "\"",
            "\"" + song.beatdiff_standard_deviation + "\"",
            "\"" + song.beatdiff_80th_percentile + "\"",
            "\"" + song.beatdiff_min + "\"",
            "\"" + song.beatdiff_max + "\"",
            "\"" + song.beatdiff_range + "\"",
            "\"" + song.beatdiff_median + "\"",
            "\"" + song.timebre_1_mean + "\"",
            "\"" + song.timebre_1_variance + "\"",
            "\"" + song.timebre_1_skewness + "\"",
            "\"" + song.timebre_1_kurtosis + "\"",
            "\"" + song.timebre_1_standard_deviation + "\"",
            "\"" + song.timebre_1_80th_percentile + "\"",
            "\"" + song.timebre_1_min + "\"",
            "\"" + song.timebre_1_max + "\"",
            "\"" + song.timebre_1_range + "\"",
            "\"" + song.timebre_1_median + "\"",
            "\"" + song.timebre_2_mean + "\"",
            "\"" + song.timebre_2_variance + "\"",
            "\"" + song.timebre_2_skewness + "\"",
            "\"" + song.timebre_2_kurtosis + "\"",
            "\"" + song.timebre_2_standard_deviation + "\"",
            "\"" + song.timebre_2_80th_percentile + "\"",
            "\"" + song.timebre_2_min + "\"",
            "\"" + song.timebre_2_max + "\"",
            "\"" + song.timebre_2_range + "\"",
            "\"" + song.timebre_2_median + "\"",
            "\"" + song.timebre_3_mean + "\"",
            "\"" + song.timebre_3_variance + "\"",
            "\"" + song.timebre_3_skewness + "\"",
            "\"" + song.timebre_3_kurtosis + "\"",
            "\"" + song.timebre_3_standard_deviation + "\"",
            "\"" + song.timebre_3_80th_percentile + "\"",
            "\"" + song.timebre_3_min + "\"",
            "\"" + song.timebre_3_max + "\"",
            "\"" + song.timebre_3_range + "\"",
            "\"" + song.timebre_3_median + "\"",
            "\"" + song.timebre_4_mean + "\"",
            "\"" + song.timebre_4_variance + "\"",
            "\"" + song.timebre_4_skewness + "\"",
            "\"" + song.timebre_4_kurtosis + "\"",
            "\"" + song.timebre_4_standard_deviation + "\"",
            "\"" + song.timebre_4_80th_percentile + "\"",
            "\"" + song.timebre_4_min + "\"",
            "\"" + song.timebre_4_max + "\"",
            "\"" + song.timebre_4_range + "\"",
            "\"" + song.timebre_4_median + "\"",
            "\"" + song.timebre_5_mean + "\"",
            "\"" + song.timebre_5_variance + "\"",
            "\"" + song.timebre_5_skewness + "\"",
            "\"" + song.timebre_5_kurtosis + "\"",
            "\"" + song.timebre_5_standard_deviation + "\"",
            "\"" + song.timebre_5_80th_percentile + "\"",
            "\"" + song.timebre_5_min + "\"",
            "\"" + song.timebre_5_max + "\"",
            "\"" + song.timebre_5_range + "\"",
            "\"" + song.timebre_5_median + "\"",
            "\"" + song.timebre_6_mean + "\"",
            "\"" + song.timebre_6_variance + "\"",
            "\"" + song.timebre_6_skewness + "\"",
            "\"" + song.timebre_6_kurtosis + "\"",
            "\"" + song.timebre_6_standard_deviation + "\"",
            "\"" + song.timebre_6_80th_percentile + "\"",
            "\"" + song.timebre_6_min + "\"",
            "\"" + song.timebre_6_max + "\"",
            "\"" + song.timebre_6_range + "\"",
            "\"" + song.timebre_6_median + "\"",
            "\"" + song.timebre_7_mean + "\"",
            "\"" + song.timebre_7_variance + "\"",
            "\"" + song.timebre_7_skewness + "\"",
            "\"" + song.timebre_7_kurtosis + "\"",
            "\"" + song.timebre_7_standard_deviation + "\"",
            "\"" + song.timebre_7_80th_percentile + "\"",
            "\"" + song.timebre_7_min + "\"",
            "\"" + song.timebre_7_max + "\"",
            "\"" + song.timebre_7_range + "\"",
            "\"" + song.timebre_7_median + "\"",
            "\"" + song.timebre_8_mean + "\"",
            "\"" + song.timebre_8_variance + "\"",
            "\"" + song.timebre_8_skewness + "\"",
            "\"" + song.timebre_8_kurtosis + "\"",
            "\"" + song.timebre_8_standard_deviation + "\"",
            "\"" + song.timebre_8_80th_percentile + "\"",
            "\"" + song.timebre_8_min + "\"",
            "\"" + song.timebre_8_max + "\"",
            "\"" + song.timebre_8_range + "\"",
            "\"" + song.timebre_8_median + "\"",
            "\"" + song.timebre_9_mean + "\"",
            "\"" + song.timebre_9_variance + "\"",
            "\"" + song.timebre_9_skewness + "\"",
            "\"" + song.timebre_9_kurtosis + "\"",
            "\"" + song.timebre_9_standard_deviation + "\"",
            "\"" + song.timebre_9_80th_percentile + "\"",
            "\"" + song.timebre_9_min + "\"",
            "\"" + song.timebre_9_max + "\"",
            "\"" + song.timebre_9_range + "\"",
            "\"" + song.timebre_9_median + "\"",
            "\"" + song.timebre_10_mean + "\"",
            "\"" + song.timebre_10_variance + "\"",
            "\"" + song.timebre_10_skewness + "\"",
            "\"" + song.timebre_10_kurtosis + "\"",
            "\"" + song.timebre_10_standard_deviation + "\"",
            "\"" + song.timebre_10_80th_percentile + "\"",
            "\"" + song.timebre_10_min + "\"",
            "\"" + song.timebre_10_max + "\"",
            "\"" + song.timebre_10_range + "\"",
            "\"" + song.timebre_10_median + "\"",
            "\"" + song.timebre_11_mean + "\"",
            "\"" + song.timebre_11_variance + "\"",
            "\"" + song.timebre_11_skewness + "\"",
            "\"" + song.timebre_11_kurtosis + "\"",
            "\"" + song.timebre_11_standard_deviation + "\"",
            "\"" + song.timebre_11_80th_percentile + "\"",
            "\"" + song.timebre_11_min + "\"",
            "\"" + song.timebre_11_max + "\"",
            "\"" + song.timebre_11_range + "\"",
            "\"" + song.timebre_11_median + "\"",
            "\"" + song.timebre_12_mean + "\"",
            "\"" + song.timebre_12_variance + "\"",
            "\"" + song.timebre_12_skewness + "\"",
            "\"" + song.timebre_12_kurtosis + "\"",
            "\"" + song.timebre_12_standard_deviation + "\"",
            "\"" + song.timebre_12_80th_percentile + "\"",
            "\"" + song.timebre_12_min + "\"",
            "\"" + song.timebre_12_max + "\"",
            "\"" + song.timebre_12_range + "\"",
            "\"" + song.timebre_12_median + "\""
        ]);
    });
    if (empConnects.length < 1) {
        console.log("no data");
        return;
    }
    var csvContent = "data:text/csv;charset=utf-8,%EF%BB%BF";
    csvContent = "";
    empConnects.forEach(function (infoArray, index) {
        dataString = infoArray.join(",");
        csvContent += index < empConnects.length ? dataString : dataString;
        csvContent += "\n";
    });

    return csvContent;

}

function exportFile(data, filename) {

    if (!data) {
        console.error('Console.save: No data');
        return;
    }

    if (!filename) filename = 'console.json';

    if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e)
}

$(document).ready(function () {
    $("#csv-file").change(handleFileSelect);
});
