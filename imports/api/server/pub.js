import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { News } from '../news.js';

Meteor.publish("news",function(){
  return News.find();
});
