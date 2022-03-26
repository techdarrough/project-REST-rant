const db = require('../models');
// async function to uise await

async function seed () {
    let place = await db.Place.findOne({ name: 'H-Thai-ML'});

    //fake comment

    let comment = await db.Comment.create({
        author: 'Famished Franny',
        rant: false,
        stars: 5.0,
        content: "Wow, simply the best.",
    });

    //add comment the places comment array with push 
   place.comments.push(comment.id);

    //save the place with new comment 

    await place.save();

    //exit 

    process.exit();
}

seed();

