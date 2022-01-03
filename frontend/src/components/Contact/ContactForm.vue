<template>
<div class="contactForm">
<div class="alertBox" v-if="state.success === 'erro'">
  <h2>Erro no envio do email!</h2>
  <span>Aguarde um momento ou entre em contato com <a href="mailto:augustosigolo@gmail.com">
  augustosigolo@gmail.com
  </a></span>
</div>
<div class="alertBox" v-if="state.success === 'sucesso'">
  <span>Obrigado por entrar em contato! Responderei o mais rápido possível.</span>
</div>
<div class="form" v-if="state.success === 'inicial'">
<label for="User Name">Qual o seu nome?</label>
<div class="inputBackground">
<input type="text" name="userName" placeholder="José Silva" v-model="state.userName"/>
</div>
<label for="Email">Para qual email você quer que eu responda?</label>
<div class="inputBackground">
<input
type="email"
name="userEmail"
placeholder="josesilve@gmail.com"
v-model="state.userEmail"
/>
</div>
<label for="mensagem">Mensagem</label>
<div class="inputBackground">
<textarea name="message" id="mensagem" cols="30" rows="5" v-model="state.message">
</textarea>
</div>
<div class="backgroundButton">
<input type="submit" value="Enviar" @click="sendEmail()" class="submitButton">
</div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const instance = axios.create({
  baseURL: 'https://api.emailjs.com/api/v1.0/email',
});

export default {
  setup() {
    const state = reactive({
      userName: '',
      userEmail: '',
      message: '',
      success: 'inicial',
    });

    async function sendEmail() {
      try {
        await instance.post('/send', {
          service_id: process.env.VUE_APP_EMAIL_SERVICE_ID,
          template_id: process.env.VUE_APP_EMAIL_TEMPLATE_ID,
          user_id: process.env.VUE_APP_EMAIL_USER_ID,
          template_params: {
            userName: state.userName,
            userEmail: state.userEmail,
            message: state.message,
          },
        });
        state.success = 'sucesso';
      } catch (error) {
        state.success = 'erro';
      }
    }

    return {
      state,
      sendEmail,
    };
  },
};
</script>

<style>
.contactForm{
display: flex;
         flex-direction: column;
         justify-content: center;
         align-content: center;
}

.form{
  margin-left: 50px;
  margin-right: 50px;
display: flex;
         flex-direction: column;
         justify-content: center;
         align-content: center;
         text-align: left;
         font-family: 'Roboto' sans-serif;
         font-weight: 500;
}

label{
color: #2B9B3F;
       font-size: 15px;
       margin-bottom: 5px;
       font-family: 'Roboto' sans-serif;
       font-weight: 600;

}

.inputBackground{
background: #925F98;
position: static;
          margin-bottom: 5px;
          margin-top: 5px;
}

input{
  font-size: 15px;
border: none;
width: 100%;
background: #420149;
padding: 5px;
position: relative;
left: 5px;
color: #00FF2E;
bottom: 5px;
        font-family: 'Roboto' sans-serif;
        font-weight: 500;

}

input::placeholder{
  color: #2B9B3F;
  font-weight: 300;
}

input:focus{
left: 0px;
bottom: 0px;
outline: none;
border: #ED49FF 3px double;

      }

textarea{
  margin-bottom: -5px !important;
width: 100%;
position: relative;
left: 5px;
bottom: 5px;
background: #420149;
color: #00FF2E;
resize: none;
padding: 5px;
border: none;
        font-family: 'Roboto' sans-serif;
        font-weight: 500;

}

textarea:focus{
left: 0;
bottom: 0;
outline: none;
border: #ED49FF 3px double;
         }

.backgroundButton{
background: #00FF2E;
position: static;
          margin-top: 10px;
cursor: pointer;
}

.submitButton{
background: #2B9B3F;
border: none;
        border-radius: 0;
width: 100%;
position: relative;
left: 5px;
bottom: 5px;
        margin-bottom: 0 !important;
cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
color: #420149;
}

.alertBox span{
  color: #00FF2E;
  }
</style>
