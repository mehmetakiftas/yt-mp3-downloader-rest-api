# YouTube MP3 Downloader REST API

It's an API that helps you to download a YouTube video as mp3 file

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing & Running

First of all, you should install "node modules" files with using this: 

```
npm install
```

After that, run the "server.js" file by typing the code below into the terminal:

```
npm run start
```

Finally you can download mp3 by sending a youtube link to the api with POST method
Request Body:

```
{
  "url": "https://www.youtube.com/watch?v=R_bYZMgx5MA"
}
```

## Authors

* **Mehmet Akif Taş** - [Website](https://akiftas.dev)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

