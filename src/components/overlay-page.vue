<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal">
      <div class="main-page">
        <div class="nav-bar">
          <h1>検査予約</h1>
            <div>
              <span @click="closePage" class="material-symbols-outlined">close</span>
            </div>
        </div>
        <div class="content">
          <formdata/>
          <information/>
        </div>
          <div class="footer">
          <button name="closeButton" class="btn" @click="closePage">閉じる</button>
          <button name="submitButton" class="btn" @click="register">予約登録</button>
        </div>
  </div>
    </div>
  </div>

</template>

<script>
import information from './infor-mation.vue';
import formdata from './form-data.vue';

export default {
  data() {
    return {
      isCloseButtonClicked: false
    }
  },
  components: {
    information,
    formdata,
  },
  props: ['showModal'],
  methods: {
    closePage() {
      this.isCloseButtonClicked = true
      this.$emit('CloseButtonClicked', this.isCloseButtonClicked)
    },
    register() {
      this.$store.commit('setMessage', 'asdasd');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
body {
  font-family: "Montserrat", sans-serif;
}
.main-page {
  width: 100%;
  height: 100%;
}
.nav-bar {
  display: flex;
  background-color: cornflowerblue;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 2px 12px;
  height: 50px;
}
.content {
  background-color: #ebebeb;
  display: flex;
  gap: 1%;
  align-items: center;
  padding: 15px;
}
.material-symbols-outlined{
  cursor: pointer;
}
.footer {
  background-color: white;
  height: 55px;
  display: flex;
  justify-content: center;
  gap: 95px;
  align-items: center;
}
.footer .btn {
  background-color: #2c7ebf;
  border: none;
  width: 250px;
  height: 40px;
  border-radius: 10px;
}

@media screen and (max-width: 1476px) {
  .modal{
   width: 1000px;

  }
  .nav-bar{
    width: 98%;
    padding:10px ;
  }
}
@media screen and (max-width: 993px) {
  .modal{
    width: 832px;
  }
}
</style>
