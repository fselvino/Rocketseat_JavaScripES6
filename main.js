// class List {
//   constructor() {
//     this.data = []
//   }
//   add(data) {
//     this.data.push(data)
//     console.log(this.data)
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super()
//     this.usuario = 'Fernando'
//   }
//   mostraUsuario() {
//     console.log(this.usuario)
//   }
//   // user() {
//   //   const u = this.usuario
//   //   return u
//   // }
// }

// const MinhaLista = new TodoList()

// document.getElementById('novotodo').onclick = function () {
//   MinhaLista.add('Novo Todo')
//   // MinhaLista.add(MinhaLista.user())

// }

// MinhaLista.mostraUsuario()

class Matematica {
  static soma(a, b) {
    return a + b
  }

}

console.log(Matematica.soma(1, 5))