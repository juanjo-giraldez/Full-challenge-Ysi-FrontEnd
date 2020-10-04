import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://localhost:3306',
    namespace: 'api'
})

