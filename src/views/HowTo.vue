<template>
  <div class="how-to">
    <h1>How To</h1>
    <ol>
      <li>Prepare the steaks</li>
      <li>Preheat your pan</li>
      <li>Cook to your liking</li>
      <li>Rest your steaks</li>
      <li>Eat!</li>
    </ol>
  </div>
</template>

<script>

export default {
  name: 'HowTo',
};
</script>

<style lang="scss" scoped>
.how-to {
  margin: 20px;

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  }

  ol {
    margin-left: 50px;
  }
}
</style>
