var mongoose = require('mongoose');
    
var videoSchema = mongoose.Schema({
   title: {type: String, required: '{Path} is required!'},
   featured: {type: Boolean, required: '{Path} is required!'},
   published: {type: Date, required: '{Path} is required!'},
   tags: [String]
});

var Video = mongoose.model('Video', videoSchema);

function createDefaultVideos(){
   Video.find({}).exec(function(err, collection){
      if(collection.length === 0){
         Video.create({title: 'Guard Passing', featured: true, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Spider Guard', featured: true, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Pressue Passing', featured: false, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Kimura Locks', featured: false, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Arm Bars', featured: true, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Arm Bar Counters', featured: false, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Take Downs', featured: true, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Competition Strategy', featured: false, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Turtle Attacks', featured: true, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Open Guard Sweeps', featured: true, published: new Date('1/1/2014'), tags:['bjj']})
      }
   });
};

module.exports.createDefaultVideos = createDefaultVideos;