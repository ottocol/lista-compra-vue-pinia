<script>
import { useAppStore } from '../stores/appStore'

export default {
  name: 'Item',
  components: {},
  props:["nombre","comprado","id"],
  setup() {
    const store = useAppStore()
    return {store}
  }
}
</script>

<template>
    <li :class="comprado ? 'tachado' : '' "
        @click="store.cambiarEstado(id)">
        {{nombre}}
    </li> 
</template>


<style>

</style>