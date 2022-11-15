<script>
import { useAppStore } from '../stores/appStore'
  
export default {
  name: 'NuevoItem',
  components: {},
  data: function() {
    return {nombre: ""}
  },
  setup() {
    const store = useAppStore()
    return {store}
  }
}
</script>

<template>
   <div>
    <input type="text" v-model="nombre">
    <button @click="store.nuevoItem(nombre)">Añadir</button>
   </div> 
</template>


<style>

</style>