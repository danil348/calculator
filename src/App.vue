<template>
    <div class="container">
      <CalculatorBody />
    </div>
</template>

<script>
import CalculatorBody from '@/components/CalculatorBody.vue'

export default {
  name: 'App',
  components: {
    CalculatorBody
  }
}
</script>

<style lang="scss">
@import url(./style/null.scss);
#app {
  min-height: 100vh;
  flex: 1 1 auto;
  background: rgb(20, 20, 20);
  //background: radial-gradient(circle, rgb(255, 255, 255) 20%, rgb(0, 0, 0) 100%);
  justify-content: center;
    display: flex;
    position: relative;
    flex-direction: column;
    &::before{
      content: "";
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: #161616ce;
      -webkit-backdrop-filter: blur(31px);
      backdrop-filter: blur(31px);
    }
}
.container {
  padding: 40px;
  z-index: 12;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
	margin: 0 auto;
	@media (max-width: $md1 + px) {
		max-width: 970px;
	}
	@media (max-width: $md2 + px) {
		max-width: 750px;
	}
	@media (max-width: $md3 + px) {
		max-width: none;
		padding: 20px 10px;
	}
  @media (max-width: 500px){
		flex-direction: column;
	}
}
</style>
