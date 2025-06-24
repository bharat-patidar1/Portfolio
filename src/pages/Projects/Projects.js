
import './Projects.css'
import hhub from '../../Images/hhub.png'
// import { Shake } from '../../extra/ShakeAnimation';
const Projects = () => {
  return (
    <>
      <div className="project" id="project">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>top recent projects</h2>
        <hr />
        <p className='pb-3 text-center' >
          Here are my top 3 recent projects with live link and source code
        </p>
        {/* card design */}
        <div className="row" id="ads">




          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Full Stack
                </span>
                <img src={hhub} alt="project1"></img>
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body">
                <div className="ad-titlle">
                  <h5 className="text-uppercase  m-auto">Hire Hub ! a Job Portal</h5>
                </div>
                <button className='ad-btn'><a href="https://hirehub-09as.onrender.com" alt="img">View</a></button>
              </div>
            </div>
          </div>



          {/* <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Full Stack
                </span>
                <img src={news_img} alt="project1"></img>
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body">
                <div className="ad-titlle">
                  <h5 className="text-uppercase  m-auto">Daily News Website</h5>
                </div>
              </div>
            </div>
          </div> */}



        </div>
      </div>
    </>
  )
}

export default Projects