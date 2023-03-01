# INSTRUCTIONS TO RUN:
## APPLICATION

- Requirements:
    - Installed NodeJs LTS version
    - Installed npm or yarn

- Developement:
    ```
    yarn
    yarn dev
    ``` 
    or 
    ```
    npm install
    npm run dev
    ```

- Running:
    ```
    yarn
    yarn build
    yarn start
    ``` 
    or
    ```
    npm install
    npm run build
    npm run start
    ```


## STRUCTURE

The solution is built around 2 classes (Mars and Rover) and a main file (index.ts), the main file is the entry point of the application where code is executed.

1. src/index.ts
    - *main()*: Execute all steps needed to create mars, rouvers and do the job received by the signal.

2. src/mars.ts
    - *createField()*: Generate the plateau in the dimensions received from signal.
    - *Mars.removeRover()*: Remove the Rover of the plateau queryng by title
    - *Mars.verifyValidPosition()*: Verify if the next movement of the Rover is inside the plateau
    - *Mars.verifyColision()*: Verify if the next movement of the Rover has colision with other Rover.
    - *Mars.newRover()*: Put a new rover inside the plateau
    - *Mars.print()*: Print a table with the plateau, note: the table is inverted and the origin (0,0) is on the top-right side.
    - *Mars.moveRover()*: Update the Rover Position(x,y) on the plateau. 

3. src/rover.ts
    - *changeDirection()*: Returns the new direction side (N, E, W, S).
    - *moveForward()*: Calcule the next Rover Position (x,y) moving ahead.
    - *handleSignal()*: Receive signal and switch between *changeDirection()* or *moveForward()*
    - *Rover.updateRover()*: Update the state of the Rover
    - *Rover.computeSignal()*: Execute *handleSignal()*.


## INPUT AND OUTPUT

- There are two files that contains the input signal and the generated output signal.
    - *intput.txt*: Has input singal.
    - *output.txt*: Has output signal after program executed.

## UNIT TEST
- For unit testing use Jest which is a test framework running on Node.js.
    - To execute test, simply run `yarn test` or `npm run test` in the terminal.
    - Root test folder located in `./test/*`.


## START WITH DOCKER

- build:
    ```
    docker build -t nasa-rover-robot .
    ```

- run:
    ```
    docker run nasa-rover-robot
    ```