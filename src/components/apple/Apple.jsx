import React from "react";
import styled from "styled-components";

const Apple = () => {
  return (
    <StyledWrapper>
      <a href="#" className="playstore-button">
        <span className="icon">
          <svg
            fill="currentcolor"
            viewBox="-52.01 0 560.035 560.035"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
            </g>
          </svg>
        </span>
        <span className="texts">
          <span className="text-1">Download form</span>
          <span className="text-2">App store</span>
        </span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .playstore-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 1);
  padding: 0.625rem 1.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  outline: 0;
  transition: all 0.2s ease;
  text-decoration: none;
}

.playstore-button:hover {
  background-color: transparent;
  color: rgba(0, 0, 0, 1);
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
}

.texts {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
}

.text-1 {
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-2 {
  font-weight: 600;
}

`;

export default Apple;
