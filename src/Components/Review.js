import { Grid, Rating, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

function Review() {
  return (
    <>
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center",paddingBottom:'10px' }}>
        Customer Review
      </Typography>
      <section style={{padding:"2rem"}}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center"></div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                alt=""
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h2 className="mb-3">Maria Smantha</h2>
            <p style={{ fontSize: "15px" }} className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quod eos id officiis hic
              tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            {/* <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul> */}
            <Rating name="read-only" value={4} />
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt=""
              />
            </div>
            <h2 className="mb-3">Lisa Cudrow</h2>
            <p style={{ fontSize: "15px" }} className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid commodi.
            </p>
            {/* <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul> */}
            <Rating name="read-only" value={4.5} />
          </div>
          <div className="col-md-4 mb-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt=""
              />
            </div>
            <h2 className="mb-3">John Smith</h2>
            <p style={{ fontSize: "15px" }} className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti.
            </p>
            {/* <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-warning"></i>
              </li>
            </ul> */}
            <Rating name="read-only" value={4.5} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
