<script>
export default {
  name: 'NuevoItem',
  components: {},
  data: function() {
    return {nombre: ""}
  }
}
</script>

<template>
   <div>
    <input type="text" v-model="nombre">
    <button @click="$emit('nuevo', nombre)">Añadir</button>
   </div> 
</template>


<style>

</style>