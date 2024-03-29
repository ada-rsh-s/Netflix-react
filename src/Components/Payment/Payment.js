import React from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import { Button } from "react-bootstrap";

function Payment() {
  let navigate = useNavigate();
  return (
    <div className="paymentparent">
      <div className="headerprepayment">
        <div className="headerpre1">
          <svg className="logosvg1" viewBox="0 0 111 30">
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
              fill="#e50f14"
            ></path>
          </svg>
        </div>
        <div className="headerpre2">
          <h5>Sign Out</h5>
        </div>
      </div>
      <hr />
      <div className="plan">
        <p className="stepspre">
          STEP 2 OF <b>3</b>
        </p>
        <h4 className="planchoosepre">Choose the plan that’s right for you</h4>
        <div className="featurepre">
          <svg className="tick" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#e50f14"
              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
            ></path>
          </svg>
          &nbsp; &nbsp;
          <h6>Watch all you want. Ad-free</h6>
        </div>
        <div className="featurepre">
          <svg className="tick" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#e50f14"
              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
            ></path>
          </svg>
          &nbsp; &nbsp;
          <h6>Recommendations just for you</h6>
        </div>
        <div className="featurepre">
          <svg className="tick" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#e50f14"
              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
            ></path>
          </svg>
          &nbsp; &nbsp;
          <h6>Change or cancel your plan anytime</h6>
        </div>
      </div>
      <div className="paymentdetails">
        <div className="monthlyprice">
          <hr />
          <h6 className="paypc">
            Monthly Price &nbsp;&nbsp;:&nbsp; <span>₹ 499</span>{" "}
            &nbsp;&nbsp;&nbsp;║&nbsp;&nbsp;Video Quality&nbsp;&nbsp;:&nbsp;{" "}
            <span>Good</span> &nbsp;&nbsp;&nbsp;║&nbsp;&nbsp;Resolution
            &nbsp;&nbsp;:&nbsp; <span>480P</span>{" "}
            &nbsp;&nbsp;&nbsp;║&nbsp;&nbsp;Device you can use to
            watch&nbsp;&nbsp;:&nbsp;{" "}
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="planGrid__supportedDevicesIcon"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="planGrid__supportedDevicesIcon"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="planGrid__supportedDevicesIcon"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </h6>

          <h6 className="payphone">
            Monthly Price &nbsp;&nbsp;:&nbsp; <span>₹ 499</span>
            <br />
            <br />
            Video Quality&nbsp;&nbsp;:&nbsp; <span>Good</span> <br />
            <br />
            Resolution &nbsp;&nbsp;:&nbsp; <span>480P</span> <br />
            <br />
            Device you can use to watch&nbsp;&nbsp;:&nbsp;{" "}
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="planGrid__supportedDevicesIcon"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="planGrid__supportedDevicesIcon"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="planGrid__supportedDevicesIcon"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </h6>

          <hr />
          <div className="paybar">
            <img src="https://badges.razorpay.com/badge-dark.png" />
            <Button onClick={() => navigate("/home")} className="btn-danger">
              {" "}
              Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
