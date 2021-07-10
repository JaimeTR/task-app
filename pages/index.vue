<template>
  <div class="mt-14">
    <div>
      <h1 class="text-3xl font-semibold text-gray-600 select-none">Collections</h1>
    </div>
    <div v-if="loader && collections.length === 0" class="collections mt-5 grid lg:grid-cols-2 gap-3">
      <div v-for="(item, i) in 5"  :key="i" class="bg-gray-200 p-4 rounded-xl animate-pulse" style="height: 88px"></div>
    </div>
    <div v-else class="collections mt-5 grid lg:grid-cols-2 gap-3">

      <Collection v-for="(collection, index) in collections" :key="index" :color="collection.color" :title="collection.name"
      @click="() => $router.push(`/collection/${collection.id}`)" />

      <Button class="flex items-center justify-center border-2 border-gray-300" color="bg-gray-200" hover="bg-gray-300"
      @click="modals.createModal = true ">
        <i class='bx bx-plus bx-sm mr-4'></i>
        Add collection</Button>
    </div>

    <!-- Modal -->
    <Modal min-width="30rem" :active="modals.createModal" @close="modals.createModal = false">
      <template #content>
          <form class="flex flex-col gap-y-3">
            <!-- Input Collection -->
            <Input v-model="collectionFormData.name" v-validate="'required'"
            placeholder="Enter the colection name" block label="Collection" name="collection-name"
            data-vv-as="collection" :error="errors.first('collection-name')" />

            <!-- Color picker -->
            <ColorSelect id="color-select" v-model="collectionFormData.color" v-validate="'required'"
            :error="errors.first('color-select')" name="color-select" data-vv-as="color" />
          </form>
      </template>
      <template #actions>
        <Button color="bg-gray-200" hover="bg-gray-300" class="text-gray-600" @click="modals.createModal = false">
          <i class='bx bx-x bx-sm mr-4 flex items-center'></i>
          Cancel
        </Button>
        <Button color="bg-blue-500" hover="bg-blue-400" class="text-white" @click="saveCollection('modal')">
          <i class='bx bx-plus bx-sm mr-4 flex items-center'></i>
          Create
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Collection from '@/components/ui/Collection.vue'
import Button from '@/components/ui/Button.vue'
import Modal from '@/components/ui/Modal.vue'
import Input from '@/components/ui/Input.vue'
import ColorSelect from '@/components/ui/ColorSelect.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Index',
  components: {
    Collection, Button, Modal, ColorSelect, Input
  },
  layout: 'default',
  data() {
    return {
      modals: {
        createModal: false
      },
      collectionFormData: {
        color: '',
        name: ''
      },
      pagination: {
        page: 1,
        quantity: 6
      }
    }
  },
  computed: {
    /**
     * In-store collection mapping 🎈
     */
    ...mapState('collection', ['loader', 'collections'])
  },
  created() {
    /**
     * Getting all collections on page load
     * @param {object} pagination - The desired pagination is sent to list the collections.
     */
    this.getAllCollections(this.pagination)
  },
  methods: {
    ...mapActions('collection', ['getAllCollections']),
    /**
     * Save new collection ❤
     */
    async saveCollection(){
      try {
        /* Validation for filled fields */

        const { response } = await this.$CollectionService.saveCollection(this.collectionFormData);
        console.log(response);
      } catch (error) {
        this.$toast.error(error.response.data.message);
      }
    }
  }
}
</script>
