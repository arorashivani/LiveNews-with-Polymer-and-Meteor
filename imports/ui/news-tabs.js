Polymer({
  is:'news-tabs',
  properties:{
  options:{
    type:Array,
    value:["Add News","Latest News"]
  },
  selectOption:{
    type: String
  }
},
created:function () {
this.selectOptionselectOption = "Add News";
console.log(this.selectOption);
},
ready:function () {

},
  behaviors:[mwcMixin]
});
