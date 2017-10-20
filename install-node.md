
# Node

## Install on Centos 7:
```
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs
```

Build tools for addons:
```
sudo yum install gcc-c++ make
```

# MongoDB
https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-centos-7

```
nano /etc/yum.repos.d/mongodb-org.repo
```
Put on file:
```
[mongodb-org-3.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc
```

```
yum repolist

sudo yum install mongodb-org

sudo systemctl start mongod
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
