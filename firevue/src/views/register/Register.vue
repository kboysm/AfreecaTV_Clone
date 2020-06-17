<template>
  <div id="login">
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit()">
      <form id="dataForm">
        <h2>회원가입</h2>
        <ValidationProvider v-slot="{ errors }" name="id" rules="required|max:20|min:6">
          <v-text-field
            v-model="formData.id"
            :counter="20"
            :error-messages="errors"
            label="id"
            required
            :filled="true"
            :rounded="true"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="pwd" rules="required|min:10">
          <v-text-field
            v-model="formData.pwd"
            type="password"
            :error-messages="errors"
            label="password"
            :filled="true"
            :rounded="true"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="name" rules="required">
          <v-text-field
            v-model="formData.name"
            :error-messages="errors"
            label="name"
            :filled="true"
            :rounded="true"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="age" rules="required">
          <v-text-field
            v-model="formData.age"
            type="number"
            :error-messages="errors"
            label="age"
            :filled="true"
            :rounded="true"
            required
          ></v-text-field>
        </ValidationProvider>

        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { required, email, max, min } from "vee-validate/dist/rules"
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate"

setInteractionMode("eager")

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
})

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
})
extend("min", {
  ...min,
  message: "{_field_} may not be greater than {length} characters"
})

extend("email", {
  ...email,
  message: "Email must be valid"
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      formData: {
        id: "",
        pwd: "",
        age: 0,
        name: ""
      }
    }
  },
  methods: {
    async submit() {
      const valid = await this.$refs.observer.validate() // boolean형으로 validate를 통과 여부 확인
    },
    clear() {
      this.formData.name = ""
      this.formData.id = ""
      this.formData.age = 0
      this.formData.pwd = ""
      this.$refs.observer.reset()
    }
  }
}
</script>
<style scoped>
#login {
  /* background: #e2e1e0; */
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: require();
}
#dataForm {
  background: #fff;
  border-radius: 5px;
  width: 500px;
  height: 75vh;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  opacity: 0.8;
}

@media screen and (max-width: 768px) {
  #dataForm {
    width: 500px;
    height: 75vh;
  }
}
</style>
