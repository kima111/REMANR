<h1><img src ="img/MEANR_ICON.png">&nbsp;&nbsp;&nbsp;&nbsp;MEANR (Mongo Express Axios Node React)</h1>

## Overview

 :honey_pot: MEANR is a full stack boiler template for Mongo, Express, Axios, Node, and React intended to aide developers looking to get their app off the ground in a hurry with an easy to use framework for accomplishing common tasks, such as Role Configured Authentication, Payment, Emailing, Forum, and Text Messaging. There will be other packages included in later versions.

## Demo

Here you can find a demonstration of MEANR: <a href = "https://meanr.herokuapp.com/" >https://meanr.herokuapp.com/</a><br />

To test out the admin capabilities, use the following credentials:

<b>Username:</b> <b><i>testadmin</i></b> <br />
<b>Password:</b> <b><i>Meanr2020!</i></b>

To test out the user capabilities, use the following credentials:

<b>Username:</b> <b><i>testuser</i></b> <br />
<b>Password:</b> <b><i>Meanr2020!</i></b>

## Features

* Supports local authentication and registration
* User and Administrator protected routes
* Forum
* Text Messaging
* Emailing
* Payments
* Rich Text Editor

## Installation

Clone this repository then run the command npm i. This will install all the dependencies. Then proceed to create the environment variables with those stated below, for both the client side, and server side. You will need to sign up for the services to obtain most of the environment variables.  Afterwards, run the command "npm run seed", this will install the necessary DB.

## Requirements
<br />
:computer: NPM (Node Package Manager) - <a  href ="https://www.npmjs.com/" >https://www.npmjs.com/</a><br /><br />
:floppy_disk: Mongo DB (Mongo DB) - <a href ="https://www.mongodb.com/" >https://www.mongodb.com/</a> <br /><br />

## Enviornment Variables

You will need to create a .env file for the Server side as well as the Client side. Some of these features will need accounts setup such as STRIPE (Payments), or TWILIO (Text Messaging). 

### API Services Required 
<br />
:iphone: TWILIO (Text Messaging) - <a href = "https://www.twilio.com/" >https://www.twilio.com/</a><br /><br />
:credit_card: STRIPE (Payments)  - <a href = "https://stripe.com/" >https://stripe.com/</a><br /><br />
:email: SENDGRID (Email) - <a href = "https://sendgrid.com/" >https://sendgrid.com/</a><br /><br />

<b>Server Side</b>

* TWILIO_ACCOUNT_SID
* TWILIO_AUTH_TOKEN
* TWILIO_PHONE_NUMBER
* STRIPE_SECRET_KEY
* MONGO_DB_NAME
* SENDGRID_API_KEY
* SENDGRID_SENDER
* PASSPORT_SESSION_SECRET

<b>Client Side</b>

* REACT_APP_STRIPE_PUBLISHABLE_KEY

## Dependencies (Reference package.json for up to date dependencies)

* ~~Redux~~ (Removed in favor of using Context Providers and useContext)
* Express (Server)
* Mongo (Server)
* Mongoose (Server)
* Axios (Client)
* React (Client)
* React-Router-DOM (Client)
* Nodemon (Server)
* Concurrently (Server)
* Passport (Server)
* BcryptJS (Server)
* Helmet (Server)
* Twilio (Server)
* Cors (Server)
* Dotenv (Server)
* ~~Nodemailer~~ (Switched to Sendgrid)
* Body-parser (Server)
* Stripe (Server)
* React Stripe Checkout (Client)
* UUID (Server)
* react-quill (Client)
* html-react-parser (Client)
* Sendgrid (Server)
* Socket.io (Server)
