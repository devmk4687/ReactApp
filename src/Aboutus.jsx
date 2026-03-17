import { Menu } from "./Menu";


function Aboutus() {
  return (
    <div>
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <span className="text-muted">Our</span>
            {/* <h2 className="display-5 fw-bold">.</h2> */}
            
          </div>
          <div className="col-md-6 offset-md-1">
           <Menu />
           
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Aboutus;