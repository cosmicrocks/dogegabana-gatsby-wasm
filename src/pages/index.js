import * as React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1> */}
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/app/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
      )}
    </p>
    <h1>Doge&Gabana</h1>
    <StaticImage
      src="../images/dogegabana.png"
      //width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <div id="audioDiv">
      <audio src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Anime+wow+sound+effect&filename=24/248305-8e320de9-d9a1-48ca-b119-b1bcc1c09e00.mp3" type="audio/mp3" controls="controls" autoPlay>Audio could not be loaded.</audio>
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    
  </Layout>
)

export default IndexPage