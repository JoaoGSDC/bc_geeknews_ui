interface IEventDTO {
  action: string;
  category: string;
  label: string;
  value: string;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', String(process.env.NEXT_PUBLIC_GA_ID), {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: IEventDTO) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
