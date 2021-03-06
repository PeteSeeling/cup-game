## The Golden Rule: 

π¦Έ π¦ΈββοΈ `Stop starting and start finishing.` π

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


HTML Setup

1. Three divs/img for cups X
- Why? We need to show the user which cup the ball was hidden under.
- How? img.src = './cup-with-ball.png'

2.  Three buttons X
-Why? Tells us which cup the user picked, and WHEN they pick it.
-How? myButton.addEventListener('click', () => {})

3. Three divs for win, loss, totalX
-Why? Display the current state to the user
-How? winEl.textContent = winCount

4. Events
-User clicks any of the three cup buttons
(reset image of all cups)

5. Set State
- Increment total attempts
- Use Math.random() to decide which cup is correct

6. We need to compare the correct cup with the cup the user clicked
-If the user clicked the correct cup, increment win
-(optionally: If the user did NOT click the correct cup, increment loss)

7. Update DOM
- Change image of correct cup
- Change numbers in winEl, lossEl, and totalEl



Ideas for stretch goals
Add a hard reset button that clears all wins, losses, and total
Add a 'try again' button users must press to clear styles instead of just resetting automatically between rounds. Disable buttons between turns
Let the user choose how many cups they have to choose from
Set up animations so the cups lift up to reveal whether or not they contain the ball
Set it up so that more than one cup (or even no cups) might contain a ball
Add a dropdown to let the user choose different domains for the game: cup game, which piΓ±ata contains the candy, which card is the queen of spades
Rubric
User should be able to . . .	
Visit the deployed pages on GitHub pages, with link in the About section of the Github repo	2
See three cups, with a button beneath each of them.	2
Events . . .	
On clicking a cup button, the total number of guesses increment	2
On clicking the correct cup button, the total number of correct guesses increment	2
On clicking the incorrect cup button, the number of incorrect guesses increments	2
On click, see the correct cup's image change, clearing out the previous correct guess style	2
Functions	
IMPURE: resetStyles()	2
IMPURE: getRandomItem(arr) : returns random item from given array	2
IMPURE: handleGuess(userGuess, correctSpot)	4