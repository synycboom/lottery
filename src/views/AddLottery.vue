<template>
  <div class="add-lottery">
    <h1>เพิ่มสลากกินแบ่งรัฐบาล</h1>
    <b-tabs v-model="activeTab">
      <b-tab-item label="กรอกเอง">
        <section>
          <b-field label="เลขสลากกินแบ่งรัฐบาล">
            <b-input v-model="number"></b-input>
          </b-field>

          <b-field label="งวดที่">
            <b-input v-model="period"></b-input>
          </b-field>

          <b-field label="ชุดที่">
            <b-input v-model="setNumber"></b-input>
          </b-field>

          <b-field label="Serial Number">
            <b-input v-model="serial"></b-input>
          </b-field>

          <a
            :class="[
              'button',
              'is-primary',
              {
                'is-loading': isLoading,
              }
            ]"
            @click="addLottery"
          >
              บันทึก
          </a>
        </section>
      </b-tab-item>

      <b-tab-item label="ใช้ภาพถ่าย">
        <b-field class="file">
          <b-upload v-model="file">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>อัพโหลดไฟล์</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="file">
            {{ file.name }}
          </span>
        </b-field>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import { addLottery } from '@/services/lotteryService';

export default {
  name: 'AddLottery',
  data() {
    return {
      isLoading: false,
      activeTab: 0,
      file: null,
      number: '',
      period: '',
      serial: '',
      setNumber: '',
    };
  },
  watch: {
    file() {
      setTimeout(() => {
        this.$toast.open({
          message: 'ระบบของเราทำการเพิ่มสลากกินแบ่งรัฐบาลให้แล้วจ้าาา',
          type: 'is-success',
        });
      }, 1000);
    },
  },
  methods: {
    async addLottery() {
      this.isLoading = true;

      try {
        await addLottery();
        this.$toast.open({
          message: 'บันทึกสลากกินแบ่งรัฐบาลสำเร็จแล้วจ้าาาา',
          type: 'is-success',
        });
      } catch (error) {
        this.$toast.open({
          message: 'เกิดปัญหาจ้าาาาา',
          type: 'is-danger',
        });
      }

      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-lottery {
  margin: 20px;
}

h1 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
</style>
