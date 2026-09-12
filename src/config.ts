export type PhotoTreatment = 'natural' | 'warm';
export type GalleryDensity = 'comfortable' | 'dense';

interface Settings {
  home: {
    showPhone: boolean;
    showSideProjects: boolean;
    photoTreatment: PhotoTreatment;
  };
  gallery: {
    showCaptions: boolean;
    density: GalleryDensity;
  };
  mobilePreview: {
    deviceHeight: number;
  };
}

/** Presentation switches that were editable props in the Claude Design file. */
export const settings: Settings = {
  home: {
    showPhone: false,
    showSideProjects: true,
    photoTreatment: 'natural',
  },
  gallery: {
    showCaptions: true,
    density: 'comfortable',
  },
  mobilePreview: {
    deviceHeight: 874,
  },
};
