import React from 'react';
import styles from './AboutUs.css';

export const AboutUs = () => (
  <section className={styles.aboutus}>
    <section className={styles.dev}>
      <img src="https://avatars3.githubusercontent.com/u/53454869?s=460&v=4" />
      <h1>Aaron Edward  Glenn</h1>
      <a href="https://github.com/aaronedwardglenn">Github</a>
    </section>
    <section className={styles.dev}>
      <img src="https://avatars0.githubusercontent.com/u/51837529?s=460&v=4" />
      <h1>Jodi &apos;JBJ&apos; Kansagor</h1>
      <a href="https://github.com/jodinkansagor">Github</a>
    </section>
    <section className={styles.dev}>
      <img src="https://avatars2.githubusercontent.com/u/54227387?s=460&v=4" />
      <h1>Joel Patrick Durham</h1>
      <a href="https://github.com/joelpdurham">Github</a>
    </section>
    <section className={styles.dev}>
      <img src="https://avatars3.githubusercontent.com/u/52361640?s=460&v=4" />
      <h1>Tess Lameyer</h1>
      <a href="https://github.com/tess-jl">Github</a>
    </section>
  </section>
);
