import Link from "next/link";
import styles from "./banner.module.css"
import Image from "next/image";

const Banner = () => {
    return (
        <div className={`border-bottom pt-2 pb-2 ${styles.banner}`}>
            <div className="container">
                <Link href="/" className={`d-flex align-items-center justify-content-start ${styles.link}`}>
                    <img src="./react-seeklogo.png" alt="logo" width="100"/>
                    <h2 className="ms-4 text-dark">Test React App</h2>
                </Link>
            </div>
        </div>

    )
}

export default Banner;