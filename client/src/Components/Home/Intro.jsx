import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <section className="jumbo__bg">
      <div className="jumbotron jumbo-home" id="musictype">
        <div className="container">
          <h3>Music For Every Type Of Vibe</h3>
          <p>Chill evenings to crazy nights. We have everything to set every type of mood.</p>
          <div className="container" id="albumcover">
            <div className="row">
              <div className="col-md  " id="Ac1">
                <Link to="/products"><img className="shadow p-3 mb-5 bg-white "
                  src="http://foothillertech.com/student/webdesign/2017/fan4/projects/teamFan/assets/images/2014forestHillsdrive.jpg"
                  alt="J.cole forest hill dr album" /></Link>
              </div>
              <div className="col-md" id="Ac2">
                <Link to="/products"><img className="shadow p-3 mb-5 bg-white "
                  src="https://dazedimg-dazedgroup.netdna-ssl.com/786/azure/dazed-prod/1240/4/1244468.jpg"
                  alt="Drake Scorpion album" /></Link>
              </div>
              <div className="col-md" id="Ac3">
                <Link to="/products"><img className="shadow p-3 mb-5 bg-white "
                  src="https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/fcogrldl3itiosfjrvlz/khalidsuncitycover"
                  alt="Khalid album" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro 