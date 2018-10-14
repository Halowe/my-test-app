module.exports = {
  siteMetadata: {
    title: 'Eugene Kamenets',
    description: 'osmerjhskd fasdf klsadkf sdakjlfb sdabfbkas dfbsadb fsa fbjksbfkbsb fkbkskj bf',
    keywords: 'mysite,portflio,about,works'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 't7ktv5ifj2ww',
        accessToken: '492975bf7a2d4f4307001e0a52f2247f1c286d020395f7bd16c212f3aeb45e50'
      }
    }
  ],
}


