import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return {
      products: [{
        name: 'Champagne glasses',
        img: 'brenndel-crystal-champagne-glass.jpg',
        imgAlt: 'BrenndeL crystal champagne glass',
        value: 200
      }, {
        name: 'Wine glasses',
        img: 'brenndel-crystal-wine-glass.jpg',
        imgAlt: 'BrenndeL crystal wine glass',
        value: 200
      }, {
        name: 'Cognac / Brandy',
        img: 'brenndel-crystal-cognac-glass.jpg',
        imgAlt: 'BrenndeL crystal cognac glass',
        value: 200
      }, {
        name: 'Liquor / Wodka',
        img: 'brenndel-crystal-sherry-glass.jpg',
        imgAlt: 'BrenndeL crystal sherry glass',
        value: 200
      }, {
        name: 'Whisky / Scotch',
        img: 'brenndel-crystal-whisky-glass.jpg',
        imgAlt: 'BrenndeL crystal whisky glass',
        value: 200
      }, {
        name: 'Long drinks',
        img: 'brenndel-crystal-long-drink.jpg',
        imgAlt: 'BrenndeL crystal long drink glass',
        value: 200
      }, {
        name: 'Decanters',
        img: 'brenndel-crystal-decanter.jpg',
        imgAlt: 'BrenndeL crystal decanter glass',
        value: 200
      }, {
        name: 'Carafes / Jugs',
        img: 'brenndel-crystal-carafe.jpg',
        imgAlt: 'BrenndeL crystal glass carafe',
        value: 200
      }, {
        name: 'Ice Buckets',
        img: 'brenndel-crystal-ice-bucket.jpg',
        imgAlt: 'BrenndeL crystal glass ice bucket',
        value: 200
      }, {
        name: 'Vases',
        img: 'brenndel-crystal-vase.jpg',
        imgAlt: 'BrenndeL crystal vase',
        value: 200
      }, {
        name: 'Tea cups',
        img: 'brenndel-crystal-tea-cup.jpg',
        imgAlt: 'BrenndeL crystal tea cup',
        value: 200
      }, {
        name: 'Bowls',
        img: 'brenndel-crystal-bowl.jpg',
        imgAlt: 'BrenndeL crystal bowl',
        value: 200
      }]
    };
  }

});