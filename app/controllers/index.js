import Controller from '@ember/controller';

export default Controller.extend({
   
    actions: {

        deleteCompany(params) {
            const destroy = this.get('model').findBy('id', params.id);
            destroy.destroyRecord();
        },

        createdCompany() {

            const name = this.get('name')
            const direction = this.get('direction')
            const phone = this.get('phone')
            const web = this.get('web')

            const createdCompany = this.store.createRecord('companies', {
                Name: name,
                Direction: direction,
                Phone: phone,
                Web: web
            }
            
            
            );
            
            createdCompany.save();
            
        },

        limpiar() {
            document.getElementById("clear1").value = "";
            document.getElementById("clear2").value = "";
            document.getElementById("clear3").value = "";
            document.getElementById("clear4").value = "";
            
        }



    }
})
