import React, { Component } from "react"

import Layout from "../components/layout"
import '../components/aboutUs.css'
import VideoPlayer from '../components/video/videoPlayer'
import SEO from "../components/seo"

class AboutUs extends Component {
  render() {
    return (
      
      <Layout>
        <SEO title="About Us" />
        <div className="background">
        </div>
        <div className="pageText">
          <h1>
            A Service Born from Corona...
        </h1>
          <p>
            Hi, my name is Michael Foster, I am 20 years old and I am the founder of Ranch to Plate. If you are reading this page I would like to tell you a little bit about the Ranch to Plate story and what we here at Ranch to Plate aim to do. In short, Ranch to Plate is a service that connects customers with local farmers and ranchers. Ranch to Plate was founded with three simple goals in mind...
          <ol>
              <li>Put more money in ranchers pockets</li>
              <li>Save customers money</li>
              <li>Promote local business</li>
            </ol>
            After being sent home from college due to the coranvirus pandemic, I was pretty bored. So, being the entreprenurial minded person that I am, I filled my time by coming up with business ideas. I've always wanted to solve a problem and at this time in the world, there were more than enough problems to be solved. One night while talking to a good friend and old boss of mine at the ranch I worked at in highschool, the subject of beef prices came up. I had noticed that prices were really increasing in stores for beef, I figured this meant ranchers were getting paid more so I was fine with it. However, my friend informed me that they were actually being paid record lows even during these record high store prices. This did not sit right with me. If only we could cut out the middleman.
          </p>
          <p>
            Fast forward a few weeks and I'm sitting and talking with my Dad about the current state of the world, when my dad stumbles upon a Facebook post and says "Here's a problem to solve!". This post was encouraging everyone to skip the grocery store and buy meat straight from their local ranchers. Being from the small town I'm from I figured that was just something everyone did. When I looked at the comments however, all I saw were people asking questions like "How do I buy meat locally?", "Where do I find the ranchers?", "Is this even an option??", etc. Having ran a business all through high school, and majoring in computer science during college with the intent of starting another business some day, I was eager to jump into this problem. I began work on this site for the rest of the school year and into the next, getting advice from local ranchers along the way.
          </p>
          <p>
            I hope that what I have put together here will be of use for both ranchers and customers alike. If you are a customer I encourage you to click on "Find a Ranch" above and find a ranch near you. Reach out to this rancher with respect and order some locally produced food. You will end up with a much higher quality product than what is available in stores, you will save money, and you will know where your food comes from. On top of all of this you will be directly supporting your local economy instead of some corporate packing house. If you are a farmer or rancher I encourage you to click on "List Your Ranch" above and send me a message. I would love to talk with you about your ranch and try to help you make a bit more for all of that hard work you put into what you produce.
          </p>
          <p>
            Thanks,
          </p>
          <p>
            Michael
          </p>
        </div>
        <div className="videoPlayer">
          <VideoPlayer url = 'https://youtu.be/eEzD-Y97ges' />
        </div>

      </Layout>
    );
  }
}



export default AboutUs