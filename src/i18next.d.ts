import 'i18next';
import 'vue';
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        welcome: string;
        language: string;
      };
    };
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string, options?: Record<string, unknown>) => string;
  }
}
