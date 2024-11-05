


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const insertX = ['Hello Kitty', 'Yuji Itadori', 'Eryka Rae'];
const insertY = ['ralpie', 'Burger Boy', 'Alex'];
const insertZ = ['Lana', 'Pete', 'Lizzie'];


const storyText = 'It was a crisp autumn morning, at a perfect 60 fahrenheit. :insertx: and :inserty: made the most of it by taking the day on early and getting a nice warm chai. They then went over to the pumpkin patch to find the fattest pumpkin they could get their hands on. Bob the cashier rung them up to a total of $7. The two went on their way to carve the best god dang pumpkins their town had ever seen.';

randomize.addEventListener('click', result);

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function result() {
    let newStory = storyText;
    
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

  
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

  
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

   
    if (document.getElementById("uk").checked) {
        const oldEnglish = `Twas a brisk morn in the season of autumn, the air a-cool and fair at sixty degrees of Fahrenheit. :insertx: and :inserty: rose early with merry hearts, for to partake in the day with haste, and they didst make their way to the tavern to sip upon a warm and spiced brew of chai. With bellies full, they ventured to the pumpkin patch, there to seek the mightiest and roundest gourd in all the land. Lo! Bob the coinkeeper didst ring them up, and with a fair tally, their sum came to seven shillings. With coin paid and hearts light, the merry pair didst wend their way, to carve pumpkins finer than any seen in the kingdom, and all the folk didst look upon their work in wonder.`;

       
        newStory = oldEnglish.replaceAll(":insertx:", xItem).replaceAll(":inserty:", yItem).replaceAll(":insertz:", zItem);

        
        if (customName.value !== '') {
            const name = customName.value;
            newStory = newStory.replaceAll('Bob', name);
        }
    }

   
    story.textContent = newStory;
    story.style.visibility = 'visible';
}