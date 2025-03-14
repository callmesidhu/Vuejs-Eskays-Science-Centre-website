<template>
        <div class="loader-container">
          <img src="@/assets/Eskayslog.png" alt="Loading..." class="loader-logo" />
          <div class="loader-bar-container">
            <div class="loader-bar" :style="{ width: percentage + '%' }"></div>
          </div>
          <div class="loader-percentage">{{ percentage }}%</div>
        </div>
      </template>
      
      <script>
      export default {
        name: "Loader",
        data() {
          return {
            percentage: 0,
          };
        },
        mounted() {
          this.startLoading();
        },
        methods: {
          startLoading() {
            let interval = setInterval(() => {
              if (this.percentage < 100) {
                this.percentage += Math.floor(Math.random() * 10) + 1;
                if (this.percentage > 100) this.percentage = 100;
              } else {
                clearInterval(interval);
              }
            }, 120);
          },
        },
      };
      </script>
      
      <style scoped>
      .loader-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #000; /* Change if needed */
      }
      
      .loader-logo {
        width: 100px; /* Adjust size as needed */
        margin-bottom: 20px;
      }
      
      .loader-bar-container {
        width: 150px;
        height: 5px;
        background: rgba(255, 255, 255, 0.2);
        overflow: hidden;
        border-radius: 5px;
        position: relative;
      }
      
      .loader-bar {
        height: 100%;
        background: #fff;
        transition: width 0.2s ease-in-out;
      }
      
      .loader-percentage {
        margin-top: 10px;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
      }
      

      </style>
      