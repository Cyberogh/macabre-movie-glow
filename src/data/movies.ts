export interface Movie {
  id: string;
  title: string;
  image: string;
  trailer: string;
  description: string;
  watchNowLink: string;
}

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Nosferatu',
    image: 'https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailer: 'https://imdb-video.media-imdb.com/vi1732429337/1434659607842-pgv4ql-1727709679751.mp4?Expires=1761937029&Signature=C2xsVsH-1HgbHAwXQmy~fllet1CNyag2lVMP8JMBLaDMeQXTMt9Kc2h-ji4dXHBAR2My1kr4qZ4dw-hQuivbRF2amOxj5zSlcz0OXi50H6Aj6nyjdhgsUqnOZES31rqEHRKZAL9RnthVpKinpWL0-o0QB20GB89znimGxNVV5cLZ8onkwDymEKlSRJ0XziSxBl0uBWfIW77uQ9wmvLgRS~iwNQsTTGiitx1D5kerTqhj3Ww3w~eX17lYQUROPcNTatT3HOkeNP02lW7QCaZVfrp5bhLCiGJ6IKgVq2l9h81RwqhKMdIRzAisP0Utzw64v36NGi6UokpYo7VOOJJohQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.',
    watchNowLink: 'https://pstream.mov/media/tmdb-movie-426063-nosferatu',
  },
  {
    id: '2',
    title: 'The Twilight Saga: Breaking Dawn - Part 2',
    image: 'https://m.media-amazon.com/images/M/MV5BMTI3MjE3NDIxNF5BMl5BanBnXkFtZTcwODM3NTY5Mg@@._V1_.jpg',
    trailer: 'https://imdb-video.media-imdb.com/vi3050349593/1434659607842-pgv4ql-1616202432082.mp4?Expires=1761937990&Signature=C47OPJ0DLpgBZ9-Hr4IS3DdWlyjElCw55Bwa5Sx~qBOdpBGk-hDtzM2Oyfrh3NfRVqsE4~5DmKWtLf5XYPTeOhoApjTOucZ2db48R4hPr6QKIBgb6JdWVuSESUjv3Nd0yYH0ySs4JvNlewXNycKtZGVgWCUCYbV~e6JIGV8qpPfYA-b6cchvPvjdM55UivA-AXMneYLXVQYBwBY30PYvfrbdbshvKnf62WKUgkbKeQYKpaiXBKTXb-1sHoqAD7kc3pj7EAWNo0qEnQlbgpDeMKtHPR3N4GyxG-vcHlTlwFEMoRA-u3hZDv5F5FLzPxbRzZTU9fOQJg967Q9GAWykg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'After the birth of Renesmee/Nessie, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.',
    watchNowLink: 'https://pstream.mov/media/tmdb-movie-50620-the-twilight-saga-breaking-dawn-part-2',
  },
  {
    id: '3',
    title: 'Dracula Untold',
    image: 'https://m.media-amazon.com/images/M/MV5BMTkzNzI1OTI4N15BMl5BanBnXkFtZTgwNTQ2NzEwMjE@._V1_FMjpg_UX1000_.jpg',
    trailer: 'https://imdb-video.media-imdb.com/vi1558818585/1434659607842-pgv4ql-1616202424520.mp4?Expires=1761938102&Signature=ccFeOLrzT1bOkW4hTVa8jT3cO283r0lS0Fc3SMVKr0JXd4vWzdnQJzrTXlBlyrzMsWMZCpbo9wKuPVaHV9qprpUVKYxESklwHGhWf0U65FoyJSTort3~ZDlFKc2LPbQTjH4uPqGkf0boNW9drBVbYxqI2lo32uy0bBYF8hYf46hjPKl3lryq0IPt4LtF-KyAi4qAi10wTpHgol59TmvG7mWSlk5HaukRbmbsIVIIZCwLL0QRrnnSkwVK1xm1tcGsXZUM79VMRp2cjUNFq~4WXYz3BcRFtFKOT9Xbei4M1LIKmnxsM6EIdoikpUL9xY~4he9n3wYiuJhslijrc7FOA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'As his kingdom is being threatened by the Turks, young prince Vlad Tepes must become a monster feared by his own people in order to obtain the power needed to protect his own family, and the families of his kingdom.',
    watchNowLink: 'https://pstream.mov/media/tmdb-movie-49017-dracula-untold',
  },
  {
    id: '4',
    title: 'Scream',
    image: 'https://m.media-amazon.com/images/M/MV5BN2NkYTYzOGUtMzk1Yy00YmI0LWIzODEtMjQ0MWU0NWI4ODdlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailer: 'https://imdb-video.media-imdb.com/vi1227014937/1434659607842-pgv4ql-1641916209316.mp4?Expires=1761938166&Signature=ljd4E4Erp49pLgSWQtC9bHMnKBbqFv~iiMS2YKgCk4Tw6qenklXE8gUH9I0~DxbS~l4SOnyeDOnR1vccUoobpEarFHH-uGhGq9yjIcnMICYABAB9~nD4wA4dFDmme9RBY6du6Z2lpA~n2hlFb-fPMPRRl9OzMbTptPaRzeTBtcSThEbOjI5BwKRw~8kAy2BZ1JslDW5nwULZ~sM1EcCVKhu9CXR3FiTur30XNbpe3QXCPrvzEimPo~2aSICDK~JRCYP1pCCquY3S~zoZ9syYcYKih~4TwkMvOPmcP7L51iETaOvIspVfUPoonYRbDL6kjOPCXAiswVFRIW8lUKynlA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: '25 years after the original Woodsboro killings, a new Ghostface begins targeting teens connected to the town\'s dark past, drawing the final 3 survivors of the first attack back once more.',
    watchNowLink: 'https://pstream.mov/media/tmdb-movie-646385-scream',
  },
  {
    id: '5',
    title: 'The Substance',
    image: 'https://postercinema.eu/cdn/shop/files/the-substance_it5aqluv.jpg?v=1732828380',
    trailer: 'https://imdb-video.media-imdb.com/vi2758919705/1434659607842-pgv4ql-1723733647407.mp4?Expires=1761935432&Signature=QJbjYDBiuIigfqi5wZ0fcTwtFklT4pckoB-LkCly2o3HCgLtpWkE3BXC7LlIDv5CRQhJ55eSvQf8MwT4tbPyQcXqCVLwLZzkylZlQCMjNWhmtryG~MY3rd5gEImUt99pW6egPdmhhie17gcU~Ux~L-B3D-rwMpPnHqoOL7QtGJ~tutriCoG7Gc5PtzawDwiRzqPHoexizFyd9eiekUBCu45jsbhJGvTp28k1SnHc1mDoNke-N-1TwP3ylVHg9tGayzc7AzUXbxIjM7Mph7Yi9n8iyF~9SKaOyTwQcpqurXZd0DTzpkQIcdAiH56xvIT2IIT9FIVvMki2SYgwQfSsOg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'A fading celebrity takes a black-market drug: a cell-replicating substance that helps her create a younger, better version of herself.',
    watchNowLink: 'https://pstream.mov/media/tmdb-movie-933260-the-substance',
  },
  {
    id: '6',
    title: 'Alien: Romulus',
    image: 'https://play-lh.googleusercontent.com/wI7o302CdtZTUWA9C0obF8jQq3nh3hOOoQ94DEDrLmJ46oWST-SWZLd-v1-vDwYh7-EZvgpjR0ZtAB0vsg',
    trailer: 'https://imdb-video.media-imdb.com/vi729007641/1434659607842-pgv4ql-1723827213867.mp4?Expires=1761937538&Signature=EaaUJgoUr5309JIk58rzbaDwSiRmHgke971OUyCncpJ0Rvza5Q8ZIFa6MOMj-1zUNEHkouMEXbghVNMQ9t1fhczT5aTiGzPqGDqb5rUeEYUKOF3la-x~Ok-vT8e~b7hxz0gB5fzbwJ6LmaW88TH9gdOTj1chJFiqFCW6hmxvtvUq9fV-v8sar0leihdA0K1YEEe7KxAwoUnTyR2p6jeZpMTE2bgXZ-hk2hkUxE~XVVFhXjgR14SP1YOB5m-h9ItRQ33aCtAMXJXLsdg3D~oTEBnQmLChNkTTf0Tp~46ioy9lp14SkUOGOAQIClSUSsGGaVlcTXkGUoMsqjk4wKmjYQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'While scavenging the deep ends of a derelict space station, a group of young space colonists come face to face with the most terrifying life form in the universe.',
    watchNowLink: 'https://pstream.mov/media/tmdb-movie-945961-alien-romulus',
  },
];
