import type { Schema, Struct } from '@strapi/strapi';

export interface ArgHomeContact extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_contacts';
  info: {
    displayName: 'contact';
    icon: 'dashboard';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'arg-home.contact-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ArgHomeContactItem extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_contact_items';
  info: {
    displayName: 'contact_item';
    icon: 'user';
  };
  attributes: {
    content: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ArgHomeFeature extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_features';
  info: {
    displayName: 'feature';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ArgHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_heroes';
  info: {
    displayName: 'hero';
    icon: 'dashboard';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    moto: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ArgHomeServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_service_items';
  info: {
    displayName: 'service_item';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    feature: Schema.Attribute.Component<'arg-home.feature', true>;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ArgHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_services';
  info: {
    displayName: 'services';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    service: Schema.Attribute.Component<'arg-home.service-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ArgHomeSlide extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_slides';
  info: {
    displayName: 'slide';
    icon: 'picture';
  };
  attributes: {
    slides: Schema.Attribute.Component<'arg-home.slides-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ArgHomeSlidesItem extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_slides_items';
  info: {
    displayName: 'slides_item';
    icon: 'rotate';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    order: Schema.Attribute.Integer;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ArgHomeTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_testimonial_items';
  info: {
    displayName: 'testimonial_item';
    icon: 'user';
  };
  attributes: {
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface ArgHomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_testimonials';
  info: {
    displayName: 'testimonials';
    icon: 'user';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonialItem: Schema.Attribute.Component<
      'arg-home.testimonial-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ArgHomeWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_why_chooseuses';
  info: {
    displayName: 'whyChooseUs';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    sectionTitle: Schema.Attribute.String;
    why_point: Schema.Attribute.Component<'arg-home.why-point', true>;
  };
}

export interface ArgHomeWhyPoint extends Struct.ComponentSchema {
  collectionName: 'components_arg_home_why_points';
  info: {
    displayName: 'why_point';
    icon: 'dashboard';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'arg-home.contact': ArgHomeContact;
      'arg-home.contact-item': ArgHomeContactItem;
      'arg-home.feature': ArgHomeFeature;
      'arg-home.hero': ArgHomeHero;
      'arg-home.service-item': ArgHomeServiceItem;
      'arg-home.services': ArgHomeServices;
      'arg-home.slide': ArgHomeSlide;
      'arg-home.slides-item': ArgHomeSlidesItem;
      'arg-home.testimonial-item': ArgHomeTestimonialItem;
      'arg-home.testimonials': ArgHomeTestimonials;
      'arg-home.why-choose-us': ArgHomeWhyChooseUs;
      'arg-home.why-point': ArgHomeWhyPoint;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
