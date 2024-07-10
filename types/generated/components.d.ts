import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonsButton extends Schema.Component {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
    icon: 'address-card';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'card';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image1: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    image2: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    jsonData: Attribute.JSON;
    buttons: Attribute.Component<'buttons.button', true>;
    subTitle: Attribute.Text;
  };
}

export interface CardsCard2 extends Schema.Component {
  collectionName: 'components_cards_card2s';
  info: {
    displayName: 'Card2';
    icon: 'allergies';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface CardsCtaBtn extends Schema.Component {
  collectionName: 'components_cards_cta_btns';
  info: {
    displayName: 'CTA_Btn';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    buttons: Attribute.Component<'buttons.button', true>;
    featuredImage: Attribute.Media<'images'>;
  };
}

export interface CardsCta extends Schema.Component {
  collectionName: 'components_cards_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media<'images'>;
    url: Attribute.String;
  };
}

export interface CardsFaqs extends Schema.Component {
  collectionName: 'components_cards_faqs';
  info: {
    displayName: 'faqs';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.Text;
    cards: Attribute.Component<'cards.card2', true>;
  };
}

export interface CardsRelatedBlogs extends Schema.Component {
  collectionName: 'components_cards_related_blogs';
  info: {
    displayName: 'relatedBlogs';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    blogs: Attribute.Relation<
      'cards.related-blogs',
      'oneToMany',
      'api::blog-post.blog-post'
    > &
      Attribute.Required;
  };
}

export interface EmailsEmail extends Schema.Component {
  collectionName: 'components_emails_emails';
  info: {
    displayName: 'email';
    description: '';
  };
  attributes: {
    email: Attribute.Email;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionsSection extends Schema.Component {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'section';
    icon: 'adjust';
  };
  attributes: {
    secName: Attribute.String;
    title: Attribute.String;
    subTitle: Attribute.String;
    isActive: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    description: Attribute.RichText;
    secImages: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    cards: Attribute.Component<'cards.card', true>;
    buttons: Attribute.Component<'buttons.button', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSchema extends Schema.Component {
  collectionName: 'components_shared_schemas';
  info: {
    displayName: 'schema';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    structuredData: Attribute.Text & Attribute.Required;
    visibilityIn: Attribute.Boolean & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'ad';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.String & Attribute.Required;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    keywords: Attribute.Text;
  };
}

export interface TextsText extends Schema.Component {
  collectionName: 'components_texts_texts';
  info: {
    displayName: 'Text';
    icon: 'align-justify';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'buttons.button': ButtonsButton;
      'cards.card': CardsCard;
      'cards.card2': CardsCard2;
      'cards.cta-btn': CardsCtaBtn;
      'cards.cta': CardsCta;
      'cards.faqs': CardsFaqs;
      'cards.related-blogs': CardsRelatedBlogs;
      'emails.email': EmailsEmail;
      'sections.section': SectionsSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.schema': SharedSchema;
      'shared.seo': SharedSeo;
      'texts.text': TextsText;
    }
  }
}
