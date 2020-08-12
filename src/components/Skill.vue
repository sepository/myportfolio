<template>
  <div class="container">
    <div class="row mx-auto">
      <SkillTable title="開発言語" file="languages"></SkillTable>
      <SkillTable title="ミドルウェア" file="middlewares"></SkillTable>
    </div>
  </div>
</template>

<script>
import SkillTable from '@/components/SkillTable'

export default {
  components: {
    SkillTable
  }
}
</script>

<style scoped>
  .row {
    margin-top: 30px;
  }
</style>