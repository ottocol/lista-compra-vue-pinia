import { defineStore } from 'pinia'
import { ClienteAPI } from '../servicios/ClienteAPI'

export const useAppStore = defineStore('app', {
  state: () => ({ 
    lista: [],
    cliente: new ClienteAPI('http://localhost:3000/items')
  }),
  actions: {
    async obtenerItems() {
      var datos = await this.cliente.getItems()
      this.lista = datos
    },
    async cambiarEstado(id) {
      var encontrado = this.lista.find(function(item){
          return item.id == id
      })
      if (encontrado) {
          //actualizar interfaz
          encontrado.comprado = !encontrado.comprado
          //actualizar servidor                        
          await this.cliente.toggleItem(encontrado.id, encontrado.comprado)
      }
    },
    async nuevoItem(nombre) {
      try {
          var nuevo = await this.cliente.addItem(nombre)
          this.lista.push(nuevo)
      }
      catch {
      }
    }
  } 
})
