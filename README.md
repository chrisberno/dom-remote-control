Demonstrates Toggle ON/OFF of a DOM modal using socket.io

# [Picture-In-Picture Overlay Apps For Smart TV](https://chrisberno.net/post/socket-modals/)

**Coming Soon**

**Step 1: Configure Environment**
- npm init
- npm install express --save
- npm install socket.io --save


**Step 2: Configure Routes / Socket.io**
- sudo nano app.js // add consts and routes
- add event logs

**Step 3: Create pages / Config for Socket.io**
- Add required scripts: <script src="/socket.io/socket.io.js"></script>
- Initiate socket.io connection: <script>const socket =io();</script>
- Use socket.on to socket power java/jquery on index pages
- Use socket.emit to socket power java/jquery on remote page
- Use both socket.on and socket.emit to socket power app.js


**Step 4: Run**
- npm install
- node app.js
- nodemon app.js <= if you have nodemon installed
- Open localhost:8989/ (main screen in browser 1)
- Open localhost:8989/ (remote in browser 2)


**Sources:**
Popup Box Modals With JavaScript: https://sabe.io/tutorials/how-to-create-modal-popup-box
