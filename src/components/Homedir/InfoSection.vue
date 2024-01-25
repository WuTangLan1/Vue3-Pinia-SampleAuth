<template>
    <section class="info-section">
      <h1 class="section-heading">Welcome to Our Gaming World!</h1>
      <p class="section-description">
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

  
      <div class="divider"></div>
    </section>
  </template>
  
  <style scoped>
  /* Add styling specific to the info section */
  .info-section {
    background: linear-gradient(to right, #fdadf9, #f147e9); /* Gradient background */
    color: var(--text-color);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Subtle box shadow */
    margin-top: 2rem;
    text-align: center;
  }
  
  .section-heading {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .section-description {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .highlights {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .highlight-item {
    flex: 1;
    transition: transform 0.3s ease-in-out;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); /* Subtle box shadow */
    padding: 1.5rem;
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
    background-color: #f1d950; /* Gold */
  }
  
  .cta-container {
    text-align: center;
    margin-top: 2rem;
  }
  
  
  .divider {
    height: 2px;
    background-color: rgba(255, 255, 255, 0.7); /* White with opacity */
    margin: 2rem 0;
  }
  </style>
  