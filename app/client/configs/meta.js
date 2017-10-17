let title = 'App';
DocHead.setTitle(title);

let metaInfo = [
  {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'}
];

_.each(metaInfo, function(item){
  DocHead.addMeta(item);
});