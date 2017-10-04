<template>
  <div>
    <transition name="component-fade" mode="out-in">
        <router-view>
     
        </router-view>
    </transition>

  </div>

</template>

<script>


export default {
  
}

</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  html{
    background: #f1f1f1;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .1s ease;
  }
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
</style>
