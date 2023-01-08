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
    addButtons: {
      product: 'Crear Producto',
      category: 'Crear Categoria',
    },
    createEditModal: {
      tabs: {
        product: 'Producto',
        category: 'Categoría',
      },
      values: {
        name: 'Nombre',
        category: 'Categoría',
        description: 'Descripción',
      },
      buttons: {
        update: 'Actualizar',
        create: 'Crear',
        cancel: 'Cancelar',
        info: 'Sólo se guardará esta pestaña',
      },
    },
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
