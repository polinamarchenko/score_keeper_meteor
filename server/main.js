console.log('Log from server/main.js');
import {Meteor} from 'meteor/meteor'; //import meteor module always starts with meteor/
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // let house = {
  //   bedrooms: 2,
  //   bathrooms: 1.5
  // }
  //
  // let yearBuilt = 1995;
  //
  // let newHouse = {
  //   ...house,
  //   yearBuilt,
  //   bedrooms: 3,
  //   flooring: 'carpet'
  // }
  //
  // console.log(newHouse);
});
