const db = require('../db')
const Stories = require('../models/stories')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedStories = async () => {
    const stories = [
        {
            title: 'Harness our souls',
            image: 'https://cdn.vaildaily.com/wp-content/uploads/sites/7/2016/08/VD_VD200710070611004AR.jpg',
            park: 'Six Flags Over Georgia',
            date: '01-09-2013',
            content:
                'A person shared a story of a ride they went on at a theme park that had malfunctioned, causing the safety harness to release while they were upside down. They were stuck there for several minutes until the ride was manually stopped.',
        },
        {
            title: 'A real nut-job',
            image: 'https://bloximages.chicago2.vip.townnews.com/eastvalleytribune.com/content/tncms/assets/v3/editorial/2/bb/2bbc9bd8-cdb3-11df-a8cf-001cc4c03286/4ca66de86eb0f.image.jpg?resize=751%2C500',
            park: 'Marvin Gardens',
            date: '03-20-1999',
            content:
                'A theme park that had a haunted house attraction, but one of the actors dressed as a monster ended up attacking a visitor who got too close. The visitor sustained injuries and had to be taken to the hospital.',
        },
        {
            title: 'Headless Horsemen',
            image: 'https://s.yimg.com/ny/api/res/1.2/B9uVyd3rd4i6OhDCkw_sJg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk0MDtoPTU0NQ--/https://media.zenfs.com/en-US/homerun/inquisitr_395/5dcf560c172285a985e9835132e665b9',
            park: 'White Waters',
            date: '05-08-2011',
            content:
                'In 2016, a young boy was killed on a water slide at a water park in Kansas. The ride had a steep drop, and the boy was decapitated after the raft he was in went airborne and hit a metal pole.',
        },
        {
            title: "Round n' Round I Go & Round Again",
            image: 'https://mms.businesswire.com/media/20170526005112/en/589204/5/SFSLspinsanityPHOTO_170525a.jpg',
            park: 'Orlando Studio',
            date: '07-09-2018',
            content:
                'A woman shared a story of going on a ride that made her feel sick and dizzy, but when she got off, she noticed that her vision was still blurry. She ended up having a stroke, which she believed was triggered by the ride.',
        },
        {
            title: 'Jump Quick! Oh wait we belted in...',
            image: 'https://s.yimg.com/ny/api/res/1.2/W3La163JobHZnoSTBiYoQQ--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/http://magazines.zenfs.com/resizer/2.0/original/LIBhkg5ctjpblLELfp-ieBKss-Y',
            park: 'Six Flags over Georgia',
            date: '10-31-2022',
            content:
                'In 2019, a ride at an amusement park in India broke apart while it was in motion, killing two people and injuring several others.',
        },
    ]

    await Stories.insertMany(stories)
    console.log('Seeded some stories!')
}
const run = async () => {
    await seedStories()
    db.close()
}

run()
