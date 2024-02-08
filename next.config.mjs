// next.config.mjs

const { generateStaticParams } = require('next/dist/export/');

module.exports = {
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return generateStaticParams({
      dir,
      outDir,
      distDir,
      buildId,
      defaultPathMap,
      dev,
    });
  },
};
