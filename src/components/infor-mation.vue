<template>
  <div class="information">
    <div class="custom">
      <div class="head">
        <h2>患者情報</h2></div>
      <div class="button">
        <button class="click-btn" @click="closed">患者検索</button>
      </div>
    </div>
    <div class="medicalReport">
      <div class="reportNumber">
        <p class="customer">カルテID</p>
        <input type="text" class="numberField" v-model="message" placeholder="12345678">
      </div>
      <div class="reportNumber">
        <p class="customer">フリガナ</p>
        <router-link to="/overlaypage">スズキ タロウ</router-link>
      </div>
    </div>
    <div class="contact-info">
      <div class="contact-list">
        <p class="customer">連絡先 (ハイフンなし)</p>
        <input type="text" class="formField" v-model="contact" placeholder="08011112222">
      </div>
      <div class="contact-list">
        <p class="customer">生年月日</p>
        <input type="date" class="formField" v-model="date" placeholder="1980/01/01">
      </div>
      <div class="age">
        <p>43歳</p>
      </div>
    </div>
    <div class="patient-notes">
      <p>患者メモ</p>
      <div class="suggestionBox">
        <input type="text" class="text" placeholder="特徴：少し話が長め、接し方注意 枠数：要２枠"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:'',
      contact:'',
      date:'',
    }
  }

}
</script>
<style>
.information {
  background-color: white;
  border-radius: 10px;
  height: 500px;
  width: 38%;
}
.custom {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
}

.button .click-btn {
  background: none;
  height: 40px;
  width: 100px;
  border: 2px solid cornflowerblue;
  color: cornflowerblue;
  border-radius: 6px;
}
.reportNumber{
  padding-left: 20px;
}
.medicalReport {
  display: flex;
  flex-direction: column;
}
.contact-info {
  display: flex;
  flex-direction: row;
  padding: 5px 15px;
  justify-content: space-between;
  align-items: center;
}
.contact-list {
  color: #484242;
  font-size: 15px;
}

.patient-notes {
  padding: 10px;
  font-size: 0.9rem;
}
.suggestionBox {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding: 0 20px;

}
.suggestionBox .text {
  height: 100px;
  width: 480px;
  border-radius: 10px;
  border-color: #cbcbbe;
  font-size: 1rem;
  padding: 0px 10px;
}
.numberField{
  border: none;
  font-size: 20px;
}
.formField{
  border: none;
  font-size: 16px;
}

.notes p {
  margin: 0;
}
</style>
