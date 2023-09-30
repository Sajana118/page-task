<template>
<div class="data">
<div class="main">
  <h4>予約内容</h4>
</div>
<div class="number">
  <div class="date">
    <div class="link">
      <input type="datetime-local" class="inputField" v-model="formattedDate" placeholder="2023/12/18 (月) 11 : 00 〜">
      <p>  腹部エコー</p>
    </div>
    <div class="month">
      <router-link to="/overlaypage">変更</router-link>
    </div>
  </div>

  <div class="select">
    <p>枠数 </p>
    <div class="app">
      <div class="items">
        <select id="num" class="list">
          <option value="number">99</option>
          <option value="number">100</option>
          <option value="number">110</option>
          <option value="number">120</option>
        </select>
      </div>
      <div class="token">
        ※予約枠数の上限を
        <p>超過しています</p>
      </div>
    </div>
  </div>
</div>
<div class="time">
  <fieldset class="legend">
    <legend>検査特記事項</legend>
    <div class="components">
      <div class="info">
        <div class="start-time">
          時間/枠数
          <input type="text" class="formData" v-model="time" placeholder="17:30 終了厳守">
          <input type="text" class="button2" v-model="text" placeholder="枠超 ×">
        </div>
        <div class="start-time">
          内容/症状
          <input type="text" class="button2" v-model="number" placeholder="風邪 ×">
        </div>
      </div>

      <div class="end-time">
        <div class="start-time">
          初診/再診
          <input type="text" class="button3" v-model="integer" placeholder="初診 11:30 まで">
        </div>
        <div class="start-time">
          その他
          <input type="text" class="button4" v-model="value" placeholder="高校">
        </div>
      </div>
    </div>
  </fieldset>

</div>
<div class="text">
  <p>メモ</p>
  <button class="btn">8/23 10:00 内視鏡</button>
  <button class="btn">8/23 11:00 糖尿病代謝</button>
</div>
<div class="input">
  <input type="text" class="input-text" placeholder="メモや共有事項などを記載"/>
</div>
<div class="line">
</div>
<div class="selection">
  <div class="option">
    <div class="column">
      <label>予約方法</label>
    </div>
    <div class="column">
      <input v-model="radioValue" value="来院時" type="radio">
      <label>来院時</label>
    </div>
    <div class="column">
      <input v-model="radioValue" value="電話" type="radio">
      <label>電話</label>
    </div>
    <div class="column">
      <input v-model="radioValue" value="WEB" type="radio">
      <label>WEB</label>
    </div>
  </div>
  <div class="column-side">
    <p>登録者 中村 麻衣 2023/12/15 13:52</p>
  </div>
</div>
</div>
</template>
  <script>
  export default {
    data (){
      return{
        time:'',
        number:'',
        text:'',
        integer:'',
        value:'',
        radioValue:'',
        date: new Date()
      };
    },
    computed:{
      formattedDate() {
        if (this.date) {
          const year = this.date.getFullYear();
          const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
          const day = this.date.getDate().toString().padStart(2, '0');
          return `${year}/${month}/${day}`;
        }
        return '';
      },
    },
  };
  </script>
<style>
.data {
  background-color: #ffffff;
  box-shadow: black;
  display: flex;
  flex-direction: column;
  border-radius: 2%;
}
.main{
  padding: 0px 18px;
  font-size: 20px;
}
.date {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.number {
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding: 0 20px;
}
.number .date {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  background-color: white;
  width: 60%;
  border-radius: 15px;
  margin-bottom: 2%;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.25);
  padding: 0 15px;
}
.app {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.list {
  font-size: 1.2rem;
  background: none;
  border: 2px solid #de2626;
  border-radius: 6px;
}
.token {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ca2828;
  font-size: 0.8rem;
}
.time {
  padding: 0 20px;
}
.legend {
  border-radius: 10px;
  border: 2px solid #5e749b;
}
.formData{
  background-color: #41a2e1;
  color: white;
  width: 110px;
  border-radius: 4px;
  height: 28px;
  border: none;
  font-size: 1.2rem ;
}
.button2{
  background-color: #41a2e1;
  color: white;
  width: 57px;
  border-radius: 4px;
  height: 30px;
  border: none;
  font-size: 1.2rem;
}
.button3{
  background-color: #41a2e1;
  color: white;
  width: 130px;
  border-radius: 4px;
  height: 30px;
  border: none;
  font-size: 1.2rem;
}
.button4{
  background-color: #41a2e1;
  color: white;
  width: 57px;
  border-radius: 4px;
  height: 30px;
  border: none;
  font-size: 1.2rem;
}
.components {
  padding-left: 20px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.start-time {
  height: 78px;
  width: 387px;
}
.start-time {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 40px;
}
.time-btn {
  background-color: #3753b1;
  color: white;
  border-radius: 4px;
  height: 30px;
  border: none;
}

.text {
  display: flex;
  height: 70px;
  align-items: center;
  padding-left: 90px;
  gap: 15px;
  font-size: 1rem;
}
.text .btn {
  border: none;
  background-color: #5091c7;
  height: 38px;
  width: 180px;
  border-radius: 7px;
  font-size: 15px;
  color: white;
}
.input {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding: 0 20px;
}
.input .input-text {
  height: 60px;
  width: 480px;
  border-radius: 10px;
  border-color: #cbcbbe;
  font-size: 1rem;
}
.line {
  background-color: darkgray;
  height: 1px;
}
.selection {
  display: flex;
  align-items: center;
  padding: 0px;
}
.option {
  display: flex;
  gap: 17px;
  padding-left: 32px;
  align-items: center;
}
.column {
  display: flex;
  gap: 15px;
  width: 100px;
  padding-left: 10px;
}
.inputField{
  border: none;
  font-size: 19px;
  width: 240px;
  height: 33px;
}
.end-time {
  height: 78px;
  width: 387px;
  align-items: center;
}

@media screen and (max-width: 1476px) {
.data{
  width: 60%;
}
  .selection{
    width: 100%
  }
  .option{
    gap: 1%;
    width: 410px;
  }
  .legend{
  }
  .components{
    width: 8px;
  }
  .formData{
    width: 70px;
    font-size: 12px;
  }
  .start-time{
    width: 250px;
    font-size: 15px;
  }
  .button2{
    width: 40px;
    font-size: 12px;
  }
  .button3{
    width: 90px;
    font-size: 12px;
  }
  .button4{
    width: 45px;
    height: 29px;
    font-size: 12px;
  }
}@media screen and (max-width: 993px) {
.data{
  width: 563px;
}
  .number .date{
    height: 90px;
    font-size: 12px;
  }
  .inputField{
    font-size: 14px;
  }
  .token{
    font-size: 9px;
  }
  .select{
      bottom: 10px;
  }
  .text .btn{
    height: 30px;
    font-size: 13px;
    width: 143px;
  }
  .input {
    width: 369px;
    padding-left: 121px;
  }
  .option{
    width: 294px;
    font-size: 10px ;
  }
  .column-side{
    font-size: 12px;
  }
  .column{
    display: flex;
    gap: 10px;

  }
}

</style>