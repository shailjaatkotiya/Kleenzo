import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';

const FloatingBubbles = () => {
  useEffect(() => {
    const container = document.getElementById('bubble-container');
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.className = styles.bubble;
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${Math.random() * 20 + 10}s`; // random duration between 10s and 30s
      bubble.style.animationDelay = `${Math.random() * 20}s`; // random delay between 0s and 20s
      container.appendChild(bubble);
    }
  }, []);

  return <div id="bubble-container" className={styles.bubbleContainer}></div>;
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kleenzo</title>
        <meta name="description" content="Product listing for cleansing products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Kleenzo</h1>
        {/* <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav> */}
      </header>

      <section className={styles.hero}>
        <h2>Your Cleansing Partner</h2>
        <p>Experience the best cleansing products</p>
      </section>
      <FloatingBubbles />

      <main className={styles.main}>
        <section className={styles.product} style={{ backgroundColor: '#EE4E4E' }}>
          <h3>Kleenzo Washing Liquid Rose Fragnant - 250 Rs</h3>
          <p>High quality rose fragrant washing liquid for your clothes.</p>
        </section>
        <section className={styles.product} style={{ backgroundColor: '#219C90' }}>
          <h3>Kleenzo Washing Liquid Jasmin Fragnant - 250 Rs</h3>
          <p>High quality jasmin fragrant washing liquid for your clothes.</p>
        </section>
        <section className={styles.product} style={{ backgroundColor: '#FFC700' }}>
          <h3>Kleenzo Dish Wash Lemon Fragnant - 250 Rs</h3>
          <p>High quality lemon fragrant dish wash liquid.</p>
        </section>
      </main>

      <section className={styles.contact}>
        <h3>Contact Information</h3>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
        <p>WhatsApp: +1234567890</p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Kleenzo</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
