# PROJECT 1: TIC-TAC-TOE - OVERVIEW
The goal of this project was to implement some of the foundational web development technologies
in the creation of a Tic-Tac-Toe game. It allows for two players to participate in a game of Tic-Tac-Toe
via a web browser.
![Game UI](/img/finalUI.png "Finished Main Game Window")

# Table of Contents
1. [Development Approach](https://github.com/M-Croghan/GA-Interapt-Project-1#mag_right-development-approach-mag)
2. [Technologies Used](https://github.com/M-Croghan/GA-Interapt-Project-1#desktop_computer-technologies-used-computer)
3. [Benchmarks & User Stories](https://github.com/M-Croghan/GA-Interapt-Project-1#clipboard-benchmarks--user-stories-scroll)
4. [Issues & Solutions](https://github.com/M-Croghan/GA-Interapt-Project-1#warning-issues--solutions-bulb)
5. [Game Instructions](https://github.com/M-Croghan/GA-Interapt-Project-1#video_game-game-installation--instructions-video_game)
6. [Credits / Sources](https://github.com/M-Croghan/GA-Interapt-Project-1#credits--sources)

## :mag_right: DEVELOPMENT APPROACH :mag:
The approach taken with this project involved short development cycles comprised of 5 phases.
The process began by creating a high level view of the application's user interface. Creation of a simple wireframe laid the ground work for the overall structure of the game.

![Wireframe of UI](/wireframes/p1Wireframe.png "Main Game Window Wireframe")

### **:one: PHASE ONE - HTML5 SKELETON**  
This first phase was the shortest in development as it only involved laying down the basic HTML elements required by the game. Many other elements are created, manipulated, or removed through the use of JavaScript. Phase one required a general framework on which CSS could be applied to organize the structure.

### **:two: PHASE TWO - CSS3 ORGANIZATION**  
Phase 2 involved using simple CSS to organize the existing HTML elements to produce a rough draft of the game window.  
This included using _grid_ to build the game board layout and style the existing elements to ensure uniformity.

### **:three: PHASE THREE - JAVASCRIPT FUNCTIONALITY**  
Phase 3 introduced the logic of the game: accurate win / draw condition(s), track player turn, etc. Event listeners were added to produce desired outcomes (game start, box selection, replay game, etc.). Enabled players to select their chosen symbol.  

### **:four: PHASE FOUR - CSS STYLING**
Phase 4 required the beautification of the game. This included setting background & text colors, custom fonts, visual effects.  

### **:five: PHASE FIVE - ADDING EXTRAS, REFINEMENT, TESTING, & DOCUMENTATION**
The fifth and final phase involved putting the finishing touches on the game, ensuring the UI renders correctly, a consistent style existed across all elements and
testing the game play to ensure no bugs or logical errors still existed. Within phase 5, the extra functionality was added including: sound / audio and player symbol
customization.

### **:infinity: :arrows_counterclockwise: ITERATIVE IMPROVEMENT :arrows_counterclockwise: :infinity:**
Though the development process listed above resembles a waterfall style approach, the heart of the process was an iterative effort of consistently revisting areas where improvement could be made. The goal of the phases was to highlight a core feature or aspect of the application as the focus of the work. An example of this in practice was testing. Though Phase 5 was dedicated toward smoothing out any remaining bugs at run time, testing occured from the onset of development. This agile approach allowed for an easy transition in correcting problems when discovered rather than having to re-write large portions of code that had already been marked as _`finished`_.  

## :desktop_computer: TECHNOLOGIES USED :computer:
- __VS Code__
    - HTML5: *Building the general structure of the application*
    - CSS3: *Styling & positioning the elements within the application*
    - JavaScript: *Implementing the application's functionality*  
- __Ubuntu / WSL__
    - Command Line: *Creating, accessing, manipulating project files & folders. Version control commands*  
- __Git / GitHub__
    - Git: *Commiting / tracking changes during development*
    - GitHub: *Remote repository & hosting the application via GitHub Pages*  
- __Google Chrome__
    - Browser: *Game Testing*
    - Developer Tools: *Debugging*  
- __Wireframe.cc__
    - Wireframe tools: *Creating simple wireframe of the game's UI*


##  :clipboard: BENCHMARKS & USER STORIES :scroll:
###  **:white_check_mark: :trophy: MVP :trophy: Main Features**
Below is a sample of user stories which represent the __core components__ of the game:  
:heavy_check_mark: As a user, I can start a new game of Tic-Tac-Toe.  
:heavy_check_mark: As a user, I should be able to tell which player (X or O) has the current turn.  
:heavy_check_mark: As a user, I should not be able to click / overwrite a square that has already been played.  
:heavy_check_mark: As a user, I should be prompted with the result of a finished game (WIN, LOSE, DRAW).  
:heavy_check_mark: As a user, I should not be able to interact with the game after it has ended.  
:heavy_check_mark: As a user, I should be able to select an option to replay / refresh the game.  

### **:white_check_mark: Bronze Tier :3rd_place_medal: Inclue Player Symbol Customization**
Allows for a player to choose their own symbol:  
:heavy_check_mark: As a user, I should be able to choose my own symbol instead of only X or O.
    

### **:white_check_mark: :2nd_place_medal: Silver Tier :2nd_place_medal: Include Audio**
Allows a user to get some feedback when a cell is marked with their symbol and when the game concludes:  
:heavy_check_mark: As a user, I should hear a sound when I mark a cell with my symbol during my turn.  
:heavy_check_mark: As a user, I should hear a should indicating if the game is a win or draw.  

### **:x: :1st_place_medal: Gold Tier :1st_place_medal: Include Online Play :construction:**
Allows a user to play online with another person OR against a computer:  
:x: As a user, I should be able to play online against another player.  
:x: As a user, I should be able to play against a computer.  

## :warning: ISSUES & SOLUTIONS :bulb:
### Resolved :thumbsup:
1. *Building the Layout*
    - If there were to be a single issue chosen as the most significant problem during this project it would have been 
    organizing the layout of the game through HTML & CSS. Typically, these aspects of web development are seen as
    relatively straight forward, however this project reminded me that beautiful front end work is very much an artform.
    In an effort to steer myself away from blindly moving through the project by way of _'trial & error'_, I used some simple
    CSS properties to get a handle on where elements existed on the page. By adding different color borders to the various elements
    and containers on the web page, it was easier to visualize how the structure of the game was being built.  
2. *Making Dynamic Changes - DOM & JavaScript*
    - While I had been well acquainted with programming prior to the start of this project, using JavaScript to interact with and
    manipulate the DOM was new to me. This compounded the layout / styling problem detailed above. Creating and changing the properties 
    of HTML elements on the fly required careful attention so that any addition wouldn't disrupt the layout already in place. I overcame this
    issue by getting comfortable with the documentation and exploring what options / methods were available depending on the element targeted.  

### Unresolved :thinking:
1. *Optimizing Win / Draw Conditions*
    - While the overall functionality is handled in about 200 lines of code, about 50% is spent translating the player choice to a win / draw condition.
    A 2-dimensional array keeps track of the 8 specific win conditions where a player makes 3 consecutive marks horizontally (3 rows),
    vertically (3 columns), or diagonally (2 diagonals). If none of these conditions are met, the game is declared a draw. The main problem here
    is that the code becomes very repetitive (thus violating the DRY principle). It is important to point out that each section is slightly different 
    due to targeting a distinct element and adding an event listener which inputs values to specific indices of the 2D array. Each block of code is
    documented accordingly and eliminates some repetition by calling other functions for various tasks. The end result yields a functional tic-tac-toe game
    but one that I feel could have cleaner code in a future enhancement.


## :video_game: GAME INSTALLATION & INSTRUCTIONS :video_game:
0. Users navigate to github pages url: () using their preferred web browser (internet connectivity required).
1. Users are greeted by a blank game board (composed of 9 individual boxes).
2. Clicking on the large 'Start Game' button on the left hand side will initiate a new game.
3. Two prompts will appear, requesting the player's chosen symbols.
    - Traditionally, X or O are chosen, but players may choose any single valid character they wish.
    - Player 1 enters their symbol.
    - Player 2 enters their symbol.
    - Symbol selection must be a SINGLE character or that player will be re-prompted for a valid entry.
4. Players then take turns (starting with player 1) selecting a square to mark with their symbol.
    - Turns are tracked on the left-hand side of the screen (replacing the 'start game' button).
    - The current player turn is marked in a green box surrounded by gold glowing effect.
    - The waiting player is identified by a grey / shadowed box.
5. The first player to mark 3 consecutive boxes (horizontally, vertically, or diagonally) wins.
6. If neither player meets the winning criteria and no boxes are left to play. The game is a draw.
7. At the conclusion of a game (win or draw), the 'Replay' button replaces the player turns boxes.
    - Pressing the 'Replay' button will clear the board and prepare a new game to be started.

## CREDITS / SOURCES
The main background-image used in the game was sourced at:  
https://www.vecteezy.com/vector-art/366560-retro-background
_Artist / Provider:_ Rambleron
