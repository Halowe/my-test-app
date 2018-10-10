import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Nice to meet you,<br /> my name is Eugene Kamenets</h1>
        <p>I'm a product designer with over <b>8 years</b> of experience</p>
        <Link to="/page-2/">Learn more about me</Link>
        <div className="Logos">
          <img src={require('../images/gatsby-icon.png')} width="50px"/>
          <img src={require('../images/gatsby-icon.png')} width="50px"/>
          <img src={require('../images/gatsby-icon.png')} width="50px"/>
          <img src={require('../images/gatsby-icon.png')} width="50px"/>
          <img src={require('../images/gatsby-icon.png')} width="50px"/>
          <img src={require('../images/gatsby-icon.png')} width="50px"/>
        </div>
        <svg width="100%" height="127px" xmlns="http://www.w3.org/2000/svg" >
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0,9.54470328 C145.751008,0.621729702 261.245759,-2.04493696 346.484253,1.54470328 C598.557593,12.1602429 456.777867,50.9622142 759.862162,57.5447033 C1009.30617,62.9622142 1152.09372,5.87529038 1451.54086,9.54470328 C1804.94397,13.8752904 1779.85913,57.5447033 2065.56267,57.5447033 C2244.58002,57.5447033 2409.39247,41.5447033 2560,9.54470328 L2560,198.544703 L0,198.544703 L0,9.54470328 Z;
            
            M0,9.54470328 C138.807808,65.7734953 250.830958,95.6827114 336.069452,99.2723516 C588.142792,109.887891 650.223534,32.5550395 953.307829,39.1375286 C1202.75184,44.5550395 1203.72069,117.93334 1503.16783,121.602753 C1856.57094,125.93334 1785.82745,99.2723516 2071.53099,99.2723516 C2250.54834,99.2723516 2413.37134,86.8314471 2560,61.9496381 L2560,198.544703 L0,198.544703 L0,9.54470328 Z;

            M0,104.044703 C227.572995,72.3916862 383.978739,58.3599978 469.217233,61.9496381 C721.290573,72.5651777 552.384931,115.020264 855.469226,121.602753 C1104.91324,127.020264 1062.48397,43.2730155 1361.93112,46.9424284 C1715.33423,51.2730155 1621.18353,104.044703 1906.88707,104.044703 C2085.90442,104.044703 2303.60873,117.851233 2560,145.464293 L2560,198.544703 L0,198.544703 L0,104.044703 Z;

            M0,9.54470328 C145.751008,0.621729702 261.245759,-2.04493696 346.484253,1.54470328 C598.557593,12.1602429 456.777867,50.9622142 759.862162,57.5447033 C1009.30617,62.9622142 1152.09372,5.87529038 1451.54086,9.54470328 C1804.94397,13.8752904 1779.85913,57.5447033 2065.56267,57.5447033 C2244.58002,57.5447033 2409.39247,41.5447033 2560,9.54470328 L2560,198.544703 L0,198.544703 L0,9.54470328 Z

            "
            />
          </path>
        </svg>
      </div>
    </div>
  </Layout>
)

export default IndexPage