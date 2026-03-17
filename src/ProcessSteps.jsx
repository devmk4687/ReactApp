

function ProcessSteps(){
    return(
        <>
        <div class="container">
        <div class="row" style="margin-top:25px">
        <ol class="show-grid col-md-8 col-md-offset-2">
          <li class="col-md-4 active">
           <div class="media">
              <div class="pull-left" href="#">
                <span class="glyphicon glyphicon-user"></span>
              </div>
            <div class="media-body">
                <h5 class="media-heading"><strong>Step 1:</strong></h5>
                Company Sign Up
            </div>
        </div>
          </li>
          <li class="col-md-4 inactive">
          <div class="media">
              <div class="pull-left" href="#">
                <span class="glyphicon glyphicon-book"></span>
              </div>
            <div class="media-body">
                <h5 class="media-heading"><strong>Step 2:</strong></h5>
                Choose your plan
            </div>
        </div>
          </li>
          <li class="col-md-4 inactive">
           <div class="media">
              <div class="pull-left" href="#">
                <span class="glyphicon glyphicon-dashboard"></span>
              </div>
            <div class="media-body">
                <h5 class="media-heading"><strong>Step 3:</strong></h5>
                Go to your dashboard
            </div>
        </div>
          </li>
        </ol>
    </div>
    </div>
    </>
    )
}

export default ProcessSteps;