import React from 'react';
import type { LearningModule } from './types';
import CameraObscuraArticle from './models/articles/CameraObscuraArticle';
import PhotographyPioneersArticle from './models/articles/PhotographyPioneersArticle';
import AnalogCameraArticle from './models/articles/AnalogCameraArticle';

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 1,
    title: '1. Sejarah Lengkap Kamera Obscura',
    category: 'Inspirasi',
    summary: 'Menelusuri jejak cikal bakal kamera, dari ruang gelap sederhana hingga menjadi teknologi fundamental fotografi modern.',
    status: 'Published',
    content: React.createElement(CameraObscuraArticle),
  },
  {
    id: 2,
    title: '2. Penemuan Fotografi: Niépce, Daguerre, & Talbot',
    category: 'Inspirasi',
    summary: 'Mengenal tiga tokoh pionir yang meletakkan fondasi bagi dunia fotografi modern, dari heliografi hingga calotype.',
    status: 'Published',
    content: React.createElement(PhotographyPioneersArticle),
  },
  {
    id: 3,
    title: '3. Perkembangan Film & Kamera Analog',
    category: 'Teknik',
    summary: 'Menelusuri jejak evolusi teknologi fotografi dari film gulung pertama hingga kebangkitan kembali di era modern.',
    status: 'Published',
    content: React.createElement(AnalogCameraArticle),
  },
];