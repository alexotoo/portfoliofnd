const path = require("path");
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
const withVideos = require("next-videos");
const withImages = require("next-images");
module.exports = withVideos(withImages());

// module.exports = withVideos();
