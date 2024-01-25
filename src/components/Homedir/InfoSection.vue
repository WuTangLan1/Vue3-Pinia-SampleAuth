<template>
    <section class="info-section">
      <h1>Welcome to Our Gaming World!</h1>
      <p>
        Explore the latest and greatest in the gaming universe right here at our website. We're passionate about gaming and committed to providing you with the best experience. Dive into the excitement and discover what makes our gaming platform unique.
      </p>
  
      <div class="highlights">
        <div class="highlight-item highlight1">
          <h2>Wide Range of Games</h2>
          <p>Discover a vast collection of games, ranging from action-packed adventures to immersive simulations. We have something for every gaming enthusiast.</p>
        </div>
  
        <div class="highlight-item highlight2">
          <h2>Community Interaction</h2>
          <p>Join our thriving gaming community. Connect with fellow gamers, share tips and strategies, and participate in exciting events. Gaming is more fun when shared!</p>
        </div>
  
        <div class="highlight-item highlight3">
          <h2>Exclusive Content</h2>
          <p>Enjoy exclusive content and early access to upcoming releases. As a member of our gaming community, you'll get special perks and privileges.</p>
        </div>
      </div>
  
      <div class="cta-container">
        <p>Ready to embark on your gaming journey?</p>
        <button class="cta-button">Join Now</button>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Add styling specific to the info section */
  .info-section {
    background-color: var(--background);
    color: var(--text-color);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  }
  
  .info-section h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .info-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .highlights {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
  }
  
  .highlight-item {
    flex: 1;
    transition: transform 0.3s ease-in-out;
  }
  
  .highlight-item:hover {
    transform: scale(1.05);
  }
  
  .highlight1 {
    background-color: #ffcccb; /* Light Red */
  }
  
  .highlight2 {
    background-color: #cfe2ff; /* Light Blue */
  }
  
  .highlight3 {
    background-color: #ffd700; /* Gold */
  }
  
  .cta-container {
    text-align: center;
    margin-top: 2rem;
  }
  
  .cta-button {
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: darken(var(--primary-color), 10%);
  }
  </style>
  