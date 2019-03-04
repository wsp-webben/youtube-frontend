import jsonp from 'jsonp';

export default function suggest(query, cb) {
  const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&hl=en&ds=yt&q=';
  const url = googleAutoSuggestURL + query;
  const queryLimit = 5;
  let result;

  jsonp(url, (error, data) => {
    if (error) {
      console.log(`jsonp error ${error}`);
    }
    result = data[1]
      .slice(0, queryLimit)
      .map(item => item[0]);
    cb(result);
  });
}
