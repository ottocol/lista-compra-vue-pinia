<script>
import Item from './Item.vue'
import NuevoItem from './NuevoItem.vue'
import { useAppStore } from '../stores/appStore'

export default {
    name: 'Lista',
    components: {Item, NuevoItem},
    setup() {
        const appStore = useAppStore()
        return {appStore}
    },
    async created() {
        this.appStore.obtenerItems()
    },
    computed: {
        items() {
            return this.appStore.lista
        }
    }
}
</script>

<template>
 <div>
    <h1>Lista de la compra</h1>
    <nuevoItem @nuevo="this.appStore.nuevoItem"/>
    <ul>                
        <item v-for="i in items"
            :nombre="i.nombre"
            :comprado="i.comprado"
            :id="i.id"
            @cambiarEstado="this.appStore.cambiarEstado"/>
    </ul>    
</div>    
</template>


<style>

</style>