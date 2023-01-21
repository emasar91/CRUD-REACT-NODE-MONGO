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
    searcherBar: {
      search: {
        placeholder: 'Buscar',
      },
    },
    addButtons: {
      product: 'Crear Producto',
      category: 'Crear Categoría',
    },
    createEditModal: {
      tabs: {
        product: 'Producto',
        category: 'Categoría',
      },
      createProduct: 'Crear Producto',
      createCategory: 'Crear Categoría',
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
        alert: 'Primero se debe crear una categoría',
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
      loading: 'Cargando datos...',
    },
    notSupported:
      'Esta página sólo se ha desarrollado para visualizarse en pantallas de más de 1024px de ancho',
    errorPage: 'Esta página no existe, intenta volver al inicio',
    home: 'Inicio',
  },
}
export default es
