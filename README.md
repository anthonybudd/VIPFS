<p align="center">
  <img width="192" src="https://ideea.io/static/img/vipfs-logo.svg" alt="VIPFS">
</p>

---

### [VIPFS](https://ideea.io/vipfs) &nbsp;&nbsp;|&nbsp;&nbsp; [Tutorial](https://ideea.io/vipfs/getting-started-tutorial) &nbsp;&nbsp;|&nbsp;&nbsp; [YouTube Tutorial](https://www.youtube.com/watch?v=Fq7h-cSN9i8) &nbsp;&nbsp;|&nbsp;&nbsp; [Docs](https://github.com/Ideea-inc/vipfs/tree/master/docs) &nbsp;&nbsp;|&nbsp;&nbsp; [Ideea.io](https://ideea.io) &nbsp;&nbsp;|&nbsp;&nbsp; [Hire Me](https://ideea.io/about#hire-me)

---

# VIPFS
VIPFS is a simple framework for creating permanent apps, blogs and websites that cannot be taken offline, blocked or censored. The application is built with Vue.js and comes with useful templates and pre-integrated with Bootstrap, FontAwesome, Video.js, Vuex and VueRouter. Simply clone, build and run `npm run publish` to deploy it on IPFS and make it perminatly accesable to the world. 


## Getting Started
```sh
$ git clone git@github.com:Ideea-inc/vipfs.git
$ cd vipfs
$ npm install
$ npm run build
$ docker-compose up
$ npm run publish // returns 'Qmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
$ open http://localhost:8080/ipns/Qmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
$ open https://gateway.ipfs.io/ipns/Qmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Video Tutorial
[![VIPFS Video Tutorial](https://ideea.io/static/img/vipfs-youtube-embed.png)](https://www.youtube.com/watch?v=Fq7h-cSN9i8)


## Motivation
The golden age of the internet is over. Gone are the days of free speech, edgy-content and free open discussion. The once young, cool tech startups have grown up into omnipotent dictators. Transgress today’s PC mono-culture by stating a scientific fact or open support of a democratically elected president, and these tyrants will [conspire to erase you from the digital world.](https://www.wired.com/story/facebook-bans-alex-jones-extremists/)

But just as one age has passed a new one is just beginning. Distributed technology and crypto technology has matured dramatically over the past 5 years. The technology has proved it’s effectiveness and the technical barriers to entry have never been lower. That’s why I decided to combine some of these technologies to create VIPFS. I created this framework to make it as simple as possible for anyone with only minimal technical ability to create an unstoppable decentralised application that is impossible to take offline, block or censor.

Deplatforming is modern-day book burning. Code is free speech. 


## Etherum Payments with MetaMask
The [payment template](/src/components/payment.vue) is an example of how you can handle Etherum payments in your VIPFS app using MetaMask. You can then use the method `this.$root.createRequestTransaction()` in your Vue component to prompt the user into sending an Ethereum transaction directly from their browser to your Ethereum account. You can find the code for this template in `src/components/payment.vue`, you can easily modify this code to make a fully decentralised crypto-based e-commerce store.


## Templates
VIPFS comes with a few templates to demonstre functionaiilit. You can eialy modiklfy these temaples to usity your soevcif needss wheeth theat be video hosting, file shaunr or e-commerce.

- [Bio](/src/components/bio.vue)
- [Post](/src/components/post.vue)
- [Video](/src/components/video.vue)
- [Gallery](/src/components/gallery.vue)
- [Payment](/src/components/payment.vue)
