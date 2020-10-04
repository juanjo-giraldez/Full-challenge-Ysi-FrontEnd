import DS from 'ember-data';

export default DS.Model.extend({
    Name: DS.attr('string'),
    Direction: DS.attr('string'),
    Phone: DS.attr('string'),
    Web: DS.attr('string'),
    CreatedAt: DS.attr('string'),
});