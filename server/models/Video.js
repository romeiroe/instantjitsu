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
         Video.create({title: 'Spider Guard', featured: true, published: new Date('2/1/2014'), tags:['bjj']}),
         Video.create({title: 'Pressue Passing', featured: false, published: new Date('3/1/2014'), tags:['bjj']}),
         Video.create({title: 'Kimura Locks', featured: false, published: new Date('1/17/2014'), tags:['bjj']}),
         Video.create({title: 'Arm Bars', featured: true, published: new Date('1/18/2014'), tags:['bjj']}),
         Video.create({title: 'Arm Bar Counters', featured: false, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Take Downs', featured: true, published: new Date('4/16/2014'), tags:['bjj']}),
         Video.create({title: 'Competition Strategy', featured: false, published: new Date('1/1/2014'), tags:['bjj']}),
         Video.create({title: 'Turtle Attacks', featured: false, published: new Date('5/1/2013'), tags:['bjj']}),
         Video.create({title: 'Open Guard Sweeps', featured: true, published: new Date('11/1/2012'), tags:['bjj']}),
         Video.create({title: 'Guard Attacks', featured: true, published: new Date('10/1/2012'), tags:['bjj']}),
         Video.create({title: 'Spider Guard 101', featured: true, published: new Date('11/11/2013'), tags:['bjj']}),
         Video.create({title: 'Competition Workouts', featured: false, published: new Date('7/1/2013'), tags:['bjj']}),
         Video.create({title: 'Kimura Escapes', featured: false, published: new Date('12/1/2013'), tags:['bjj']}),
         Video.create({title: 'Arm Bars Galore', featured: true, published: new Date('10/10/2013'), tags:['bjj']}),
         Video.create({title: 'Omoplatas', featured: false, published: new Date('10/30/2013'), tags:['bjj']}),
         Video.create({title: 'Take Down Defense', featured: true, published: new Date('1/23/2014'), tags:['bjj']}),
         Video.create({title: 'How to eat for BJJ', featured: false, published: new Date('2/22/2014'), tags:['bjj']}),
         Video.create({title: 'Turtle Counters', featured: true, published: new Date('3/16/2014'), tags:['bjj']}),
         Video.create({title: 'Closed Guard Sweeps', featured: true, published: new Date('4/16/2014'), tags:['bjj']})
      }
   });
};

module.exports.createDefaultVideos = createDefaultVideos;