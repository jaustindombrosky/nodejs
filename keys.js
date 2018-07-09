console.log('this is loaded');

exports.twitter = {
  consumer_key: YMmzQhAxVnivNanInfh8lxfLm,
  // process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: sQjVpeyrsveZLBek7XqyLZcP6CFgLxTsktrtAmXCTZRzT67QEe,
  // process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
