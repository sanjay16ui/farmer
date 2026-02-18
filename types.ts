import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface HubFeature {
  name: string;
  icon?: React.ReactNode;
}

export interface HubData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  accentColor: string; // Tailwind class equivalent or hex
  features: HubFeature[];
  buttonText: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}