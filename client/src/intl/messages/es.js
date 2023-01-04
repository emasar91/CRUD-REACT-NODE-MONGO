const es = {
  header: {
    title: 'CRUD es',
    lang: {
      EN: 'Inglés',
      ES: 'Español',
      PT: 'Portugués',
    },
  },
  body: {
    table: {
      rows: {
        id: 'ID',
        product: 'Producto',
        createdDate: {
          label: 'Creación',
          tooltip: 'Fecha de Creación',
        },
        updateDate: {
          label: 'Actualizado',
          tooltip: 'Fecha de Actualizado',
        },
        description: 'Descripción',
        category: 'Categoría',
        actions: 'Acciones',
      },
    },
    deleteModal: {
      title: 'Eliminar producto',
      description: 'El producto se eliminará, esta acción no se puede deshacer',
      buttons: {
        delete: 'Borrar',
        cancel: 'Cancelar',
      },
    },
    spinner: {
      loading: 'Cargando data...',
    },
  },
}
export default es
