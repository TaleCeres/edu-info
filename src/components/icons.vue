<template>
    <div class="icons">
      <Icon/>
      <Home/>
      <Back/>
      <Tabs/>
    </div>
</template>

<script>
import Icon from './icon'
import Back from './back'
import Home from './home'
export default {
  name: 'icons',
  components: { Icon, Back, Home }
}
</script>

<style scoped>

</style>
