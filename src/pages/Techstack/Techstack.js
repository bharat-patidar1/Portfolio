import './Techstack.css'
import { RubberBand } from '../../extra/RubberBand';
// import { Fade } from 'react-awesome-reveal';
import { TechstackList } from '../../utils/TechstackList'
const Techstack = () => {
  return (
    <>
      
        <div className="techstack" id="tech">
        <RubberBand>
            <h2 className='col-12 mt-3 mb-1 text-center'>Technologies Stack</h2>
            <hr/>
            <p className='pb-3 text-center' >
                👉 including programming Language , FrameWorks , databases , front-end and back-end tools , and API's
            </p>
            </RubberBand>
            <div className="container text-center">
                <div className="row">
            {TechstackList.map((tech)=>(
                
                <div key={tech._id} className="col-md-3">
                    <div className="card m-2">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex justify-content-center">
                                    <div className="align-self-center">
                                      <tech.icon className='tech-icon'/>
                                    </div>
                                    <div className="media-body">
                                        <h5>{tech.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            ))}
            </div>
            </div>
        </div>
     
    </>
  )
}

export default Techstack