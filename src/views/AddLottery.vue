<template>
  <div class="add-lottery">
    <h1>เพิ่มล็อตเตอร์รี่</h1>
    <b-tabs v-model="activeTab">
      <b-tab-item label="กรอกเอง">
        <section>
          <b-field label="เลขล็อตเตอร์รี่">
            <b-input v-model="number"></b-input>
          </b-field>

          <b-field label="เลขงวด">
            <b-input v-model="period"></b-input>
          </b-field>

          <b-field label="serial number">
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
    };
  },
  watch: {
    file() {
      setTimeout(() => {
        this.$toast.open({
          message: 'ระบบของเราทำการเพิ่มล็อตเตอร์รี่ให้แล้วจ้าาา',
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
          message: 'บันทึกล็อตเตอร์รี่สำเร็จแล้วจ้าาาา',
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
}
</style>
