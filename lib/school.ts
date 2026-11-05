export type HistoryBlock = { heading?: string; paragraphs: string[] };

export const SCHOOL = {
  name: "Fayofunmi Model College",
  address: "P.O. Box 123, Esa Odo Road, Esa Oke, Osun State",
  phone: "", // TODO: the school sent only "08". Need the full number.
  email: "", // TODO
  motto: "", // TODO: slogan not sent yet
  logo: "/images/logo.jpg",

  // Used for the home page hero and the login background. These files must exist in /public/images
  heroImages: [
    "/images/slider-1.jpg",
    "/images/gallery-8.jpg",
    "/images/gallery-9.jpg",
    "/images/gallery-10.jpg",
    "/images/gallery-12.jpg",
    "/images/gallery-13.jpg",
    "/images/gallery-14.jpg",
    "/images/gallery-15.jpg",
    "/images/gallery-16.jpg",
    "/images/gallery-17.jpg",
  ],

  // Gallery shows gallery-1.jpg ... gallery-N.jpg. Set N to how many photos they sent.
  galleryCount: 17,

  director: {
    name: "Deaconess E.F. Olamiju",
    title: "", // TODO: Principal or Director?
    phone: "",
    email: "",
    photo: "/images/director.jpg",
    speech: "", // TODO: the section stays hidden until this is filled in
  },

  anthem: {
    audio: "", // e.g. "/audio/anthem.mp3" once a recording is added to /public/audio
    // Kept exactly as the school sent it. Last line likely "Primus Inter Pares". Confirm.
    lyrics: `Fayofunmi Model College Best Among equals
We Excel Them all in all realms of learning
we are simply the best in our noble School.
Citadel of Excellence Primus Inter Paris.`,
  },

  history: {
    intro: "", // TODO: the section stays hidden until this is filled in
    sections: [] as HistoryBlock[],
  },

  vision: "", // TODO
  mission: "", // TODO
};