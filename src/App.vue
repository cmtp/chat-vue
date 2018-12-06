<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}
.flex-container {
  display: flex;
}
.flex-align-right {
  justify-content: flex-end;
}
.flex-space-between {
  justify-content: space-between;
}
</style>
