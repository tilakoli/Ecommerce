import React from "react";
import Link from "next/link";
import styles from "./HeroBanner.module.css";
import {urlFor} from "../../lib/client";

const HeroBanner = ({heroBanner}) => {
  return (
    <div className={`${styles.root} `}>
      <div>
        <p className={styles.beats_solo}>{heroBanner.smallText}</p>
        <h3 className={styles.hero_banner_container_h3}>
          {heroBanner.midText}
        </h3>
        <h1 className={styles.hero_banner_container_h1}>
          {heroBanner.largeText1}
        </h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className={styles.hero_banner_image}
        />

        <div className={styles.desc_container}>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type="button"
              className={styles.hero_banner_container_button}
            >
              {heroBanner.buttonText}
            </button>
          </Link>

          <div className={styles.desc}>
            <h5 className={styles.desc_h5}>Description</h5>
            <p className={styles.desc_p}>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
