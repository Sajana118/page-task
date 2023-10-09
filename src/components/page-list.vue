<template>
  <div class="application">
    <div class="iconBar">
      <div class="double_arrow">
        <span @click="hideButton" class="material-symbols-outlined">double_arrow</span>
      </div>
      <div class="current">
        <button @click="close">※ 指定中</button>
      </div>
      <div class="searchBtn">
        <span class="material-symbols-outlined">
search
</span>
        <select class="id">
          <option>スズキ タロウ</option>
          <option>スズキ タロウ</option>
          <option>スズキ タロウ</option>
          <option>スズキ タロウ</option>
        </select>
      </div>
    </div>
    <div v-if="showContent" class="body">
      <div class="contact-side">
        <div class="list">
          <h4>スズキ タロウ</h4>
          <p>ID：12345678</p>
        </div>
        <div class="list">
          <p><span class="material-symbols-outlined">call</span>08024879087</p>
          <p>1980/01/01 43歳</p>
        </div>
      </div>
      <div class="patient-note">
        <p>患者メモ</p>
        <button @click="close">保存</button>
      </div>
      <div class="notes">
        <p>特徴：少し話が長め、接し方注意</p>
          <p>枠数：要２枠</p>
         <p> 11/23保険証忘れ、次回持参確認</p>
      </div>
      <div class="reservation">
        <p>過去予約 (123件)</p>
        <p>過去予約 (123件)</p>
      </div>
      <div class="input">
        <div class="info firstIcon">
          <p>2023/11/23 (金) 11:00 </p>
          <div class="link">
            <router-link to="page-list">糖尿病代謝内科 </router-link>
            <router-link to="page-list">門前 一郎</router-link>
          </div>
          <p class="text">採尿</p>
          <span class="material-symbols-outlined infoIcon">info</span>
        </div>

        <div class="info detail">
          <p>2023/11/23 (金) 10:00 </p>
          <router-link to="page-list">腹部エコー</router-link>
          <p class="text">空腹来院伝え済み</p>
          <button class="btn">詳細</button>
        </div>

        <div class="info fullExpand" >
          <p>2023/11/23 (金) 09:00 </p>
          <div class="link">
            <router-link to="page-list">消化器内科</router-link>
            <router-link to="page-list">木村一郎</router-link>
          </div>
          <p class="text">採尿</p>
          <span class="material-symbols-outlined zoom">pan_zoom</span>
        </div>

        <div class="info newBtn">
          <p> 2023/10/27 (木) 11:00 </p>
          <div class="link">
            <router-link to="page-list">消化器内科 </router-link>
              <router-link to="page-list">木村 一郎</router-link>
          </div>
          <p class="text">2023/11/23 (金) 09:00 結果説明</p>
          <button class="new">詳細</button>
        </div>

        <div class="info sales">
          <p>2023/10/02 (木) 11:00  </p>
          <div class="link">
            <router-link to="page-list">皮膚科 </router-link>
              <router-link to="page-list">松下 俊</router-link>
          </div>
          <p class="text">半年ぶりの接種</p>
            <button class="basic">狂犬病</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      showContent:false,
    };
  },
  methods:{
    hideButton(){
      this.showContent=!this.showContent
    },
    close(){
     this. showContent=false
    }
  }
}
</script>
<style>
.application{
  display: flex;
  flex-direction: column;
  width:40%;
  padding: 20px;
  margin: auto;

}
.iconBar{
  display: flex;
  flex-direction: row;
  gap: 6%;
  align-items: center;
  height: 40px;
  padding: 20px;
}
.double_arrow{
  background-color: #d9d9d9;
  width: 5%;
  border-radius: 5px;
  height: 33px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.current button{
  background-color: #25357d;
  color: #ffffff;
  width: 120%;
  height: 31px;
  border-radius: 3px;
  border:none;
  cursor: pointer;
}
.searchBtn{
  background-color: white;
  border: 2px solid#343463;
  height: 44px;
  width: 31%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 36px;
  padding: 4px;
  cursor: pointer;
}
.id{
  background-color: white;
  border: none;
  height: 44px;
  width: 61%;
  border-radius: 10px;

}
.body{
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow:  0px 2px 6px 0px rgba(0,0,0,0.5);
}
.contact-side{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.list{
  font-size: 1.15rem;
}
.list p{
  display: flex;
  align-items: center;
}
.patient-note{
  display: flex;
  gap: 4%;
  font-size: 1.15rem;
  align-items: center;
}
.patient-note button{
  color: #ffffff;
  width: 11%;
  background: cornflowerblue;
  border: none;
  border-radius: 10px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
}
.notes{
  padding: 12px;
  border: 2px solid grey;
  height: 121px;
  border-radius: 7px;
}
.reservation{
  display: flex;
  height: 100px;
  font-size: 1.25rem;
}
.reservation p{
  display: flex;
  margin: auto;
}
.info{
  padding: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.5);
  font-size: 1rem;
}
.input{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.firstIcon{
  position: relative;
}
.infoIcon{
  position: absolute;
  right: 2px;
  top:2px;
  font-size: 46px;
}
.detail{
  position: relative;
}
.btn{
  position: absolute;
  right: 12px;
  top: 16px;
  font-size: 17px;
  height: 34px;
  border-radius: 7px;
  background-color: #4da9f6;
  border: none;
  color: #ffffff;
  cursor: pointer;
}
.fullExpand{
  position: relative;
}
.zoom{
  position: absolute;
  right: 2px;
  top:2px;
  font-size: 46px;
}
.link{
  display: flex;
  gap: 15px;
}
.newBtn{
  position: relative;
}
.new{
  position: absolute;
  right: 12px;
  top: 16px;
  font-size: 17px;
  height: 34px;
  border-radius: 7px;
  background-color: #ffffff;
  border:1px solid #4da9f6;
  color: #4da9f6;
}
.sales{
  position: relative;
}
.basic{
  position: absolute;
  top:63px;
  left: 149px;
  width: 12%;
  font-size: 14px;
  background-color: #97ceff;
  border: 2px solid #5151ff;
  height: 38px;
  border-radius: 5px;
}
.text {
  color: grey;
}
.list p{
  color: grey;
}
</style>
