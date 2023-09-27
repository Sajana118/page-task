<template>
<div class="test">
  <div class="modal-overlay" v-if="showModal">
    <div class="modal">
      <div class="main-page">
        <div class="nav-bar">
          <h1>検査予約</h1>
        </div>
        <div class="content">
          <div class="data">
            <div class="main">
              <h4>予約内容</h4>
            </div>
            <div class="number">
              <div class="date">
                <div class="link">
                  <p>2023/12/18 (月) 11 : 00 〜
                  </p>
                  <p>  腹部エコー</p>
                </div>
                <div class="month">
                  <a href="">変更</a>
                </div>
              </div>

              <div class="select">
                <p>枠数 </p>
                <div class="app">
                  <div class="items">
                    <select id="num" class="list">
                      <option value="volvo">99</option>
                      <option value="saab">100</option>
                      <option value="fiat">110</option>
                      <option value="audi">120</option>
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
                      <button class="time-btn">17:30 終了厳守</button>
                      <button class="time-btn">枠超 ×</button>
                    </div>
                    <div class="start-time">
                      内容/症状
                      <button class="time-btn">風邪 ×</button>
                    </div>
                  </div>

                  <div class="end-time">
                    <div class="start-time">
                      初診/再診
                      <button class="time-btn">初診 11:30 まで</button>
                    </div>
                    <div class="start-time">
                      その他
                      <button class="time-btn">高校</button>
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
                  <input type="radio">
                  <label>来院時</label>
                </div>
                <div class="column">
                  <input type="radio">
                  <label>電話</label>
                </div>
                <div class="column">
                  <input type="radio">
                  <label>WEB</label>
                </div>
              </div>
              <div class="column-side">
                <p>登録者 中村 麻衣 2023/12/15 13:52</p>
              </div>
            </div>
          </div>
          <div class="information">
            <div class="custom">
              <div class="head">
                <h2>患者情報</h2></div>
              <div class="button">
                <button class="click-btn">患者検索</button>
              </div>
            </div>
            <div class="car-info">
              <div class="car-id">
                <p class="customer">カルテID</p>
                <p class="number">123456</p>
              </div>
              <div class="car-id">
                <p class="customer">フリガナ</p>
                <a href="">スズキ タロウ</a>
              </div>
            </div>
            <div class="contact-info">
              <div class="contact-list">
                <p class="customer">連絡先 (ハイフンなし)</p>
                <p class="number">08011112222</p>
              </div>
              <div class="contact-list">
                <p class="customer">生年月日</p>
                <p class="number">1980/01/01</p>
              </div>
              <div class="age">
                <p>43歳</p>
              </div>
            </div>
            <div class="patient-notes">
              <p>患者メモ</p>
              <div class="notes">
                <p>特徴：少し話が長め、接し方注意</p>

                <p>枠数：要２枠</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <button class="btn">閉じる</button>
          <button class="btn">予約登録</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
export default  {
  props: ['showModal'],
  name:'reservation-page',
  data(){
    return{

    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
}

</script>

<style>
body{
  font-family: 'Montserrat', sans-serif;
}
.main-page{
  width: 100px;

}
.nav-bar {
  display: flex;
  background-color: cornflowerblue;
  color: white;;
  padding: 13px;
  height: 61px;
  width: 10px;
}
.content{
  background-color: #ebebeb;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 16px;
}
.data{
  background-color: #ffffff;
  width: 1100px;
  height:740px;
  box-shadow: black;
  display: flex;
  flex-direction: column;
  border-radius:10px ;
}
.number{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 29px;
}
.number .date{
  font-size: 20px;
  background-color: white;
  height: 95px ;
  width:500px;
  font-weight: 700;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow:0px 4px 8px 3px rgba(0,0,0,0.25);
  padding-left: 15px;
}
.time{
  padding: 10px;
}
.legend{
  border-radius: 10px;
  border: 2px solid #5e749b;
  height: 150px;
}
.components{
  padding-left: 20px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.start-time{
  height: 78px;
  width: 387px;
}
.end-time{
  height: 78px;
  width: 387px;
  align-items: center;
}
.information{
  background-color: white;
  border-radius: 10px;
  width: 650px;
  height: 740px;
}
.footer{
  background-color: white;
  height: 120px;
  display: flex;
  justify-content: center;
  gap: 95px;
  align-items: center;
}
.footer .btn{
  border: none;
  background-color:cornflowerblue;
  width: 300px;
  height: 50px;
  border-radius: 10px;
}
.text{
  display: flex;
  height: 70px;
  align-items: center;
  padding-left: 130px;
  gap: 15px;
  font-size: 21px;
}
.text .btn{
  border: none;
  background-color: #5091c7;
  height: 38px;
  width: 180px;
  border-radius: 7px;
  font-size: 15px ;
  color: white;
}
.input{
  display: flex;
  justify-content: center;
  padding-left: 160px;
  height: 120px;
}
.input .input-text{
  height: 100px;
  width: 800px;
  border-radius: 10px;
  border-color: #cbcbbe;
  font-size: 20px;
}
.line{
  background-color: darkgray;
  height: 1px;
}
.selection{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  gap:90px;
}
.column{
  display: flex;
  gap:15px;
  width: 100px;
  padding-left: 10px;
}
.select{
  padding: 10px;
  width: 350px;
  height: 88px;
}
.option {
  display: flex;
  gap: 17px;
  padding-left: 32px;
  align-items: center;
}
.main{
  display: flex;
  padding-left: 10px;
  align-items: center;
  font-size: 24px;
}
.custom{
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
}
.button .click-btn{
  background: none;
  height: 40px;
  width: 100px;
  border: 2px solid cornflowerblue;
  color: cornflowerblue;
  border-radius: 6px;
}
.car-id{
  padding-left: 20px;
}
.car-info{
  display: flex;
  flex-direction: column;
  gap: 10px;

}
.app{
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.token{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ca2828;
  font-size: 16px;


}
.start-time{
  display: flex;
  gap:4px;
  align-items: center;
  height: 40px
}
.time-btn{
  background-color: #3753b1;
  color: white;
  border-radius: 4px;
  height: 30px;
  border: none;
}
.list {
  font-size: 25px;
  width: 63px;
  height: 40px;
  background: none;
  border: 2px solid #de2626;
  border-radius: 6px;
}
.date{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  padding: 20px;
}
.contact-info{
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
}
.contact-list{
  color: #484242;
  font-size: 20px;
}
.patient-notes{
  padding: 30px;
  font-size: 20px;
}
.notes{
  border-radius: 10px;
  border: 2px solid #5e749b;
  height: 150px;
  padding-left: 10px;
}

</style>
