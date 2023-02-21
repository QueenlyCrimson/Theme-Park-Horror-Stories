const db = require('../db')
const Comments = require('../models/comments')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedComments = async () => {
    const comments = [
        {
            username: 'James.S',
            content:
                "That sounds like an absolute nightmare. It's scary to think that something like that could happen on a ride at a theme park.",
        },
        {
            username: 'Mikey.D',
            content:
                "I can't even imagine being stuck upside down on a ride like that. That must have been absolutely terrifying for that person.",
        },
        {
            username: 'Sarah.J',
            content:
                "It's really concerning that the safety harness on that ride malfunctioned. That's something that should never happen.",
        },
        {
            username: 'Emily.J',
            content:
                "I've never been a fan of haunted houses, and stories like this make me even more hesitant to go to them.",
        },
        {
            username: 'Willy.B',
            content:
                'The fact that a visitor was attacked by an actor in a haunted house is unacceptable. That person should have been fired immediately.',
        },
        {
            username: 'Ashley.D',
            content:
                "I remember hearing about that water slide accident a few years ago. It's tragic that such a young life was lost.",
        },
        {
            username: 'Davey.W',
            content:
                "It's scary to think that a ride could trigger a medical emergency like that. I hope the woman who had the stroke is okay.",
        },
        {
            username: 'Jon.D',
            content:
                "My heart goes out to the families of the people who were killed and injured on that ride in India. It's just devastating.",
        },
        {
            username: 'Jane.D',
            content:
                "I'm always a little nervous going on rides at theme parks, but these stories make me even more cautious.",
        },
        {
            username: 'Michael.S',
            content:
                "The fact that the ride in India broke apart while it was in motion is just horrifying. I can't even imagine witnessing something like that.",
        },
        {
            username: 'Truman.M',
            content:
                'These stories are a good reminder that even though theme parks are designed to be fun and exciting, they can also be dangerous.',
        },
        {
            username: 'Erin.K',
            content:
                'I hope that the people who were injured in these accidents are able to recover fully.',
        },
        {
            username: 'Jon.N',
            content:
                "It's important for theme parks to prioritize safety above all else. The consequences of a safety lapse can be catastrophic.",
        },
        {
            username: 'Man.L',
            content:
                "These stories make me think twice about going on more extreme rides at theme parks. I'm not sure I could handle something like that.",
        },
        {
            username: 'Tian.Q',
            content:
                'The fact that the actor in the haunted house attacked a visitor shows that there should be more stringent guidelines for how actors should behave in those types of attractions.',
        },
        {
            username: 'Tina.R',
            content:
                "It's sad that something as innocent as going to a theme park can result in such tragedy.",
        },
        {
            username: 'Ana.T',
            content:
                "My heart goes out to the families who lost loved ones in these accidents. It's unimaginable to lose someone in such a sudden and unexpected way.",
        },
        {
            username: 'Alex.F',
            content:
                'I hope that theme parks take a hard look at their safety protocols in the wake of these accidents, and make any necessary changes to prevent similar incidents from happening in the future.',
        },
        {
            username: 'Joe.B',
            content:
                "These stories are a good reminder that we should never take our safety for granted, even in situations where we're supposed to be having fun.",
        },
        {
            username: 'Ced.L',
            content:
                'The fact that the ride in the first story was manually stopped shows how important it is to have well-trained staff at theme parks.',
        },
        {
            username: '21 Savage',
            content:
                "It's sad that something as simple as going on a ride can result in lifelong injuries or trauma.",
        },
        {
            username: 'Dane.A',
            content:
                'I hope that theme parks continue to invest in safety measures and regularly inspect their rides to prevent accidents like these from happening.',
        },
        {
            username: 'Aubrey.G',
            content:
                'These stories are a sobering reminder of just how quickly something can go wrong, even in a seemingly safe and controlled environment.',
        },
        {
            username: 'Jermaine.C',
            content:
                "My heart goes out to the people who were injured in these accidents, and I hope they're able to get the support they need to recover.",
        },
        {
            username: 'Kendrick.L',
            content:
                'These stories are a reminder that safety should always come first, even when it comes to something as seemingly innocuous as going on a ride at a theme park.',
        },
    ]

    await Comments.insertMany(comments)
    console.log('Seeded some comments!')
}
const run = async () => {
    await seedComments()
    db.close()
}

run()
