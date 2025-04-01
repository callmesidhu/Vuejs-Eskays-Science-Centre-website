<template>
        <div class="container flex-1 w-full ">
          <div class="justify-center flex lg:flex-row flex-col items-center mb-8">
            <img
              src="/favicon.ico"
              alt="Logo"
              class="h-16 w-16"
            />
            <h1 class="title">Eskaysio Talent Search Exam Results</h1>
          </div>
      
          <!-- Input Fields -->
          <div class="input-container lg:mx-80 mx-auto">
            <input 
              v-model="regNum" 
              placeholder="Enter Registration Number" 
              class="input-field"
            />
            <input 
              v-model="phone" 
              placeholder="Enter Phone Number" 
              class="input-field"
            />
            <button @click="fetchResults" class="search-btn">Search</button>
          </div>
      
          <!-- Display Results -->
          <div v-if="student" class="result-card lg:mx-80 mx-auto mt-8">
            <h2 class="student-name">{{ student.name }}</h2>
            <div class="result-details">
              <div class="detail-item">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">{{ student.phone }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">School:</span>
                <span class="detail-value">{{ student.school_name }}</span>
              </div>
              <!-- Conditionally render Rank -->
              <div class="detail-item" v-if="student.rank">
                <span class="detail-label">Rank:</span>
                <span class="detail-value">{{ student.rank }}</span>
              </div>
              <!-- Conditionally render Percentile -->
              <div class="detail-item" v-if="student.percentile">
                <span class="detail-label">Percentile:</span>
                <span class="detail-value">{{ student.percentile }}</span>
              </div>
              <!-- Conditionally render Marks -->
              <div class="detail-item" v-if="student.marks">
                <span class="detail-label">Marks:</span>
                <span class="detail-value">{{ student.marks }}</span>
              </div>
              <!-- Conditionally render Benefits -->
              <div class="detail-item" v-if="student.benefits">
                <span class="detail-label">Benefits:</span>
                <span class="detail-value">{{ student.benefits }}</span>
              </div>
              <!-- Conditionally render Remarks -->
              <div class="detail-item" v-if="student.remarks">
                <span class="detail-label">Remarks:</span>
                <span class="detail-value">{{ student.remarks }}</span>
              </div>
            </div>
          </div>
      
          <p v-else-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
      </template>
      
      <script lang="ts">
      import { defineComponent, ref } from "vue";
      import axios from "axios";
      
      export default defineComponent({
        name: "ResultPage",
        setup() {
          const regNum = ref("");
          const phone = ref("");
          const student = ref<any>(null);
          const errorMessage = ref("");
      
          const fetchResults = async () => {
            if (!regNum.value || !phone.value) {
              errorMessage.value = "Please enter both Registration Number and Phone Number.";
              return;
            }
      
            const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
            const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
            const RANGE = "Sheet1!A2:I";
      
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      
            try {
              const response = await axios.get(url);
              const rows = response.data.values;
      
              // Ensure proper column mapping based on your Google Sheets header:
              // 0: reg_num, 1: name, 2: phone, 3: school_name, 4: rank, 5: percentile, 6: benefits, 7: marks, 8: remarks
              const result = rows.find(row => row[0] === regNum.value && row[2] === phone.value);
      
              if (result) {
                student.value = {
                  name: result[1],
                  phone: result[2],
                  school_name: result[3],
                  rank: result[4],
                  percentile: result[5],
                  benefits: result[6],
                  marks: result[7],
                  remarks: result[8],
                };
                errorMessage.value = "";
              } else {
                student.value = null;
                errorMessage.value = "No results found for the provided details.";
              }
            } catch (error) {
              console.error("Error fetching data:", error);
              errorMessage.value = "Failed to fetch data. Try again later.";
            }
          };
      
          return { regNum, phone, student, errorMessage, fetchResults };
        }
      });
      </script>
      
      <style scoped>
      .container {
        margin: 0 auto;
        padding: 2rem;
        background-color: #000;
        min-height: 100vh;
        color: #ffffff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      
      .title {
        color: #ff3333;
        text-align: center;
        font-size: 2.2rem;
        text-shadow: 0 2px 4px rgba(255, 51, 51, 0.3);
        margin: 1rem;
      }
      
      .input-container {
        background-color: #111;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      }
      
      .input-field {
        width: 100%;
        padding: 12px 15px;
        margin-bottom: 1rem;
        border: 1px solid #333;
        border-radius: 4px;
        background-color: #2d2d2d;
        color: #ffffff;
        font-size: 1rem;
        transition: border-color 0.3s;
      }
      
      .input-field:focus {
        outline: none;
        border-color: #ff3333;
      }
      
      .search-btn {
        width: 100%;
        padding: 12px;
        background-color: #ff3333;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      
      .search-btn:hover {
        background-color: #ff1a1a;
      }
      
      .result-card {
        background-color: #1e1e1e;
        border-radius: 8px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      }
      
      .student-name {
        color: #ff3333;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
      }
      
      .result-details {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .detail-item {
        display: flex;
        justify-content: space-between;
        padding: 0.8rem 0;
        border-bottom: 1px solid #333;
      }
      
      .detail-label {
        font-weight: bold;
        color: #aaa;
      }
      
      .detail-value {
        color: #ffffff;
        text-align: right;
      }
      
      .error-message {
        color: #ff3333;
        text-align: center;
        margin-top: 1rem;
        padding: 1rem;
        background-color: #1e1e1e;
        border-radius: 4px;
      }
      
      @media (min-width: 768px) {
        .input-container {
          padding: 2rem 3rem;
        }
      }
      </style>
      