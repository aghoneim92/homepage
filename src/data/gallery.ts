export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  caption: string;
}

export interface GalleryVideo {
  src: string;
  poster: string;
  width: number;
  height: number;
  caption: string;
  /** localStorage key used to resume playback where the visitor left off. */
  storageKey: string;
}

export interface GallerySection {
  id: string;
  title: string;
  blurb: string;
  video?: GalleryVideo;
  images: GalleryImage[];
}

export const gallerySections: GallerySection[] = [
  {
    id: 'photography',
    title: 'Photography',
    blurb: 'Whatever is beautiful and standing still.',
    images: [
      {
        src: '/assets/web/photo-sunset.jpg',
        width: 1050,
        height: 1400,
        caption: 'Sun going down into the water',
      },
      {
        src: '/assets/web/photo-paris-rainbow.jpg',
        width: 1400,
        height: 449,
        caption: 'Rainbow over the Seine, Paris',
      },
      {
        src: '/assets/web/photo-turquoise.jpg',
        width: 1400,
        height: 1050,
        caption: 'Turquoise and nobody about',
      },
      {
        src: '/assets/web/photo-berlin-ice.jpg',
        width: 1400,
        height: 1050,
        caption: 'A frozen river, Berlin',
      },
      {
        src: '/assets/web/photo-dawn.jpg',
        width: 1400,
        height: 1050,
        caption: 'Early, before the beach fills',
      },
      {
        src: '/assets/web/photo-lagoon.jpg',
        width: 1400,
        height: 1050,
        caption: 'A quiet lagoon off the desert road',
      },
      {
        src: '/assets/web/photo-sunburst.jpg',
        width: 1400,
        height: 1050,
        caption: 'Afternoon sun, clear shallows',
      },
    ],
  },
  {
    id: 'lego',
    title: 'Lego',
    blurb: 'Sets big enough to take a week. The piano plays.',
    video: {
      src: '/assets/lego-piano-h264.mp4',
      poster: '/assets/web/lego-piano-poster.jpg',
      width: 1920,
      height: 1080,
      caption: 'The grand piano, playing',
      storageKey: 'ag-lego-piano-time',
    },
    images: [
      {
        src: '/assets/web/lego-trex.jpg',
        width: 1400,
        height: 1246,
        caption: 'Jurassic Park T. rex rampage',
      },
      {
        src: '/assets/web/lego-pacman.jpg',
        width: 1050,
        height: 1400,
        caption: 'Pac-Man arcade cabinet',
      },
      {
        src: '/assets/web/lego-crane.jpg',
        width: 1400,
        height: 931,
        caption: 'Technic mobile crane, 42108',
      },
    ],
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    blurb: 'Cooking properly, not as a chore.',
    images: [
      {
        src: '/assets/web/cook-shakshuka.jpg',
        width: 1400,
        height: 1050,
        caption: 'Salmon with dill and green beans',
      },
      {
        src: '/assets/web/cook-breakfast.jpg',
        width: 1400,
        height: 1050,
        caption: 'Pancakes, bacon, rosemary potatoes',
      },
      {
        src: '/assets/web/cook-salmon.jpg',
        width: 1050,
        height: 1400,
        // Caption copied verbatim from the design, which reuses the shakshuka caption here.
        caption: 'Shakshuka, four eggs deep',
      },
      {
        src: '/assets/web/cook-redvelvet.jpg',
        width: 1400,
        height: 1050,
        caption: 'Red velvet ice cream cake',
      },
    ],
  },
];
