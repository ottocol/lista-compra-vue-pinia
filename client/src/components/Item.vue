<script>
export default {
  name: 'Item',
  components: {},
  props:["nombre","comprado","id"]
}
</script>

<template>
    <li :class="comprado ? 'tachado' : '' "
        @click="$emit('cambiarEstado', id)">
        {{nombre}}
    </li> 
</template>


<style>

</style>