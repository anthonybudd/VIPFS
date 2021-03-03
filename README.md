<p align="center">
  <img height="300" src="https://raw.githubusercontent.com/anthonybudd/vipfs/master/docs/img/readme-header.png" alt="VIPFS">
</p>


# VIPFS
VIPFS is an alt-tech framework for creating permanent apps, blogs and websites that cannot be taken offline by anyone, including the government.

VIPFS is a simple boilerplate project for creating permanent websites with Vue.js and IPFS, it comes with useful templates and it is pre-integrated with Bootstrap, FontAwesome, Video.js, Vuex and VueRouter. Simply clone, build and run `npm run publish` to deploy it on IPFS and make it permanently accesable to the world.

## Getting Started
```sh
$ git clone git@github.com:anthonybudd/vipfs.git
$ cd vipfs
$ npm install
$ npm run build
$ docker-compose up
$ open http://localhost:8000

$ npm run publish // wait.. returns 'Qmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
$ open http://localhost:8080/ipns/Qmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
$ open https://gateway.ipfs.io/ipns/Qmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```


## Video Tutorial
[![VIPFS Video Tutorial](https://raw.githubusercontent.com/anthonybudd/vipfs/master/docs/img/vipfs-youtube-embed.png)](https://www.youtube.com/watch?v=Fq7h-cSN9i8)

## Templates
VIPFS comes with a few templates to demonstrate functionality. You can easily modify these templates to suit your service's needs whether it be video hosting, file sharing, or e-commerce.

- [Bio](/src/components/bio.vue)
- [Post](/src/components/post.vue)
- [Video](/src/components/video.vue)
- [Gallery](/src/components/gallery.vue)
- [Payment](/src/components/payment.vue)
- [Archive](/src/components/archive.vue)

## Archiving Websites
To archive a website run the following commands. This will archive a flat version of the webpage. Go to the /archive page to view an index of all archived webpages.
```sh
$ npm run archive -- https://example.com
$ npm run build
$ open http://localhost:8000/archive
$ npm run publish
```

## Ethereum Payments with MetaMask
The [payment template](/src/components/payment.vue) is an example of how you can handle Ethereum payments in your VIPFS app using MetaMask. You can then use the method `this.$root.createRequestTransaction()` in your Vue component to prompt the user into sending an Ethereum transaction directly from their browser to your Ethereum account. You can find the code for this template in `src/components/payment.vue`, you can easily modify this code to make a fully decentralised crypto-based e-commerce store.

## Motivation
The golden age of the internet is over. Gone are the days of free speech, edgy-content and free open discussion. The once young and cool tech platforms have grown up into omnipotent dictators. Transgress today’s PC mono-culture and these tyrants will erase you from the digital world.

But just as one age has passed a new one is beginning. Distributed technology and crypto technology has matured dramatically over the past 5 years. The technical barriers to entry have never been lower. That’s why I decided to combine some of these technologies to create VIPFS. I created this framework to make it as simple as possible for anyone with only minimal technical ability to create an unstoppable decentralised application that is impossible to take offline, block or censor.

Deplatforming is modern-day book burning. Code is free speech.
