import Controller from '@ember/controller';

export default Controller.extend({
   
    actions: {

        deleteCompany(params) {
            const destroy = this.get('model').findBy('id', params.id);
            destroy.destroyRecord();
        }

    }
})
