import { News } from '/imports/api/news.js';

Polymer({
  is:'news-element',
  properties:{
  listNews:{
    type:Array,
    value:[1,2,3,4]
  }
},
  behaviors:[mwcMixin],
  ready:function () {
    this.subscribe('news');
  },
  tracker(){
    this.listNews = News.find().fetch();
  }
});
