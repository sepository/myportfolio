<template>
  <div class="container">
    <p class="page-title">Matsuki, Noriyuki's Portfolio</p>

    <b-card align="left" class="mx-auto" style="max-width: 720px" no-body>
      <b-card-header header-class="text-center">自己紹介</b-card-header>
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img :src="usachanImage" class="usachan"></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-text class="p-2">
            　はじめまして、松木憲之と申します。<br/>
            　前職ではシステムエンジニアとして、業務パッケージソフトの開発やカスタマイズ案件を担当していました。<br/>
            　要件定義(Fit&Gap)、基本／詳細設計、開発、テスト等上流から下流まで関わってきました。<br/>
            　特に開発が好きなのですが、ユーザの業務知識が技術よりも優先される傾向が強かった前職では性格が合わないと感じ退職しました。<br/>
            　現在はWeb系エンジニアを目指し、勉強中且つ求職中です。
          </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import UsachanImage from '@/assets/usachan-2020-08-10.jpg'
export default {
  data() {
    return {
      usachanImage: UsachanImage
    };
  }
}
</script>

<style scoped>
  .usachan {
    border-bottom-right-radius: 0%;
    border-top-left-radius: 0%;
    border-top-right-radius: 0%;
  }
  p {
    line-height: 150%;
  }
</style>