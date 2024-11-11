<template>
  <div class="page-container">
    <div> 
      page
    </div>
    <div>
      demo
    </div>
  </div>
</template>

<script>
export default {
  name:'indexPage', 
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.page-container{
  border:1px solid;
  >div{
    border:1px solid red;
  }
}
</style>