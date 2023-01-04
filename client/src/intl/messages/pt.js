const pt = {
  header: {
    title: 'CRUD pt',
    lang: {
      EN: 'Inglês',
      ES: 'Espanhol',
      PT: 'Português',
    },
  },
  body: {
    table: {
      rows: {
        id: 'ID',
        product: 'Produto',
        createdDate: {
          label: 'Criação',
          tooltip: 'Data de Criação',
        },
        updateDate: {
          label: 'Actualização',
          tooltip: 'Data de Actualização',
        },
        description: 'Descrição',
        category: 'Categoria',
        actions: 'Acções',
      },
    },
    deleteModal: {
      title: 'Eliminar produto',
      description: 'O produto será apagado, esta ação não pode ser desfeita',
      buttons: {
        delete: 'excluir',
        cancel: 'Cancelar',
      },
    },
    spinner: {
      loading: 'Dados de Carregamento...',
    },
  },
}

export default pt
