
import React from 'react';
import Navbar from "../Navbar/Navbar";
import Landingpage from "../LandingPage/Landingpage";
import Fetaurestile from "../Featurestile/Fetaurestile";
import Faq from "../FAQs/Faq";
import ReviewSection from '../ReviewSection/ReviewSection';
function HomePage() {
  return (
    <div className="landing-background">
        <div className="circle4">
          <svg
            width="1400"
            height="832"
            viewBox="0 0 1440 832"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clip-path="url(#clip0_6_109)">
              {" "}
              <g filter="url(#filter0_f_6_109)">
                {" "}
                <ellipse
                  cx="308.5"
                  cy="319"
                  rx="116.5"
                  ry="111"
                  fill="#F98BF4"
                />{" "}
              </g>{" "}
              <g filter="url(#filter1_f_6_109)">
                {" "}
                <ellipse
                  cx="421"
                  cy="187"
                  rx="119"
                  ry="110"
                  fill="#FF0000"
                />{" "}
              </g>{" "}
              <g filter="url(#filter2_f_6_109)">
                {" "}
                <path
                  d="M739 445.5C739 546.844 654.382 629 550 629C445.618 629 361 546.844 361 445.5C361 344.156 445.618 262 550 262C654.382 262 739 344.156 739 445.5Z"
                  fill="#5B41F9"
                />{" "}
              </g>{" "}
              <g filter="url(#filter3_f_6_109)">
                {" "}
                <rect
                  x="520"
                  y="119"
                  width="357"
                  height="232"
                  fill="#E127FF"
                />{" "}
              </g>{" "}
              <g filter="url(#filter4_f_6_109)">
                {" "}
                <path
                  d="M725.5 216L776.128 344.523H939.963L807.418 423.954L858.046 552.477L725.5 473.046L592.954 552.477L643.582 423.954L511.037 344.523H674.872L725.5 216Z"
                  fill="#FFE926"
                />{" "}
              </g>{" "}
            </g>{" "}
            <defs>
              {" "}
              <filter
                id="filter0_f_6_109"
                x="-58"
                y="-42"
                width="733"
                height="722"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                {" "}
                <feFlood flood-opacity="0" result="BackgroundImageFix" />{" "}
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />{" "}
                <feGaussianBlur
                  stdDeviation="125"
                  result="effect1_foregroundBlur_6_109"
                />{" "}
              </filter>{" "}
              <filter
                id="filter1_f_6_109"
                x="52"
                y="-173"
                width="738"
                height="720"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                {" "}
                <feFlood flood-opacity="0" result="BackgroundImageFix" />{" "}
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />{" "}
                <feGaussianBlur
                  stdDeviation="125"
                  result="effect1_foregroundBlur_6_109"
                />{" "}
              </filter>{" "}
              <filter
                id="filter2_f_6_109"
                x="111"
                y="12"
                width="878"
                height="867"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                {" "}
                <feFlood flood-opacity="0" result="BackgroundImageFix" />{" "}
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />{" "}
                <feGaussianBlur
                  stdDeviation="125"
                  result="effect1_foregroundBlur_6_109"
                />{" "}
              </filter>{" "}
              <filter
                id="filter3_f_6_109"
                x="270"
                y="-131"
                width="857"
                height="732"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                {" "}
                <feFlood flood-opacity="0" result="BackgroundImageFix" />{" "}
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />{" "}
                <feGaussianBlur
                  stdDeviation="125"
                  result="effect1_foregroundBlur_6_109"
                />{" "}
              </filter>{" "}
              <filter
                id="filter4_f_6_109"
                x="261.037"
                y="-34"
                width="928.927"
                height="836.477"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                {" "}
                <feFlood flood-opacity="0" result="BackgroundImageFix" />{" "}
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />{" "}
                <feGaussianBlur
                  stdDeviation="125"
                  result="effect1_foregroundBlur_6_109"
                />{" "}
              </filter>{" "}
              <clipPath id="clip0_6_109">
                {" "}
                <rect width="1280" height="832" fill="white" />{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>
          </div>
        <Navbar />
        <Landingpage />
        <Fetaurestile />
        <Faq />
        <ReviewSection />
      
    </div>
  );
}

export default HomePage;
