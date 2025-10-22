import type { ReactNode, ComponentType, SVGProps } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  style: 'Street' | 'Portrait' | 'Landscape' | 'Conceptual';
  imageUrl: string;
}

export interface SocialLink {
    name: string;
    username: string;
    url: string;
    // Fix: Use ComponentType and SVGProps directly after importing them.
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface ContactInfo {
    name: string;
    value: string;
    url: string;
    // Fix: Use ComponentType and SVGProps directly after importing them.
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface LearningModule {
  id: number;
  title: string;
  category: 'Teknik' | 'Komposisi' | 'Editing' | 'Inspirasi';
  summary: string;
  status: 'Published' | 'Coming Soon';
  content?: ReactNode;
}
