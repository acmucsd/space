import s from './style.module.scss';

const Hero: React.FC = () => {
  return (
    <>
      <div className={s.heroContainer}>
        <img src="asset/hero_title.svg" alt="SPACE" className={s.heroTitle} />
        <svg
          width="413"
          height="528"
          viewBox="0 0 413 528"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={s.heroPlanet}
        >
          <path
            d="M191.209 376.981C255.584 427.729 347.608 418.121 396.753 355.521C445.897 292.921 433.55 201.035 369.176 150.287C304.802 99.5389 212.777 109.147 163.633 171.746C114.489 234.346 126.835 326.233 191.209 376.981Z"
            fill="#DBC9FF"
          />
          <path
            d="M155.96 247.218C144.666 239.465 140.113 229.441 139.578 218.57C137.276 226.312 135.891 234.212 134.953 242.172C140.952 251.86 148.883 260.188 164.902 261.114C161.744 254.73 158.763 249.154 155.96 247.218ZM413.777 207.788C411.538 211.651 407.578 211.481 402.582 205.191C394.103 194.526 376.582 198.01 364.325 202.812C340.215 212.238 282.096 198.456 294.02 183.199C299.659 175.993 249.38 162.473 250.248 151.455C251.062 141.046 235.417 132.969 239.029 122.569C213.119 129.327 189.807 143.152 171.678 162.509C169.813 173.359 170.428 183.521 173.717 190.3C178.165 199.469 201.614 238.511 212.863 234.252C231.622 227.146 272.96 275.228 277.377 267.197C285.835 251.816 305.744 285.613 329.835 276.189C342.103 271.396 358.942 273.569 367.431 284.242C377.34 296.704 408.275 288.249 426.721 262.415C425.951 243.65 421.556 225.103 413.777 207.788ZM313.859 406.561C308.793 405.416 304.107 403.901 300.519 401.639C273.995 384.898 254.036 399.398 240.113 383.24C232.942 374.91 209.989 380.323 196.077 370.78C186.863 364.527 177.326 358.773 167.508 353.543C174.526 362.189 182.477 370.051 191.209 376.981C227.516 405.602 272.604 415.013 313.859 406.561Z"
            fill="#C7A5FF"
          />
          <path
            d="M414.743 209.682C420.637 223.488 424.404 238.047 425.914 252.857C454.371 272.596 466.051 291.859 453.45 305.056C446.865 311.961 434.244 316.373 417.592 318.569C376.135 323.997 308.92 315.193 242 293.426C195.49 278.296 157.98 259.793 134.721 242.041C111.051 223.981 102.151 206.704 113.733 194.558C121.343 186.573 136.957 181.878 157.692 180.19C159.607 177.324 161.486 174.481 163.632 171.746C170.689 162.758 178.708 154.993 187.336 148.205C115.625 142.858 57.7726 153.617 36.4546 180.772C7.43974 217.731 54.7916 273.437 145.642 317.586C168.332 328.53 191.659 338.042 215.481 346.063C269.797 364.533 324.567 375.434 373.068 379.06C444.768 384.399 502.62 373.64 523.938 346.485C552.945 309.536 505.601 253.82 414.743 209.682Z"
            fill="#9681FF"
          />
          <path
            d="M152.854 164.124C139.014 165.328 125.455 168.387 112.542 173.217C100.112 178.038 87.5871 184.619 81.1179 194.276C74.3767 203.649 77.1851 214.614 84.7694 224.642C92.4068 234.558 102.491 243.537 113.753 251.421C136.079 267.441 160.142 280.853 185.447 291.381C210.62 302.56 236.96 310.971 263.59 318.047C317.136 332.126 372.192 338.662 427.128 337.462C433.909 337.095 440.931 337.208 447.583 336.669C454.017 335.959 460.568 334.672 466.63 332.861C478.71 329.206 489.504 322.29 489.852 310.811C490.302 299.223 482.502 286.571 473.691 276.262C464.554 265.851 453.696 256.553 441.589 249.05C454.606 254.765 467.078 262.367 477.876 272.235C488.337 282.06 499.054 294.077 500.502 311.022C501.168 319.389 497.504 328.305 491.685 334.03C485.98 340.017 478.923 343.702 471.944 346.522C464.878 349.274 457.817 351.257 450.428 352.69C443.229 353.948 436.235 354.834 429.066 355.806C372.196 362.347 313.824 357.854 257.657 343.518C201.752 328.96 146.522 305.856 101.102 267.356C89.9245 257.859 78.6979 247.413 70.3904 233.743C66.3091 226.939 62.899 218.966 62.4951 210.086C62.0153 201.263 65.0076 192.702 70.8364 186.222C81.9978 174.207 96.4162 169.462 110.303 166.27C124.213 163.288 138.579 162.563 152.854 164.124Z"
            fill="#C0A5FF"
          />
        </svg>
        <div className={s.heroDescription}>
          <div className={s.heroSubtitle}>ACM at UCSD&apos;s Annual Career Fair</div>
          <div className={s.heroInfo}>
            <div>
              <a
                className={s.heroLink}
                href="https://maps.app.goo.gl/yfNcvtfj4PoDBE1a7"
                target="_blank"
                rel="noopener noreferrer"
              >
                ASML Conference Room, SME Building floor 2
              </a>
            </div>
            <div>October 14th, 2024 (10am to 4pm)</div>
            <div className={s.heroSubtitle}>Register Today!</div>
            <a
              className={s.registerButton}
              href="https://acmurl.com/space-registration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Students
            </a>
            <a
              className={s.registerButton}
              href="https://acmurl.com/space-company-registration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Companies
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
