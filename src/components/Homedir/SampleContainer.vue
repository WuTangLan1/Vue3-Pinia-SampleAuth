<template>
    <div class="sample-container">
      This should be centered
    </div>
  </template>
  
  <script>
  export default {
    name: 'SampleContainer',
  }
  </script>
  
  <style scoped>
  .sample-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    width: 300px;
    height: 100px;
    margin: 0 auto;
    color: black;
    background-color: #f0f0f0; /* Light grey background to ensure the text is readable */
  }
  </style>
  