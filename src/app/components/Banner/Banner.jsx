import Image from 'next/image';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.rating}>
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <span className={styles.reviews}>(566)</span>
          </div>
          <h1>#1 Platform Powering Health and Wellness</h1>
          <p>
            We’re restoring home as the primary place of personal well-being. 
            Health is not just about what you’re eating. It’s also about what you’re thinking and saying.
          </p>
          <div className={styles.buttons}>
            <button className={styles.browse}>Browse Courses</button>
            <button className={styles.getStarted}>Get Started</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <Image
              src="/banner-image.png"
              alt=""
              width={400}
              height={600}
            />
          </div>
          <div className={styles.stats}>
            <h2>12,000+</h2>
            <p>Happy learners rely on us regularly</p>
            <p>
              By prioritizing self-care and making informed choices, 
              one can enhance their overall quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
