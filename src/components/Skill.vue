<template>
  <div class="container">
    <h1>Skills</h1>
    <div class="row mx-auto">
      <SkillTable title="開発言語" file="languages" @show="showComment"></SkillTable>
      <SkillTable title="データベース" file="databases" @show="showComment"></SkillTable>
    </div>

    <b-modal :id="commentModal.id" :title="commentModal.title" ok-only centered @hide="resetCommentModal">
      {{ this.commentModal.comment }}
    </b-modal>
  </div>
</template>

<script>
import SkillTable from '@/components/SkillTable'

export default {
  data() {
    return {
      commentModal: {
        id: 'comment-modal',
        title: '',
        comment: ''
      }
    }
  },
  components: {
    SkillTable
  },
  methods: {
    showComment: function(title, comment, button) {
      this.commentModal.title = title
      this.commentModal.comment = comment
      this.$root.$emit('bv::show::modal', this.commentModal.id, button)
    },
    resetCommentModal: function() {
      this.commentModal.title = ''
      this.commentModal.comment = ''
    }
  }
}
</script>

<style scoped>
  .row {
    margin-top: 30px;
  }
</style>