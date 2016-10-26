//
// $.getJSON("https://randomuser.me/api?results=24")
//    .then((d)=>{
//       console.log(d.results)
//
//       var coll = new Backbone.Collection()
//       coll.add(d.results[3])
//       coll.add(d.results[2])
//       coll.add(d.results[1])
//
//       var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
//       view.render(coll)
//    })


var AppRouter = Backbone.Router.extend({

})

var app = new AppRouter();
