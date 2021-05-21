import styles from "../styles/Layout/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.navWrapper}>
      <ul className={styles.navList}>
        <li className="nav-item logo">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42 21C42 32.598 32.598 42 21 42C9.40201 42 0 32.598 0 21C0 9.40201 9.40201 0 21 0C32.598 0 42 9.40201 42 21Z"
              fill="#3342AE"
            />
            <path
              d="M33.7784 4.33403L21.6122 41.9913C21.4088 41.997 21.2047 42 21 42C9.40201 42 0 32.598 0 21C0 17.231 0.992906 13.694 2.73139 10.6361L29.7536 1.90582C31.1898 2.56527 32.5388 3.38206 33.7784 4.33403V4.33403Z"
              fill="#2B3894"
            />
            <path
              d="M17.8097 32.311L11.1688 30.8312L24.1902 9.68905L39.8516 2.14841L32.3109 17.8097L17.8097 32.311Z"
              fill="#7FBED7"
            />
            <path
              d="M39.8516 2.14841L11.1688 30.8312L9.68903 24.1903L24.1903 9.68905L39.8516 2.14841Z"
              fill="#65B1CF"
            />
            <path
              d="M19.4459 30.708L17.8097 32.311L17.2877 28.3087H21.1371L19.4459 30.708Z"
              fill="#65B1CF"
            />
            <path
              d="M11.4292 22.4501L13.7493 24.7703L9.68903 24.1903L11.4292 22.4501Z"
              fill="#3E9DC3"
            />
            <path
              d="M39.8516 2.14841L17.2877 21.1484L16.9494 21.9971L13.7494 24.7704L2.14838 14.3295L39.8516 2.14841Z"
              fill="#8CC5DB"
            />
            <path
              d="M18.7833 20.4075L16.9493 21.997L2.14838 14.3295L18.7833 20.4075Z"
              fill="#7FBED7"
            />
            <path
              d="M39.8516 2.14841L18.7833 20.4075L2.14838 14.3295L39.8516 2.14841Z"
              fill="#A6D2E3"
            />
            <path
              d="M39.8516 2.14841L27.6705 39.8516L17.2877 28.3086L20.0538 25.1016L23.8621 25.0999L39.8516 2.14841Z"
              fill="#A6D2E3"
            />
            <path
              d="M27.6705 39.8516L20.0538 25.1016L21.6393 23.2635L27.6705 39.8516Z"
              fill="#8CC5DB"
            />
            <path
              d="M39.8516 2.14841L27.6705 39.8516L21.6393 23.2635L39.8516 2.14841Z"
              fill="#C0DFEB"
            />
          </svg>
        </li>
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/list">
            <a className="nav-link">
              List
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about-us">
            <a className="nav-link">
              About Us
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a href="/contact-us" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
