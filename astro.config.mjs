import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        "pt-br": {
          label: "Português",
          lang: "pt-BR",
        },
      },
      customCss: ["./src/styles/main.scss"],

      social: {
        github: "https://github.com/withastro/starlight",
      },

      sidebar: [
        {
          label: "Guides",
          translations: {
            "pt-BR": "Guias",
          },
          items: [
            {
              label: "Example Guide",
              translations: {
                "pt-BR": "Exemplo de Guia",
              },
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          translations: {
            "pt-BR": "Referência",
          },
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
