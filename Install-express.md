


# Express

Init package.json descriptor
```
mkdir node-app
cd node-app
npm init
```
Setting app.js as entry file

```
npm install express --save
```

## Express generator:
https://expressjs.com/en/starter/generator.html

```
npm install express-generator -g
```

Display the command options with the -h option:
```
express -h
```

For example, the following creates an Express app named myapp. 
The app will be created in a folder named myapp in the current working directory and the view engine will be set to Pug:
```
express --view=pug myapp
```

Then install dependencies:
```
$ cd myapp
$ npm install
```
On MacOS or Linux, run the app with this command:
```
$ DEBUG=myapp:* npm start
```
On Windows, use this command:
```
> set DEBUG=myapp:* & npm start
```

Then load http://localhost:3000/ in your browser to access the app.

```
firewall-cmd --get-active-zones
$ sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
$ sudo firewall-cmd --reload
$ firewall-cmd --list-all
```
