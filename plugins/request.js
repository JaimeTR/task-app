import CollectionService from '@/services/CollectionService'

export default (ctx, inject) => {
  inject('CollectionService', CollectionService(ctx.$axios));
}

